'use strict'
let coditionArr=[];
function user(name,type,price,condition){
  this.name = name;
  this.type = type;
  this.price = 0;
  this.condition ='';
  this.Arr = [];
 // this.Arr.push(this);
}


function random(){
 return Math.floor(Math.random() * 400) + 100 ;  
};

// user.prototype.render = function(){
//     let arr = [];
//     let price = 0;
    
// }

 function condition(){
 //// I need get the price arr from the above random but there is no time
    if (0 >= 200){
        let td = document.createElement('td')
        table.appendChild(td);
        td.textContent = 'used';
    }else {
        let td = document.createElement('td')
        table.appendChild(td);
        td.textContent = 'new';

    }
}

let form = document.getElementById('form');
let tableHead = ["Name","Type","Price","Condition"];
form.addEventListener('submit',submition);

function submition(event){
   event.preventDefault();
  
  console.log(event.target.userName.value);
  console.log(event.target.type.value);
  let user1 = new user(event.target.userName.value, event.target.type.value, 50, "blue");


  let table = document.getElementById('table');

  // first row


  let headtd ;
   let headRow = document.createElement('tr');
    table.appendChild(headRow);
   for (let i = 0; i <tableHead.length; i++) {
    headtd = document.createElement('th');
    headtd.textContent = tableHead[i];
    headRow.appendChild(headtd);
   
  }


 
// second row

let firstRow = document.createElement('tr');
table.appendChild(firstRow);

let firsttd = document.createElement('td');
firstRow.appendChild(firsttd);
firsttd.textContent = event.target.userName.value
let secondtd = document.createElement('td');
firstRow.appendChild(secondtd);
secondtd.textContent = event.target.type.value;

let thirdtd = document.createElement('td');
firstRow.appendChild(thirdtd);
thirdtd.textContent = random();

let fourthtd = document.createElement('td');
firstRow.appendChild(fourthtd);
fourthtd.textContent =  condition();



// let firsttd;
// let secondtd , thirdtd;
// for (let i = 0; i <4 ; i++) {
//     let firstRow = document.createElement('tr');
//     table.appendChild(firstRow);
//     for (let j = 0;j< 4; j++) {
//        firsttd = document.createElement('td');
//        firstRow.appendChild(firsttd);
//        secondtd = document.createElement('td');
//        firstRow.appendChild(secondtd);
//        thirdtd = document.createElement('td');
//        firstRow.appendChild(thirdtd);
//     }

// }  firsttd.textContent = event.target.userName.value ;
//    secondtd.textContent = event.target.type.value;
//    thirdtd.textContent = price.random();
    
}


function setInfo(){
    // I don't push the data to Arr yet 
    let dataArr = JSON.stringify(Arr);
    localStorage.setItem('Table',dataArr);
}
function getInfo(){
let data = localStorage.getItem('Info');

if (data != null){
    let objectData = JSON.parse(data);
    Arr = objectData;
}
}
getInfo();