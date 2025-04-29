document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Store active page in local storage (optional)
            localStorage.setItem('activePage', this.textContent.trim());
        });
    });
    
    // Check if there's a stored active page
    const activePage = localStorage.getItem('activePage');
    if (activePage) {
        // Find and activate the stored page
        navLinks.forEach(link => {
            if (link.textContent.trim() === activePage) {
                link.classList.add('active');
            }
        });
    } else {
        // Set Home as default active page
        navLinks[0].classList.add('active');
    }
    
    // Improve mobile menu behavior
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navbarToggler.contains(event.target) || 
                             navbarCollapse.contains(event.target);
        
        if (!isClickInside && navbarCollapse.classList.contains('show')) {
            // Close the navbar by triggering the toggle button
            navbarToggler.click();
        }
    });
    
    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
});