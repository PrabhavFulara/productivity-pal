document.getElementById("reminderButton").addEventListener("click", function() {
  const hydrationMessage = document.getElementById("hydrationMessage");
  
  // Set a hydration reminder (every hour)
  hydrationMessage.textContent = "You should drink water now!";
  
  setTimeout(() => {
      hydrationMessage.textContent = ""; // Clear message after 10 seconds
  }, 10000); // Message lasts for 10 seconds
});
