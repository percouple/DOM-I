const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

// H1/BUTTON
const ctaText = document.querySelector('.cta-text');
ctaText.querySelector('h1').textContent = siteContent.cta["h1"];
ctaText.querySelector('button').textContent = siteContent.cta["button"];

// MAIN CONTENT
const tc = document.querySelectorAll(".text-content")
console.log(tc);
let tch4 = tc[0].querySelector("h4")
let tcp = tc[0].querySelector("p");
tch4.textContent = siteContent["main-content"]["features-h4"];
tcp.textContent = siteContent["main-content"]["features-content"];
tch4 = tc[1].querySelector("h4")
tcp = tc[1].querySelector("p")
tch4.textContent = siteContent["main-content"]["about-h4"];
tcp.textContent = siteContent["main-content"]["about-content"];
tch4 = tc[2].querySelector("h4")
tcp = tc[2].querySelector("p")
tch4.textContent = siteContent["main-content"]["services-h4"];
tcp.textContent = siteContent["main-content"]["services-content"];
tch4 = tc[3].querySelector("h4")
tcp = tc[3].querySelector("p")
tch4.textContent = siteContent["main-content"]["product-h4"];
tcp.textContent = siteContent["main-content"]["product-content"];
tch4 = tc[4].querySelector("h4")
tcp = tc[4].querySelector("p")
tch4.textContent = siteContent["main-content"]["vision-h4"];
tcp.textContent = siteContent["main-content"]["vision-content"];


// FOOTER
let footerI = document.querySelector('footer');
footerI.textContent = "Copyright Great Idea! 2021";
footerI.setAttribute('class', "bold");

// CONTACT INFO AT THE BOTTOM
let contactInfoHeader = document.querySelector(".contact");
let contactObjValues = Object.values(siteContent.contact)
for (let i = 0; i < contactInfoHeader.children.length; i++) {
Array.from(contactInfoHeader.children)[i].textContent = contactObjValues[i];
}

// 1st IMAGE
const img1 = document.querySelector('#logo-img');
img1.setAttribute("src", siteContent.images["logo-img"]);

// 2nd IMAGE
const img2 = document.querySelector('#cta-img');
img2.setAttribute("src", siteContent.images["cta-img"]);

// 3rd IMAGE
const img3 = document.querySelector("#middle-img");
img3.setAttribute('src', "http://localhost:9000/img/accent.png");

// BOTTOM CONTENT PARAGRAPHS AND HEADERS
const bottomContentDiv = document.querySelector('.bottom-content')
let bottomContentIndividual = bottomContentDiv.querySelector('.text-content')
console.log(bottomContentIndividual)

// NAV ANCHOR
const navAnchors = document.querySelectorAll('a');
navAnchors.forEach((element, index) => {
  element.setAttribute('class', "italic");
  element.textContent = siteContent.nav[`nav-item-${index + 1}`];
})