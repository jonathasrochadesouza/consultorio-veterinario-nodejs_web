/*
 * const clienteData
 */
const forgotPassword = require('../data/forgotPasswordData');

/**
 * get password
 * 
 * @param {*} user_email
 * @returns 
 */
exports.getPassword = function(user_email) {
    return forgotPassword.getPassword(user_email);
}