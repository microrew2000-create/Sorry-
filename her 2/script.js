const buttons = document.querySelectorAll(".nav-btn");
const spreads = document.querySelectorAll(".spread");

const text = "For my Jaan";
const typingElement = document.querySelector(".typing-text");

let charIndex = 0;

function typeText() {
    if (charIndex < text.length) {
        typingElement.innerHTML += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 240);
    }
}

typeText();

let currentIndex = 0;

buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        if (index === currentIndex) return;

        buttons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        // FORWARD
        if (index > currentIndex) {

            for (let i = currentIndex; i < index; i++) {

                spreads[i].classList.add("turned");

            }

        }

        // BACKWARD
        else {

            for (let i = index; i < currentIndex; i++) {

                spreads[i].classList.remove("turned");

            }

        }

        currentIndex = index;

    });
    document.addEventListener("mousemove", (e) => {

        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        document.querySelectorAll(".collage-item")
            .forEach((item) => {

                item.style.transform =
                    `translate(${x * 20}px, ${y * 20}px)`;

            });

    });

    const memoryItems =
        document.querySelectorAll(".memory-item");

    const memoryPreview =
        document.getElementById("memoryPreview");

    memoryItems.forEach((item) => {

        item.addEventListener("click", () => {

            const newImage =
                item.getAttribute("data-image");

            memoryPreview.style.opacity = 0;

            setTimeout(() => {

                memoryPreview.src = newImage;

                memoryPreview.style.opacity = 1;

            }, 300);

        });

    });


});