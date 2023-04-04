const db = require('../config/database')
const User = require('../models/UserSchema')

let newUser = new User()
                newUser.email = 'admin@admin.com';
                newUser.role = 'admin';

                newUser.password = newUser.hashPassword('admin');


newUser.save( (err)=> {
            if (err) {
                console.log(err)
            }})
         