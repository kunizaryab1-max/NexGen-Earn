// NexGen Earn - High Performance Backend Engine
const express = require('express');
const firebase = require('firebase-admin');
const app = express();

app.use(express.json()); // JSON data handle karne ke liye

// 1. NexGen Security Gateway (IP Tracking)
app.use((req, res, next) => {
    console.log(`[SECURE ACCESS] Node: ${req.ip} | Time: ${new Date().toLocaleTimeString()}`);
    next();
});

// 2. Mission Completion Logic (Automated)
app.post('/complete-task', (req, res) => {
    const { userId, taskId } = req.body;
    
    // NexGen Standard Reward System
    let reward = 0.50; 
    
    // Atomically increment balance (Database Security)
    database.ref('users/' + userId).update({
        balance: firebase.database.ServerValue.increment(reward),
        lastActivity: new Date().toISOString(),
        status: "Verified Miner"
    });

    res.send({ 
        status: "Confirmed", 
        message: "NexGen Assets Dispatched to Wallet",
        added: reward 
    });
});

// 3. System Initialization
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`>>> NexGen Backend Core is ONLINE on Port ${PORT}`);
    console.log(`>>> Ready to process global mining requests...`);
});

