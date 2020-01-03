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

    //<p>Birthday: Day../Month../Year..1967-08-10T17:56:57.716Z</p>
    var str = data.dob.date;//console.log(str);
    var year = str.substring(2,4);//console.log(year);
    var month = str.substring(5,7);//console.log(month);
    var day = str.substring(8,10);//console.log(day);
 
    div.innerHTML = `
    <img src=${data.picture.large}>
    <h2>${data.name.first} ${data.name.last}</h2>
    <p>${data.email}</p>
    <p>${data.location.city}</p>
    <hr />
    <p>${data.phone}</p>
    <p>${data.location.street.number} ${data.location.city} ${data.location.state} ${data.location.postcode}</p>
    <p>Birthday: ${day}/${month}/${year}</p>
    `;
    
    var span = document.getElementsByClassName("close")[0];// Get the <span> element that closes the modal
    var btn = document.querySelectorAll(".employeeBox");
    var btnid;//id of button clicked

    for(i = 0; i < btn.length;i++) {
        btn[i].addEventListener('click', function(){
          modal.style.display = "block";
        });
        btn[i].onclick = function() {
            btnid = this.id;
            let modalBox = document.getElementsByClassName('modalBox')[btnid];//displays modal employee content
            modalBox.style.display = "block";
        };
        //when click out of window set display to none
    }
    span.onclick = function() {// When the user clicks on <span> (x), close the modal
      modal.style.display = "none";
      let modalBox = document.getElementsByClassName('modalBox')[btnid];//displays modal employee content
      modalBox.style.display = "none";
    };
    window.onclick = function(event) {// When the user clicks anywhere outside of the modal, close it
      if (event.target == modal) {
        modal.style.display = "none";
        let modalBox = document.getElementsByClassName('modalBox')[btnid];
        modalBox.style.display = "none";
      }
    };
}



