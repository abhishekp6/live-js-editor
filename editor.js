document.addEventListener('DOMContentLoaded', () => {
    const htmlInput = document.getElementById('htmlId');
    const cssInput = document.getElementById('cssId');
    const jsInput = document.getElementById('jsId');
    const output = document.getElementById('outputId');

    htmlInput.addEventListener("keyup", () => {
        console.log(htmlInput.value);
        output.innerHTML = htmlInput.value;
    });
    cssInput.addEventListener("keyup", () => {
        document.head.appendChild(document.createElement('style')).innerHTML = cssInput.value;
    });
    jsInput.addEventListener("keyup", ()=>{
        eval(jsInput.value);
    });
})