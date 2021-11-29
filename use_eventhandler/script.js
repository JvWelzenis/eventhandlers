var mybutton = document.getElementById("mybutton");

mybutton.addEventListener("click", function(){
    alert('Button clicked!');
});

// var mybutton2 = document.getElementById("mybutton2");
// var changeColor = () => {
//     bluebackground.classList("redbackground");
// };

// mybutton2.addEventListener("click", changeColor);

function myFunction() {
    var element = document.getElementById("mybutton2");
    element.classList.toggle("redbackground");
  };
