

/* Global Variables */
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Declare button for function
const button = document.getElementById("generate");

// Declare user zip code input from html 
const zipCode = document.getElementById("zip");

// Personal API Key for OpenWeatherMap API
const apiKey = "0e3eeb13de8e10f3826e3a9d0d4539b2";

// retrieve  API url
const apiURL = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}&appid=${apiKey}&units=metric`


// get date,temp,and content
const ufeeling = document.getElementById("feelings");
const udate = document.getElementById("date");
const utemp = document.getElementById("temp");
const ucontent = document.getElementById("content");

// using click event listener on the Generate Button 
button.addEventListener('click', ButtonClk);

// Function called by event listener 
function buttonclk() {
    // const aipCode again to fix the If condition
    const zipCode = document.getElementById("zip");

    // Validation to check if the zip code is there 
    if (zipCode.value === "") {
        alert("kindly enter zip code in zip form!");
    } else {
        getData().then((data) => {

            addData("/add", { 
                temp:data.main.utemp, date:udate, feelings:ufeeling.value 
            })
        })
            .then(() => updateUi())
    }
}
const getData = async () => {

    const req = await fetch(apiURL)

    try {

        const data = await req.json()
        console.log(data.main.temp)
        return data;

    } catch (error) {

        console.log(error);
    }
};

const addData = async (url = "", data = {}) => {
    const res = await fetch(url, {
        "method": "ADD",
        "credentials": "same-origin",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        return;

    } catch (error) {
        console.log("Error", error);
    }
}

// Function to GET Project Data 
const updateUi = async () => {
    const req = await fetch("/get")

    try {
        const clinetdata = await req.json()
        console.log(clinetdata)
        date.innerHTML = clinetdata.date
        temp.innerHTML = clinetdata.temp
        content.innerHTML = clinetdata.feelings
    } catch (error) {
        console.log(error)
    }
}
