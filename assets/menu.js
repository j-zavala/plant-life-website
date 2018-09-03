const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")

//when I click toggle tag, toggle a class on the main tag
//and if open, make toggle class say closed
//and if not, make toggle say open
toggleTag.addEventListener("click", function () {
    mainTag.classList.toggle("open");

    if (mainTag.classList.contains("open")) {
        toggleTag.innerHTML = `<img src="./images/close.svg"> Close`
    } else {
        toggleTag.innerHTML = `<img src="./images/menu.svg"> Menu`
    }


})