// NexGen Earn - Secure Backend Logic
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // Yahan apni API Key lagayein
  databaseURL: "https://nexgen-earn-default-rtdb.firebaseio.com",
  projectId: "nexgen-earn",
};

// Database Initializing
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();

// --- NexGen Advance Functions ---

// 1. Balance Save/Update karna
function saveBalance(userId, newBalance) {
  database.ref('users/' + userId).update({
    balance: newBalance,
    lastUpdated: new Date().toLocaleString()
  }).then(() => {
      console.log("NexGen Wallet Updated!");
  });
}

// 2. Task Complete hone ka Alert
function startTask(reward) {
    console.log("Task Started...");
    
    // 10 seconds ka wait (Simulation)
    setTimeout(() => {
        let currentBalance = parseFloat(document.getElementById('user-balance').innerText) || 0;
        let finalBalance = currentBalance + reward;
        
        // Screen par update karein
        document.getElementById('user-balance').innerText = finalBalance.toFixed(2);
        
        // Database mein save karein (User ID dummy hai abhi)
        saveBalance("Zaryab_User_1", finalBalance);
        
        alert("Success! $" + reward + " added to your NexGen Wallet.");
    }, 10000); 
}

