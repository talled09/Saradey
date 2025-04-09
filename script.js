// Toggle del menú móvil
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('nav ul');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scroll para los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            navMenu.classList.remove('active');
        }
    });
});

// Validación del formulario de contacto
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            product: document.getElementById('product').value.trim(),
            message: document.getElementById('message').value.trim()
        };
        
        // Validación mejorada
        const errors = [];
        if (!formData.name) errors.push('El nombre es requerido');
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.push('Ingrese un email válido');
        }
        if (!formData.phone || !/^\d{9}$/.test(formData.phone)) {
            errors.push('Ingrese un número de teléfono válido (9 dígitos)');
        }
        if (!formData.product) errors.push('Seleccione un producto');
        if (!formData.message) errors.push('El mensaje es requerido');
        
        if (errors.length > 0) {
            alert('Por favor corrija los siguientes errores:\n' + errors.join('\n'));
            return;
        }
        
        // Simulación de envío del formulario
        alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
}

// Gestión de testimonios
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

const showTestimonial = (index) => {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
};

// Inicializar el primer testimonio
showTestimonial(currentTestimonial);

// Cambiar testimonio cada 5 segundos
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Animación de scroll para los elementos
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .product-card, .feature-item');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('animate');
        }
    });
};

// Ejecutar la animación al cargar y al scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Filtrado de productos
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            productCards.forEach(card => {
                const shouldShow = filter === 'all' || card.getAttribute('data-category') === filter;
                card.style.display = shouldShow ? 'block' : 'none';
                
                if (shouldShow) {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                }
            });
        });
    });
});

// Función para mostrar más productos
const viewMoreBtn = document.getElementById('viewMoreBtn');
const productCards = document.querySelectorAll('.product-card');
let visibleProducts = 4; // Número inicial de productos visibles

if (viewMoreBtn) {
    // Ocultar productos adicionales inicialmente
    productCards.forEach((card, index) => {
        if (index >= visibleProducts) {
            card.classList.add('hidden');
        }
    });

    viewMoreBtn.addEventListener('click', () => {
        // Mostrar 4 productos más
        const hiddenProducts = document.querySelectorAll('.product-card.hidden');
        const productsToShow = Array.from(hiddenProducts).slice(0, 4);
        
        productsToShow.forEach(product => {
            product.classList.remove('hidden');
            setTimeout(() => {
                product.style.opacity = '1';
                product.style.transform = 'translateY(0)';
            }, 100);
        });

        // Actualizar el contador de productos visibles
        visibleProducts += productsToShow.length;

        // Ocultar el botón si no hay más productos para mostrar
        if (visibleProducts >= productCards.length) {
            viewMoreBtn.style.display = 'none';
        }
    });
} 