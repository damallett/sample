document.addEventListener("DOMContentLoaded", function () {
  // setup the listener for the sidebar toggle
  const sidebarToggle = document.getElementById("sidebarToggle") 
  const sidebar = document.querySelector(".sidebar") //define what is sidebar and what is the main content
  const mainContent = document.querySelector(".main-content")

  sidebarToggle?.addEventListener("click", () => {
    sidebar.classList.toggle("show") //on click, shoes the mobile sidebar
  })

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {	//defines size to show or not show
      if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
        sidebar.classList.remove("show")
      }
    }
  })

  // Handle navigation
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      navLinks.forEach((l) => l.classList.remove("active"))
      link.classList.add("active")
    })
  })
})
