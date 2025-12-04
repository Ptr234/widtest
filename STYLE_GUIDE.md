# Women in Design Uganda - Style Guide

## 1. Design System

### Brand Identity

#### Primary Colors
```css
/* Sage Green - Primary Brand Color */
#a8c4b5   /* Main accent, buttons, highlights */
#95b29f   /* Darker hover state */
#c5d9cc   /* Lighter shade for backgrounds */

/* Dark Green - Text & Anchors */
#2d3e36   /* Primary text color */
#3a4e44   /* Darker shade for emphasis */

/* Neutrals */
#f5f5f0   /* Light background */
#e8ede8   /* Medium gray background */
#d0d0c8   /* Subtle divider */
#7a8a82   /* Secondary text */
#555     /* Body text */
```

#### Color Usage
```css
/* Backgrounds */
Body Background: #ffffff (white)
Section Light: #f5f5f0
Section Gray: #e8ede8
Section Dark: #4a5e54

/* Text */
Primary Text: #2d3e36
Secondary Text: #7a8a82
Tertiary Text: #555

/* Interactive */
Primary Button: #a8c4b5
Button Hover: #95b29f
Link Hover: #a8c4b5

/* States */
Error: #d32f2f
Success: #4caf50
Warning: #ff9800
Info: #2196f3
```

### Typography

#### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
             'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 
             'Helvetica Neue', sans-serif;
```

#### Type Scale
```css
/* Headings */
h1  { font-size: 4.5rem; font-weight: 800; line-height: 1.1; }   /* Hero title */
h2  { font-size: 3.5rem; font-weight: 800; line-height: 1.2; }   /* Section title */
h3  { font-size: 1.6rem; font-weight: 700; line-height: 1.3; }   /* Card title */
h4  { font-size: 1.4rem; font-weight: 600; line-height: 1.3; }   /* Subsection */

/* Body */
p   { font-size: 1rem;    font-weight: 400; line-height: 1.6; }  /* Default */
.small { font-size: 0.9rem; font-weight: 400; line-height: 1.5; } /* Small text */
.label { font-size: 0.85rem; font-weight: 600; line-height: 1.4; } /* Label */
```

#### Line Heights
```css
Headings:     1.1 - 1.3  (tighter)
Body Text:    1.6        (readable)
List Items:   1.8        (spacious)
Form Labels:  1.4        (medium)
```

#### Letter Spacing
```css
Normal Text:     0px
Headings:       -1px to -0.5px (tighter)
Labels:          1px to 2px (wider)
All Caps:        2px (wider for readability)
```

### Spacing Scale

```css
xs  = 0.25rem  (4px)
sm  = 0.5rem   (8px)
md  = 1rem     (16px)
lg  = 2rem     (32px)
xl  = 4rem     (64px)
2xl = 6rem     (96px)

/* Common Padding */
Button:        0.7rem 2rem
Card:          2rem
Section:       6rem 4%
Mobile:        1.5rem 3%
```

### Shadows

```css
/* Shadow System */
Subtle:   0 4px 15px rgba(0,0,0,0.08)
Medium:   0 8px 20px rgba(0,0,0,0.12)
Strong:   0 15px 40px rgba(0,0,0,0.15)
Brand:    0 4px 15px rgba(168, 196, 181, 0.3)

/* Usage */
Cards:           Subtle (hover: Medium)
Modals:          Strong
Buttons:         Brand (on hover)
Subtle Elements: Subtle
```

### Border Radius

```css
xs  = 2px   (subtle, forms)
sm  = 8px   (buttons)
md  = 15px  (cards)
lg  = 25px  (large cards)
full = 50px (circular, badges)
```

---

## 2. Component Styles

### Buttons

#### Primary Button
```html
<a href="#" class="btn btn-primary">Click Me</a>
```
```css
.btn-primary {
  background: #a8c4b5;
  color: white;
  border: 2px solid #a8c4b5;
  padding: 0.7rem 2rem;
  border-radius: 30px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #95b29f;
  border-color: #95b29f;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(168, 196, 181, 0.3);
}
```

#### Outline Button
```html
<a href="#" class="btn btn-outline">Learn More</a>
```
```css
.btn-outline {
  background: transparent;
  border: 2px solid #a8c4b5;
  color: #2d3e36;
  padding: 0.7rem 2rem;
  border-radius: 30px;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: #a8c4b5;
  color: white;
}
```

### Card Component

```html
<div class="card">
  <img class="card-image" src="image.jpg" alt="Description">
  <div class="card-content">
    <h3>Card Title</h3>
    <p>Card description text.</p>
  </div>
</div>
```

```css
.card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.card-image {
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .card-image {
  transform: scale(1.05);
}
```

### Form Components

#### Text Input
```html
<div class="form-group">
  <label for="name">Full Name</label>
  <input type="text" id="name" required>
</div>
```

```css
.form-group input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0d8;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #a8c4b5;
  box-shadow: 0 0 0 3px rgba(168, 196, 181, 0.1);
}
```

#### Checkbox
```html
<div class="form-group checkbox">
  <input type="checkbox" id="agree">
  <label for="agree">I agree to terms</label>
</div>
```

```css
.form-group.checkbox {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.form-group.checkbox input {
  width: 20px;
  height: 20px;
  accent-color: #a8c4b5;
}
```

### Navigation Components

#### Primary Navigation
```html
<nav role="navigation" aria-label="Main navigation">
  <div class="nav-links">
    <a href="#" class="active">HOME</a>
    <a href="#">ABOUT</a>
  </div>
</nav>
```

```css
.nav-links a {
  text-decoration: none;
  color: #2d3e36;
  font-weight: 600;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #a8c4b5;
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}
```

---

## 3. Layout System

### Container Sizes
```css
max-width: 1400px  /* Main container */
max-width: 1200px  /* Wide content */
max-width: 900px   /* Standard content */
max-width: 600px   /* Narrow content (forms) */
max-width: 500px   /* Very narrow (forms) */
```

### Grid Systems
```css
/* Main Content Grid */
grid-template-columns: repeat(4, 1fr);  /* Desktop */
grid-template-columns: repeat(2, 1fr);  /* Tablet */
grid-template-columns: 1fr;             /* Mobile */
gap: 2rem;                              /* Standard gap */
```

### Responsive Breakpoints
```css
/* Desktop First */
320px   - Small phones
375px   - Regular phones
414px   - Large phones
768px   - Tablets
1024px  - Small desktop
1200px  - Medium desktop
1440px  - Large desktop
1920px  - Extra large
```

---

## 4. Animation & Transitions

### Transition Timing
```css
/* Standard transitions */
transition: all 0.3s ease;

/* Fast interactions */
transition: color 0.2s ease;

/* Slow animations */
transition: opacity 0.5s ease;
```

### Common Animations
```css
/* Hover lift effect */
transform: translateY(-2px);

/* Image zoom */
transform: scale(1.05);

/* Fade in */
opacity: 0 → 1;

/* Slide in */
transform: translateX(0);

/* Rotate (for hamburger) */
transform: rotate(45deg);
```

---

## 5. Accessibility Standards

### Color Contrast
```
WCAG AA (minimum):
  4.5:1   for normal text
  3:1     for large text (18pt+)
  3:1     for UI components

WCAG AAA (enhanced):
  7:1     for normal text
  4.5:1   for large text
```

### Focus States
```css
:focus-visible {
  outline: 3px solid #a8c4b5;
  outline-offset: 2px;
}
```

### ARIA Attributes
```html
<!-- Navigation toggle -->
<button aria-expanded="false" aria-controls="menu">Menu</button>

<!-- Form error -->
<input aria-describedby="error-msg">
<span id="error-msg" role="alert">Error text</span>

<!-- Current page -->
<a href="#" aria-current="page">Home</a>
```

---

## 6. Mobile Guidelines

### Touch Targets
```css
/* Minimum size: 44x44px */
button, a, .clickable {
  min-height: 44px;
  min-width: 44px;
  padding: 1rem;
}
```

### Mobile-First Approach
```css
/* Start with mobile */
.card { width: 100%; }

/* Then enhance for larger screens */
@media (min-width: 768px) {
  .card { width: calc(50% - 1rem); }
}
```

### Viewport Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 7. Performance Best Practices

### Image Optimization
```html
<!-- Responsive images -->
<picture>
  <source srcset="small.webp" media="(max-width: 600px)">
  <source srcset="large.webp" media="(min-width: 601px)">
  <img src="fallback.jpg" alt="Description">
</picture>

<!-- Lazy loading -->
<img src="image.jpg" alt="Description" loading="lazy">
```

### CSS Organization
```css
/* Order: Layout → Typography → Colors → Interactions */

/* Layout (Grid, Flexbox, Positioning) */
display: grid;
grid-template-columns: repeat(4, 1fr);

/* Typography */
font-size: 1rem;
font-weight: 600;
line-height: 1.6;

/* Colors */
color: #2d3e36;
background: white;

/* Interactions */
transition: all 0.3s ease;
transform: translateY(-2px);
```

### JavaScript Optimization
```javascript
// Error handling
try {
  doSomething();
} catch (error) {
  console.error('Error:', error);
}

// Null checks
if (!element) return;

// Debouncing
let timeout;
window.addEventListener('scroll', () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    updateUI();
  }, 100);
});
```

---

## 8. Code Examples

### Responsive Card Component
```html
<div class="card">
  <img class="card-image" 
       src="image.jpg" 
       alt="Descriptive text"
       loading="lazy"
       decoding="async">
  <div class="card-content">
    <h3>Card Title</h3>
    <p>Card description</p>
    <a href="#" class="btn btn-primary">Learn More</a>
  </div>
</div>
```

### Accessible Form
```html
<form method="POST" action="/submit" aria-label="Contact form">
  <div class="form-group">
    <label for="email">Email</label>
    <input 
      type="email" 
      id="email" 
      name="email"
      required
      aria-describedby="email-error"
      autocomplete="email">
    <span id="email-error" class="form-error" role="alert"></span>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

### Mobile Navigation
```html
<nav role="navigation" aria-label="Main navigation">
  <button class="hamburger" 
          aria-label="Toggle menu" 
          aria-expanded="false" 
          aria-controls="nav-links">
    <span></span><span></span><span></span>
  </button>
  
  <div class="nav-links" id="nav-links">
    <a href="#">Home</a>
    <a href="#">About</a>
  </div>
</nav>
```

---

## 9. Do's and Don'ts

### Do's ✅
- ✅ Use semantic HTML tags
- ✅ Include descriptive alt text
- ✅ Test with keyboard navigation
- ✅ Maintain consistent spacing
- ✅ Use mobile-first approach
- ✅ Optimize images
- ✅ Test color contrast
- ✅ Document code changes

### Don'ts ❌
- ❌ Don't use inline styles
- ❌ Don't forget alt text
- ❌ Don't create color-only indicators
- ❌ Don't use auto-playing videos
- ❌ Don't add visual clutter
- ❌ Don't ignore loading states
- ❌ Don't remove focus indicators
- ❌ Don't make assumptions about devices

---

## 10. Maintenance & Updates

### Regular Checks
- Review design consistency quarterly
- Update component documentation
- Monitor browser compatibility
- Update accessibility standards

### Version Control
- Document all style changes
- Use meaningful commit messages
- Keep changelog updated
- Tag major releases

---

## Resources & References

### Design Tools
- Figma: https://figma.com/
- Adobe XD: https://www.adobe.com/products/xd
- Sketch: https://www.sketch.com/

### Accessibility
- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- A11y Project: https://www.a11yproject.com/
- axe DevTools: https://www.deque.com/axe/devtools/

### Performance
- Web.dev: https://web.dev/
- Lighthouse: https://developers.google.com/web/tools/lighthouse
- WebPageTest: https://www.webpagetest.org/

### Typography
- Google Fonts: https://fonts.google.com/
- Font Pair: https://fontpair.co/
- Typescale: https://typescale.com/

---

## Contact & Questions

For questions about this style guide, contact:
- Design Lead: [Contact]
- Frontend Lead: [Contact]

Last Updated: December 1, 2025
Version: 1.0

