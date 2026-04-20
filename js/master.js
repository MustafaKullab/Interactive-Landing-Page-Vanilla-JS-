// *************************************************************************************
// Header Move

//Select Toggle Menu 
let toggleMenu = document.querySelector(".toggle-menu");

//Select ul Links
let ulLinks = document.querySelector(".links");
//When Click On Toggle Menu
toggleMenu.onclick = function (e) {

    //Stop Propagation To toggle Menu
    e.stopPropagation();

    //Add Class show To toggleMenu
    toggleMenu.classList.toggle("show");

    //Add Class Open To ul Links
    ulLinks.classList.toggle("open");

}

//When Click On Anywhere Except Links Menu Close The Menu
document.addEventListener("click", e => {

    //If Click On AnyWhere Except Toggle Menu And Links
    if (e.target !== toggleMenu && e.target !== ulLinks) {

        //If ulLinks Contains open Class
        if (ulLinks.classList.contains("open")) {

            //Remove Class show From toggleMenu
            toggleMenu.classList.toggle("show");

            //Remove Class open From ulLinks
            ulLinks.classList.toggle("open");
        }
    }
});

//Stop Prpagation From ulLinks
ulLinks.addEventListener("click", e => {

    e.stopPropagation();

})
// Header Move
// *************************************************************************************

//Variables To Run randomize Function
let backgroundoption = true;

//Variable Of ClearInterval
let backgroundInterval;

// *************************************************************************************
//Landing Move 

//Select Landing Element
let landing = document.querySelector(".landing");

//Create Array Contain All Images
let arrImgs = [];

for (let i = 1; i <= 5; i++) {
    arrImgs.push(`landing${i}.png`);
}

console.log(arrImgs)
//Changes Background Every 10000ms
//Function To Change Backgrounds 
function randomize() {

    //If BackgroundOption = true
    if (backgroundoption === true) {
        backgroundInterval = setInterval(() => {

            //Create Random Number
            let randNum = Math.floor(Math.random() * arrImgs.length);

            //Change The Background Of Landing 
            landing.style.backgroundImage = `url("imgs/${arrImgs[randNum]}")`;
        }, 10000)
    }
}

//Landing Move
// *************************************************************************************

// *************************************************************************************
// Setting Move

//Select Icon Setting
let iconSetting = document.querySelector(".setting-icon");

//Select Setting Box
let settingBox = document.querySelector(".setting-box");
//When Click On iconSetting
iconSetting.onclick = function () {

    // Add Class fa-spin To iconSetting
    iconSetting.classList.toggle("fa-spin");

    //Add Class Open To SettingBox
    settingBox.classList.toggle("open");

}


// *************************************************************************************
//main color Move

//Function To Handle Active Class
//Parameter => Click On Element
function handleActive(element) {

    //Access To Parent Element And Loop On All Child Elements
    element.parentElement.querySelectorAll(".active").forEach(ele => {

        //remove Class Active From All Elements
        ele.classList.remove("active");
    });
    //Add Class Active To The Current Element
    element.classList.add("active");
};

// ***

//Select All Lis Color
let lisColor = document.querySelectorAll(".color-list li");

//Loop On All Elements In lisColor
lisColor.forEach(li => {

    //When Click On One Of Them
    li.onclick = function () {

        handleActive(li);

        //Set LocalStorage Value 
        localStorage.setItem("main-color", li.dataset.color);

        //Change main-color In Css File To The CurrentValue In Local Storage
        document.documentElement.style.setProperty("--main-color", localStorage.getItem("main-color"));
    }
});

// ***

//Check Local Storage If There Exists Value
if (localStorage.getItem("main-color") !== null) {

    //Remove Class Active From All LisColor
    lisColor.forEach(li => {
        li.classList.remove("active");
    });

    //Add Class Active To The Color That Storage In Local Storage 
    document.querySelector(`[data-color = "${localStorage.getItem("main-color")}"]`).classList.add("active");

    // Change The main-color In CSS File To The Color Value In LocalStorage
    document.documentElement.style.setProperty("--main-color", localStorage.getItem("main-color"));

};

//main color Move
// *************************************************************************************


// *************************************************************************************
//Background Controled Move

//Select All Span (yes/no)
let allSpans = document.querySelectorAll(".option-color span");

//Loop On All Span
allSpans.forEach(span => {

    //When Click On Any Span
    span.onclick = function () {

        //Remove Class Active From All Span And Add Class Active To The Current Span 
        handleActive(span);

        //Add The Value Of Random Background (yes/no) To LocalStorage 
        localStorage.setItem("background-option", span.dataset.case);

        //Check If ClassList = yes or no Change Background 
        if (span.classList.contains("yes")) {
            backgroundoption = true;
            randomize();
        } else if (span.classList.contains("no")) {
            backgroundoption = false;
            clearInterval(backgroundInterval);
        }
    }
});

//Condition Of Local Storage 
if (localStorage.getItem("background-option") === "yes") {

    backgroundoption = true;
    randomize();

} else {
    backgroundoption = false;
    clearInterval(backgroundInterval);
}

//Handle Active Class
if (localStorage.getItem("background-option") !== null) {

    //Remove Class Active From All Span
    allSpans.forEach(span => {
        span.classList.remove("active");
    });

    //Add Class Active To Span According by LocalStorage
    document.querySelector(`[data-case="${localStorage.getItem("background-option")}"]`).classList.add("active");
}

//Background Controled Move
// *************************************************************************************

// Setting Move
// *************************************************************************************

// *************************************************************************************
// Skills Move
//Select Skills Section 
let ourSkills = document.querySelector(".skills");

let spanSkills = document.querySelectorAll(".skills .skill-box span");
//When Scroll Window
window.onscroll = function () {

    //Get The Top Hight Of Skills Section
    let ourSkillsTop = ourSkills.offsetTop;

    //Get The Height Of Skills Section
    let ourSkillsHeight = ourSkills.offsetHeight;

    //Get The Height Of The Window
    let windowHeight = this.innerHeight;

    // Get The Current Scroll Value 
    let windowScrollCurrent = this.pageYOffset;

    //When Access To The Skills Section
    if (windowScrollCurrent > ((ourSkillsTop + ourSkillsHeight) - windowHeight)) {

        //Add The Progress Width To The spanSkills 
        spanSkills.forEach(span => {
            span.style.width = span.dataset.progress;
        });
    }
}

// Skills Move
// *************************************************************************************


// *************************************************************************************
// Gallery Move 

//Select All Imgs In Gallery
let allImgs = document.querySelectorAll(".imgs-box img");

//Loop On All Images
allImgs.forEach(img => {

    //When Click On Any Image
    img.onclick = function () {

        //Create Overlay Element 
        let overlay = document.createElement("div");

        //Add Class overlay-gallery To The Element
        overlay.className = "overlay-gallery";

        //Appen overlay On Body
        document.body.appendChild(overlay);

        //Create Box Of Image
        let boxImage = document.createElement("div")

        //Add Class Box-Img To The Element
        boxImage.className = "box-img";

        //Cheack If There Exists Alt Text On Image
        if (img.alt !== "") {

            //Create New Elemengt To Handle With Alt Text And Added To The Box-Image
            let altText = document.createElement("h4");

            //Add Class To altText
            altText.className = "alt-text";

            //Create Alt Text Node 
            let altTextNode = document.createTextNode(img.alt);

            //Add altTextNode To altText
            altText.appendChild(altTextNode);

            //Add AltText To box image
            boxImage.appendChild(altText);

        }


        //Create Img To Select Image
        let newImg = document.createElement("img");

        //Add Src To The New Image
        newImg.src = img.src;

        //Add New Image To Box Img
        boxImage.appendChild(newImg);

        //Add Box Image To The Body
        document.body.appendChild(boxImage);

        //Create Close Span
        let closeSpan = document.createElement("span")

        //Add Class To closeSpan
        closeSpan.className = "close-span";

        //Add Text To closeSpan
        closeSpan.innerHTML = "X";

        //Append closeSpan In box-img
        boxImage.appendChild(closeSpan);
    }
});

//When Click On Close Span Close The Popup 
document.onclick = function (e) {

    //If The Element Clicked Contain close-span Class
    if (e.target.classList.contains("close-span")) {

        //Remove Parent Element Of Close Span From Body
        e.target.parentElement.remove();

        //Remove Overlay Element From Body
        document.querySelector(".overlay-gallery").remove();
    }

    //When Click On Any WHere Except The Box-Img => Close The Box-img And Overlay
    document.body.addEventListener("click", e => {
        if (e.target === document.querySelector(".overlay-gallery")) {
            document.querySelector(".box-img").remove();
            document.querySelector(".overlay-gallery").remove();
        }
    })
}
// Gallery Move
// *************************************************************************************


// *************************************************************************************
// bullets And Links Move 

//Select All Bullets Box 
let bulletsBox = document.querySelectorAll(".bullets .bullet-box");

//Select All Links On Header
let allLinks = document.querySelectorAll(".links li a");

function scrollIntoSections(elements) {
    //Loop On All Elements
    elements.forEach(element => {

        //When Click On Any Element
        element.addEventListener("click", (e) => {
            //Prevent Default
            e.preventDefault();

            //Scroll To Section
            document.querySelector(element.dataset.section).scrollIntoView({ behavior: "smooth" });
        });
    })
}


scrollIntoSections(bulletsBox);
scrollIntoSections(allLinks);

// ***********************************
//Show And Hide bullets Move
//Select Bullets Main Box
let bulletsMainBox = document.querySelector(".bullets");

//Select Options Of Show Or Hide Bullets (yes/no)
let optionBullets = document.querySelectorAll(".option-bullets span");

// Loop On Options
optionBullets.forEach(span => {

    //When Click On Any Span
    span.onclick = function () {

        //Handle Class Active 
        handleActive(span);

        //If Span Contain Class Yes Show Bullets
        if (span.classList.contains("yes")) {

            //Show Bullets
            bulletsMainBox.style.display = "block";

            //Add The Value Into Local Storage
            localStorage.setItem("show-bullets", "yes");
        } else {
            bulletsMainBox.style.display = "none";
            localStorage.setItem("show-bullets", "no");
        }
    }
});

//Check Local Storage
if (localStorage.getItem("show-bullets") !== null) {

    //Remove Class Active From All Options
    optionBullets.forEach(opt => {
        opt.classList.remove("active");
    });
    if (localStorage.getItem("show-bullets") === "yes") {

        //Show Bullets
        bulletsMainBox.style.display = "block";

        // Add Class Active To Yes Option 
        document.querySelector(".option-bullets .yes").classList.add("active");

    } else {

        //Hide Bullets
        bulletsMainBox.style.display = "none";

        // Add Class Active To No Option 
        document.querySelector(".option-bullets .no").classList.add("active");
    }
}
//Show And Hide bullets Move
// ************************************

// *************************************************************************************



// *************************************************************************************
//Reset Options Move

//Select Reset Button
let resetButton = document.querySelector(".option-box.reset");

// When Click On Reset Button 
resetButton.onclick = function () {

    //Remove All Values From Local Storage
    localStorage.setItem("background-option", "yes");
    localStorage.setItem("main-color", "#FF9800");
    localStorage.setItem("show-bullets", "yes");


    // Scroll To Top Page 
    window.scrollTo({
        top: 0,
        lef: 0,
    });
    //Reload The Window
    window.location.reload();

}
//Reset Options Move
// *************************************************************************************

