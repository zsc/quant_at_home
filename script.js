// 区块链稳定币教程 - 共享JavaScript

// 代码块折叠功能
function toggleCode(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.toggle-icon');
    
    if (content.style.display === 'none' || !content.style.display) {
        content.style.display = 'block';
        header.classList.add('expanded');
    } else {
        content.style.display = 'none';
        header.classList.remove('expanded');
    }
}

// 答案显示/隐藏
function toggleAnswer(id) {
    const answer = document.getElementById(id);
    if (answer.style.display === 'none' || !answer.style.display) {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}

// 移动端导航切换
function toggleMobileNav() {
    const nav = document.querySelector('.navbar-nav');
    nav.classList.toggle('active');
}

// 进度条
function updateProgressBar() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    
    let progressBar = document.querySelector('.progress-bar');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = scrollProgress + '%';
}

// 回到顶部按钮
function initBackToTop() {
    let backToTop = document.querySelector('.back-to-top');
    if (!backToTop) {
        backToTop = document.createElement('a');
        backToTop.className = 'back-to-top';
        backToTop.href = '#top';
        backToTop.innerHTML = '↑';
        document.body.appendChild(backToTop);
    }
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 当前章节高亮
function highlightCurrentChapter() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        }
    });
}

// 章节内导航
function initChapterNav() {
    const sections = document.querySelectorAll('h3[id], h4[id]');
    const navContainer = document.querySelector('.toc ul');
    
    if (navContainer && sections.length > 0) {
        sections.forEach(section => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#' + section.id;
            a.textContent = section.textContent;
            a.className = section.tagName === 'H3' ? 'toc-h3' : 'toc-h4';
            li.appendChild(a);
            navContainer.appendChild(li);
        });
    }
}

// 代码复制功能
function initCodeCopy() {
    const codeBlocks = document.querySelectorAll('.code-content pre');
    
    codeBlocks.forEach(block => {
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = '复制';
        copyBtn.style.cssText = 'position: absolute; top: 0.5rem; right: 0.5rem; padding: 0.25rem 0.5rem; background: #4f46e5; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.875rem;';
        
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        block.parentNode.insertBefore(wrapper, block);
        wrapper.appendChild(block);
        wrapper.appendChild(copyBtn);
        
        copyBtn.addEventListener('click', async () => {
            const code = block.textContent;
            try {
                await navigator.clipboard.writeText(code);
                copyBtn.textContent = '已复制!';
                setTimeout(() => {
                    copyBtn.textContent = '复制';
                }, 2000);
            } catch (err) {
                console.error('复制失败:', err);
            }
        });
    });
}

// 平滑滚动
function initSmoothScroll() {
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

// 本地存储阅读进度
function saveReadingProgress() {
    const currentChapter = window.location.pathname.split('/').pop();
    const scrollPosition = window.pageYOffset;
    
    localStorage.setItem('stablecoin-tutorial-chapter', currentChapter);
    localStorage.setItem('stablecoin-tutorial-scroll', scrollPosition);
}

function restoreReadingProgress() {
    const savedChapter = localStorage.getItem('stablecoin-tutorial-chapter');
    const savedScroll = localStorage.getItem('stablecoin-tutorial-scroll');
    const currentChapter = window.location.pathname.split('/').pop();
    
    if (savedChapter === currentChapter && savedScroll) {
        window.scrollTo(0, parseInt(savedScroll));
    }
}

// 搜索功能（简单实现）
function initSearch() {
    const searchBox = document.getElementById('search-box');
    if (!searchBox) return;
    
    searchBox.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const chapters = document.querySelectorAll('.chapter');
        
        chapters.forEach(chapter => {
            const text = chapter.textContent.toLowerCase();
            if (text.includes(query)) {
                chapter.style.display = 'block';
            } else {
                chapter.style.display = 'none';
            }
        });
    });
}

// 主题切换
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// 初始化所有功能
document.addEventListener('DOMContentLoaded', () => {
    // 基础功能
    updateProgressBar();
    initBackToTop();
    highlightCurrentChapter();
    initChapterNav();
    initCodeCopy();
    initSmoothScroll();
    initSearch();
    initThemeToggle();
    
    // 恢复阅读进度
    restoreReadingProgress();
    
    // 监听滚动事件
    window.addEventListener('scroll', () => {
        updateProgressBar();
        saveReadingProgress();
    });
    
    // 移动端导航
    const navToggle = document.querySelector('.navbar-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileNav);
    }
    
    // 初始化 Prism.js
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
});

// 导出函数供HTML使用
window.toggleCode = toggleCode;
window.toggleAnswer = toggleAnswer;
window.toggleMobileNav = toggleMobileNav;