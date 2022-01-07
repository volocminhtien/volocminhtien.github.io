
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

//Handle top button
const myButton = $('.btn-top')
window.onscroll = function() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
};
myButton.onclick = ()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Modal
const Register = $('.header__register')
const Modal = $('.Modal')
Register.onclick = ()=>{
  Modal.style.display = 'block'
}
$('.Modal_overlay').onclick = ()=>{
  Modal.style.display = 'none'
}

//---------------------------------------Handle Form Validation
$('.exitForm').onclick =()=> Modal.style.display = 'none'
//Name
const InputName = $('#fullname')
function handleInputName(){
  const InputValue = InputName.value.trim()
  if(!InputValue || (InputName == '')){
    $('.form-message.Name').innerHTML = 'Vui lòng nhập trường này'
    InputName.classList.add('invalid')
  }
}
InputName.onblur = ()=>{
  handleInputName()
}
InputName.onkeydown = ()=>{
  $('.form-message.Name').innerHTML = ''
  InputName.classList.remove('invalid')
}
//Email
const InputEmail = $('#email')
function handleEmail(){
  const EmailValue = InputEmail.value
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!EmailValue){
    $('.form-message.Email').innerHTML = 'Vui lòng nhập trường này'
    InputEmail.classList.add('invalid')
  }else if(!EmailValue.match(mailFormat)){
    $('.form-message.Email').innerHTML = 'Vui lòng nhập đúng cú pháp Email'
    InputEmail.classList.add('invalid')
  }
}
InputEmail.onblur = ()=>{
  handleEmail()
}
InputEmail.onkeydown = ()=>{
  $('.form-message.Email').innerHTML = ''
  InputEmail.classList.remove('invalid')
}

//Password
const Password = $('#password')
function handlePassWord(){
  const PasswordValue = Password.value
  if(!PasswordValue){
    $('.form-message.Password').innerHTML = 'Vui lòng nhập trường này'
    Password.classList.add('invalid')
  }else if(PasswordValue.length < 6){
    $('.form-message.Password').innerHTML = 'Độ dài tối thiểu 6 ký tự'
    Password.classList.add('invalid')
  }
}
Password.onblur = ()=>{
  handlePassWord()
}
Password.onkeydown = ()=>{
  $('.form-message.Password').innerHTML = ''
  Password.classList.remove('invalid')
}

//Password-confirm
const PasswordConfirm = $('#password-confirm')
function handleConfirm(){
  const ConfirmValue = PasswordConfirm.value
  if(ConfirmValue !== (Password.value)){
    $('.form-message.Confirm').innerHTML = 'Mật khẩu nhập lại chưa đúng'
    PasswordConfirm.classList.add('invalid')
  }
}
PasswordConfirm.onblur = ()=>{
    handleConfirm()
}
PasswordConfirm.onkeydown = ()=>{
  $('.form-message.Confirm').innerHTML = ''
  PasswordConfirm.classList.remove('invalid')
}

//handle Submit
const Submit = $('.form-submit')
const Inputs = $$('.form-control')
const divArr = Array.from(Inputs);



Submit.onclick = function(){
      handleInputName()
      handleEmail()
      handlePassWord()
      handleConfirm()
}

//handle Navbar
const OptionMenu = $('.header__option')

OptionMenu.onclick = ()=>{
  $('.nav').style.display = 'block'
  $('.nav__mobile').style.transform = 'translateX(0%)'
}
$('.exits').onclick = ()=>{
  $('.nav').style.display = 'none'
}
$('.overlay').onclick = ()=>{
  $('.nav').style.display = 'none'
}
//Navbar log in
$('#nav-logIn').onclick = ()=>{
  Modal.style.display = 'block'
  $('.nav').style.display = 'none'
}
//Filter Price
function showVal(newVal){
  $(".price1").innerHTML= `${newVal}K`;
}
function showVal2(newVal){
  $(".price2").innerHTML= ` ${newVal}K `;
}
window.onload = function(){
  slideOne();
  slideTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
  fillColor();
}
function slideTwo(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
  fillColor();
}
function fillColor(){
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}



