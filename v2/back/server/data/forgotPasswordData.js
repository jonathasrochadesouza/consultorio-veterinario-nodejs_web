/*
 * const database
 */
const database = require('../database/database');

/**
 * get password
 * 
 * @param {*} user_email 
 */
 exports.getPassword = function(user_email) {
    return database.query('select senha from usuario where $1 = ',[user_email.email]);
}