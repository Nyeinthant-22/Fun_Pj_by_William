// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const popularGrid = document.getElementById('popular-grid');
const searchResults = document.getElementById('search-results');
const resultsSection = document.getElementById('results-section');
const resultsCount = document.getElementById('results-count');
const noResults = document.getElementById('no-results');
const phoneModal = document.getElementById('phone-modal');
const modalClose = document.getElementById('modal-close');
const phoneDetails = document.getElementById('phone-details');
const loading = document.getElementById('loading');

// State
let currentTheme = localStorage.getItem('theme') || 'light';
let searchTimeout = null;

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    displayPopularPhones();
    initializeEventListeners();
});

// Theme Management
function initializeTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    themeIcon.className = icon;
}

// Display Functions
function displayPopularPhones() {
    const popularPhones = phoneDatabase.filter(phone => phone.popular);
    renderPhones(popularPhones, popularGrid);
}

function renderPhones(phones, container) {
    container.innerHTML = '';
    
    phones.forEach(phone => {
        const phoneCard = createPhoneCard(phone);
        container.appendChild(phoneCard);
    });
    
    // Add fade-in animation
    container.classList.add('fade-in');
    setTimeout(() => {
        container.classList.remove('fade-in');
    }, 500);
}

function createPhoneCard(phone) {
    const card = document.createElement('div');
    card.className = 'phone-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${phone.name}`);
    
    card.innerHTML = `
        <img 
            src="${phone.image}" 
            alt="${phone.name}" 
            class="phone-image"
            loading="lazy"
            onerror="this.src='https://via.placeholder.com/400x400/666666/ffffff?text=Phone+Image'"
        >
        <div class="phone-info">
            <h3 class="phone-name">${phone.name}</h3>
            <div class="phone-brand">${phone.brand}</div>
            <div class="phone-specs">
                <div class="spec-item">
                    <i class="fas fa-calendar"></i>
                    ${phone.year}
                </div>
                <div class="spec-item">
                    <i class="fas fa-microchip"></i>
                    ${phone.ram}
                </div>
                <div class="spec-item">
                    <i class="fas fa-hdd"></i>
                    ${phone.storage}
                </div>
                <div class="spec-item">
                    <i class="fas fa-battery-three-quarters"></i>
                    ${phone.battery}
                </div>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openPhoneModal(phone));
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openPhoneModal(phone);
        }
    });
    
    return card;
}

// Search Functionality
function initializeSearch() {
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            clearSearch();
        }
    });
    
    clearSearchBtn.addEventListener('click', clearSearch);
}

function handleSearch(e) {
    const query = e.target.value.trim();
    
    // Show/hide clear button
    if (query.length > 0) {
        clearSearchBtn.classList.add('show');
    } else {
        clearSearchBtn.classList.remove('show');
    }
    
    // Debounce search
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        performSearch(query);
    }, 300);
}

function performSearch(query) {
    if (!query) {
        hideSearchResults();
        return;
    }
    
    showLoading();
    
    // Simulate API delay for better UX
    setTimeout(() => {
        const results = searchPhones(query);
        displaySearchResults(results, query);
        hideLoading();
    }, 200);
}

function searchPhones(query) {
    const lowerQuery = query.toLowerCase();
    
    return phoneDatabase.filter(phone => {
        const searchableText = [
            phone.name,
            phone.brand,
            phone.os,
            phone.year.toString(),
            ...phone.features
        ].join(' ').toLowerCase();
        
        return searchableText.includes(lowerQuery);
    });
}

function displaySearchResults(results, query) {
    if (results.length === 0) {
        showNoResults();
        return;
    }
    
    hideNoResults();
    showSearchResults();
    
    resultsCount.textContent = `Found ${results.length} phone${results.length !== 1 ? 's' : ''} for "${query}"`;
    renderPhones(results, searchResults);
}

function clearSearch() {
    searchInput.value = '';
    clearSearchBtn.classList.remove('show');
    hideSearchResults();
    hideNoResults();
    searchInput.focus();
}

function showSearchResults() {
    resultsSection.style.display = 'block';
}

function hideSearchResults() {
    resultsSection.style.display = 'none';
}

function showNoResults() {
    noResults.style.display = 'block';
    hideSearchResults();
}

function hideNoResults() {
    noResults.style.display = 'none';
}

function showLoading() {
    loading.style.display = 'flex';
}

function hideLoading() {
    loading.style.display = 'none';
}

// Modal Functions
function openPhoneModal(phone) {
    renderPhoneDetails(phone);
    phoneModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    setTimeout(() => {
        modalClose.focus();
    }, 100);
}

function closePhoneModal() {
    phoneModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function renderPhoneDetails(phone) {
    const specsData = [
        { icon: 'fas fa-calendar', label: 'Release Year', value: phone.year },
        { icon: 'fas fa-cog', label: 'Operating System', value: phone.os },
        { icon: 'fas fa-microchip', label: 'RAM', value: phone.ram },
        { icon: 'fas fa-hdd', label: 'Storage', value: phone.storage },
        { icon: 'fas fa-battery-three-quarters', label: 'Battery', value: phone.battery }
    ];
    
    phoneDetails.innerHTML = `
        <div class="detail-header">
            <img 
                src="${phone.image}" 
                alt="${phone.name}" 
                class="detail-image"
                onerror="this.src='https://via.placeholder.com/400x400/666666/ffffff?text=Phone+Image'"
            >
            <h2 class="detail-name">${phone.name}</h2>
            <div class="detail-brand">${phone.brand}</div>
        </div>
        
        <div class="detail-specs">
            ${specsData.map(spec => `
                <div class="spec-row">
                    <div class="spec-icon">
                        <i class="${spec.icon}"></i>
                    </div>
                    <div class="spec-content">
                        <div class="spec-label">${spec.label}</div>
                        <div class="spec-value">${spec.value}</div>
                    </div>
                </div>
            `).join('')}
            
            ${phone.features && phone.features.length > 0 ? `
                <div class="spec-row">
                    <div class="spec-icon">
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="spec-content">
                        <div class="spec-label">Key Features</div>
                        <div class="spec-value">${phone.features.join(', ')}</div>
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

// Event Listeners
function initializeEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Search functionality
    initializeSearch();
    
    // Modal controls
    modalClose.addEventListener('click', closePhoneModal);
    
    // Close modal when clicking overlay
    phoneModal.addEventListener('click', (e) => {
        if (e.target === phoneModal || e.target.classList.contains('modal-overlay')) {
            closePhoneModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (phoneModal.style.display === 'flex') {
                closePhoneModal();
            }
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance Optimization - Lazy Loading
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Error Handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
    // Could implement user-friendly error messages here
});

// Service Worker Registration (Optional - for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker registration would go here if needed
    });
}

// Analytics placeholder (could be replaced with actual analytics)
function trackSearch(query) {
    // Analytics tracking would go here
    console.log('Search tracked:', query);
}

function trackPhoneView(phoneId) {
    // Analytics tracking would go here
    console.log('Phone view tracked:', phoneId);
}

// Initialize performance monitoring
const perfObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        if (entry.entryType === 'measure') {
            console.log(`Performance: ${entry.name} took ${entry.duration}ms`);
        }
    }
});

if (typeof PerformanceObserver !== 'undefined') {
    perfObserver.observe({ entryTypes: ['measure'] });
}

// Accessibility improvements
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        searchPhones,
        createPhoneCard,
        toggleTheme
    };
}