const bcrypt = require ("bcryptjs");

const salt = 10;

 const generateSecureImageAccess= async (imageUrl) => {
    const accessSignature = await bcrypt.hash(imageUrl, salt);
    
    return {
        publicUrl: imageUrl,
        accessSignature,
    };
 };
 module.exports = generateSecureImageAccess;
 