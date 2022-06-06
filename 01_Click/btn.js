window.onload = () => {
    let text = document.querySelector(".text_btn");
    let createView = document.createElement('p');
    createView.setAttribute('class', 'text_view');


    text.addEventListener("click", () => {
        createView.innerHTML = "텍스트가 정상적으로 보여집니다.";
        text.appendChild(createView);
    })





}
