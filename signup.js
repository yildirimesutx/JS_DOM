
// DOM Accessing

let firstNameById = document.getElementById("first_name")
console.log(firstNameById);

let lastNameById = document.getElementById("last_name")
console.log(lastNameById);



// let firstNameByClassName = document.getElementsByClassName("input--style-4");
// console.log(firstNameByClassName);




// let firstNameByName = document.getElementsByName("first_name");
// console.log(firstNameByName);
// let firstNameBySelectorId = document.querySelector("#first_name"); 
// console.log(firstNameBySelectorId);

// let firstNameBySelectorClass = document.querySelector(".input--style-4"); 
// console.log(firstNameBySelectorClass);

// let firstNameBySelectorName = document.querySelector("[name='first_name']"); console.log(firstNameBySelectorName);

// let firstNameBySelectorInputName = document.querySelector()

// let firstNameBySelectorAllClass = document.querySelectorAll(".input--style-4"); 
// console.log(firstNameBySelectorAllClass);

//  getElementByClassName => HTML Collection, array.from array formu çevrilmesi lazım
//  getElementsByName => NodeList.foreach() array veı bir yapı
//  querySelectorAll => NodeList.foreach()

// getElementsByClassName => Array.from(HTMLCollection).arrayFunc()
// getElementsByName => NodeList.arrayFunc()
// querySelectorAll => NodeList.arrayFunc()

// property vs. attribute

// console.log(firstNameById.getAttribute("id"));
// console.log(firstNameById.getAttribute("class"));
// firstNameById.setAttribute("class", "redColorClass");
// firstNameById.setAttribute("type", "radio");

// innerHTML, innerText, textContent, (input => value)

let headerDiv = document.getElementById("headerId");
// console.log("innerHTML",headerDiv.innerHTML);
// console.log("innertext", headerDiv.innerText);
// console.log("textContent", headerDiv.textContent);

firstNameById.value = "Mesut";
lastNameById.value = "yıldırım"

// let a = firstNameById.value.toUpperCase() 
// let b = lastNameById.value.toUpperCase()

// let fullNameById = document.getElementById("full_name")
// console.log(fullNameById);

// fullNameById.value = a + " " +b


let fullName = document.querySelector(#full_name);
fullName.value = `${firstNameById.value.toUpperCase} ${lastNmeById.value.toUpperCase}`;

let email = document.getElementById("email");
email.value = `${firstNameById.value.toLowerCase()}.${lastNameById.value.toLowerCase()}@cw.com`

// create logo element

let headerDiv = document.getElementById("headerId");

let logo = document.createElement("img");
console.log(logo);
logo.setAttribute("src", "img/logo.png");
logo.setAttribute("class", "headerLogo");

// headerDiv.appendChild(logo);  // ALTT İŞLEMLE AYNI += APEND
headerDiv.innerHTML += `<img src = "img/logo.png" alt = "Bank  logo" class = "nav__logo" id="logo"/>`;


