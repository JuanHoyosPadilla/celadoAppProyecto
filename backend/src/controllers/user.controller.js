import User from "../models/user.js";
import Role from "../models/role.js";
import { deleteAvatar, uploadAvatar } from "../utils/cloudinary.js";

import fs from 'fs-extra'

export const getUsers = async (req, res) => {
  const users = await User.find().populate(
    "roles"
  );
  return res.json(users);
};

export const createUser = async (req, res) => {
  try {
    const {
      name,
      last_name,
      phone,
      address,
      birthdate,
      avatar,
      available,
      email,
      password,
      roles,
    } = req.body;


    const user = new User({
      name,
      last_name,
      phone,
      address,
      birthdate,
      avatar,
      available,
      email,
      password,
    });
    

    //GUARDAR IMAGEN EN CLAODINARY
    
    if(req.files?.avatar){
      const result = await uploadAvatar(req.files?.avatar.tempFilePath)
      user.avatar ={
        public_id: result.public_id,
        secure_url: result.secure_url
      }
      await fs.unlink(req.files.avatar.tempFilePath)
    }

    if (roles) {
      const roleFound = await Role.find({ name: { $in: roles } });
      user.roles = roleFound.map((role) => role._id)
    }else {
        const role = await Role.findOne({name: 'user'})
        user.roles = [role._id]
    }
    

    //encryptar password
    user.password = await User.encryptPassword(user.password);

    const savedUser = await user.save();

    return res.json({
    savedUser
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (req,res) => {
  try {
    const {id} = req.params;
    const deletedUser = await User.findByIdAndDelete(id)

    if(!deletedUser) return res.json({message: 'user does not exists'})

    await deleteAvatar(deletedUser.avatar.public_id);

    return res.json({message: 'User Deleted'})

  } catch (error) {
    return console.error(error)
  }
}
