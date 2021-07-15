/**
 * express
 */
const express = require('express');

/**
 * router
 */
const router = express.Router();

/**
 * forgotPasswordService
 */
const forgotService = require('../service/forgotPasswordService');

/**
 * return a password by email
 */
router.get('/pass/:email', async function (req, res){
    const user_email = await forgotService.getPassword(req.params.email);
    res.json(user_email);
});
