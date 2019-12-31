var modal = document.getElementById("myModal");// Get the modal

var btn = document.querySelector(".employeeBox");

//var btn = document.getElementById("myBtn");// Get the button that opens the modal
//var btn = document.getElementById("0");

var span = document.getElementsByClassName("close")[0];// Get the <span> element that closes the modal

btn.onclick = function() {// When the user clicks on the button, open the modal
  modal.style.display = "block";
}

span.onclick = function() {// When the user clicks on <span> (x), close the modal
  modal.style.display = "none";
}

window.onclick = function(event) {// When the user clicks anywhere outside of the modal, close it
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

