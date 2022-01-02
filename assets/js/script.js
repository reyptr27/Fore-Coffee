const product = document.querySelector('.product');

document.querySelectorAll(".show").forEach(item => {
    item.addEventListener('click', event => {
        
        product.classList.remove('fadeIn');

        setTimeout(function(){
            product.classList.add('fadeIn');
        },10);
        
    })
});

function imgSlider(anything) {
    document.querySelector('.fore').src = anything;
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}