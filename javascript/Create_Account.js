const userName = document.querySelector(".js-username").value;
const firstName = document.querySelector(".js-firstName").value;
const lastName = document.querySelector(".js-lastName").value;
const emailAddress = document.querySelector(".js-emailAddress").value;
const password = document.querySelector(".js-password").value;
const confirmPassword = document.querySelector(".js-cPassword").value;
const createAccountBtn = document.querySelector(".js-create-account");

function disableRegisterBtn(){
  if(userName === "" || firstName === "" || lastName === "" || emailAddress === "" || password === ""
     || confirmPassword === ""){
    createAccountBtn.disabled = true;
    createAccountBtn.classList.add("disabled-button");
  }
  // else{
  //   createAccountBtn.disabled = false;
  //   createAccountBtn.classList.remove("disabled-button");
  // }
}

//Event Listeners
window.addEventListener("DOMContentLoaded",disableRegisterBtn);