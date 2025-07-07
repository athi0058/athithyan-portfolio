function loadHTML(id, file) {
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to fetch ${file}`);
        return response.text();
      })
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(error => {
        console.error("Error loading", file, error);
      });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    loadHTML("navbar", "navbar.html");
    loadHTML("about", "about.html");
    loadHTML("projects", "projects.html");
    loadHTML("contact", "contact.html");
    loadHTML("footer", "footer.html");
  });

  //read more..
  function toggleContent(button) {
  const moreContent = button.previousElementSibling;
  if (moreContent.style.display === "none" || moreContent.style.display === "") {
    moreContent.style.display = "block";
    button.textContent = "Show Less";
  } else {
    moreContent.style.display = "none";
    button.textContent = "Read More";
  }
}


function toggleDrawer() {
      const drawer = document.getElementById("drawer");
    //  const content = document.getElementById("home");
      drawer.classList.toggle("open");
       document.addEventListener("click", function (event) {
    const isClickInsideDrawer = drawer.contains(event.target);
    const isClickOnButton = event.target.classList.contains("menu-btn");

    if (!isClickInsideDrawer && !isClickOnButton && drawer.classList.contains("open")) {
      drawer.classList.remove("open");
     // content.classList.remove("shifted");
    }
  });
    }

    // navBar controll...
let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    navbar.style.top = "0";
  } else {
    // Scrolling down
    navbar.style.top = "-100px"; // hides navbar
  }

  prevScrollPos = currentScrollPos;
};
