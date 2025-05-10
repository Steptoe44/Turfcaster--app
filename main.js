
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.getElementById("model").textContent = "Model loaded successfully.";
    document.getElementById("status").textContent = "Selections ready. Tap Refresh to update.";
  }, 3000);  // simulate model loading
});
