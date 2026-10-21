// ============================================
// Priyanshu's StarDance Project JS
// Very simple script - please don't break haha
// ============================================

// start with 42 votes (answer to the universe)
var voteCount = 42;

// function to vote for priyanshu
function voteForMe() {
  voteCount = voteCount + 1;
  
  // update both vote counters on the page
  document.getElementById("vote-num").innerText = voteCount;
  document.getElementById("vote-num-2").innerText = voteCount;
  
  // little pop-up message
  alert("🎉 THANK YOU FOR VOTING! Hack Club Orpheus is proud of you! ⭐ (Current votes: " + voteCount + ")");
}

// function to toggle the secret notes box
function toggleSecret() {
  var box = document.getElementById("secret-log");
  
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}

// simple hello prompt
function sayHi() {
  var visitorName = prompt("Hiii! What's your name?");
  if (visitorName) {
    alert("Nice to meet you, " + visitorName + "! Thanks for checking out my StarDance project! 🦕✨");
  }
}

// funny console message for anyone who opens devtools (Hack Club judges!)
console.log("Hey! If you are a Hack Club judge inspect-elementing my site... hello!! 👋");
console.log("Everything here was built by Priyanshu with lots of coffee.");
