const db = require('../config/database')
const User = require('../models/UserSchema')

// const bcrypt = require('bcrypt-nodejs');


// let newUser = [

//     new User({
//         email:'admin@admin.com',
//         user_id :'1',
//         role: 'admin'
//     }), 
// ]

// newUser.password = newUser.hashPassword(req.body.password)


let newUser = new User()
                newUser.email = 'admin@admin.com';
                newUser.role = 'admin';

                newUser.password = newUser.hashPassword('admin');

// newUser.forEach( (User)=> {
//     User.save( (err)=> {
//         if (err) {
//             console.log(err)
//         }
//     })
// })

newUser.save( (err)=> {
            if (err) {
                console.log(err)
            }})
         