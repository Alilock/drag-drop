let circles = document.querySelectorAll('.circle')

let dropcircle = document.querySelector('.dropcircle')

circles.forEach((circle) => {
    circle.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData("color", e.target.id);


    })
});
dropcircle.addEventListener("dragover", function (e) {
    e.preventDefault();
});
dropcircle.addEventListener('drop', function (e) {
    let id = e.dataTransfer.getData('color')
    console.log(id);
    dropcircle.style.backgroundColor = id;
    let rgbcolor = e.dataTransfer.getData('rgbcolor')
    if (rgbcolor) {
        dropcircle.style.backgroundColor = rgbcolor;
    }
});
let inputs = document.querySelectorAll('input')
let button = document.querySelector('button')
let generatecolor = document.querySelector('.generatecolor')
button.addEventListener('click', function (e) {
    e.preventDefault();
    generatergb();
})
generatecolor.addEventListener('dragstart', function (e) {
    e.dataTransfer.setData('rgbcolor', e.target.style.backgroundColor)
})
dropcircle.addEventListener('drop', function (e) {

})



function generatergb() {
    let color = '';
    inputs.forEach((input, i) => {

        color += input.value.toString();
        if (i < inputs.length - 1) {
            color += ','
        }

    })
    console.log(color);
    generatecolor.style.backgroundColor = `rgb(${color})`
    return `rgb(${color})`;
}