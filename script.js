// Sua Legal - JavaScript Interactivity
// ======================================

document.addEventListener('DOMContentLoaded', () => {

    // ===========================
    // Dynamic Copyright Year
    // ===========================
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ===========================
    // Active Section Highlighting
    // ===========================
    // Uses IntersectionObserver to detect which section is in the viewport
    // and highlights the corresponding nav link with an .active class.
    // Graceful degradation: if IntersectionObserver is unsupported, nav works without highlighting.

    if ('IntersectionObserver' in window) {
        const sections = document.querySelectorAll('main section');
        const navLinks = document.querySelectorAll('#nav-menu a[href^="#"]');

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;

                    navLinks.forEach((link) => {
                        link.classList.remove('active');
                    });

                    const activeLink = document.querySelector(`#nav-menu a[href="#${sectionId}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        };

        const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((section) => {
            sectionObserver.observe(section);
        });
    }

    // ===========================
    // Form Validation - DOM Integration
    // ===========================
    (function initFormValidation() {
        const form = document.querySelector('.contacto-form');
        if (!form) return;

        // Ensure validateField and validateForm are available (loaded from validation.js)
        if (typeof validateField === 'undefined' || typeof validateForm === 'undefined') return;

        /**
         * Shows an inline error message for a field.
         */
        function showError(field, message) {
            const formGroup = field.closest('.form-group');
            if (!formGroup) return;

            field.classList.add('error');
            const errorSpan = formGroup.querySelector('.error-message');
            if (errorSpan) {
                errorSpan.textContent = message;
            }
        }

        /**
         * Clears the error state for a field.
         */
        function clearError(field) {
            const formGroup = field.closest('.form-group');
            if (!formGroup) return;

            field.classList.remove('error');
            const errorSpan = formGroup.querySelector('.error-message');
            if (errorSpan) {
                errorSpan.textContent = '';
            }
        }

        // Validate on input and blur events for inline feedback
        const fields = form.querySelectorAll('input, textarea');
        fields.forEach((field) => {
            field.addEventListener('input', () => {
                const result = validateField(field.name, field.value);
                if (result.valid) {
                    clearError(field);
                } else {
                    showError(field, result.message);
                }
            });

            field.addEventListener('blur', () => {
                const result = validateField(field.name, field.value);
                if (result.valid) {
                    clearError(field);
                } else {
                    showError(field, result.message);
                }
            });
        });

        // Validate on form submit - prevent submission when invalid
        form.addEventListener('submit', (e) => {
            const formData = {};
            fields.forEach((field) => {
                formData[field.name] = field.value;
            });

            const result = validateForm(formData);

            if (!result.valid) {
                e.preventDefault();

                // Show errors for all invalid fields
                for (const fieldName in result.errors) {
                    const field = form.querySelector(`[name="${fieldName}"]`);
                    if (field) {
                        showError(field, result.errors[fieldName]);
                    }
                }

                // Clear errors for valid fields
                fields.forEach((field) => {
                    if (!result.errors[field.name]) {
                        clearError(field);
                    }
                });
            }
            // If valid, don't preventDefault - let task 4.5 handle async submission
        });
    })();

});
