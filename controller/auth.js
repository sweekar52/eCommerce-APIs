const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {User, Cart} = require('../models')

async function signUp(req, res){
    const username = req.body.username;
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password, 8);

    try{
        const user = await User.create({username, email, password})
        await Cart.create({id: user.id})
        if(req.body.roles){
            const result = await user.setRoles(req.body.roles)
        }
        else{
            const result = await user.setRoles([1])
        }
        res.send({msg: 'User has been created successfully'})
    }
    catch(err){
        res.status(500).send({msg: 'Internal Server Error'})
    }
}

async function signIn(req, res){
    const username = req.body.username;
    const password = req.body.password;

    try{
        const user = await User.findOne({
            where : {
                username : username
            }
        })
        if(user){
            const validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword){
                res.status(404).send({msg: 'Username/Password is incorrect'})
                return
            }
            const token = await jwt.sign({id: user.id}, 'thisisthesecretkeyforecommerceapplication', {expiresIn: '1h'})

                const authorities = []
                const roles = await user.getRoles()
                for(let i=0; i<roles.length;i++){
                    authorities.push(roles[i].name)
                }

                const finalUser = {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    token: token,
                    authorities: authorities

                }
                res.send(finalUser)
        }
        else{
            res.status(404).send({msg: 'Username/Password is incorrect'})
        }
    }
    catch(err){
        res.status(500).send({msg: 'Internal Server Error'})
    }
}

module.exports = {signUp, signIn}