# Portfolio Website

A modern, responsive, and accessible portfolio website showcasing professional skills, projects, and contact information. Built with vanilla HTML, CSS, and JavaScript, this portfolio demonstrates clean code practices, accessibility standards, and responsive design principles.

## 🎯 Project Overview

This portfolio website serves as a professional showcase for Samet Dülger, a Full Stack Developer with expertise in both frontend and backend technologies. The website features a clean, modern design with smooth animations, responsive layout, and comprehensive project showcases.

## ✨ Features

### 🎨 Design & User Experience
- **Modern Design** - Clean, professional layout with attention to detail
- **Responsive Layout** - Fully responsive design that works on all devices
- **Smooth Animations** - Hover effects and transitions for enhanced UX
- **Accessibility** - WCAG compliant with proper ARIA labels and semantic HTML
- **Cross-browser Compatibility** - Works seamlessly across all modern browsers

### 📱 Navigation & Interaction
- **Sticky Navigation** - Fixed navigation bar for easy access
- **Mobile Menu** - Hamburger menu for mobile devices
- **Smooth Scrolling** - Seamless navigation between sections
- **Scroll to Top** - Convenient button to return to the top
- **Form Validation** - Client-side form validation with user feedback

### 📋 Content Sections
- **About Me** - Professional introduction and background
- **Projects** - Comprehensive showcase of development projects
- **Skills** - Detailed list of technical skills and technologies
- **Contact** - Interactive contact form with validation

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup and modern web standards
- **CSS3** - Advanced styling with Flexbox and Grid
- **Vanilla JavaScript** - Pure JavaScript for interactivity
- **Responsive Design** - Mobile-first approach

### Design Features
- **CSS Grid & Flexbox** - Modern layout systems
- **CSS Transitions** - Smooth hover animations
- **Custom Styling** - Professional color scheme and typography
- **Box Shadows** - Depth and visual hierarchy

### External Resources
- **Unsplash Images** - High-quality project screenshots
- **Google Fonts** - Professional typography
- **Favicon** - Custom website icon

## 🚀 Getting Started

### Prerequisites
- **Modern Web Browser** (Chrome, Firefox, Safari, Edge)
- **Local Web Server** (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SametDulger/portfolio-website.git
   cd portfolio-website
   ```

2. **Open the project**
   - **Option 1**: Open `index.html` directly in your browser
   - **Option 2**: Use a local web server for development

3. **Using a local server (recommended)**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Access the website**
   Navigate to `http://localhost:8000` in your browser

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file with semantic structure
├── styles.css              # Comprehensive CSS styling
├── script.js               # JavaScript functionality
├── README.md               # Project documentation
└── favicon.ico             # Website icon
```

## 🎮 How to Use

### 1. Navigation
- **Desktop**: Use the navigation bar at the top
- **Mobile**: Click the hamburger menu (☰) to access navigation
- **Smooth Scrolling**: Click any navigation link for smooth scrolling

### 2. Sections Overview
- **About Me**: Learn about the developer's background and expertise
- **Projects**: Browse through featured development projects
- **Skills**: View comprehensive list of technical skills
- **Contact**: Send a message through the contact form

### 3. Interactive Features
- **Project Cards**: Hover over project cards for animations
- **Contact Form**: Fill out and submit the contact form
- **Scroll to Top**: Click the ↑ button to return to the top

## 📊 Content Sections

### About Me
Professional introduction highlighting:
- Full Stack Development expertise
- Frontend and backend technology skills
- Focus on scalable and responsive applications
- Commitment to clean code and performance optimization

### Projects Showcase
Six featured projects including:

1. **E-Commerce Platform**
   - React, Redux Toolkit, Node.js, Express, MongoDB
   - User authentication, product management, cart functionality

2. **Task Management App**
   - MERN stack with JWT authentication
   - Real-time updates, Tailwind CSS

3. **Personal Blog CMS**
   - Next.js and Prisma
   - SEO optimized, fully responsive

4. **Portfolio Website**
   - HTML, SCSS, vanilla JavaScript
   - Responsive layout, theme toggle

5. **Weather Dashboard**
   - OpenWeatherMap API integration
   - LocalStorage for search history

6. **Secure Auth System**
   - .NET Core and JWT
   - Role-based access control

### Skills & Technologies
Comprehensive skill set including:

#### Backend Development
- C# & .NET Core / .NET 6+
- ASP.NET MVC & Web API Development
- Entity Framework & LINQ
- Python (Flask, Django)
- REST API Development

#### Frontend Development
- JavaScript, TypeScript, React, Angular
- Blazor & Razor Pages
- HTML5, CSS3, SASS/SCSS
- CSS Frameworks (Bootstrap, Tailwind CSS)

#### DevOps & Infrastructure
- Docker & Containerization
- Kubernetes (K8s) Orchestration
- CI/CD Pipelines
- Cloud Platforms (AWS, Google Cloud)

#### Database & Tools
- SQL Server & Relational Database Design
- NoSQL Databases (MongoDB, Redis)
- Git & Version Control Systems
- Monitoring & Logging Tools

## 🎨 Design Features

### Visual Design
- **Color Scheme** - Professional red (#FF0000) and neutral grays
- **Typography** - Clean, readable fonts with proper hierarchy
- **Layout** - Card-based design with consistent spacing
- **Shadows** - Subtle shadows for depth and visual interest

### Responsive Features
- **Mobile-First Design** - Optimized for mobile devices
- **Flexible Grid** - CSS Grid for project layout
- **Adaptive Navigation** - Mobile hamburger menu
- **Touch-Friendly** - Optimized for touch interactions

### Interactive Elements
- **Hover Effects** - Smooth animations on interactive elements
- **Form Validation** - Real-time form validation
- **Smooth Scrolling** - Professional navigation experience
- **Visual Feedback** - Immediate response to user actions

## 🔧 JavaScript Functionality

### Navigation Management
```javascript
// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
```

### Smooth Scrolling
```javascript
// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
```

### Form Validation
```javascript
// Contact form validation
form.addEventListener('submit', e => {
  e.preventDefault();
  
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  
  // Validation logic with user feedback
});
```

## 🌐 Browser Support

- **Chrome** 60+
- **Firefox** 55+
- **Safari** 12+
- **Edge** 79+
- **Mobile Browsers** - iOS Safari, Chrome Mobile

## 🚀 Deployment

### GitHub Pages
The website can be deployed on GitHub Pages:
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually main)
4. Access via `https://username.github.io/repository-name`

### Manual Deployment
1. Upload all files to your web server
2. Ensure `index.html` is in the root directory
3. Verify all file paths are correct
4. Test functionality across different browsers

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow HTML5 semantic standards
- Use CSS3 best practices
- Write clean, readable JavaScript
- Test on multiple browsers and devices
- Ensure accessibility compliance
- Maintain responsive design

## 🔮 Future Enhancements

### Planned Features
- **Dark Mode Toggle** - Theme switching functionality
- **Project Filtering** - Filter projects by technology or category
- **Blog Section** - Technical articles and insights
- **Resume Download** - PDF resume download option
- **Social Media Integration** - LinkedIn, GitHub links
- **Testimonials Section** - Client and colleague testimonials

### Technical Improvements
- **Progressive Web App** - PWA capabilities
- **Performance Optimization** - Image optimization and lazy loading
- **SEO Enhancement** - Meta tags and structured data
- **Analytics Integration** - Google Analytics or similar
- **Contact Form Backend** - Server-side form processing
- **Content Management** - Easy content updates

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Unsplash** - High-quality project images
- **Google Fonts** - Professional typography
- **CSS Grid & Flexbox** - Modern layout systems
- **Web Development Community** - Best practices and inspiration

## 📞 Contact

For questions, collaboration, or opportunities:
- **Portfolio**: [Portfolio Website](https://sametdulger.github.io/portfolio-website/)
- **GitHub**: [SametDulger](https://github.com/SametDulger)
- **Email**: Available through the contact form on the website

## 🌟 Key Highlights

### Professional Presentation
- Clean, modern design that reflects professional standards
- Comprehensive project showcase with detailed descriptions
- Extensive skill set covering full-stack development
- Accessible design following WCAG guidelines

### Technical Excellence
- Semantic HTML5 structure
- Modern CSS3 with Grid and Flexbox
- Vanilla JavaScript for optimal performance
- Responsive design for all devices

### User Experience
- Intuitive navigation with smooth scrolling
- Interactive elements with visual feedback
- Form validation with helpful error messages
- Mobile-optimized experience

---

**Built with ❤️ using HTML, CSS, and JavaScript**
