var navIcons = document.querySelectorAll("nav li");

init();

function init() {
  for (var i = 0; i < navIcons.length; i++) {

    navIcons[i].addEventListener("click", function(){

      removeSelected();
      this.classList.toggle("selected");

    });

  }
}


function removeSelected() {
  
  for (var i = 0; i < navIcons.length; i++) {
    navIcons[i].classList.remove("selected");
  }

}
