const cardAccordionContainer = document.querySelector(".tips_features_container");

function hide_show_accordion(event){
  const target = event.target;
  if(!target.classList.contains("js-toggle-button")) return;
  const targetParentSibling = target.parentElement.parentElement.nextElementSibling;
  const isHidden = targetParentSibling.classList.contains("hide-container");
  if(isHidden){
    target.classList.remove("fa-plus");
    target.classList.add("fa-minus");
    targetParentSibling.classList.add("unhide-container");
    targetParentSibling.classList.remove("hide-container");
  }else{
    target.classList.add("fa-plus");
    target.classList.remove("fa-minus");
    targetParentSibling.classList.remove("unhide-container");
    targetParentSibling.classList.add("hide-container");
  }
}

cardAccordionContainer.addEventListener("click",hide_show_accordion);