const btn = document.querySelector(".btn");
const jokeName = document.querySelector(".joke_name");
const apiKey = "s3t4YrEopvyw9m9dYFFpnQ==rOlOpBGtUXaxiY8b";

const option = {
    method: "GET",
    headers : {
        "X-Api-Key" : apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

// Jokes called here
async function getJoke(){
    try {
        jokeName.innerText = "Updating...."; // before the joke updating text show in our jokename
        btn.disabled = true; // btn disabled and then text will added before the jokename coming
        btn.innerText = "LOADING....";

        const response = await fetch(apiURL,option);//fetch url and get the jokename with the help of option method
        const data = await response.json(); // convert to json formatted

        btn.disabled = false; //btn enabled and then below text will come hear
        btn.innerText = "TELL ME A JOKE";        
        jokeName.innerText = data[0].joke;//[0] hear arr & joke is obj means collect obj inside arr
    } 
    catch (error) { //try will not executed then catch will run hear
        btn.disabled = false; //btn enabled and then below text will come hear
        btn.innerText = "TELL ME A JOKE";
        jokeName.innerText = "An error happened, try again later"; // for network in available so execute the ineerText hear write
    }
    
}

btn.addEventListener("click" , getJoke); // called a getjoke function...