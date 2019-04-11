$(window).bind('scroll', function() {
  var navHeight = $(window).height() - 500;
  if ($(window).scrollTop() > navHeight) {
    $('.nav-holder-total').addClass('fixed');
  } else {
    $('.nav-holder-total').removeClass('fixed');
  }
});
// foodFilter("all");
// function foodFilter(c) {
//   let x, i;
//   x = document.getElementsByClassName('filterDiv');
//   if( c == 'all') c = "";
//   for( i = 0; i < x.length; i++) {
//     classRemover(x[i], 'show');
//     if( x[i].className.indexOf(c) > -1)
//       classAdder(x[i], 'show');
//   }
// }
// function classRemover(element, name) {
//   //alert("yes");
//   let i, array1, array2;
//   array1 = element.className.split(" ");
//   array2 = name.split(" ");
//   for (i = 0; i < array2.length; i++) {
//     if (array1.indexOf(array2[i]) == -1) {
//       element.className += " " + array2[i];
//     }
//   }
// }
// function classAdder(element, name) {
//   //alert("no");
//   let i, array1, array2;
//   array1 = element.className.split(" ");
//   array2 = name.split(" ");
//   for (i = 0; i < array2.length; i++) {
//     while (array1.indexOf(array2[i]) > -1) {
//       array1.splice(array1.indexOf(array2[i]), 1);
//     }
//   }
//   element.className = array1.join(" ");
// }
foodFilter("all")
function foodFilter(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    classRemover(x[i], "show");
    if (x[i].className.indexOf(c) > -1) classAdder(x[i], "show");
  }
}

function classAdder(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function classRemover(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

let btnContainer = document.getElementById("galery");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});
