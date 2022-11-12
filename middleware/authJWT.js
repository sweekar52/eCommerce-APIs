const jwt = require('jsonwebtoken')

const {User} = require('../models')

async function verifyToken(req, res, next){
	const token = req.headers['access-token']
	if(token){
		try{
			const result = await jwt.verify(token, 'thisisthesecretkeyforecommerceapplication')
			if(result.id){
                req.userId = result.id
				next()
			}
			else{
				res.status(400).send({msg: 'Auth token has expired, Please re-login'})
				return	
			}
		}
		catch(err){
			res.status(400).send({msg: 'Auth token has expired, Please re-login'})
			return
		}

	}
	else{
		res.status(401).send({msg: 'Auth token is missing'})
		return
	}
}

async function isAdmin(req, res, next){
    const userId = req.userId
	try{
		const user = await User.findByPk(userId)
		const userRoles = await user.getRoles()

		for(let i=0; i<userRoles.length; i++){
			if(userRoles[i].dataValues.name === 'Admin'){
				next()
				return
			}
		}

		res.status(400).send({msg: 'User does not have admin access'})
		return
	}
	catch(err){
		res.status(500).send({msg: 'Internal server error'})
		return
	}
}

module.exports = {verifyToken, isAdmin}