window.onload = () => {

    let title = document.querySelector(".title");
    let textShow = document.querySelector(".textShow");
    let colorChange = document.querySelector(".colorChange");

    textShow.addEventListener("click", () => {
        title.classList.toggle("show");
        let titleToggle = document.querySelector('.show');
        if (titleToggle) {
            textShow.innerHTML = "텍스트 숨기기";
        } else {
            textShow.innerHTML = "텍스트 노출";
        }
    });
    colorChange.addEventListener("click", () => {
        colorChange.classList.toggle("change");
        let change = document.querySelector('.change');
        if (change) {
            title.style.color = 'tomato';
            colorChange.innerHTML = "색상 리셋";
        } else {
            title.style.color = '#000';
            colorChange.innerHTML = "색상 변경";
        }
    });

}


