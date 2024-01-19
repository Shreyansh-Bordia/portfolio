document.addEventListener("DOMContentLoaded", function () {
  var experienceItems = document.querySelectorAll('.experience-item');

  for (var i = 0; i < experienceItems.length; i++) {
      (function(item) {
          var h3 = item.querySelector('h3');

          h3.addEventListener('click', function () {
              item.classList.toggle('open');
          });
      })(experienceItems[i]);
  }
});



document.addEventListener("DOMContentLoaded", function () {
  var roleText = document.getElementById("role-text");
  var roles = [
    "Web Developer",
    "Bug Bounty Hunter",
    "Leader",
    "Coder",
    "Artist (Paintings, Sketchings)",
    "Graphic Designer",
    "Learner"
  ];

  var currentRoleIndex = 0;

  // Function to update the displayed role
  function updateRole() {
    roleText.textContent = roles[currentRoleIndex];
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
  }

  // Initial role display
  updateRole();

  // Rotate roles every 3 seconds (adjust the interval as needed)
  setInterval(updateRole, 3000);
});
