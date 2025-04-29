document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Get the main content container where we'll load pages
    const contentContainer = document.getElementById('page-content');
    
    // Page content for each section
    const pages = {
        'Home': `<!-- Home page content is already in the main HTML -->`,
        
        'Shop': `
            <div class="container mt-5">
                <h2 class="text-center mb-4" style="color: white;">Shop Our Collection</h2>
                <div class="row">
                    <div class="col-md-3 py-3 py-md-0">
                        <div class="card">
                            <img src="card1.png" alt="Best Sofa" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">Best Sofa</h4>
                                <p class="card-text">₱10,000</p>
                                <div class="text-center"><button class="btn btn-primary">Add to Cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 py-3 py-md-0">
                        <div class="card">
                            <img src="card2.png" alt="New Sofa" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">New Sofa</h4>
                                <p class="card-text">₱5,000</p>
                                <div class="text-center"><button class="btn btn-primary">Add to Cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 py-3 py-md-0">
                        <div class="card">
                            <img src="card3.png" alt="New Chair" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">New Chair</h4>
                                <p class="card-text">₱2,000</p>
                                <div class="text-center"><button class="btn btn-primary">Add to Cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 py-3 py-md-0">
                        <div class="card">
                            <img src="card4.png" alt="Modern Chair" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">Modern Chair</h4>
                                <p class="card-text">₱2,000</p>
                                <div class="text-center"><button class="btn btn-primary">Add to Cart</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-3 py-3 py-md-0">
                        <div class="card">
                            <img src="card5.png" alt="Best Sofa" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">Leather Sofa</h4>
                                <p class="card-text">₱12,500</p>
                                <div class="text-center"><button class="btn btn-primary">Add to Cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 py-3 py-md-0">
                        <div class="card">
                            <img src="card6.png" alt="Sofa Chair" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">Sofa Chair</h4>
                                <p class="card-text">₱11,000</p>
                                <div class="text-center"><button class="btn btn-primary">Add to Cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 py-3 py-md-0">
                        <div class="card">
                            <img src="card1.png" alt="Table Chair" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">Table Chair</h4>
                                <p class="card-text">₱13,000</p>
                                <div class="text-center"><button class="btn btn-primary">Add to Cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 py-3 py-md-0">
                        <div class="card">
                            <img src="card1.png" alt="Hanging Chair" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">Hanging Chair</h4>
                                <p class="card-text">₱14,000</p>
                                <div class="text-center"><button class="btn btn-primary">Add to Cart</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        
        'Top Chair': `
            <div class="container mt-5">
                <h2 class="text-center mb-4" style="color: white;">Our Top Chairs</h2>
                <p class="text-center mb-5" style="color: white;">Discover our most popular and highly-rated chair selections</p>
                
                <div class="row">
                    <div class="col-md-4 py-3 py-md-0">
                        <div class="card">
                            <div class="badge bg-danger text-white position-absolute" style="top: 10px; right: 10px">Best Seller</div>
                            <img src="card3.png" alt="Executive Office Chair" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">Executive Office Chair</h4>
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="card-text">₱15,000</p>
                                    <div class="text-warning">
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star-half"></i>
                                    </div>
                                </div>
                                <div class="text-center mt-3"><button class="btn btn-primary">Add to Cart</button></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 py-3 py-md-0">
                        <div class="card">
                            <div class="badge bg-danger text-white position-absolute" style="top: 10px; right: 10px">Top Rated</div>
                            <img src="card4.png" alt="Modern Ergonomic Chair" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">Modern Ergonomic Chair</h4>
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="card-text">₱18,500</p>
                                    <div class="text-warning">
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                    </div>
                                </div>
                                <div class="text-center mt-3"><button class="btn btn-primary">Add to Cart</button></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 py-3 py-md-0">
                        <div class="card">
                            <div class="badge bg-danger text-white position-absolute" style="top: 10px; right: 10px">Editor's Choice</div>
                            <img src="card6.png" alt="Designer Lounge Chair" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">Designer Lounge Chair</h4>
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="card-text">₱22,000</p>
                                    <div class="text-warning">
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star-half"></i>
                                    </div>
                                </div>
                                <div class="text-center mt-3"><button class="btn btn-primary">Add to Cart</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        
        'Chair': `
            <div class="container mt-5">
                <h2 class="text-center mb-4" style="color: white;">Chair Categories</h2>
                <p class="text-center mb-5" style="color: white;">Explore our diverse collection of chairs for every space and purpose</p>
                
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <img src="card3.png" alt="Office Chairs" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">Office Chairs</h4>
                                <p class="card-text">Ergonomic designs for professional spaces and home offices</p>
                                <ul class="list-unstyled">
                                    <li>Executive Chairs</li>
                                    <li>Task Chairs</li>
                                    <li>Ergonomic Chairs</li>
                                    <li>Conference Chairs</li>
                                </ul>
                                <div class="text-center mt-3"><button class="btn btn-outline-primary">View Collection</button></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <img src="card4.png" alt="Dining Chairs" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">Dining Chairs</h4>
                                <p class="card-text">Stylish and comfortable seating for your dining area</p>
                                <ul class="list-unstyled">
                                    <li>Modern Dining Chairs</li>
                                    <li>Traditional Dining Chairs</li>
                                    <li>Upholstered Dining Chairs</li>
                                    <li>Wooden Dining Chairs</li>
                                </ul>
                                <div class="text-center mt-3"><button class="btn btn-outline-primary">View Collection</button></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <img src="card6.png" alt="Lounge Chairs" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">Lounge Chairs</h4>
                                <p class="card-text">Relaxing seating options for your living spaces</p>
                                <ul class="list-unstyled">
                                    <li>Accent Chairs</li>
                                    <li>Recliners</li>
                                    <li>Armchairs</li>
                                    <li>Outdoor Lounge Chairs</li>
                                </ul>
                                <div class="text-center mt-3"><button class="btn btn-outline-primary">View Collection</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row mt-4">
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <img src="card5.png" alt="Specialty Chairs" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">Specialty Chairs</h4>
                                <p class="card-text">Unique designs for specific purposes</p>
                                <ul class="list-unstyled">
                                    <li>Gaming Chairs</li>
                                    <li>Massage Chairs</li>
                                    <li>Hanging Chairs</li>
                                    <li>Rocking Chairs</li>
                                </ul>
                                <div class="text-center mt-3"><button class="btn btn-outline-primary">View Collection</button></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <img src="card1.png" alt="Outdoor Chairs" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">Outdoor Chairs</h4>
                                <p class="card-text">Weather-resistant seating for your outdoor spaces</p>
                                <ul class="list-unstyled">
                                    <li>Patio Chairs</li>
                                    <li>Garden Chairs</li>
                                    <li>Adirondack Chairs</li>
                                    <li>Beach Chairs</li>
                                </ul>
                                <div class="text-center mt-3"><button class="btn btn-outline-primary">View Collection</button></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <img src="card2.png" alt="Children's Chairs" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">Children's Chairs</h4>
                                <p class="card-text">Fun and functional seating for kids</p>
                                <ul class="list-unstyled">
                                    <li>Study Chairs</li>
                                    <li>Play Chairs</li>
                                    <li>High Chairs</li>
                                    <li>Rocking Chairs for Kids</li>
                                </ul>
                                <div class="text-center mt-3"><button class="btn btn-outline-primary">View Collection</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        
        'Contact': `
            <div class="container mt-5" style="color: white;">
                <div class="row">
                    <div class="col-md-6">
                        <h2 class="mb-4">Contact Us</h2>
                        <p>We'd love to hear from you! Please feel free to reach out using any of the methods below:</p>
                        
                        <div class="mt-4">
                            <h5><i class="bx bxs-map me-2"></i> Address</h5>
                            <p>123 Furniture Street, Barangay Upuan, Malvar, Santiago City, 1234</p>
                        </div>
                        
                        <div class="mt-4">
                            <h5><i class="bx bxs-phone me-2"></i> Phone</h5>
                            <p>Main: +63 912 345 6789</p>
                            <p>Customer Service: +63 943 765 4321</p>
                        </div>
                        
                        <div class="mt-4">
                            <h5><i class="bx bxs-envelope me-2"></i> Email</h5>
                            <p>General Inquiries: info@upuannikhyle.com</p>
                            <p>Customer Support: support@upuannikhyle.com</p>
<br>
<br>
<br>
                            
                        </div>
                        
                        <div class="mt-4">
                            <h5><i class="bx bxs-time me-2"></i> Business Hours</h5>
                            <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                            <p>Saturday: 10:00 AM - 5:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                        <h2 class="mb-4">Send Us a Message</h2>
                        <form>
                            <div class="mb-3">
                                <label for="name" class="form-label">Your Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Enter your name">
                            </div>
                            
                            <div class="mb-3">
                                <label for="email" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter your email">
                            </div>
                            
                            <div class="mb-3">
                                <label for="subject" class="form-label">Subject</label>
                                <input type="text" class="form-control" id="subject" placeholder="Enter subject">
                            </div>
                            
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Send Message</button>

                        </form>

                        
                                               </div>
                    </div>
                </div>
            </div>
        `
		
    };
    
    // Function to load a page
    function loadPage(pageName) {
        // If Home page, show original content
        if (pageName === 'Home') {
    if (contentContainer) {
        contentContainer.style.display = 'none';
        contentContainer.innerHTML = '';
    }

    // Show all original home page elements
    document.querySelectorAll('.main-content, .container').forEach(el => {
        if (!el.id || el.id !== 'page-content') {
            el.style.display = '';
        }
    });
}
 else {
            // Hide all original home page elements except navbar
            document.querySelectorAll('.main-content > .content, .container').forEach(el => {
                if (!el.closest('.navbar') && (!el.id || el.id !== 'page-content')) {
                    el.style.display = 'none';
                }
            });
            
            // Show the page content container
            if (contentContainer) {
                contentContainer.style.display = 'block';
                contentContainer.innerHTML = pages[pageName];
            }
        }
        
        // Update active link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.textContent.trim() === pageName) {
                link.classList.add('active');
            }
        });
        
        // Store active page in local storage
        localStorage.setItem('activePage', pageName);
    }
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default navigation
            const pageName = this.textContent.trim();
            loadPage(pageName);
        });
    });
    
    // Load the active page on page load
    const activePage = localStorage.getItem('activePage') || 'Home';
    loadPage(activePage);
    
    // Close mobile menu when a link is clicked
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
});
let cart = [];

// Create and insert the cart modal HTML
function createCartModal() {
    const modal = document.createElement('div');
    modal.id = 'cart-modal';
    modal.style.position = 'fixed';
    modal.style.top = '60px';
    modal.style.right = '20px';
    modal.style.width = '300px';
    modal.style.maxHeight = '400px';
    modal.style.overflowY = 'auto';
    modal.style.backgroundColor = 'white';
    modal.style.border = '1px solid #ccc';
    modal.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
    modal.style.padding = '15px';
    modal.style.borderRadius = '10px';
    modal.style.display = 'none';
    modal.style.zIndex = '9999';
    modal.innerHTML = `<h5>🛒 Cart Items</h5><ul id="cart-items" style="list-style:none; padding-left:0;"></ul>`;
    document.body.appendChild(modal);
}
createCartModal();

function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    if (cart.length === 0) {
        cartList.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.style.marginBottom = '10px';
        li.innerHTML = `
            <strong>${item.title}</strong><br>
            ₱${item.price}
            <button style="float:right; background:red; color:white; border:none; padding:2px 6px; border-radius:4px; cursor:pointer;"
                onclick="removeCartItem(${index})">Remove</button>
        `;
        cartList.appendChild(li);
    });
}

function removeCartItem(index) {
    cart.splice(index, 1);
    updateCartDisplay();
    updateCartIcon();
}

function handleCartButtonClick(productTitle, price) {
    cart.push({ title: productTitle, price: price });
    updateCartDisplay();
    updateCartIcon();
}

function updateCartIcon() {
    const cartIcon = document.querySelector('.icons img[alt="Shopping Cart"]');
    let countSpan = cartIcon.nextElementSibling;

    if (!countSpan || !countSpan.classList.contains('cart-count')) {
        countSpan = document.createElement('span');
        countSpan.classList.add('cart-count');
        countSpan.style.position = 'absolute';
        countSpan.style.top = '0px';
        countSpan.style.right = '0px';
        countSpan.style.backgroundColor = 'red';
        countSpan.style.color = 'white';
        countSpan.style.borderRadius = '50%';
        countSpan.style.padding = '2px 6px';
        countSpan.style.fontSize = '12px';
        cartIcon.parentElement.style.position = 'relative';
        cartIcon.parentElement.appendChild(countSpan);
    }

    countSpan.textContent = cart.length;
}

// Handle button clicks
document.body.addEventListener('click', function(e) {
    const btn = e.target;
    const card = btn.closest('.card');
    const title = card?.querySelector('.card-title')?.textContent || 'Item';
    const priceText = card?.querySelector('.card-text')?.textContent || '0';
    const price = priceText.replace(/[₱,]/g, '');

    if (btn.textContent.includes('Add to Cart') || btn.textContent.includes('Shop Now')) {
        handleCartButtonClick(title, price);
    } else if (btn.textContent.includes('View More')) {
        alert(`More details about "${title}" coming soon!`);
    } else if (btn.textContent.includes('Read More')) {
        alert('Here is more information about the company...');
    }
});

// Toggle cart modal visibility
document.querySelectorAll('.icons img[alt="Shopping Cart"]').forEach(icon => {
    icon.addEventListener('click', () => {
        const modal = document.getElementById('cart-modal');
        modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
    });
});

