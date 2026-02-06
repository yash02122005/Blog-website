// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const blogContainer = document.getElementById('blog-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const commentModal = document.getElementById('comment-modal');
const blogModal = document.getElementById('blog-modal');
const closeModalBtn = document.querySelector('.close-modal');
const closeBlogModalBtn = document.querySelector('.close-blog-modal');
const commentForm = document.getElementById('comment-form');
const commentsList = document.getElementById('comments-list');
const postCount = document.getElementById('post-count');
const commentCount = document.getElementById('comment-count');
const likeCount = document.getElementById('like-count');
const authorCount = document.getElementById('author-count');
const blogModalContent = document.getElementById('blog-modal-content');
const exploreBtn = document.querySelector('.explore-btn');
const loadMoreBtn = document.getElementById('load-more');
const backToTopBtn = document.getElementById('back-to-top');
const toast = document.getElementById('toast');

// Current state
let currentFilter = 'all';
let currentPostId = null;
let currentBlogPost = null;
let allCommentsCount = 0;
let allLikesCount = 0;
let displayedPosts = 6; // Number of posts to show initially
const postsPerLoad = 3; // Posts to load each time

// Initialize the application
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    // Set initial stats
    updateStats();
    
    // Load and display blog posts
    renderBlogPosts();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Initialize navbar scroll effect
    initNavbarScroll();
    
    // Initialize animations on scroll
    initScrollAnimations();
    
    // Show back to top button on scroll
    window.addEventListener('scroll', handleScroll);
    
    // Show toast notification on first visit
    setTimeout(() => {
        showToast('Welcome to NeoBlog! Explore our articles.');
    }, 1000);
}

function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter posts
            currentFilter = button.dataset.filter;
            displayedPosts = 6; // Reset to initial count
            renderBlogPosts();
            
            // Add animation to button
            button.style.animation = 'none';
            setTimeout(() => {
                button.style.animation = 'heartBeat 0.5s ease';
            }, 10);
        });
    });
    
    // Search functionality
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('input', debounce(performSearch, 300));
    
    // Mobile menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) {
                toggleMobileMenu();
            }
            // Smooth scroll to section
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Explore button
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            const postsSection = document.getElementById('posts');
            postsSection.scrollIntoView({ behavior: 'smooth' });
            exploreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Exploring...';
            setTimeout(() => {
                exploreBtn.innerHTML = '<i class="fas fa-rocket"></i> Explore Articles';
            }, 1000);
        });
    }
    
    // Load more button
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMorePosts);
    }
    
    // Back to top button
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', scrollToTop);
    }
    
    // Close modals when clicking outside
    commentModal.addEventListener('click', (e) => {
        if (e.target === commentModal) {
            closeCommentModal();
        }
    });
    
    blogModal.addEventListener('click', (e) => {
        if (e.target === blogModal) {
            closeBlogModal();
        }
    });
    
    // Close comment modal with button
    closeModalBtn.addEventListener('click', closeCommentModal);
    
    // Close blog modal with button
    if (closeBlogModalBtn) {
        closeBlogModalBtn.addEventListener('click', closeBlogModal);
    }
    
    // Comment form submission
    commentForm.addEventListener('submit', submitComment);
    
    // Close comment form
    const closeCommentFormBtn = document.querySelector('.close-comment-form');
    if (closeCommentFormBtn) {
        closeCommentFormBtn.addEventListener('click', closeCommentModal);
    }
    
    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (commentModal.classList.contains('active')) {
                closeCommentModal();
            }
            if (blogModal.classList.contains('active')) {
                closeBlogModal();
            }
        }
    });
    
    // Blog modal action buttons
    document.addEventListener('DOMContentLoaded', function() {
        const commentFromBlogBtn = document.getElementById('comment-from-blog');
        const shareBlogBtn = document.getElementById('share-blog');
        const saveBlogBtn = document.getElementById('save-blog');
        
        if (commentFromBlogBtn) {
            commentFromBlogBtn.addEventListener('click', () => {
                closeBlogModal();
                setTimeout(() => {
                    openCommentModal(currentPostId);
                }, 300);
            });
        }
        
        if (shareBlogBtn) {
            shareBlogBtn.addEventListener('click', shareBlogPost);
        }
        
        if (saveBlogBtn) {
            saveBlogBtn.addEventListener('click', saveBlogPost);
        }
    });
}

// Theme functionality
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Add transition class for smooth theme change
    document.body.classList.add('theme-transition');
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Remove transition class after animation
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 300);
    
    // Add animation to toggle button
    themeToggle.style.transform = 'rotate(360deg) scale(1.2)';
    setTimeout(() => {
        themeToggle.style.transform = '';
    }, 300);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Navbar scroll effect
function initNavbarScroll() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.animate-slide-up, .animate-fade-in, .animate-scale-in').forEach(el => {
        observer.observe(el);
    });
}

// Blog post rendering
function renderBlogPosts(filteredPosts = null) {
    const postsToShow = filteredPosts || filterPosts(blogPosts);
    const postsToDisplay = postsToShow.slice(0, displayedPosts);
    
    blogContainer.innerHTML = '';
    
    if (postsToShow.length === 0) {
        blogContainer.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-light); margin-bottom: 1rem;"></i>
                <h3>No posts found</h3>
                <p>Try adjusting your search or filter</p>
                <button class="btn-primary" onclick="resetFilters()" style="margin-top: 1rem;">
                    <i class="fas fa-redo"></i> Reset Filters
                </button>
            </div>
        `;
        return;
    }
    
    // Show loading animation
    blogContainer.innerHTML = `
        <div class="loading">
            <div class="loading-dots">
                <div class="loading-dot"></div>
                <div class="loading-dot"></div>
                <div class="loading-dot"></div>
            </div>
        </div>
    `;
    
    // Delay to show loading animation
    setTimeout(() => {
        blogContainer.innerHTML = '';
        
        postsToDisplay.forEach((post, index) => {
            const postElement = createBlogPostElement(post, index);
            blogContainer.appendChild(postElement);
        });
        
        // Update load more button visibility
        if (loadMoreBtn) {
            if (postsToShow.length <= displayedPosts) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'inline-flex';
            }
        }
    }, 500);
}

function filterPosts(posts) {
    if (currentFilter === 'all') return posts;
    return posts.filter(post => post.category === currentFilter);
}

function createBlogPostElement(post, index) {
    const postLikes = likesData[post.id] || post.likes;
    
    const postElement = document.createElement('article');
    postElement.className = 'blog-card glass';
    postElement.dataset.id = post.id;
    postElement.dataset.category = post.category;
    
    // Add animation delay based on index
    postElement.style.animationDelay = `${index * 0.1}s`;
    
    postElement.innerHTML = `
        <div class="blog-image-container">
            <img src="${post.image}" alt="${post.title}" class="blog-image" loading="lazy">
            <div class="image-overlay">
                <i class="fas fa-eye"></i> Read Article
            </div>
        </div>
        <div class="blog-content">
            <div class="blog-meta">
                <span class="blog-date">
                    <i class="far fa-calendar"></i> ${post.date}
                </span>
                <span class="blog-category">${getCategoryName(post.category)}</span>
            </div>
            <h3 class="blog-title read-blog-btn">${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
            <div class="blog-footer">
                <button class="like-btn ${isPostLiked(post.id) ? 'liked' : ''}" data-id="${post.id}">
                    <i class="fas fa-heart"></i>
                    <span class="like-count">${postLikes}</span>
                </button>
                <button class="comment-btn" data-id="${post.id}">
                    <i class="fas fa-comment"></i> ${post.comments}
                </button>
                <button class="read-btn" data-id="${post.id}">
                    <i class="fas fa-book-open"></i> Read
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners
    const likeBtn = postElement.querySelector('.like-btn');
    const commentBtn = postElement.querySelector('.comment-btn');
    const readBtn = postElement.querySelector('.read-btn');
    const blogImage = postElement.querySelector('.blog-image-container');
    const blogTitle = postElement.querySelector('.blog-title');
    
    likeBtn.addEventListener('click', () => toggleLike(post.id, likeBtn));
    commentBtn.addEventListener('click', () => openCommentModal(post.id));
    readBtn.addEventListener('click', () => openBlogModal(post.id));
    blogImage.addEventListener('click', () => openBlogModal(post.id));
    blogTitle.addEventListener('click', () => openBlogModal(post.id));
    
    return postElement;
}

function getCategoryName(category) {
    const categories = {
        'web-dev': 'Web Development',
        'ui-ux': 'UI/UX Design',
        'tutorial': 'Tutorial',
        'trends': 'Trends'
    };
    return categories[category] || category;
}

// Load more posts
function loadMorePosts() {
    displayedPosts += postsPerLoad;
    renderBlogPosts();
    
    // Add animation to button
    loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    setTimeout(() => {
        loadMoreBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Load More Articles';
    }, 500);
}

// Reset filters
function resetFilters() {
    currentFilter = 'all';
    displayedPosts = 6;
    searchInput.value = '';
    
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === 'all') {
            btn.classList.add('active');
        }
    });
    
    renderBlogPosts();
    showToast('Filters reset successfully!');
}

// Blog reading functionality
function openBlogModal(postId) {
    currentPostId = postId;
    currentBlogPost = blogPosts.find(post => post.id === postId);
    
    if (!currentBlogPost) {
        console.error('Blog post not found:', postId);
        return;
    }
    
    // Load full content
    loadFullBlogContent(currentBlogPost);
    
    // Show modal with animation
    blogModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add animation class
    setTimeout(() => {
        blogModalContent.classList.add('animated');
    }, 10);
}

function loadFullBlogContent(post) {
    if (!blogModalContent) {
        console.error('Blog modal content element not found');
        return;
    }
    
    // Get full content from blog-data or use template
    const fullContent = post.fullContent || createBlogContentTemplate(post);
    
    blogModalContent.innerHTML = fullContent;
    
    // Add syntax highlighting
    highlightCodeBlocks();
}

function createBlogContentTemplate(post) {
    const postLikes = likesData[post.id] || post.likes;
    const comments = commentsData[post.id] || [];
    
    return `
        <h2>${post.title}</h2>
        <div class="blog-meta-large">
            <div class="author-info">
                <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=${post.category === 'web-dev' ? '4361ee' : post.category === 'ui-ux' ? 'f72585' : '3a0ca3'}&color=fff" 
                     alt="${post.author}" 
                     class="author-avatar">
                <div>
                    <span class="author-name">${post.author}</span>
                    <span class="post-date">${post.date} • ${post.readTime}</span>
                </div>
            </div>
            <div class="post-stats">
                <span><i class="fas fa-heart"></i> ${postLikes}</span>
                <span><i class="fas fa-comment"></i> ${comments.length}</span>
                <span><i class="fas fa-eye"></i> ${post.views || Math.floor(Math.random() * 1000) + 100}</span>
            </div>
        </div>
        <div class="featured-image">
            <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="blog-content-full">
            <p>${post.excerpt}</p>
            
            <h3>Introduction</h3>
            <p>This is a detailed exploration of "${post.title}". In this comprehensive article, we dive deep into the subject matter, providing insights, examples, and practical applications.</p>
            
            <h3>Key Concepts</h3>
            <p>Understanding the fundamental concepts is crucial for mastering this topic. Let's explore the core principles that form the foundation of our discussion.</p>
            
            <ul>
                <li>Core Principle 1: The foundation of understanding</li>
                <li>Core Principle 2: Practical applications and use cases</li>
                <li>Core Principle 3: Best practices and optimization</li>
                <li>Core Principle 4: Future trends and developments</li>
            </ul>
            
            <h3>Practical Implementation</h3>
            <p>Here's a practical example demonstrating the concepts discussed:</p>
            
            <pre><code class="language-javascript">
// Example: Modern JavaScript Implementation
class BlogPost {
    constructor(title, author, content) {
        this.title = title;
        this.author = author;
        this.content = content;
        this.likes = 0;
        this.comments = [];
        this.publishedAt = new Date();
    }
    
    addLike() {
        this.likes++;
        return this.likes;
    }
    
    addComment(comment) {
        this.comments.push({
            ...comment,
            id: Date.now(),
            date: new Date().toISOString()
        });
        return this.comments.length;
    }
    
    get readingTime() {
        const wordsPerMinute = 200;
        const words = this.content.split(' ').length;
        return Math.ceil(words / wordsPerMinute);
    }
}

// Using the class
const myPost = new BlogPost(
    "${post.title}",
    "${post.author}",
    "${post.excerpt}"
);

console.log(\`Reading time: \${myPost.readingTime} minutes\`);
            </code></pre>
            
            <h3>Best Practices</h3>
            <p>When working with this technology or concept, consider these best practices:</p>
            
            <ol>
                <li>Always start with a clear understanding of requirements</li>
                <li>Follow established coding conventions and patterns</li>
                <li>Implement proper error handling and validation</li>
                <li>Optimize for performance and user experience</li>
                <li>Stay updated with the latest developments</li>
            </ol>
            
            <blockquote>
                <p>"The only way to learn a new programming language is by writing programs in it."</p>
                <cite>- Dennis Ritchie</cite>
            </blockquote>
            
            <h3>Conclusion</h3>
            <p>Mastering "${post.title}" requires practice and continuous learning. By applying the concepts discussed in this article and staying curious about new developments, you can significantly improve your skills in this area.</p>
            
            <p>Remember that the technology landscape is constantly evolving, so what's cutting-edge today might be standard tomorrow. Stay curious, keep learning, and don't be afraid to experiment!</p>
        </div>
        <div class="blog-tags">
            <span class="tag">${getCategoryName(post.category)}</span>
            <span class="tag">Web Development</span>
            <span class="tag">JavaScript</span>
            <span class="tag">Best Practices</span>
            <span class="tag">Tutorial</span>
        </div>
    `;
}

function highlightCodeBlocks() {
    const codeBlocks = blogModalContent.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const text = block.textContent;
        const highlighted = text
            .replace(/\/\/.*$/gm, '<span class="comment">$&</span>')
            .replace(/(\b(?:function|class|const|let|var|if|else|return|try|catch|async|await|export|import|from|default)\b)/g, '<span class="keyword">$1</span>')
            .replace(/(\b\d+\b)/g, '<span class="number">$1</span>')
            .replace(/("[^"]*"|'[^']*')/g, '<span class="string">$1</span>')
            .replace(/(\b(?:console|log|new|Date|Math|Object|Array|String|Number|Boolean)\b)/g, '<span class="function">$1</span>');
        block.innerHTML = highlighted;
    });
}

function closeBlogModal() {
    blogModal.classList.remove('active');
    document.body.style.overflow = '';
    currentBlogPost = null;
    blogModalContent.classList.remove('animated');
}

// Share blog post
function shareBlogPost() {
    if (!currentBlogPost) return;
    
    const shareData = {
        title: currentBlogPost.title,
        text: currentBlogPost.excerpt,
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => showToast('Article shared successfully!'))
            .catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(`${currentBlogPost.title}\n\n${currentBlogPost.excerpt}\n\n${window.location.href}`)
            .then(() => showToast('Link copied to clipboard!'))
            .catch(err => {
                console.error('Could not copy text: ', err);
                showToast('Failed to share article');
            });
    }
}

// Save blog post
function saveBlogPost() {
    if (!currentBlogPost) return;
    
    // Get saved posts from localStorage
    let savedPosts = JSON.parse(localStorage.getItem('savedPosts')) || [];
    
    // Check if post is already saved
    const alreadySaved = savedPosts.some(post => post.id === currentBlogPost.id);
    
    if (!alreadySaved) {
        savedPosts.push({
            id: currentBlogPost.id,
            title: currentBlogPost.title,
            date: new Date().toISOString()
        });
        localStorage.setItem('savedPosts', JSON.stringify(savedPosts));
        showToast('Article saved for later!');
        
        // Update button
        const saveBtn = document.getElementById('save-blog');
        saveBtn.innerHTML = '<i class="fas fa-check"></i> Saved';
        saveBtn.classList.add('btn-primary');
        saveBtn.classList.remove('btn-secondary');
    } else {
        showToast('Article already saved!');
    }
}

// Like functionality
function toggleLike(postId, button) {
    if (!likesData[postId]) {
        likesData[postId] = blogPosts.find(p => p.id === postId).likes;
    }
    
    const heartIcon = button.querySelector('i');
    const likeCountElement = button.querySelector('.like-count');
    
    if (button.classList.contains('liked')) {
        // Unlike
        likesData[postId]--;
        button.classList.remove('liked');
        heartIcon.style.animation = 'none';
        showToast('Post unliked');
    } else {
        // Like
        likesData[postId]++;
        button.classList.add('liked');
        heartIcon.style.animation = 'heartBeat 0.5s ease';
        showToast('Post liked!');
        
        setTimeout(() => {
            heartIcon.style.animation = '';
        }, 500);
    }
    
    likeCountElement.textContent = likesData[postId];
    localStorage.setItem('blogLikes', JSON.stringify(likesData));
    updateStats();
}

function isPostLiked(postId) {
    // In a real app, check against user data
    return false;
}

// Comment modal functionality
function openCommentModal(postId) {
    currentPostId = postId;
    loadComments(postId);
    commentModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCommentModal() {
    commentModal.classList.remove('active');
    document.body.style.overflow = '';
    commentForm.reset();
}

function loadComments(postId) {
    const comments = commentsData[postId] || [];
    commentsList.innerHTML = '';
    
    if (comments.length === 0) {
        commentsList.innerHTML = `
            <div class="no-comments" style="text-align: center; padding: 2rem; color: var(--text-light);">
                <i class="far fa-comment-dots" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <p>No comments yet. Be the first to comment!</p>
            </div>
        `;
        return;
    }
    
    comments.forEach((comment, index) => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.style.animationDelay = `${index * 0.1}s`;
        commentElement.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">
                    <i class="fas fa-user-circle"></i> ${comment.name}
                </span>
                <span class="comment-date">${comment.date}</span>
            </div>
            <p class="comment-text">${comment.text}</p>
        `;
        commentsList.appendChild(commentElement);
    });
}

function submitComment(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('comment-name');
    const textInput = document.getElementById('comment-text');
    
    const name = nameInput.value.trim();
    const text = textInput.value.trim();
    
    if (!name || !text) {
        showToast('Please fill in both name and comment fields.');
        return;
    }
    
    // Create new comment
    const newComment = {
        id: Date.now(),
        name: name,
        text: text,
        date: new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        })
    };
    
    // Add to comments data
    if (!commentsData[currentPostId]) {
        commentsData[currentPostId] = [];
    }
    commentsData[currentPostId].push(newComment);
    
    // Save to localStorage
    localStorage.setItem('blogComments', JSON.stringify(commentsData));
    
    // Reload comments
    loadComments(currentPostId);
    
    // Update stats
    updateStats();
    
    // Reset form
    commentForm.reset();
    
    // Show success message
    showToast('Comment posted successfully!');
}

// Search functionality
function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (!searchTerm) {
        renderBlogPosts();
        return;
    }
    
    const filteredPosts = blogPosts.filter(post => {
        return post.title.toLowerCase().includes(searchTerm) || 
               post.excerpt.toLowerCase().includes(searchTerm) ||
               post.author.toLowerCase().includes(searchTerm) ||
               getCategoryName(post.category).toLowerCase().includes(searchTerm);
    });
    
    renderBlogPosts(filteredPosts);
    
    if (filteredPosts.length === 0) {
        showToast('No results found for your search.');
    }
}

// Mobile menu
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.className = navMenu.classList.contains('active') 
        ? 'fas fa-times' 
        : 'fas fa-bars';
}

// Stats functionality
function updateStats() {
    // Update post count
    postCount.textContent = blogPosts.length;
    
    // Calculate total comments
    allCommentsCount = 0;
    Object.values(commentsData).forEach(comments => {
        allCommentsCount += comments.length;
    });
    commentCount.textContent = allCommentsCount;
    
    // Calculate total likes
    allLikesCount = 0;
    Object.values(likesData).forEach(likes => {
        allLikesCount += likes;
    });
    likeCount.textContent = allLikesCount;
    
    // Calculate unique authors
    const uniqueAuthors = [...new Set(blogPosts.map(post => post.author))];
    authorCount.textContent = uniqueAuthors.length;
    
    // Animate number changes
    [postCount, commentCount, likeCount, authorCount].forEach(element => {
        animateNumberChange(element);
    });
}

function animateNumberChange(element) {
    element.style.transform = 'scale(1.2)';
    element.style.color = 'var(--accent-color)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
        element.style.color = '';
    }, 300);
}

// Scroll handling
function handleScroll() {
    // Show/hide back to top button
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Add animation to button
    backToTopBtn.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        backToTopBtn.style.transform = '';
    }, 300);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Toast notifications
function showToast(message) {
    const toastMessage = toast.querySelector('.toast-message');
    toastMessage.textContent = message;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Utility functions
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

// Initialize data from localStorage
const savedComments = localStorage.getItem('blogComments');
if (savedComments) {
    commentsData = JSON.parse(savedComments);
}