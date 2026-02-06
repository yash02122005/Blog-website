// Blog Data with Enhanced Content
const blogPosts = [
    {
        id: 1,
        title: "The Future of Web Development: 2023 Trends",
        excerpt: "Explore the latest trends shaping web development this year, from AI integration to Web3 technologies. Discover what's next for developers.",
        fullContent: `
            <h2>The Future of Web Development: 2023 Trends</h2>
            <div class="blog-meta-large">
                <div class="author-info">
                    <img src="https://ui-avatars.com/api/?name=Alex+Chen&background=4361ee&color=fff" alt="Alex Chen" class="author-avatar">
                    <div>
                        <span class="author-name">Alex Chen</span>
                        <span class="post-date">June 15, 2023 • 8 min read</span>
                    </div>
                </div>
                <div class="post-stats">
                    <span><i class="fas fa-heart"></i> 142</span>
                    <span><i class="fas fa-comment"></i> 24</span>
                    <span><i class="fas fa-eye"></i> 1.2K</span>
                </div>
            </div>
            <div class="featured-image">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Web Development Trends">
            </div>
            <div class="blog-content-full">
                <h3>Introduction</h3>
                <p>The web development landscape is evolving at an unprecedented pace. As we navigate through 2023, several transformative trends are reshaping how we build for the web. From AI-powered development tools to decentralized applications, the future is here.</p>
                
                <h3>AI-Powered Development Revolution</h3>
                <p>Artificial Intelligence is no longer just a buzzword in the development community. Tools like GitHub Copilot and Amazon CodeWhisperer are revolutionizing how we write code, offering intelligent suggestions and even generating entire functions based on natural language comments.</p>
                
                <p>The impact extends beyond code completion. AI is now helping with:</p>
                <ul>
                    <li>Automated testing and debugging</li>
                    <li>Code optimization and refactoring</li>
                    <li>Accessibility compliance checking</li>
                    <li>Performance bottleneck identification</li>
                </ul>
                
                <h3>Web3 and Decentralized Applications</h3>
                <p>Beyond cryptocurrencies, blockchain technology is finding practical applications in web development. Decentralized applications (dApps) are becoming more mainstream, offering:</p>
                
                <pre><code class="language-javascript">
// Example: Basic smart contract interaction
import { ethers } from 'ethers';

class Web3Blog {
    constructor(contractAddress, abi) {
        this.provider = new ethers.providers.Web3Provider(window.ethereum);
        this.signer = this.provider.getSigner();
        this.contract = new ethers.Contract(contractAddress, abi, this.signer);
    }
    
    async publishPost(title, content) {
        const tx = await this.contract.publishPost(title, content);
        await tx.wait();
        return tx.hash;
    }
    
    async getPosts() {
        return await this.contract.getAllPosts();
    }
}

// Initialize Web3 blog
const blog = new Web3Blog('0x...', contractABI);
                </code></pre>
                
                <h3>Performance Optimization as Priority</h3>
                <p>With Google's Core Web Vitals now a ranking factor, performance optimization is non-negotiable. Modern techniques include:</p>
                
                <ol>
                    <li>Edge computing and CDN optimization</li>
                    <li>Progressive Web App capabilities</li>
                    <li>Image optimization with modern formats (WebP, AVIF)</li>
                    <li>Code splitting and lazy loading strategies</li>
                </ol>
                
                <blockquote>
                    <p>"Performance is a feature. If your application is slow, people won't use it."</p>
                    <cite>- Kelsey Hightower, Google Developer Advocate</cite>
                </blockquote>
                
                <h3>Serverless Architecture Evolution</h3>
                <p>Serverless computing continues to evolve, with platforms offering more granular control and better developer experiences. The benefits include:</p>
                
                <ul>
                    <li>Reduced infrastructure management</li>
                    <li>Automatic scaling based on demand</li>
                    <li>Pay-per-use pricing models</li>
                    <li>Faster deployment cycles</li>
                </ul>
                
                <h3>Accessibility as Standard Practice</h3>
                <p>Building accessible websites is no longer optional—it's essential. With legal requirements and better user experience as drivers, developers must prioritize accessibility from day one.</p>
                
                <p>Key areas of focus include:</p>
                <ul>
                    <li>Semantic HTML structure</li>
                    <li>Keyboard navigation support</li>
                    <li>Screen reader compatibility</li>
                    <li>Color contrast and text readability</li>
                </ul>
                
                <h3>Conclusion</h3>
                <p>The future of web development is exciting but requires continuous learning. By staying updated with these trends and adopting a growth mindset, developers can build better, faster, and more inclusive web experiences.</p>
                
                <p>Remember: The most successful developers aren't necessarily those who know the most, but those who learn the fastest.</p>
            </div>
            <div class="blog-tags">
                <span class="tag">Web Development</span>
                <span class="tag">Trends</span>
                <span class="tag">AI</span>
                <span class="tag">Web3</span>
                <span class="tag">Performance</span>
                <span class="tag">2023</span>
            </div>
        `,
        category: "trends",
        author: "Alex Chen",
        date: "June 15, 2023",
        readTime: "8 min read",
        likes: 142,
        comments: 24,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 2,
        title: "Mastering CSS Grid: Modern Layout Techniques",
        excerpt: "Learn advanced CSS Grid techniques for creating complex, responsive layouts with minimal code.",
        fullContent: `
            <h2>Mastering CSS Grid: Modern Layout Techniques</h2>
            <div class="blog-meta-large">
                <div class="author-info">
                    <img src="https://ui-avatars.com/api/?name=Maria+Rodriguez&background=f72585&color=fff" alt="Maria Rodriguez" class="author-avatar">
                    <div>
                        <span class="author-name">Maria Rodriguez</span>
                        <span class="post-date">June 10, 2023 • 10 min read</span>
                    </div>
                </div>
                <div class="post-stats">
                    <span><i class="fas fa-heart"></i> 89</span>
                    <span><i class="fas fa-comment"></i> 15</span>
                    <span><i class="fas fa-eye"></i> 850</span>
                </div>
            </div>
            <div class="featured-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="CSS Grid Layout">
            </div>
            <div class="blog-content-full">
                <h3>Introduction to CSS Grid</h3>
                <p>CSS Grid Layout is a powerful two-dimensional layout system that has revolutionized how we create web layouts. Unlike Flexbox which is one-dimensional, Grid allows us to control both rows and columns simultaneously.</p>
                
                <h3>Basic Grid Setup</h3>
                <pre><code class="language-css">
.container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    gap: 20px;
    padding: 20px;
}

.header {
    grid-column: 1 / -1;
    grid-row: 1;
}

.sidebar {
    grid-column: 1 / 4;
    grid-row: 2;
}

.main-content {
    grid-column: 4 / -1;
    grid-row: 2;
}

.footer {
    grid-column: 1 / -1;
    grid-row: 3;
}
                </code></pre>
                
                <h3>Advanced Grid Patterns</h3>
                <p>CSS Grid enables complex layout patterns with minimal code. Here are some advanced techniques:</p>
                
                <h4>1. Masonry Layout</h4>
                <pre><code class="language-css">
.masonry-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 200px;
    grid-gap: 20px;
    grid-auto-flow: dense;
}

.item-tall {
    grid-row: span 2;
}

.item-wide {
    grid-column: span 2;
}
                </code></pre>
                
                <h4>2. Responsive Grid with Auto-fit</h4>
                <pre><code class="language-css">
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
}

/* No media queries needed! */
                </code></pre>
                
                <h3>Grid vs Flexbox: When to Use Which</h3>
                <p>Understanding when to use Grid versus Flexbox is crucial:</p>
                
                <table style="width: 100%; border-collapse: collapse; margin: 2rem 0;">
                    <thead>
                        <tr>
                            <th style="padding: 1rem; background: var(--bg-color); border: 1px solid var(--glass-border);">Use Case</th>
                            <th style="padding: 1rem; background: var(--bg-color); border: 1px solid var(--glass-border);">Grid</th>
                            <th style="padding: 1rem; background: var(--bg-color); border: 1px solid var(--glass-border);">Flexbox</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 1rem; border: 1px solid var(--glass-border);">Two-dimensional layouts</td>
                            <td style="padding: 1rem; border: 1px solid var(--glass-border);">✅ Perfect</td>
                            <td style="padding: 1rem; border: 1px solid var(--glass-border);">❌ Not suitable</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem; border: 1px solid var(--glass-border);">Single row/column layouts</td>
                            <td style="padding: 1rem; border: 1px solid var(--glass-border);">✅ Can work</td>
                            <td style="padding: 1rem; border: 1px solid var(--glass-border);">✅ Perfect</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem; border: 1px solid var(--glass-border);">Complex overlapping</td>
                            <td style="padding: 1rem; border: 1px solid var(--glass-border);">✅ Excellent</td>
                            <td style="padding: 1rem; border: 1px solid var(--glass-border);">❌ Difficult</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Practical Example: Dashboard Layout</h3>
                <p>Let's build a modern dashboard layout using CSS Grid:</p>
                
                <pre><code class="language-html">
<!-- HTML Structure -->
<div class="dashboard">
    <header class="dashboard-header">Header</header>
    <aside class="dashboard-sidebar">Sidebar</aside>
    <main class="dashboard-main">
        <div class="widget">Widget 1</div>
        <div class="widget">Widget 2</div>
        <div class="widget widget-wide">Widget 3</div>
        <div class="widget">Widget 4</div>
    </main>
</div>
                </code></pre>
                
                <pre><code class="language-css">
/* CSS Grid Implementation */
.dashboard {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 80px 1fr;
    height: 100vh;
    gap: 1rem;
    padding: 1rem;
}

.dashboard-header {
    grid-column: 1 / -1;
    grid-row: 1;
}

.dashboard-sidebar {
    grid-column: 1;
    grid-row: 2;
}

.dashboard-main {
    grid-column: 2;
    grid-row: 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    align-content: start;
}

.widget {
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
}

.widget-wide {
    grid-column: span 2;
}
                </code></pre>
                
                <h3>Browser Support and Fallbacks</h3>
                <p>CSS Grid is supported in all modern browsers (95%+ global support). For older browsers, consider:</p>
                
                <ul>
                    <li>Using @supports feature queries</li>
                    <li>Providing Flexbox fallbacks</li>
                    <li>Using CSS Grid polyfills if necessary</li>
                </ul>
                
                <h3>Conclusion</h3>
                <p>CSS Grid is a game-changer for web layout. By mastering its capabilities, you can create complex, responsive layouts with cleaner, more maintainable code. Start experimenting with Grid today and discover how it can simplify your layout challenges.</p>
                
                <blockquote>
                    <p>"CSS Grid is the most powerful layout system available in CSS. It's a two-dimensional system, meaning it can handle both columns and rows."</p>
                    <cite>- Rachel Andrew, CSS Grid Expert</cite>
                </blockquote>
            </div>
            <div class="blog-tags">
                <span class="tag">CSS</span>
                <span class="tag">Grid</span>
                <span class="tag">Layout</span>
                <span class="tag">Web Design</span>
                <span class="tag">Responsive</span>
            </div>
        `,
        category: "web-dev",
        author: "Maria Rodriguez",
        date: "June 10, 2023",
        readTime: "10 min read",
        likes: 89,
        comments: 15,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 3,
        title: "JavaScript ES2023 Features You Need to Know",
        excerpt: "Discover the latest JavaScript features and how they can improve your code quality and developer experience.",
        category: "web-dev",
        author: "Sam Wilson",
        date: "June 5, 2023",
        readTime: "6 min read",
        likes: 156,
        comments: 32,
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 4,
        title: "UI/UX Psychology: Designing for Human Behavior",
        excerpt: "How understanding psychology can help you create more effective and engaging user interfaces.",
        category: "ui-ux",
        author: "Jordan Patel",
        date: "May 28, 2023",
        readTime: "7 min read",
        likes: 78,
        comments: 18,
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 5,
        title: "Building Responsive Websites with CSS Clamp",
        excerpt: "Learn how to use CSS clamp() for fluid typography and responsive layouts without media queries.",
        category: "tutorial",
        author: "Taylor Kim",
        date: "May 20, 2023",
        readTime: "5 min read",
        likes: 94,
        comments: 12,
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 6,
        title: "The Art of Microinteractions in Modern Web Design",
        excerpt: "How small animations and interactions can dramatically improve user experience.",
        category: "ui-ux",
        author: "Chris Morgan",
        date: "May 15, 2023",
        readTime: "9 min read",
        likes: 112,
        comments: 27,
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 7,
        title: "TypeScript for JavaScript Developers: Getting Started",
        excerpt: "A comprehensive guide to TypeScript for developers familiar with JavaScript.",
        category: "tutorial",
        author: "Alex Chen",
        date: "May 10, 2023",
        readTime: "12 min read",
        likes: 134,
        comments: 41,
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 8,
        title: "Web Performance Optimization: Advanced Techniques",
        excerpt: "Go beyond the basics with these advanced web performance optimization strategies.",
        category: "web-dev",
        author: "Maria Rodriguez",
        date: "May 5, 2023",
        readTime: "11 min read",
        likes: 167,
        comments: 29,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 9,
        title: "Dark Mode Implementation Best Practices",
        excerpt: "Learn how to implement dark mode effectively in your web applications.",
        category: "ui-ux",
        author: "Sam Wilson",
        date: "April 28, 2023",
        readTime: "8 min read",
        likes: 89,
        comments: 21,
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 10,
        title: "React Hooks: Beyond useState and useEffect",
        excerpt: "Explore advanced React Hooks and custom hook patterns for better code organization.",
        category: "web-dev",
        author: "Taylor Kim",
        date: "April 20, 2023",
        readTime: "14 min read",
        likes: 203,
        comments: 56,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 11,
        title: "Accessibility Testing: Tools and Techniques",
        excerpt: "Comprehensive guide to testing your website for accessibility compliance.",
        category: "tutorial",
        author: "Jordan Patel",
        date: "April 15, 2023",
        readTime: "10 min read",
        likes: 76,
        comments: 14,
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 12,
        title: "The Rise of Edge Computing in Web Development",
        excerpt: "How edge computing is changing the way we build and deploy web applications.",
        category: "trends",
        author: "Chris Morgan",
        date: "April 10, 2023",
        readTime: "7 min read",
        likes: 98,
        comments: 23,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
];

// Comments data structure
let commentsData = {
    1: [
        { id: 1, name: "Chris Morgan", text: "Great overview of the trends! Especially interested in the Web3 developments.", date: "June 16, 2023" },
        { id: 2, name: "Taylor Swift", text: "Looking forward to more content like this! The AI section was particularly insightful.", date: "June 17, 2023" },
        { id: 3, name: "Dev Enthusiast", text: "The performance optimization tips are gold. Already implemented some on my projects.", date: "June 18, 2023" }
    ],
    2: [
        { id: 1, name: "Designer Pro", text: "CSS Grid has completely changed how I approach layouts. Great tutorial!", date: "June 11, 2023" },
        { id: 2, name: "Frontend Fan", text: "The dashboard example is perfect. Exactly what I needed for my current project.", date: "June 12, 2023" }
    ],
    3: [
        { id: 1, name: "JS Developer", text: "These new ES features are game-changers. Can't wait to use them in production.", date: "June 6, 2023" }
    ]
};

// Initialize likes from localStorage or set defaults
let likesData = JSON.parse(localStorage.getItem('blogLikes')) || {};

// If no likes data exists, initialize with post likes
if (Object.keys(likesData).length === 0) {
    blogPosts.forEach(post => {
        likesData[post.id] = post.likes;
    });
    localStorage.setItem('blogLikes', JSON.stringify(likesData));
}

// Add missing fullContent for posts
blogPosts.forEach(post => {
    if (!post.fullContent) {
        post.fullContent = null; // Will use template in script.js
    }
});