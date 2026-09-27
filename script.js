const SERVER_IP = "velofun.mcsh.io";


/* =================================
   NAVBAR
================================= */

const navbar = document.getElementById("navbar");

function updateNavbar() {

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

}

window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
);

updateNavbar();


/* =================================
   COPY IP
================================= */

const copyMessage =
    document.getElementById("copyMessage");

const copyTop =
    document.getElementById("copyTop");

const copyBottom =
    document.getElementById("copyBottom");


async function copyIP() {

    try {

        await navigator.clipboard.writeText(
            SERVER_IP
        );

        showMessage("✓ IP copied!");

    } catch (error) {

        const input =
            document.createElement("input");

        input.value = SERVER_IP;

        document.body.appendChild(input);

        input.select();

        document.execCommand("copy");

        input.remove();

        showMessage("✓ IP copied!");

    }

}


function showMessage(message) {

    copyMessage.textContent = message;

    setTimeout(() => {

        copyMessage.textContent = "";

    }, 2500);

}


if (copyTop) {
    copyTop.addEventListener(
        "click",
        copyIP
    );
}

if (copyBottom) {
    copyBottom.addEventListener(
        "click",
        copyIP
    );
}


/* =================================
   TITLE FLASH
================================= */

const title =
    document.getElementById("mainTitle");


setInterval(() => {

    if (!title) return;

    title.animate(
        [
            {
                transform: "scale(1)"
            },
            {
                transform: "scale(1.04)"
            },
            {
                transform: "scale(1)"
            }
        ],
        {
            duration: 600,
            easing: "ease-in-out"
        }
    );

}, 7000);


/* =================================
   SCROLL REVEAL
================================= */

const sections =
    document.querySelectorAll(
        "#about .card, #rules .rules-box, #join"
    );


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


sections.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    revealObserver.observe(element);

});


/* =================================
   CONSOLE MESSAGE
================================= */

console.log(
    "VELO SMP loaded successfully!"
);

console.log(
    "Server IP:",
    SERVER_IP
);
