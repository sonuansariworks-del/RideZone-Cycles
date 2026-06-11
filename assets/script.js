/* =========================================================
                RIDEZONE PREMIUM JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
                        LOADER
    ========================================================= */
    const loader =
        document.querySelector(".loader");

    window.addEventListener("load", () => {

        if (loader) {

            setTimeout(() => {

                loader.style.opacity = "0";
                loader.style.visibility = "hidden";

                setTimeout(() => {
                    loader.remove();
                }, 600);

            }, 1200);

        }

    });

    /* =========================================================
                    MOBILE MENU
    ========================================================= */
    const menuBtn =
        document.querySelector(".menu-btn");

    const nav =
        document.querySelector(".nav");

    const navLinks =
        document.querySelectorAll(".nav a");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("active");

            const icon =
                menuBtn.querySelector("i");

            if (nav.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

                document.body.style.overflow = "hidden";

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

                document.body.style.overflow = "auto";
            }

        });

    }

    /* =========================================================
                    CLOSE MOBILE MENU
    ========================================================= */
    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            if (nav) {

                nav.classList.remove("active");

                document.body.style.overflow = "auto";

                const icon =
                    menuBtn.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });

    /* =========================================================
                    SMOOTH SCROLL
    ========================================================= */
    document.querySelectorAll("a[href^='#']")
        .forEach((anchor) => {

            anchor.addEventListener("click", function (e) {

                const targetId =
                    this.getAttribute("href");

                if (targetId === "#") return;

                const target =
                    document.querySelector(targetId);

                if (target) {

                    e.preventDefault();

                    window.scrollTo({

                        top:
                            target.offsetTop - 80,

                        behavior:
                            "smooth"

                    });

                }

            });

        });

    /* =========================================================
                    HEADER SCROLL EFFECT
    ========================================================= */
    const header =
        document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 80) {

            header.style.background =
                "rgba(0,0,0,0.92)";

            header.style.backdropFilter =
                "blur(18px)";

            header.style.boxShadow =
                "0 10px 40px rgba(255,0,0,0.15)";

            header.style.borderBottom =
                "1px solid rgba(255,0,0,0.15)";

        } else {

            header.style.background =
                "rgba(0,0,0,0.65)";

            header.style.boxShadow =
                "none";

        }

    });

    /* =========================================================
                    ACTIVE NAVIGATION
    ========================================================= */
    const sections =
        document.querySelectorAll("section");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 200;

            const sectionHeight =
                section.clientHeight;

            if (

                scrollY >= sectionTop &&

                scrollY <
                sectionTop + sectionHeight

            ) {

                current =
                    section.getAttribute("id");

            }

        });

        navLinks.forEach((link) => {

            link.classList.remove(
                "active-link");

            if (

                link.getAttribute("href")
                === `#${current}`

            ) {

                link.classList.add(
                    "active-link");

            }

        });

    });

    /* =========================================================
                    SCROLL REVEAL
    ========================================================= */
    const revealItems =
        document.querySelectorAll(

            ".hero-content, .hero-image, .about-image, .about-content, .category-card, .product-card, .service-card, .review-card, .gallery-grid img, .contact-info, .contact-form, .stat-box"

        );

    const revealOnScroll = () => {

        const triggerBottom =
            window.innerHeight - 100;

        revealItems.forEach((item, index) => {

            const itemTop =
                item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {

                item.style.opacity = "1";

                item.style.transform =
                    "translateY(0)";

            }

        });

    };

    revealItems.forEach((item, index) => {

        item.style.opacity = "0";

        item.style.transform =
            "translateY(60px)";

        item.style.transition =
            `all 0.8s ease ${index * 0.05}s`;

    });

    window.addEventListener(
        "scroll",
        revealOnScroll
    );

    revealOnScroll();

    /* =========================================================
                    HERO PARALLAX
    ========================================================= */
    const heroImage =
        document.querySelector(".hero-image img");

    if (heroImage && window.innerWidth > 900) {

        window.addEventListener(
            "mousemove",
            (e) => {

                const x =
                    (window.innerWidth - e.pageX * 2)
                    / 90;

                const y =
                    (window.innerHeight - e.pageY * 2)
                    / 90;

                heroImage.style.transform =
                    `translate(${x}px, ${y}px)`;

            });

    }

    /* =========================================================
                    PREMIUM NOTIFICATION
    ========================================================= */
    function showNotification(message) {

        const notification =
            document.createElement("div");

        notification.className =
            "notification";

        notification.innerHTML =
            `<p>${message}</p>`;

        document.body.appendChild(
            notification
        );

        setTimeout(() => {

            notification.classList.add(
                "show"
            );

        }, 100);

        setTimeout(() => {

            notification.classList.remove(
                "show"
            );

            setTimeout(() => {

                notification.remove();

            }, 500);

        }, 2600);

    }

    /* =========================================================
                    CONTACT FORM
    ========================================================= */
    const form =
        document.querySelector(
            "#whatsappForm"
        );

    if (form) {

        form.addEventListener(
            "submit",
            (e) => {

                e.preventDefault();

                const name =
                    document.querySelector("#name")
                        ?.value.trim();

                const phone =
                    document.querySelector("#phone")
                        ?.value.trim();
                const address =
                    document.querySelector("#address")
                        ?.value.trim();

                const message =
                    document.querySelector("#message")
                        ?.value.trim();

                if (name === "" || phone === "") {

                    showNotification(
                        "Please Fill All Required Fields"
                    );

                    return;
                }

                const whatsappMessage =

                    `RideZone Cycles - New Customer Enquiry!%0A%0A` +

                    `Name : ${name}%0A` +

                    `Phone : ${phone}%0A` +

                    `Address : ${address}%0A` +

                    `Message : ${message}`;

                const whatsappURL =

                    `https://wa.me/919170433032?text=${whatsappMessage}`;

                window.open(
                    whatsappURL,
                    "_blank"
                );
                form.reset();

                showNotification(
                    "Redirecting To WhatsApp..."
                );

            });

    }

    /* =========================================================
                    BACK TO TOP BUTTON
    ========================================================= */
    const backToTop =
        document.createElement("button");

    backToTop.className =
        "back-to-top";

    backToTop.innerHTML =
        `<i class="fa-solid fa-arrow-up"></i>`;

    document.body.appendChild(
        backToTop
    );

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                backToTop.classList.add(
                    "show-top"
                );

            } else {

                backToTop.classList.remove(
                    "show-top"
                );

            }

        });

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior:
                    "smooth"

            });

        });

    /* =========================================================
                    SCROLL PROGRESS
    ========================================================= */
    const progressBar =
        document.createElement("div");

    progressBar.className =
        "scroll-progress";

    document.body.appendChild(
        progressBar
    );

    window.addEventListener(
        "scroll",
        () => {

            const totalHeight =

                document.body.scrollHeight -

                window.innerHeight;

            const progress =

                (window.scrollY / totalHeight)

                * 100;

            progressBar.style.width =
                `${progress}%`;

        });

    /* =========================================================
                    CARD HOVER EFFECT
    ========================================================= */
    const hoverCards =
        document.querySelectorAll(

            ".category-card, .product-card, .service-card"

        );

    hoverCards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (e) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    e.clientX - rect.left;

                const y =
                    e.clientY - rect.top;

                card.style.background =

                    `radial-gradient(circle at ${x}px ${y}px,

        rgba(255,0,0,0.18),

        rgba(255,255,255,0.03))`;

            });

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.background =
                    "rgba(255,255,255,0.03)";

            });

    });

    /* =========================================================
                    GALLERY EFFECT
    ========================================================= */
    const galleryImages =
        document.querySelectorAll(
            ".gallery-grid img"
        );

    galleryImages.forEach((image) => {

        image.addEventListener(
            "mouseenter",
            () => {

                image.style.transform =
                    "scale(1.05)";

            });

        image.addEventListener(
            "mouseleave",
            () => {

                image.style.transform =
                    "scale(1)";

            });

    });

    /* =========================================================
                    FLOAT BUTTONS
    ========================================================= */
    const floatButtons =
        document.querySelectorAll(

            ".whatsapp-float, .call-float"

        );

    floatButtons.forEach((btn) => {

        btn.addEventListener(
            "mouseenter",
            () => {

                btn.style.transform =
                    "translateY(-8px) scale(1.08)";

            });

        btn.addEventListener(
            "mouseleave",
            () => {

                btn.style.transform =
                    "translateY(0) scale(1)";

            });

    });

    /* =========================================================
                    DYNAMIC YEAR
    ========================================================= */
    const copyright =
        document.querySelector(
            ".copyright p"
        );

    if (copyright) {

        const year =
            new Date().getFullYear();

        copyright.innerHTML =

            `© ${year} RideZone Cycles. All Rights Reserved.`;

    }

    /* =========================================================
                    PREVENT EMPTY LINKS
    ========================================================= */
    document.querySelectorAll(
        "a[href='#']"
    ).forEach((link) => {

        link.addEventListener(
            "click",
            (e) => {

                e.preventDefault();

                showNotification(
                    "Link Coming Soon"
                );

            });

    });

    /* =========================================================
                    PREMIUM CURSOR EFFECT
    ========================================================= */
    const cursor =
        document.createElement("div");

    cursor.className =
        "custom-cursor";

    document.body.appendChild(cursor);

    window.addEventListener(
        "mousemove",
        (e) => {

            cursor.style.left =
                e.clientX + "px";

            cursor.style.top =
                e.clientY + "px";

        });

    /* =========================================================
                    DYNAMIC STYLES
    ========================================================= */
    const dynamicStyles =
        document.createElement("style");

    dynamicStyles.innerHTML = `

.notification{

    position: fixed;

    top: 25px;
    right: 25px;

    background:
    rgba(0,0,0,0.75);

    backdrop-filter: blur(18px);

    border:
    1px solid rgba(255,0,0,0.2);

    color: #ffffff;

    padding: 16px 24px;

    border-radius: 14px;

    opacity: 0;

    transform:
    translateY(-20px);

    transition: 0.4s ease;

    z-index: 99999;

    box-shadow:
    0 10px 35px rgba(255,0,0,0.15);
}

.notification.show{

    opacity: 1;

    transform:
    translateY(0);
}

.back-to-top{

    position: fixed;

    bottom: 25px;
    left: 25px;

    width: 58px;
    height: 58px;

    border-radius: 50%;

    border: none;

    background:
    rgba(255,0,0,0.12);

    color: #ffffff;

    font-size: 1.2rem;

    backdrop-filter: blur(18px);

    border:
    1px solid rgba(255,0,0,0.15);

    cursor: pointer;

    opacity: 0;
    visibility: hidden;

    transition: 0.4s ease;

    z-index: 999;
}

.back-to-top.show-top{

    opacity: 1;

    visibility: visible;
}

.back-to-top:hover{

    transform:
    translateY(-6px);

    background: #ff0000;
}

.scroll-progress{

    position: fixed;

    top: 0;
    left: 0;

    height: 4px;

    width: 0%;

    background:
    linear-gradient(
    to right,
    #ff0000,
    #ffffff);

    z-index: 99999;

    box-shadow:
    0 0 15px rgba(255,0,0,0.8);
}

.custom-cursor{

    position: fixed;

    width: 18px;
    height: 18px;

    border-radius: 50%;

    background:
    rgba(255,0,0,0.75);

    pointer-events: none;

    transform:
    translate(-50%,-50%);

    z-index: 999999;

    filter: blur(1px);

    box-shadow:
    0 0 20px rgba(255,0,0,0.9);
}

@media(max-width:768px){

    .custom-cursor{
        display: none;
    }

    .notification{

        width: calc(100% - 40px);

        right: 20px;
        left: 20px;
    }

}

`;

    document.head.appendChild(
        dynamicStyles
    );

    /* =========================================================
                    CONSOLE MESSAGE
    ========================================================= */
    console.log(`

==========================================
        RIDEZONE CYCLES
 Premium Business Website
 Developed By Sonu Ansari
==========================================

`);

});
