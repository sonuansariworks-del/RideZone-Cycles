/* =========================================================
                    DOM LOADED
========================================================= */
document.addEventListener('DOMContentLoaded', () => {

    /* =====================================================
                        LOADING ANIMATION
    ===================================================== */
    window.addEventListener('load', () => {

        document.body.classList.add('loaded');

    });

    /* =====================================================
                        PRODUCT CARD HOVER
    ===================================================== */
    const productCards =
    document.querySelectorAll('.product-card');

    productCards.forEach((card) => {

        card.addEventListener('mouseenter', () => {

            card.style.transition =
            '0.4s ease';

        });

    });

    /* =====================================================
                        BUTTON RIPPLE EFFECT
    ===================================================== */
    const buttons =
    document.querySelectorAll('.book-btn');

    buttons.forEach((button) => {

        button.addEventListener('click', function (e) {

            const ripple =
            document.createElement('span');

            ripple.classList.add('ripple');

            const rect =
            button.getBoundingClientRect();

            ripple.style.left =
            `${e.clientX - rect.left}px`;

            ripple.style.top =
            `${e.clientY - rect.top}px`;

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 700);

        });

    });

    /* =====================================================
                        SCROLL REVEAL
    ===================================================== */
    const revealElements =
    document.querySelectorAll(
        '.product-card'
    );

    const revealOnScroll = () => {

        const triggerBottom =
        window.innerHeight * 0.88;

        revealElements.forEach((element) => {

            const elementTop =
            element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {

                element.classList.add('active');

            }

        });

    };

    window.addEventListener(
        'scroll',
        revealOnScroll
    );

    revealOnScroll();

    /* =====================================================
                        IMAGE PARALLAX EFFECT
    ===================================================== */
    productCards.forEach((card) => {

        const image =
        card.querySelector('img');

        card.addEventListener('mousemove', (e) => {

            const rect =
            card.getBoundingClientRect();

            const x =
            e.clientX - rect.left;

            const y =
            e.clientY - rect.top;

            const moveX =
            (x / rect.width - 0.5) * 10;

            const moveY =
            (y / rect.height - 0.5) * 10;

            image.style.transform =
            `scale(1.08)
            translate(${moveX}px,
            ${moveY}px)`;

        });

        card.addEventListener('mouseleave', () => {

            image.style.transform =
            'scale(1) translate(0,0)';

        });

    });

    /* =====================================================
                        NAVBAR SHADOW
    ===================================================== */
    const navbar =
    document.querySelector('.page-navbar');

    window.addEventListener('scroll', () => {

        if (window.scrollY > 50) {

            navbar.style.boxShadow =
            '0 10px 30px rgba(0,0,0,0.4)';

            navbar.style.background =
            'rgba(10,10,10,0.92)';

        }

        else {

            navbar.style.boxShadow =
            'none';

            navbar.style.background =
            'rgba(10,10,10,0.85)';

        }

    });

    /* =====================================================
                        AUTO GLOW EFFECT
    ===================================================== */
    setInterval(() => {

        productCards.forEach((card, index) => {

            setTimeout(() => {

                card.classList.add('glow');

                setTimeout(() => {

                    card.classList.remove('glow');

                }, 1200);

            }, index * 300);

        });

    }, 7000);

    /* =====================================================
                        FLOATING ANIMATION
    ===================================================== */
    productCards.forEach((card, index) => {

        card.style.animationDelay =
        `${index * 0.08}s`;

    });

});

/* =========================================================
                    RIPPLE STYLE
========================================================= */
const style =
document.createElement('style');

style.innerHTML = `

/* =========================================
                RIPPLE EFFECT
========================================= */
.book-btn{
    position: relative;
    overflow: hidden;
}

.ripple{
    position: absolute;

    width: 20px;
    height: 20px;

    background:
    rgba(255,255,255,0.5);

    border-radius: 50%;

    transform: scale(0);

    animation:
    rippleEffect 0.7s linear;

    pointer-events: none;
}

@keyframes rippleEffect{

    to{
        transform: scale(18);

        opacity: 0;
    }
}

/* =========================================
                SCROLL REVEAL
========================================= */
.product-card{
    opacity: 0;

    transform:
    translateY(60px);

    transition:
    0.8s ease;
}

.product-card.active{
    opacity: 1;

    transform:
    translateY(0);
}

/* =========================================
                GLOW EFFECT
========================================= */
.product-card.glow{
    box-shadow:
    0 0 30px rgba(255,0,0,0.25),
    0 0 60px rgba(255,0,0,0.12);
}

/* =========================================
                LOADING EFFECT
========================================= */
body{
    opacity: 0;

    transition:
    opacity 0.8s ease;
}

body.loaded{
    opacity: 1;
}

`;

document.head.appendChild(style);
