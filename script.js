
/* =====================================
   TDR — ROUTE INFORMATION
===================================== */

const routes = {

    bergen: {
        title: "Bergen to Flåm",
        description:
            "Explore beautiful fjords, mountain landscapes and charming Norwegian villages.",
        price: 120,
        video: "bergen.mp4"
    },

    oslo: {
        title: "Oslo to Lillehammer",
        description:
            "Discover scenic countryside, peaceful roads and beautiful Norwegian nature.",
        price: 95,
        video: "oslo.mp4"
    },

    stavanger: {
        title: "Stavanger to Preikestolen",
        description:
            "Experience dramatic landscapes and breathtaking views along the route.",
        price: 110,
        video: "stavanger.mp4"
    },

    trondheim: {
        title: "Trondheim to Ålesund",
        description:
            "Enjoy a cycling adventure through mountains, valleys and coastal scenery.",
        price: 150,
        video: "trondheim.mp4"
    }

};


/* =====================================
   SHOW SELECTED ROUTE
===================================== */

function showRoute(routeId) {

    const route = routes[routeId];

    if (!route) return;

    const details = document.getElementById("route-details");
    const title = document.getElementById("route-title");
    const description =
        document.getElementById("route-description");
    const price = document.getElementById("route-price");
    const video = document.getElementById("route-video");

    if (!details || !title || !description || !price || !video) {
        return;
    }

    title.textContent = route.title;

    description.textContent = route.description;

    price.textContent = "From " + route.price + " EUR per person";

    video.pause();
    video.src = route.video;
    video.load();

    details.hidden = false;

    document.querySelectorAll(".route-button").forEach(button => {
        button.classList.toggle(
            "selected",
            button.dataset.route === routeId
        );
    });

    details.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =====================================
   ROUTE BUTTONS
===================================== */

document.querySelectorAll(".route-button").forEach(button => {

    button.addEventListener("click", function () {

        showRoute(this.dataset.route);

    });

});


/* =====================================
   MOBILE NAVIGATION
===================================== */

const menuButton = document.getElementById("menu-button");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");


if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.add("active");

    });

}


if (menuClose && mobileMenu) {

    menuClose.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

    });

}


if (mobileMenu) {

    mobileMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("active");

        });

    });

}


/* =====================================
   CONTACT FORM
===================================== */

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const message = document.getElementById("contact-message");

        if (message) {

            message.textContent =
                "Thank you for your message! We will contact you soon.";

        }

        contactForm.reset();

    });

}
