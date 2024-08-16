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
      "Machine Learning Enthusiast",
      "Coder",
      "Bug Bounty Hunter",
      "Leader",
      "Artist (Paintings, Sketchings)",
      "Graphic Designer",
      "Fast Learner"
    ];
  
    var currentRoleIndex = 0;
  
    function updateRole() {
      roleText.textContent = roles[currentRoleIndex];
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    }
  
    updateRole();
  
    setInterval(updateRole, 2000);
});


document.getElementById('menu-icon').addEventListener('click', function() {
    const menuList = document.getElementById('menu-list');
    const menuIcon = document.getElementById('menu-icon');

    menuList.classList.toggle('active');

    if (menuIcon.innerHTML === '&#9776;') {
        menuIcon.innerHTML = '&#10005;';
    } else {
        menuIcon.innerHTML = '&#9776;'; 
    }
});
