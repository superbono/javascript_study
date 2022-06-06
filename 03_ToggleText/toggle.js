window.onload = () => {

    let box = document.querySelector('.box');
    let btn = document.querySelector(".toggleBtn");
    let addTitle = document.createElement('h2');

    addTitle.setAttribute("class", "title");
    box.prepend(addTitle);

    btn.addEventListener("click", () => {
        addTitle.innerHTML = "텍스트가 노출됩니다.";
    });
}