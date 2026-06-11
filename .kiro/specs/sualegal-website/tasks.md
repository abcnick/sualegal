# Implementation Plan: Sualegal Website

## Overview

Sitio web estático profesional para abogado de gerencia de familia. Se implementa con HTML, CSS y JavaScript vanilla, desplegado en GitHub Pages con dominio personalizado. La implementación sigue un enfoque incremental: estructura base → estilos → interactividad → testing → configuración de despliegue.

## Tasks

- [ ] 1. Set up project structure and base HTML
  - [x] 1.1 Create index.html with semantic structure, SEO meta tags, and Open Graph
    - Create `index.html` with `<!DOCTYPE html>`, `<html lang="es">`, complete `<head>` with charset, viewport, title, meta description (max 160 chars), Open Graph tags (og:title, og:description, og:image, og:url)
    - Add Google Fonts preconnect and stylesheet links for Playfair Display and Open Sans with `font-display: swap`
    - Structure `<body>` with semantic elements: `<header>`, `<nav>`, `<main>` containing sections (`#inicio`, `#servicios`, `#acerca`, `#contacto`), and `<footer>`
    - Ensure exactly one `<h1>` element, proper heading hierarchy (h1-h6), and all sections have appropriate headings
    - _Requirements: 1.1, 1.2, 1.4, 1.5, 11.3, 11.4_

  - [x] 1.2 Build navigation markup with hamburger menu structure
    - Create sticky `<nav>` inside `<header>` with logo/firm name and navigation links (Inicio, Servicios, Acerca, Contacto)
    - Add hamburger button with `aria-expanded`, `aria-controls`, and `aria-label` attributes
    - Include navigation links as `<a href="#sectionId">` anchors
    - Ensure all interactive elements are keyboard accessible with proper tabindex
    - _Requirements: 8.1, 8.3, 8.4, 3.2, 3.3, 11.2_

  - [x] 1.3 Build Hero section markup
    - Create `<section id="inicio">` with h1 (attorney full name), subtitle (family law specialty), value proposition (max 20 words), and CTA button linking to `#contacto`
    - Set section to occupy at least 80vh
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

  - [x] 1.4 Build Services section markup
    - Create `<section id="servicios">` with h2 heading and grid container
    - Add 4-8 service items, each with icon, title (max 40 chars), and description (max 50 words)
    - _Requirements: 5.1, 5.2, 5.4_

  - [x] 1.5 Build About section markup
    - Create `<section id="acerca">` with professional photo (`<img>` min 200x200px with descriptive alt, max 125 chars), biography including university, degree, years of experience, and practice areas
    - Add highlighted specialization text visually differentiated from biography paragraph
    - _Requirements: 6.1, 6.2, 6.3, 11.1_

  - [x] 1.6 Build Contact section markup with form
    - Create `<section id="contacto">` with contact info (email mailto link, phone tel link, optional WhatsApp wa.me link, optional address)
    - Build form with fields: nombre (required, maxlength=100), email (required), teléfono (optional, maxlength=20), mensaje (required, maxlength=1000, textarea)
    - Associate each field with explicit `<label for="id">` and add appropriate `type` attributes
    - Set form `action` to Formspree endpoint and `method="POST"`
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 11.6, 11.7_

  - [x] 1.7 Build Footer markup
    - Create `<footer>` with copyright text (year placeholder for dynamic JS), email mailto link, phone tel link, and social media links (target="_blank" with accessible indication of new window)
    - Ensure contact data is consistent with Contact section
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

  - [x] 1.8 Create CNAME file and README
    - Create `CNAME` file in repository root with the full custom domain
    - Create `README.md` with project description and setup instructions
    - _Requirements: 10.2, 10.5_

- [x] 2. Implement styles with CSS custom properties and responsive design
  - [x] 2.1 Create styles.css with CSS custom properties and base reset
    - Define `:root` variables: `--color-primary: #1B3A5C`, `--color-secondary: #C9A84C`, `--color-bg-light: #FAFAFA`, `--color-bg-alt: #F0F0F0`, `--color-text: #2D2D2D`, font families, nav height, max-width
    - Add CSS reset (box-sizing, margin/padding reset) and base typography styles
    - Verify all color combinations meet WCAG 2.1 AA contrast ratios (4.5:1 normal text, 3:1 large text)
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6_

  - [x] 2.2 Style navigation component (sticky, hamburger, horizontal)
    - Style sticky nav with primary color background, fixed positioning at top
    - Implement hamburger menu styles for mobile (hidden by default, slide/fade in on toggle)
    - Style active nav link highlighting
    - Add hover, focus (outline min 2px), and active states using palette colors only
    - _Requirements: 8.1, 3.2, 3.3, 2.6, 2.7, 11.5_

  - [x] 2.3 Style Hero section
    - Set min-height to 80vh, center content vertically
    - Style CTA button with secondary color, hover/focus/active states
    - Ensure all content visible without horizontal scroll from 320px to 1920px
    - _Requirements: 4.4, 4.5, 2.2, 2.7_

  - [x] 2.4 Style Services section with responsive grid
    - Implement CSS Grid: 1 column below 768px, 2 columns 768px-1199px, 3 columns 1200px+
    - Style service cards with icons, titles, descriptions
    - _Requirements: 5.3, 3.1_

  - [x] 2.5 Style About section with two-column layout
    - Two columns (photo + text) above 768px, single column below 768px (photo on top)
    - Style professional photo and highlighted specialization
    - _Requirements: 6.4, 6.3_

  - [x] 2.6 Style Contact section and form
    - Layout contact info and form side by side on desktop, stacked on mobile
    - Style form fields, labels, error messages (complemented with text/icons, not color alone), and submit button
    - Style success and error feedback messages
    - _Requirements: 7.6, 7.7, 11.7, 2.7_

  - [x] 2.7 Style Footer
    - Apply primary color background, style links and social icons
    - Ensure proper contrast on dark background
    - _Requirements: 9.1, 9.2, 9.3, 2.1_

  - [x] 2.8 Implement responsive breakpoints and touch targets
    - Add media queries at 768px and 1200px following mobile-first approach
    - Ensure touch targets are min 44x44px below 768px
    - Center content with max-width 1920px for screens above 1920px
    - Verify no horizontal scroll, no element overlap, no content overflow from 320px to 1920px
    - _Requirements: 3.1, 3.4, 3.5, 3.6_

- [x] 3. Checkpoint - Verify HTML and CSS
  - Ensure all HTML structure is semantically correct, CSS renders properly across breakpoints, and no visual regressions. Ask the user if questions arise.

- [x] 4. Implement JavaScript interactivity
  - [x] 4.1 Implement hamburger menu toggle and close on link selection
    - Toggle `aria-expanded` attribute and menu visibility on button click and Enter/Space key
    - Close menu after a nav link is selected (on mobile)
    - Handle keyboard interaction (Escape to close)
    - _Requirements: 8.6, 3.2, 11.2_

  - [x] 4.2 Implement smooth scroll with nav offset compensation
    - Add click listeners to all `[href^="#"]` links
    - Calculate scroll position minus nav height to prevent content hidden behind sticky nav
    - Use `scrollIntoView` or `window.scrollTo` with `behavior: 'smooth'`
    - _Requirements: 8.2_

  - [x] 4.3 Implement active section highlighting with IntersectionObserver
    - Create IntersectionObserver watching all `<section>` elements
    - Update active class on corresponding nav link when section enters viewport
    - Handle graceful degradation if IntersectionObserver is unsupported
    - _Requirements: 8.5_

  - [x] 4.4 Implement form validation module (validateField, validateForm)
    - Export `validateField(field)` → `{ valid, message }` and `validateForm(form)` → `{ valid, errors }`
    - Implement validation rules: nombre (required, max 100), email (required, regex), teléfono (optional, max 20), mensaje (required, max 1000)
    - Show inline error messages next to invalid fields; clear errors on valid input
    - Prevent form submission when validation fails
    - _Requirements: 7.7, 7.6_

  - [x] 4.5 Implement async form submission to Formspree
    - On valid form submission, send POST request via `fetch` to Formspree endpoint
    - Show success message on successful response, clear form fields
    - Show error message on network failure or non-OK response with fallback contact info
    - _Requirements: 7.8, 7.9_

  - [x] 4.6 Implement dynamic copyright year in footer
    - On `DOMContentLoaded`, insert current year into footer copyright element
    - _Requirements: 9.1_

- [x] 5. Checkpoint - Verify full interactivity
  - Ensure navigation, smooth scroll, form validation, form submission, and dynamic year work correctly. Ask the user if questions arise.

- [x] 6. Set up testing framework and write property-based tests
  - [x] 6.1 Set up Vitest and fast-check testing environment
    - Initialize `package.json` with Vitest and fast-check as dev dependencies
    - Configure Vitest for the project (vitest.config.js)
    - Create test directory structure
    - _Requirements: 1.2 (no compilation framework dependencies for production)_

  - [ ]* 6.2 Write property test: Required field rejection (Property 1)
    - **Property 1: Required field rejection**
    - For any empty or whitespace-only string, `validateField` on a required field returns `{ valid: false }` with error message
    - Use `fc.string()` filtered to empty/whitespace and verify rejection
    - Min 100 iterations
    - **Validates: Requirements 7.7**

  - [ ]* 6.3 Write property test: Email format validation (Property 2)
    - **Property 2: Email format validation**
    - For any string without valid email format, `validateField` for email returns `{ valid: false }`; for valid format strings, returns `{ valid: true }`
    - Use `fc.emailAddress()` for valid cases and `fc.string()` filtered for invalid cases
    - Min 100 iterations
    - **Validates: Requirements 7.7**

  - [ ]* 6.4 Write property test: Max length enforcement (Property 3)
    - **Property 3: Max length enforcement**
    - For any string exceeding field maxLength, `validateField` returns `{ valid: false }`; within limit, this rule does not cause rejection
    - Use `fc.string({ minLength: maxLength + 1 })` for over-limit tests
    - Min 100 iterations
    - **Validates: Requirements 7.6, 7.7**

  - [ ]* 6.5 Write property test: Valid input acceptance (Property 4)
    - **Property 4: Valid input acceptance**
    - For any non-empty, non-whitespace, within-length string (and valid email format for email field), `validateField` returns `{ valid: true }`
    - Use arbitraries generating valid strings within constraints
    - Min 100 iterations
    - **Validates: Requirements 7.7**

  - [ ]* 6.6 Write unit tests for navigation and scroll behavior
    - Test hamburger toggle sets `aria-expanded` correctly
    - Test menu closes on link selection
    - Test smooth scroll offset calculation
    - Test active section detection
    - _Requirements: 8.2, 8.5, 8.6_

  - [ ]* 6.7 Write unit tests for form submission feedback
    - Test success message shown and form cleared on successful submit
    - Test error message shown on network failure
    - Test error message includes alternative contact info
    - _Requirements: 7.8, 7.9_

- [x] 7. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties of the form validation module
- Unit tests validate specific examples and edge cases
- The project uses no build tools for production; Vitest/fast-check are dev-only dependencies
- Images should be placeholder references until real assets are provided by the attorney
- Formspree endpoint URL will need to be configured with the actual account

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.8"] },
    { "id": 1, "tasks": ["1.2", "1.3", "1.4", "1.5", "1.6", "1.7"] },
    { "id": 2, "tasks": ["2.1"] },
    { "id": 3, "tasks": ["2.2", "2.3", "2.4", "2.5", "2.6", "2.7"] },
    { "id": 4, "tasks": ["2.8"] },
    { "id": 5, "tasks": ["4.1", "4.2", "4.3", "4.4", "4.5", "4.6"] },
    { "id": 6, "tasks": ["6.1"] },
    { "id": 7, "tasks": ["6.2", "6.3", "6.4", "6.5", "6.6", "6.7"] }
  ]
}
```
