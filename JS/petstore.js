'use strict';

const available = "https://petstore.swagger.io/v2/pet/findByStatus?status=available";
const pending = "https://petstore.swagger.io/v2/pet/findByStatus?status=pending";
const sold = "https://petstore.swagger.io/v2/pet/findByStatus?status=sold";
const createURL = "https://petstore.swagger.io/v2/pet";
const deleteURL = "https://petstore.swagger.io/v2/pet/1";

const getbtnavail = document.querySelector('#getPetsAvailable');
const getbtnpend = document.querySelector('#getPetsPending');
const getbtnsold = document.querySelector('#getPetsSold');

const createbtn = document.querySelector('#createPet');
const updatebtn = document.querySelector('#updatePet');
const deletebtn = document.querySelector('#deletePet');
const petstore = document.querySelector('#petstore');

const history = document.querySelector("#history");

const retrieveData = () => {
    //this fetch method is telling it too look at the users page of this website:   
    fetch(available)
        //we then log the response this will tell us if we succsefully connected to the webpage with the HTTP code.
        .then((response) => {
            console.log(response);
            //if the status is not 200 we did not connect so will throw an error:
            if (response.status !== 200) {
                console.error('Looks like there was a problem. Status Code: ' +
                    response.status);
                //we then return out of the fuction after printing we failed to connect    
                return;
                //if we do connect we then use json to print out the objects on the page:
            } else {
                response.json().then(json => {
                    console.log(json);
                    //console.log(json.length);
                    //we use a for loop to run through eatch object within the page:
                    for (let i = 0; i < json.length; i++) {
                        let p = document.createElement("p");
                        p.setAttribute("class", "customer");
                        let info = document.createTextNode(json[i].name + " " + json[i].id);
                        p.appendChild(info);
                        petstore.appendChild(p);
                    }
                })
            }
        })
        //if we incounter an error whilst reading the information this error message will appear.
        .catch(err => console.error(`Stop! ${err}`));
}

const retrieveDataPending = () => {
    //this fetch method is telling it too look at the users page of this website:   
    fetch(pending)
        //we then log the response this will tell us if we succsefully connected to the webpage with the HTTP code.
        .then((response) => {
            console.log(response);
            //if the status is not 200 we did not connect so will throw an error:
            if (response.status !== 200) {
                console.error('Looks like there was a problem. Status Code: ' +
                    response.status);
                //we then return out of the fuction after printing we failed to connect    
                return;
                //if we do connect we then use json to print out the objects on the page:
            } else {
                response.json().then(json => {
                    console.log(json);
                    //console.log(json.length);
                    //we use a for loop to run through eatch object within the page:
                    for (let i = 0; i < json.length; i++) {
                        let p = document.createElement("p");
                        p.setAttribute("class", "customer");
                        let info = document.createTextNode(json[i].name);
                        p.appendChild(info);
                        petstore.appendChild(p);
                    }
                })
            }
        })
        //if we incounter an error whilst reading the information this error message will appear.
        .catch(err => console.error(`Stop! ${err}`));
}

const retrieveDataSold = () => {
    //this fetch method is telling it too look at the users page of this website:   
    fetch(sold)
        //we then log the response this will tell us if we succsefully connected to the webpage with the HTTP code.
        .then((response) => {
            console.log(response);
            //if the status is not 200 we did not connect so will throw an error:
            if (response.status !== 200) {
                console.error('Looks like there was a problem. Status Code: ' +
                    response.status);
                //we then return out of the fuction after printing we failed to connect    
                return;
                //if we do connect we then use json to print out the objects on the page:
            } else {
                response.json().then(json => {
                    console.log(json);
                    //console.log(json.length);
                    //we use a for loop to run through eatch object within the page:
                    for (let i = 0; i < json.length; i++) {
                        let p = document.createElement("p");
                        p.setAttribute("class", "customer");
                        let info = document.createTextNode(json[i].name);
                        p.appendChild(info);
                        petstore.appendChild(p);
                    }
                })
            }
        })
        //if we incounter an error whilst reading the information this error message will appear.
        .catch(err => console.error(`Stop! ${err}`));
}

const createPet = () => {
    fetch(createURL, {
        method: 'POST',
        body: JSON.stringify({
            id: 9222968140496892000,
            name: "doggie"
            
        }),
        headers: {
            'Content-Type': "application/json"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.error(`Seomthing went wrong`));
}

const updatePet = () => {
    fetch(createURL, {
        method: 'PUT',
        body: JSON.stringify({
            id: '1',
            name: "Zane"
        }),
        headers: {
            'Content-Type': "application/json"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.error(`Seomthing went wrong`));
}

const deletePet = () => {
    fetch(deleteURL, {
        method: 'DELETE',
        body: JSON.stringify({
            id: '1'
        }),
        headers: {
            'Content-Type': "application/json"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.error(`Seomthing went wrong`));
}
const clearHistory = () => {
    petstore.innerHTML = "";
};
getbtnavail.addEventListener('click', retrieveData);
getbtnpend.addEventListener('click', retrieveDataPending);
getbtnsold.addEventListener('click', retrieveDataSold);
createbtn.addEventListener('click', createPet);
updatebtn.addEventListener('click', updatePet);
deletebtn.addEventListener('click', deletePet);