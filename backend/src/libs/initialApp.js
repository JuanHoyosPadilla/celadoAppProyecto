import * as dotenv from 'dotenv'
dotenv.config();
import Role from '../models/role.js'
import User from '../models/user.js'
export const createRoles = async () => {
    try {
        const count = await Role.estimatedDocumentCount();
        if(count > 0) return;

        const values = await Promise.all([
            new Role({name: "user"}).save(),
            new Role({name: "admin"}).save()
        ]);

        console.log(values)
        
    } catch (error) {
        console.error(error)
    }
}

export const createUserAdmin = async () => {
    let EMAIL = process.env.EMAILADMIN || "admin@admin.com"
    let PASSWORD = process.env.PASSWORDADMIN || "admin"
    let NAME = process.env.NAMEADMIN || "admin"

    const userFound = await User.findOne({email:EMAIL})

    if(userFound) return;

    const roles = await Role.find({name:{$in:["admin","user"]}})
    
    const newUser = await User.create({
        name: NAME,
        email: EMAIL,
        password: PASSWORD,
        roles: roles.map((role) => role._id)
    })

    console.log(`new user created: ${newUser.email}`)

}

createRoles();
createUserAdmin()