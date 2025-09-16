export function toggleNavbarBackground(){
  let navBarEl = document.querySelector(".js-main-header");
    if(window.scrollY >= 70){
      navBarEl.classList.add("coloredNavBar");
      // navBarEl.style.backgroundColor = "#333";
      // navBarEl.classList.remove("transparentNavBar");
    }else{
      navBarEl.classList.remove("coloredNavBar");
      // navBarEl.style.backgroundColor = "transparent";
      // navBarEl.classList.add("transparentNavBar");
    }
}
