const items = document.querySelectorAll("img")
const words = document.querySelectorAll(".word")
const hint = document.getElementById("hint");

document.getElementById("playMusic").addEventListener("click", function () {
    const backgroundMusic = document.getElementById("backgroundMusic");
    backgroundMusic.play().catch(error => {
        console.error("Background music could not play automatically due to browser restrictions:", error);
    });
});

document.getElementById("stopMusic").addEventListener("click", function () {
    const backgroundMusic = document.getElementById("backgroundMusic");
    backgroundMusic.pause();
});


items.forEach((item, index) => {
    item.onclick = () => {
        item.style.width = item.offsetWidth + 10 + "px";
        if (index < words.length) {
            words[index].classList.add("text-decor");
        }
        setTimeout(() => {
            item.remove()
        }, 700);
    }

})

hint.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * items.length);
    items[randomIndex].classList.add("border")
    setTimeout(() => {
        items[randomIndex].classList.remove("border")
    }, 3000);
});