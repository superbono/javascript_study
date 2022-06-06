window.onload = () => {

    // let box = document.querySelector('.box');
    let btn = document.querySelector(".toggleBtn");
    let toggleText = document.querySelector(".title");
    // let addTitle = document.createElement('h2');

    // addTitle.setAttribute("class", "title");
    // box.prepend(addTitle);

    btn.addEventListener("click", () => {
        toggleText.classList.toggle("active");
        let activeClass = document.querySelector(".active")
        if (activeClass) {
            btn.innerHTML = "텍스트 감추기";
        } else {
            btn.innerHTML = "텍스트 보기";
        }
        // addTitle.innerHTML = "텍스트가 노출됩니다.";
        // addTitle.classList.toggle(".title");
    });
}