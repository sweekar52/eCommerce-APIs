const { checkNameForCategory } = require('./category')
const { validateProductData } = require('./product')
const { checkDuplicateCredentials, checkRoles } = require('./user')
const { verifyToken, isAdmin } = require('./authJWT')

module.exports = {
	checkNameForCategory,
	validateProductData,
	checkDuplicateCredentials,
	checkRoles,
	verifyToken,
	isAdmin
}