const express = require('express')

const routes = express.Router()

const { signUp, signIn } = require('../controller/auth')
const { checkDuplicateCredentials, checkRoles } = require('../middleware')

routes.post('/ecomm/api/v1/auth/signup', [checkDuplicateCredentials, checkRoles], signUp)

routes.post('/ecomm/api/v1/auth/signin',signIn)

module.exports = {authRoutes : routes}