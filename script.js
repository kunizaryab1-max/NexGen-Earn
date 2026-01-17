// NexGen Earn - Secure Mining Engine
let balance = 0.00;
let totalTasks = 0;

// 1. UI Update (Naye NexGen Style mein)
function updateDisplay() {
    const balanceElement = document.getElementById('balance');
    const userBalanceElement = document.getElementById('user-balance'); // Dono IDs check karega
    
    let displayValue = `$${balance.toFixed(2)}`;
    
    if(balanceElement) balanceElement.innerText = displayValue;
    if(userBalanceElement) userBalanceElement.innerText = displayValue;
}

// 2. NexGen Anti-Cheat System
let timer;
let timeLeft = 10; 

function startTask(reward) {
    let btn = event.target; // Jo button click hua usay pakray ga
    btn.disabled = true;
    btn.style.opacity = "0.5";
    
    timer = setInterval(() => {
        // Anti-Tab Switching Logic
        if (document.hidden) { 
            clearInterval(timer);
            alert("NexGen Security: Task paused! Please stay on this tab to mine rewards.");
            btn.disabled = false;
            btn.style.opacity = "1";
            btn.innerText = "Resume Mining";
            timeLeft = 10;
            return;
        }

        timeLeft--;
        btn.innerText = `Mining... ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            balance += reward;
            totalTasks++;
            
            // Success Effect
            alert(`Success! $${reward} credited to your NexGen Vault.`);
            updateDisplay();
            
            btn.innerText = "Mission Accomplished";
            btn.style.background = "#bc13fe"; // Purple color on success
            timeLeft = 10;
            
            // Yahan baad mein Firebase ka function call hoga: saveBalance("user_id", balance);
        }
    }, 1000);
}

// 3. Withdraw Request (Secure)
function requestWithdraw() {
    let amount = parseFloat(document.getElementById('withdraw-amount').value);
    if(amount > balance || amount <= 0) {
        alert("Insufficient credits in NexGen Vault!");
    } else {
        alert(`Withdrawal request for $${amount} is now in the queue. Verified by NexGen Admin.`);
    }
}

// Initialize on Load
window.onload = updateDisplay;

