// NexGen VIP & Protection System
const userLevel = "Free"; // Silver, Gold, NexGen-VIP

// 1. VIP Multiplier (Earning Boost)
function calculateReward(baseReward) {
    if (userLevel === "NexGen-VIP") {
        return baseReward * 3; // VIP Users earn 3x
    } else if (userLevel === "Gold") {
        return baseReward * 2;
    }
    return baseReward;
}

// 2. NexGen Shield (Anti-Inspect System)
// Taake koi aapka code chura na sakay
document.addEventListener('contextmenu', event => event.preventDefault()); 

document.onkeydown = function(e) {
    // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U block karne ke liye
    if(e.keyCode == 123 || 
      (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0))) || 
      (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
        alert("NexGen Security: Access Denied!");
        return false;
    }
}

