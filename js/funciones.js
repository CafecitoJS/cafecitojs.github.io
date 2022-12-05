/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header-menubar") {
      x.className += " responsive";
    } else {
      x.className = "header-menubar";
    }
  }
  

  window.addEventListener('load', () => {
    const contenedorLoader =  document.querySelector('.contenedor-loader')
    contenedorLoader.style.opacity = 0;
    contenedorLoader.style.visibility = 'hidden'
})