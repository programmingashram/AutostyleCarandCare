if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}



let team = {
  member:{
    name:"Himanshu Gaoutam",
    tenchTeam:"Technincal Engineer",
img:"https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png",
    exp:"3 Years Exp."
},
member1:{
    name:"shivam Gaoutam",
    tenchTeam:"Technincal Engineer",
img:"https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png",
    exp:"5 Years Exp."
},
member2:{
    name:"abul hamid pandit",
    tenchTeam:"Technincal Engineer",
img:"https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png",
    exp:"9 Years Exp."
},
membe3:{
    name:"Abid tandekar",
    tenchTeam:"Technincal Engineer",
img:"https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png",
    exp:"8 Years Exp."
},
member4:{
    name:"ajay nagar",
    tenchTeam:"Technincal Engineer",
img:"https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png",
    exp:"12 Years Exp."
},
member5:{
    name:"pawan bhanvaer",
    tenchTeam:"Technincal Engineer",
img:"https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png",
    exp:"23 Years Exp."
},
member6:{
    name:"sandeep mahesawari",
    tenchTeam:"Technincal Engineer",
img:"https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png",
    exp:"7 Years Exp."
},
member7:{
    name:"Gaoutam Adani",
    tenchTeam:"Technincal Engineer",
img:"https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png",
    exp:"6 Years Exp."
},
member8:{
    name:"mukesh ambani",
    tenchTeam:"Technincal Engineer",
img:"https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png",
    exp:"31 Years Exp."
},
member9:{
    name:"bata ",
    tenchTeam:"Technincal Engineer",
img:"https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png",
    exp:"12 Years Exp."
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