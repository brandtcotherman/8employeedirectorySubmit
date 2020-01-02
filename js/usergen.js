const url='https://randomuser.me/api/?results=12&inc=picture,name,email,location,phone,dob';
fetch(url)
  .then(response => response.json())
  .then(data => test(data))
  .catch(err => console.log("Error: "+ err))

const test = employees => {
    console.log(employees.results[0]);//console.log(employees.results);
    for(let i = 0; i < 12;i++){
        generateHTML(employees.results[i]);
    }
};  

var modalBox = document.querySelectorAll(".modalBox");

var modal = document.getElementById("myModal");// Get the modal
var arrayCounter = -1;
function generateHTML(data) {
    var button = document.createElement('button');
    if (arrayCounter<12){
        arrayCounter +=1;
    }
    button.setAttribute('class', 'employeeBox');
    button.setAttribute('id',arrayCounter);
    document.querySelector('.employeeGrid').appendChild(button);
    button.innerHTML = `
     <img src=${data.picture.large}>
      <div class="infoBox">
        <h2>${data.name.first} ${data.name.last}</h2>
        <p>${data.email}</p>
        <p>${data.location.city}</p>
      </div>
    `;

    //HTMLMODAL
    var div = document.createElement('div');
    div.setAttribute('class', 'modalBox');
    div.setAttribute('id',arrayCounter);
    document.querySelector('.modal-content').appendChild(div);
 
    div.innerHTML = `
    <img src=${data.picture.large}>
    <h2>${data.name.first} ${data.name.last}</h2>
    <p>${data.email}</p>
    <p>${data.location.city}</p>
    <p>${data.phone}</p>
    <p>${data.location.street.number} ${data.location.city} ${data.location.state} ${data.location.postcode}</p>
    <p>Birthday: Day../Month../Year..${data.dob.date}</p>
    `;
    
    var span = document.getElementsByClassName("close")[0];// Get the <span> element that closes the modal
    var btn = document.querySelectorAll(".employeeBox");

    for(i = 0; i < btn.length;i++) {
        btn[i].addEventListener('click', function(){
          modal.style.display = "block";

          console.log("modalBox: "+modalBox[i]);
          modalBox[i].style.display = "block";//display just the employee clicked
        });
    }
    span.onclick = function() {// When the user clicks on <span> (x), close the modal
      modal.style.display = "none";
    };
    window.onclick = function(event) {// When the user clicks anywhere outside of the modal, close it
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
}


