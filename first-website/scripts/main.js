const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox-icon-2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};


//change the page title to a personalized welcome message when the user first visits the site. This welcome message will persist.
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);   // web storage api
        myHeading.textContent = `Mozilla is cool, ${myName}`;
      }
  }

if (!localStorage.getItem("name")) {
setUserName();
} else {
const storedName = localStorage.getItem("name");
myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
setUserName();
};