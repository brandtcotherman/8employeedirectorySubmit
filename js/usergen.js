const url='https://randomuser.me/api/?results=12&inc=picture,name,email,location,phone,dob';
fetch(url)
  .then(response => response.json())
  .then(data => test(data))
  .catch(err => console.log("Error: "+ err))

const test = employees => {
    console.log(employees.results[0]);
    //console.log(employees.results);
    for(let i = 0; i < 12;i++){
        generateHTML(employees.results[i]);
    }
};  

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
  }




