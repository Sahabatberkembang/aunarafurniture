// WhatsApp Configuration
const WHATSAPP_NUMBER = '6281910413341'; // Format: country code + number without + or spaces

// Open WhatsApp with optional message
function openWhatsApp(productName = '') {
    let message = 'Hello Aunara! I am interested in your furniture.';
    
    if (productName) {
        message = `Hello Aunara! I am interested in: ${productName}`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Toggle WhatsApp Popup
function toggleWhatsAppPopup() {
    const popup = document.getElementById('whatsapp-popup');
    if (popup) {
        popup.classList.toggle('hidden');
    }
}

// Scroll to Top Button
function setupScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scroll-to-top';
    scrollBtn.className = 'fixed bottom-28 right-8 w-12 h-12 bg-surface-dark/10 dark:bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all z-40 opacity-0 pointer-events-none';
    scrollBtn.innerHTML = '<span class="material-icons-outlined">north</span>';
    scrollBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    document.body.appendChild(scrollBtn);

    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.remove('opacity-0', 'pointer-events-none');
            scrollBtn.classList.add('opacity-100');
        } else {
            scrollBtn.classList.add('opacity-0', 'pointer-events-none');
            scrollBtn.classList.remove('opacity-100');
        }
    });
}

// Floating WhatsApp Button with Popup
function setupWhatsAppButton() {
    // Create floating button
    const whatsappBtn = document.createElement('button');
    whatsappBtn.id = 'whatsapp-float';
    whatsappBtn.className = 'fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50';
    whatsappBtn.innerHTML = `
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.185-.573c.948.604 1.926.946 3.14.947h.005c3.182 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.767-5.766zm3.411 8.21c-.145.409-.834.782-1.155.832-.321.05-.62.062-1.056-.079-.241-.077-.557-.205-.968-.381-1.743-.746-2.88-2.522-2.967-2.638-.087-.116-.711-.944-.711-1.801 0-.857.447-1.278.607-1.446.16-.168.348-.21.464-.21.116 0 .232.001.334.006.106.005.249-.04.39.297.145.348.494 1.204.537 1.29.043.086.072.187.014.303-.058.117-.087.189-.174.29-.087.101-.183.226-.261.305-.087.087-.179.183-.077.359.101.176.449.743.965 1.203.664.593 1.222.778 1.398.865.176.087.279.072.384-.049.106-.121.455-.531.577-.714.121-.183.241-.153.406-.092s1.043.491 1.222.581c.179.09.299.135.343.21.044.075.044.433-.101.842zM12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"/>
        </svg>
    `;
    whatsappBtn.onclick = toggleWhatsAppPopup;
    document.body.appendChild(whatsappBtn);

    // Create popup
    const popup = document.createElement('div');
    popup.id = 'whatsapp-popup';
    popup.className = 'fixed bottom-28 right-8 bg-white dark:bg-surface-dark rounded-2xl shadow-2xl p-6 z-50 w-80 hidden transform transition-all';
    popup.innerHTML = `
        <div class="flex items-start justify-between mb-4">
            <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.185-.573c.948.604 1.926.946 3.14.947h.005c3.182 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.767-5.766zm3.411 8.21c-.145.409-.834.782-1.155.832-.321.05-.62.062-1.056-.079-.241-.077-.557-.205-.968-.381-1.743-.746-2.88-2.522-2.967-2.638-.087-.116-.711-.944-.711-1.801 0-.857.447-1.278.607-1.446.16-.168.348-.21.464-.21.116 0 .232.001.334.006.106.005.249-.04.39.297.145.348.494 1.204.537 1.29.043.086.072.187.014.303-.058.117-.087.189-.174.29-.087.101-.183.226-.261.305-.087.087-.179.183-.077.359.101.176.449.743.965 1.203.664.593 1.222.778 1.398.865.176.087.279.072.384-.049.106-.121.455-.531.577-.714.121-.183.241-.153.406-.092s1.043.491 1.222.581c.179.09.299.135.343.21.044.075.044.433-.101.842z"/>
                    </svg>
                </div>
                <div>
                    <h3 class="font-bold text-lg">Aunara Support</h3>
                    <p class="text-xs text-slate-500">Online</p>
                </div>
            </div>
            <button onclick="toggleWhatsAppPopup()" class="text-slate-400 hover:text-slate-600">
                <span class="material-icons-outlined">close</span>
            </button>
        </div>
        <div class="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-4">
            <p class="text-sm text-slate-700 dark:text-slate-300">Hello! 👋 How can we help you today?</p>
        </div>
        <button onclick="openWhatsApp()" class="w-full bg-[#25D366] text-white py-3 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2">
            <span>Start Chat</span>
            <span class="material-icons-outlined text-sm">send</span>
        </button>
    `;
    document.body.appendChild(popup);
}

// Toggle Favorite
function toggleFavorite(button) {
    const icon = button.querySelector('.material-icons-outlined');
    if (icon.textContent === 'favorite_border') {
        icon.textContent = 'favorite';
        icon.classList.add('text-red-500');
    } else {
        icon.textContent = 'favorite_border';
        icon.classList.remove('text-red-500');
    }
}

// Toggle Search
function toggleSearch() {
    // Simple search toggle - you can expand this
    const searchTerm = prompt('What are you looking for?');
    if (searchTerm) {
        window.location.href = `shop.html?search=${encodeURIComponent(searchTerm)}`;
    }
}

// Add to Cart functionality
function addToCart(productName, price) {
    // Store in localStorage
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push({ name: productName, price: price, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show notification
    alert(`${productName} has been added to your cart!`);
}

// Update cart count in header
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartBadge = document.querySelector('.shopping_bag + span');
    if (cartBadge) {
        cartBadge.textContent = cart.length;
    }
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'md:hidden p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors';
    mobileMenuBtn.innerHTML = '<span class="material-icons-outlined">menu</span>';
    
    mobileMenuBtn.onclick = () => {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        }
    };
    
    // Add mobile menu to DOM if not exists
    const nav = document.querySelector('nav');
    if (nav && !document.getElementById('mobile-menu')) {
        const mobileMenu = document.createElement('div');
        mobileMenu.id = 'mobile-menu';
        mobileMenu.className = 'hidden md:hidden absolute top-full left-0 right-0 bg-white dark:bg-background-dark border-t border-black/5 dark:border-white/5 py-4';
        mobileMenu.innerHTML = `
            <div class="container mx-auto px-6 flex flex-col gap-4">
                <a class="text-sm font-medium hover:text-primary transition-colors py-2" href="index.html">Home</a>
                <a class="text-sm font-medium hover:text-primary transition-colors py-2" href="collection.html">Collection</a>
                <a class="text-sm font-medium hover:text-primary transition-colors py-2" href="rooms.html">Rooms</a>
                <a class="text-sm font-medium hover:text-primary transition-colors py-2" href="shop.html">Shop</a>
                <a class="text-sm font-medium hover:text-primary transition-colors py-2" href="blog.html">Blog</a>
            </div>
        `;
        nav.appendChild(mobileMenu);
    }
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupScrollToTop();
    setupWhatsAppButton();
    setupMobileMenu();
    setupSmoothScroll();
    updateCartCount();
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const mobileMenu = document.getElementById('mobile-menu');
        const menuBtn = document.querySelector('[onclick*="mobile-menu"]');
        if (mobileMenu && !mobileMenu.contains(e.target) && !menuBtn?.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
    
    // Close WhatsApp popup when clicking outside
    document.addEventListener('click', (e) => {
        const popup = document.getElementById('whatsapp-popup');
        const whatsappBtn = document.getElementById('whatsapp-float');
        if (popup && !popup.contains(e.target) && !whatsappBtn?.contains(e.target)) {
            popup.classList.add('hidden');
        }
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (window.innerWidth >= 768 && mobileMenu) {
        mobileMenu.classList.add('hidden');
    }
});
