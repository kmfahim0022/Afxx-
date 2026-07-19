// ===== Afxx Tech App =====

// Welcome
window.onload = function () {
    console.log("Afxx Tech Loaded");
};

// Buy Premium Button
const premiumBtn = document.getElementById("premiumBtn");

if (premiumBtn) {
    premiumBtn.addEventListener("click", function () {
        alert("Premium Page Coming Soon!");
    });
}

// Course Button
const courseBtn = document.getElementById("courseBtn");

if (courseBtn) {
    courseBtn.addEventListener("click", function () {
        alert("Course Page Coming Soon!");
    });
}

// Login Button
const loginBtn = document.querySelector(".login-btn");

if (loginBtn) {
    loginBtn.addEventListener("click", function () {
        alert("Login System Coming Soon!");
    });
}

// Smooth Fade Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade").forEach((el) => {
    observer.observe(el);
});

// Ripple Effect
document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const size = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = size + "px";
        circle.style.height = size + "px";

        circle.style.left = (e.offsetX - size / 2) + "px";
        circle.style.top = (e.offsetY - size / 2) + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 600);

    });
});


