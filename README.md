# Muhammad Tayyeebur Rohman Talukder - Portfolio Website

A clean, minimal, and professional single-page portfolio website built with pure HTML, CSS, and vanilla JavaScript.

## ✨ Features

✅ **Multi-page Website** - Home page + dedicated projects page
✅ **Sticky Navigation** - Fixed navbar with active link highlighting
✅ **Responsive Design** - Mobile-first approach, works on all devices
✅ **Smooth Scrolling** - Elegant scroll animations and transitions
✅ **Mobile Menu** - Hamburger menu with smooth animation
✅ **Contact Form** - With basic validation
✅ **No Dependencies** - Pure HTML, CSS, and JavaScript
✅ **GitHub Pages Ready** - Easy deployment
✅ **WCAG Compliant** - Proper color contrast and accessibility
✅ **Modern Typography** - Clean, professional fonts

## 📁 Project Structure

```
portfolio/
├── index.html          # Main home page with sections
├── projects.html       # Dedicated projects showcase page
├── styles.css          # All styling with CSS variables and responsive design
├── script.js           # Vanilla JavaScript for interactivity
└── README.md          # This file
```

## 🚀 Quick Start

### Option 1: Local Development
1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build tools or dependencies needed.

### Option 2: Deploy on GitHub Pages
1. Create a GitHub repository named `username.github.io`
2. Push all files to the repository
3. Visit `https://username.github.io` to see your live portfolio

## ⚙️ Customization Guide

### 1. Personal Information
Edit the following in `index.html`:

- **Name & Title**: Update the Hero section (`<h1>` and `<p>` tags)
- **About Section**: Modify the about text in the "About Me" section
- **Contact Info**: Update email, location, and social media links
- **Skills**: Add/remove skill tags as needed
- **Projects**: Replace project titles, descriptions, and links
- **Education**: Update diploma details, institute name, dates

### 2. Colors & Theme
All colors are defined as CSS variables in `styles.css`:

```css
:root {
    --color-primary: #0066cc;           /* Main blue */
    --color-primary-dark: #0052a3;      /* Darker blue */
    --color-secondary: #1a1a1a;         /* Dark grey/black */
    --color-accent: #00d4ff;            /* Cyan */
    --color-white: #ffffff;             /* White */
    --color-light-grey: #f5f5f5;        /* Light grey */
    --color-grey: #e0e0e0;              /* Medium grey */
    --color-dark-grey: #757575;         /* Dark grey */
    --color-text: #333333;              /* Text color */
}
```

**To change the primary color:**
1. Open `styles.css`
2. Find the `:root` selector
3. Change `--color-primary` to your preferred color
4. Change `--color-primary-dark` to a darker shade
5. All elements using the primary color will update automatically

### 3. Typography
Fonts are defined at the top of `styles.css`:

```css
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
```

This uses system fonts for fast loading. To use a Google Font:
1. Add the font import to `index.html` `<head>`:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
   ```
2. Update `--font-primary` in `styles.css`:
   ```css
   --font-primary: 'Poppins', sans-serif;
   ```

### 4. Projects Section
Projects have been moved to a separate `projects.html` page. To add or modify projects, find the `<section class="projects-page">` and update project cards:

```html
<article class="project-card">
    <div class="project-image">
        <img src="your-image.jpg" alt="Project description">
    </div>
    <div class="project-info">
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">Your project description</p>
        <div class="project-details">
            <div class="detail-item">
                <strong>Duration:</strong> Your duration
            </div>
            <div class="detail-item">
                <strong>Role:</strong> Your role
            </div>
        </div>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="your-project-url" class="btn btn-small btn-primary">View Live</a>
            <a href="your-github-url" class="btn btn-small btn-secondary">GitHub</a>
        </div>
    </div>
</article>
```

### 5. Contact Links
Update email and social links in the Contact section:

```html
<!-- Email -->
<a href="mailto:your.email@example.com">your.email@example.com</a>

<!-- Social Links -->
<a href="https://github.com/yourprofile" class="social-link">GitHub</a>
<a href="https://linkedin.com/in/yourprofile" class="social-link">LinkedIn</a>
<a href="https://twitter.com/yourprofile" class="social-link">Twitter</a>
```

## 📱 Responsive Breakpoints

The design uses these breakpoints:
- **Desktop**: 1200px (full layout)
- **Tablet**: 768px (adjusted spacing and layout)
- **Mobile**: 480px (single column, hamburger menu)

All breakpoints are defined in the CSS media queries at the bottom of `styles.css`.

## ✨ JavaScript Features

### 1. Mobile Menu Toggle
Hamburger menu automatically opens/closes on mobile devices. Automatically closes when a link is clicked.

### 2. Active Link Highlighting
Navigation links are automatically highlighted based on which section is currently visible on the page.

### 3. Smooth Scrolling
All anchor links smoothly scroll to their target sections.

### 4. Contact Form
- Validates all fields
- Checks email format
- Shows success/error messages
- Clears form after submission

### 5. Scroll-to-Top Button
Appears when you scroll down the page, returns you to the top smoothly.

### 6. Fade-in Animations
Cards and tags fade in as they come into view.

### 7. Ripple Effect
Buttons have a subtle ripple animation on click.

## 🔧 Advanced Customization

### Add a New Section
1. Add a new `<section>` in `index.html`
2. Add a navigation link for the section in the navbar
3. Style the section in `styles.css`

### Change Spacing/Sizing
All spacing is controlled by CSS variables in the `:root` selector:

```css
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2rem;
--spacing-xl: 3rem;
--spacing-xxl: 4rem;
```

Adjust these values to change the overall spacing throughout the site.

### Modify Animations
Transition speeds are defined as variables:

```css
--transition-smooth: 0.3s ease-in-out;
--transition-fast: 0.15s ease-in-out;
```

## 🎯 Performance Tips

- Images are optimized with appropriate file sizes
- CSS is minified (can be minified further if needed)
- JavaScript is vanilla (no heavy frameworks)
- Uses system fonts for fast loading
- No external dependencies or CDN calls

## 🌐 SEO Optimization

The portfolio includes:
- Semantic HTML5 tags
- Meta descriptions and keywords
- Proper heading hierarchy
- Alt text for images
- Structured content

## 🚀 Deployment

### GitHub Pages
1. Create a repository named `username.github.io`
2. Push all files
3. Access at `https://username.github.io`

### Other Hosting
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **Any Web Host**: Upload files via FTP/SFTP

## 🐛 Troubleshooting

### Menu not closing on mobile
Check that `navMenu.classList.toggle('active')` is being called correctly in `script.js`.

### Styles not applying
Clear your browser cache (Ctrl+Shift+Delete) and reload.

### Smooth scroll not working
Check that your browser supports CSS smooth scroll behavior (all modern browsers do).

### Images not loading
Ensure image paths are correct relative to your HTML file.

## 📝 License

This portfolio template is free to use and modify for personal and commercial projects.

## 💡 Tips for Success

1. **Keep it simple** - Minimal design is more professional
2. **Update regularly** - Add new projects and keep content fresh
3. **Use real examples** - Replace placeholder projects with your actual work
4. **Optimize images** - Use compressed images for faster loading
5. **Test on devices** - Check how it looks on phones, tablets, and desktops
6. **Keep it focused** - Focus on skills relevant to your target job

---

**Built with care for aspiring developers. Happy coding!** 🚀
