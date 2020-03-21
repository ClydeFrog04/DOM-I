const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
      "nav-item-7": "Sign In",
      "nav-item-8": "Create Account",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navbar = document.getElementsByTagName("nav");

navbar[navbar.length-1].appendChild(document.createElement("a"));//append a new anchor
navbar[navbar.length-1].appendChild(document.createElement("a"));

let navAs = navbar[0].getElementsByTagName("a");

for (let i = 0; i < navAs.length; i++) {
    //nav-item-1
    let navItem = "nav-item-" + (i + 1);
    navAs[i].text = siteContent["nav"][navItem];
    navAs[i].setAttribute("href", "#");//if this was a legit site project, we would have another json attribute for the hrefs and set them here
    navAs[i].style.color = "green";
}


let codeSnip = document.getElementById("cta-img");
codeSnip.setAttribute('src', siteContent["cta"]["img-src"]);

let buttons = document.getElementsByTagName("button");
buttons[0].textContent = siteContent["cta"]["button"];

let headings = document.getElementsByTagName("h1");
headings[0].textContent = siteContent["cta"]["h1"];

let mainContent = document.getElementsByClassName("top-content")[0].childNodes;
//todo: I think there is something to this code, but I need to play with it more to figure it out
/*
const filterLargeStates = data.filter((state) => {
  return state.population >= 650000;
});
 */
// let textContent = features.filter((element) =>{
//     return element === "div.text-content";
// });
// featuresTextContent = [];
// console.log("Features: ", features);
// features.forEach((element) =>{
//     if(element.nodeName === "div") featuresTextContent.push(element);
// });
// features[0].textContent = "Hello world!";
let features = mainContent[1].childNodes;
let about = mainContent[3].childNodes;

features[1].textContent = siteContent["main-content"]["features-h4"];
features[3].textContent = siteContent["main-content"]["features-content"];
about[1].textContent = siteContent["main-content"]["about-h4"];
about[3].textContent = siteContent["main-content"]["about-content"];

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


let bottomContent = document.getElementsByClassName("bottom-content")[0].childNodes;
let services = bottomContent[1].childNodes;
let product = bottomContent[3].childNodes;
let vision = bottomContent[5].childNodes;

services[1].textContent = siteContent["main-content"]["services-h4"];
services[3].textContent = siteContent["main-content"]["services-content"];

product[1].textContent = siteContent["main-content"]["product-h4"];
product[3].textContent = siteContent["main-content"]["product-content"];

vision[1].textContent = siteContent["main-content"]["vision-h4"];
vision[3].textContent = siteContent["main-content"]["vision-content"];


let contact = document.getElementsByClassName("contact");
console.log(contact[0]);
contact[0].getElementsByTagName("h4")[0].textContent = siteContent["contact"]["contact-h4"];
let contactPs = contact[0].getElementsByTagName("p");
contactPs[0].textContent = siteContent["contact"]["address"];
contactPs[1].textContent = siteContent["contact"]["phone"];
contactPs[2].textContent = siteContent["contact"]["email"];
console.log(contactPs);


let footer = document.getElementsByTagName("footer");
let footerP = footer[0].getElementsByTagName("p");
footerP[0].textContent = siteContent["footer"]["copyright"];



//event listeners
const eventSiteContent = {
    "cta": {
        "h1": "You can get started now!",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
};

const getStartedBtn = buttons[0];
let trigger = true;//this variable will be used to determine what to do. Its value will flip flop
const codeSnipDefaultStyle = codeSnip.style;//will be used to reset the style
getStartedBtn.addEventListener('click', () =>{
    let curHeading = headings.item(0).textContent;
    headings.item(0).textContent = curHeading === siteContent["cta"]["h1"] ? eventSiteContent["cta"]["h1"] : siteContent["cta"]["h1"];
    // if(codeSnip.hasAttribute("src")) codeSnip.removeAttribute("src");
    // else codeSnip.setAttribute("src", siteContent["cta"]["img-src"]);
    if(trigger){
        codeSnip.style.display = "none";
    }else{
        codeSnip.style = codeSnipDefaultStyle;
    }
    trigger = !trigger;
});







