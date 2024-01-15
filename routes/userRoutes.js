const express = require('express');
const router = express.Router();

router.post('/register', async (req, res) => {
    const userData = req.body;  
    res.json({ message: 'User registered successfully'  });
});

module.exports = router;