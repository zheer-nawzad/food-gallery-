const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Serve images with proper headers
app.use('/images', express.static(path.join(__dirname, 'images'), {
    maxAge: '1y',
    etag: true
}));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check for Render
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
    console.log(`Xoshkhor Gallery running on port ${PORT}`);
});
