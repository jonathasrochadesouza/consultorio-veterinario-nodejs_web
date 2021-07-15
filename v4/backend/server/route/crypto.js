const crypto = require('crypto');
const { deprecate } = require('util');

const algorithm = 'aes-256-ctr';
// const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
// const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const secretKey = '123456789';
// const iv = crypto.randomBytes(16);
// const iv = crypto.randomBytes(16);
// // const iv = crypto.randomBytes(16);
// const iv = crypto.randomBytes(0);
// // 

// const encrypt = (text) => {

//     const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

//     const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

//     return {
//         iv: iv.toString('hex'),
//         content: encrypted.toString('hex')
//     };
// };

// const decrypt = (hash) => {

//     const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

//     const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

//     return decrpyted.toString();
// };

const encrypt = (text) => {
    var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
    var mystr = mykey.update(text, 'utf8', 'hex')
    return mystr += mykey.final('hex');

};

const decrypt = (text) => {
    var mykey = crypto.createDecipher('aes-128-cbc', 'mypassword');
    var mystr = mykey.update(text, 'hex', 'utf8')
    return mystr += mykey.final('utf8');


     
};

module.exports = {
    encrypt,
    decrypt
};