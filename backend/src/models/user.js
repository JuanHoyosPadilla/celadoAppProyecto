import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const Userschema = new Schema({
  name: String,
  last_name: String,
  phone: Number,
  address:String,
  birthdate: Date,
  avatar:{secure_url:String,public_id:String},
  available: {type: Boolean, default: true},
  email: {type: String,require:true,unique:true},
  password: {type: String,require:true},
  roles:[{
    ref:"Role",
    type:Schema.Types.ObjectId
  }]

});

Userschema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password,salt);
}

Userschema.statics.comparePassword = async (password,receivedPassword) => {
  return await bcrypt.compare(password,receivedPassword)
} 

Userschema.pre("save", function (next) {
  const user = this;
  if(!user.isModified("password")){
    return next();
  }
  
  const hash = bcrypt.hash(user.password,10)
  console.log(hash)
  user.password = hash
  next();
  
})

export default model('User',Userschema);