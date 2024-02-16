const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')
//phần slide chuyển cảnh img
const maxNumImg = document.querySelectorAll('.sliderconten-left-top img')
let index = 0;
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
adressbtn.addEventListener("click", function () {
    document.querySelector('.adress-form').style.display = "flex";
})
adressclose.addEventListener("click", function () {
    document.querySelector('.adress-form').style.display = "none";//hiệu ứng chọn địa chỉ
})
//slide click chuyển cảnh img
rightbtn.addEventListener("click", function () {
    index = index + 1;
    if (index > maxNumImg.length - 1) {
        index = 0;
    }
    removeActive();
    document.querySelector('.sliderconten-left-top').style.right = index * 100 + "%";
    imgNumLi[index].classList.add("active");
})
leftbtn.addEventListener("click", function () {
    index = index - 1;
    if (index < 0) {
        index = maxNumImg.length-1;
    }
    removeActive();
    document.querySelector('.sliderconten-left-top').style.right = index * 100 + "%";
    imgNumLi[index].classList.add("active");
})
//---slider chuyển cảnh bottom
const imgNumLi = document.querySelectorAll('.sliderconten-left-bottom li');
imgNumLi.forEach(function (image, index){
    image.addEventListener("click", function () {
        removeActive();
        document.querySelector('.sliderconten-left-top').style.right = index * 100 + "%";
        image.classList.add("active");
    })
})
function removeActive() {
    let imgActive = document.querySelector('.active');
    imgActive.classList.remove("active");
}
//-----slider 2------ Cần chỉnh sửa lại thành hàm để tiện hơn và gon code hơn.
function sliderAuto() {
    index = index + 1;
    if (index > maxNumImg.length - 1) {
        index = 0;
    }

    removeActive();
    document.querySelector('.sliderconten-left-top').style.right = index * 100 + "%";
    imgNumLi[index].classList.add("active");
}
setInterval(sliderAuto, 4000)
//---slide produc ----
const rightbtn2 = document.querySelector('.fa-chevron-right-two')
const leftbtn2 = document.querySelector('.fa-chevron-left-two')
console.log(rightbtn);
const maxNumImg2 = document.querySelectorAll('.slider-sp-one-conten-items ')
let index2 = 0;
rightbtn2.addEventListener("click", function () {
    index2 = index2 + 1;
    if (index2 > maxNumImg2.length - 1) {
        index2 = 0;
    }
    removeActive();
    document.querySelector('.slider-sp-one-items-contener').style.right = index2 * 100 + "%";
    imgNumLi[index2].classList.add("active");
})
leftbtn2.addEventListener("click", function () {
    index2 = index2 - 1;
    if (index2 < 0) {
        index2 = maxNumImg2.length - 1;
    }
    removeActive();
    document.querySelector('.slider-sp-one-items-contener').style.right = index2 * 100 + "%";
    imgNumLi[index2].classList.add("active");
})
