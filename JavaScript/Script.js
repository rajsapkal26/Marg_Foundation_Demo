


// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").classList.remove("navbar-hidden");
//     // document.getElementById("navbar").classList.add("transition");

//   } else {
//     document.getElementById("navbar").classList.add("navbar-hidden");
//     // document.getElementById("navbar").classList.add("transition");

   
//   }

  
//   prevScrollpos = currentScrollPos;
// }



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var navbar = document.getElementById("navbar");
  var space = document.getElementById("space");

  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove("navbar-hidden");
    space.classList.remove("change_space");
    navbar.classList.add("sticky"); 
  } else {
    navbar.classList.add("navbar-hidden");
    space.classList.add("change_space");
    navbar.classList.add("sticky"); 
  }

  prevScrollpos = currentScrollPos;
}


