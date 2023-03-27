
let team = {
member:{
    name:"Saiyyad Rahamttulla ",
    tenchTeam:"Senior Mechanic",
    img:"./assest/images/team-member-1.png",
    exp:"15 Years Exp."
},
member1:{
    name:"Md Tinku",
    tenchTeam:"Junior Mechanic",
    img:"./assest/images/team-member-2.png",
    exp:"6 Years Exp."
},
member2:{
    name:"MD Sameer ",
    tenchTeam:"Junior Mechanic",
    img:"./assest/images/team-member-3.jpg",
    exp:"6 Years Exp."
},
membe3:{
    name:"Shahnawaj Ahmad",
    tenchTeam:"Senior Painter",
img:"./assest/images/team-member-4.jpg",
    exp:"10 Years Exp."
},
member4:{
    name:"MD Meraz",
    tenchTeam:"Painter",
img:"./assest/images/team-member-5.jpg",
    exp:"08 Years Exp."
},
member5:{
    name:"Shahzad Alam",
    tenchTeam:"Painter",
img:"./assest/images/team-member-6.jpg",
    exp:"06 Years Exp."
},
member6:{
    name:"MD Sajid",
    tenchTeam:"Senior Denter",
img:"./assest/images/team-member-7.jpg",
    exp:"10 Years Exp."
},
member7:{
    name:"MD Sajid",
    tenchTeam:" Denter",
img:"./assest/images/team-member-8.jpg",
    exp:"5 Years Exp."
},
member8:{
    name:"Gagan Choudhary",
    tenchTeam:"Insurances Services Provider",
img:"./assest/images/team-member-9.jpg",
    exp:"07 Years Exp."
},
member9:{
    name:"Abhisekh Yadav",
    tenchTeam:"Store Incharge",
img:"./assest/images/team-member-10.jpg",
    exp:"2 Years Exp."
},
member10:{
    name:"Ajay Gokhle",
    tenchTeam:"Accessories Incharege",
img:"./assest/images/team-member-11.jpg",
    exp:"2 Years Exp."
},
member11:{
    name:"Prerna Kochar",
    tenchTeam:"Senior Accountent",
img:"./assest/images/team-member-12.jpg",
    exp:"1 Years Exp."
},

}

let teamList = document.getElementById("team-list");

for(let i in team){
 teamList.innerHTML += `
 <li>
    <div class="profile-card animate-1 animate-1 position-relative">
        <div class="profileImage">
            <img src="${team[i].img}" alt="" class="w-100">
        </div>
        <div class="profile-details p-3 pb-1 position-absolute m-auto">
            <p class="userName"><i class="fa fa-user" aria-hidden="true"></i>  ${team[i].name}</p>
            <p class="role text-danger"><i class="fa fa-cog" aria-hidden="true"></i> ${team[i].tenchTeam}</p>
        </div>
        <span class="badge text-bg-danger position-absolute">${team[i].exp}</span>
    </div>
</li>
 `;
}
 
let customer = {
  1:{
    name:"aditya roy",
    img:"./assest/images/avatar.svg",
    reviews:"After services performance is  i got my new car back. thank you for excellent service.",
},
2:{
    name:"shimran agarwal",
    img:"./assest/images/avatar.svg",
   reviews:"After services performance is  i got my new car back. thank you for excellent service.",
},
3:{
    name:"pradeep bisen",
    img:"./assest/images/avatar.svg",
   reviews:"i brought amazing accessories for my land rover in waraseoni thank you for hole team ",
},
4:{
    name:"Rakesh madan",
    img:"./assest/images/avatar.svg",
   reviews:"The paint of the car is as if nothing had happened and more shinehas come after service",
},
5:{
    name:"Nisha bhardwaj",
    img:"./assest/images/avatar.svg",
   reviews:"Quick and fast servies",
},
6:{
    name:"arpit joshi",
    img:"./assest/images/avatar.svg",
   reviews:"I got mycar insurances renewal at best price",
},
7:{
    name:"raj gupta",
    img:"./assest/images/avatar.svg",
   reviews:"best car services with expert team support",
},
8:{
    name:"riya bisen",
    img:"./assest/images/avatar.svg",
   reviews:"Car servies at time to time",
},
9:{
    name:"Angel Kusum ",
    img:"./assest/images/avatar.svg",
   reviews:"excellent work for my polo gt.",
},
};

let customerList = document.getElementById("customer-list");

for(let u in customer){
  customerList.innerHTML += `
  <li>
    <div class="reviews p-3 pb-1 pt-1">
      <div class="slot-header d-flex align-items-center mb-3">
          <div class="userName">
              <img src="./assest/images/quots.svg" alt="" class="quots-img">
              <p class="quots mt-2">
                ${customer[u].reviews}
              </p>
              <h6>${customer[u].name}</h6>
          </div>
          <div class="userIcon">
              <img src="${customer[u].img}" alt="" >
          </div> 
    </div>
  </li>  
  `;
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function initComparisons() {
    var x, i;
    /*find all elements with an "overlay" class:*/
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
        /*once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function:*/
        compareImages(x[i]);
    }
    function compareImages(img) {
        var slider, img, clicked = 0, w, h;
        /*get the width and height of the img element*/
        w = img.offsetWidth;
        h = img.offsetHeight;
        /*set the width of the img element to 50%:*/
        img.style.width = (w / 2) + "px";
        /*create slider:*/
        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");
        /*insert slider*/
        img.parentElement.insertBefore(slider, img);
        /*position the slider in the middle:*/
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
        /*execute a function when the mouse button is pressed:*/
        slider.addEventListener("mousedown", slideReady);
        /*and another function when the mouse button is released:*/
        window.addEventListener("mouseup", slideFinish);
        /*or touched (for touch screens:*/
        slider.addEventListener("touchstart", slideReady);
        /*and released (for touch screens:*/
        window.addEventListener("touchend", slideFinish);
        function slideReady(e) {
        /*prevent any other actions that may occur when moving over the image:*/
        e.preventDefault();
        /*the slider is now clicked and ready to move:*/
        clicked = 1;
        /*execute a function when the slider is moved:*/
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
        }
        function slideFinish() {
        /*the slider is no longer clicked:*/
        clicked = 0;
        }
        function slideMove(e) {
        var pos;
        /*if the slider is no longer clicked, exit this function:*/
        if (clicked == 0) return false;
        /*get the cursor's x position:*/
        pos = getCursorPos(e)
        /*prevent the slider from being positioned outside the image:*/
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        /*execute a function that will resize the overlay image according to the cursor:*/
        slide(pos);
        }
        function getCursorPos(e) {
        var a, x = 0;
        e = (e.changedTouches) ? e.changedTouches[0] : e;
        /*get the x positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x coordinate, relative to the image:*/
        x = e.pageX - a.left;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        return x;
        }
        function slide(x) {
        /*resize the image:*/
        img.style.width = x + "px";
        /*position the slider:*/
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }
}

    initComparisons();
    let menu = document.getElementById('mobile-menu');
    let menu2 = document.getElementById('mobile-menu2');
  
    menuTrig.addEventListener('click', function(){
       menu.classList.toggle('active');
       menu2.classList.toggle('active');
    });


    let drop = document.querySelector('.drop');
    let snackbar = document.querySelector('.snackbar-area');
    drop.addEventListener('click', function(){
        snackbar.classList.toggle("hide");
    })

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-RXCKKD5EB4');



// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     let expires = "expires="+d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
// let name = cname + "=";
// let ca = document.cookie.split(';');
// for(let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == ' ') {
//     c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//     return c.substring(name.length, c.length);
//     }
// }
// return "";
// }

// function checkCookie() {
// let user = getCookie("username");
// if (user != "") {
//     alert("Welcome again " + user);
// } else {
//     user = prompt("Please enter your name:", "");
//     if (user != "" && user != null) {
//     setCookie("username", user, 365);
//     }
// }
// }
