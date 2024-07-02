document.addEventListener('DOMContentLoaded', () => {
    const htmlInput = document.getElementById('html1');
    const cssInput = document.getElementById('css1');
    const jsInput = document.getElementById('js1');
    const output = document.getElementById('output1');
    htmlInput.addEventListener("keyup", () => {
        console.log(htmlInput.value);
        output.innerHTML = htmlInput.value;
    });
    cssInput.addEventListener("keyup", () => {
        document.head.appendChild(document.createElement('style')).innerHTML = cssInput.value;
    });
    jsInput.addEventListener("keyup", ()=>{
        document.head.appendChild(document.createElement('script')).innerHTML = jsInput;
    });
})