let CardDetails = {
    Car :{
        img : './img/washingdetailing.svg',
        title : "Car Washing" ,
        u1:"Top Wash",
        u2:"Interior Cleaning",  
        u3:"Dash Board Polish",
        u4:"Tyre Polishing",
        u5:"Vaccum Cleaning",
        u6:"/",
    },
    wheel :{
        img : 'https://vehiclecare.in/images/service/wheelcare.svg',
        title : "wheel care" ,
        u1:"Wheel Alignment",
        u2:"Wheel Balancing",  
        u3:"Tyre Changing",
        u4:"Apollo Tyre",
        u5:"Ceat Tyre",
        u6:"/",
    },
    carac :{
        img : 'https://vehiclecare.in/images/service/acrepair.svg',
        title : "Ac repairs" ,
        u1:"All Ac Works",
        u2:"AC Vaccuming",  
        u3:"Ac Leaking Checks",
        u4:"Ac Gas filling",
        u5:"/",
        u6:"/",
    }, 
    Battery :{
        img :  'https://vehiclecare.in/images/service/batteriessupport.svg',
        title : "Battery changing" ,
        u1:"/",
        u2:"/",
        u3:"/",
        u4:"/",
        u5:"/",
        u6:"/",
    },
    Denting :{
        img : 'https://vehiclecare.in/images/service/dentingpainting.svg',
        title : "Denting Panting" ,
        u1:"Car Denting",
        u2:"Car Painting",  
        u3:"Rubbing Polish",
        u4:"Ceremic Coating",
        u5:"Head Light Cleaning",
        u6:"Teflon Coating",
    },
    Custom :{
        img : 'https://vehiclecare.in/images/service/customrepairs.svg',
        title : "Custom Repairs" ,
        u1:"General Serviceing ",
        u2:"Full Suspention Works",  
        u3:"Full Engine Works",
        u4:"All Body Parts",
        u5:"All Mechanical Works Done",
        u6:"/",
    },
    Insurance :{
        img : 'https://vehiclecare.in/images/service/insuranceclaim.svg',
        title : "Insurance claim" ,
        u1:"All Company Insurance Claim's Works",
         u2:"Fast Tag Recharge / Registration ",  
         u3:"PUC Works",
         u4:"/",
         u5:"/",
         u6:"/",
    },
    pariodic :{
        img : 'https://vehiclecare.in/images/service/periodicservice.svg',
        title : "Pariodic Services" ,
        u1:"/",
        u2:"/",
        u3:"/",
        u4:"/",
        u5:"/",
        u6:"/",
    }
}

let offers = {
    Nitro :{
        title:"Nitrogen Gass",
        montly: "400/Months",
        years:"4000/year",
        h:"One Time Payments"
    },
    carwsah :{
        title:"Car Washing",
        montly: "400/Months",
        years:"4000/year",
        h:"One Time Payments"
    },
    WheelAlignment :{
        title:"Wheel Alignment",
        montly: "400/Months",
        years:"4000/year",
        h:"One Time Payments"
    },
    Wheel :{
        title:"Wheel Balnceing",
        montly: "400/Months",
        years:"4000/year",
        h:"One Time Payments"
    }
}

let compare = {
    car:{
       old:{
        img:"https://images.unsplash.com/photo-1551836989-b4622a17a792?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
       },
       new:{
        img:"https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
       }
    },
    car1:{
        old:{
        img:"https://images.unsplash.com/photo-1551836989-b4622a17a792?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        new:{
        img:"https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }
     },
     car2:{
        old:{
        img:"https://images.unsplash.com/photo-1551836989-b4622a17a792?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        new:{
        img:"https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }
     }
}

let buy = {
    mahindra:{
        img:"https://images10.gaadi.com/usedcar_image/original/VCC_1553385_24_1658060026.jpg?imwidth=640",
        brand:"Mahendra",
        model:2017,
        Details:"black and XMS",
        Km:"4500 KM",
    },
    tata:{
        img:"https://images10.gaadi.com/usedcar_image/original/VCC_1553385_24_1658060026.jpg?imwidth=640",
        brand:"haier",
        model:2019,
        Details:"black and XMS",
        Km:"10000 KM",
    },
    hundai:{
        img:"https://images10.gaadi.com/usedcar_image/original/VCC_1553385_24_1658060026.jpg?imwidth=640",
        brand:"accent",
        model:2019,
        Details:"white",
        Km:"10000 KM",
    },
    toyota:{
        img:"https://images10.gaadi.com/usedcar_image/original/VCC_1553385_24_1658060026.jpg?imwidth=640",
        brand:"etios",
        model:2009,
        Details:"silver",
        Km:"170000 KM",
    },
}

let a, b,c,d, serviceList ,offerList, compareCarsList, SellCarList, serviceTagsList;

serviceTagsList = document.getElementById('serviceTags');
serviceList = document.querySelector('#service-list .container .row');
offerList = document.getElementById('offer-list');
compareCarsList = document.getElementById('compareCar-list');
SellCarList = document.getElementById('carList');


for(a in CardDetails){
    serviceTagsList.innerHTML +=`
    <li>
        <div class="tags d-flex align-items-center justify-content-around p-1">
            <img src="${CardDetails[a].img}" alt="" class="me-2">
            <span>${CardDetails[a].title}</span>
        </div>
    </li>
    `;

    serviceList.innerHTML += `
    <div class="col-md-3 ">
        <a href="#" class="slot-main text-decoration-none">
            <div class="slot p-3 mb-4">
                <div class="slot-icon">
                    <img src="${CardDetails[a].img}" alt="">
                </div>
                <div class="slot-title">
                    <h4>${CardDetails[a].title}</h4>
                </div>
                <div class="slotDetails services-list">
                    <ol class="navs">
                        <li class="navs" list="${CardDetails[a].u1}">
                              ${CardDetails[a].u1}
                        </li>
                        <li  list="${CardDetails[a].u2}">
                             ${CardDetails[a].u2}
                        </li>
                        <li  list="${CardDetails[a].u3}">
                               ${CardDetails[a].u3}
                        </li>
                        <li  list="${CardDetails[a].u4}">
                                  ${CardDetails[a].u4}
                         </li>
                        <li  list="${CardDetails[a].u5}">
                                ${CardDetails[a].u5}
                        </li>
                        <li  list="${CardDetails[a].u5}">
                              ${CardDetails[a].u6}
                       </li>
                    </ol>
                </div>
            </div>
        </a>
    </div>
    `;
    let validate = document.querySelectorAll('[list="/"]');
        for(let x = 0; x < validate.length; x++){
            console.log(validate[x])
    validate[x].style.display = "none";
}
   
}


for(b in offers){
    offerList.innerHTML += `
    <li>
        <a href="#">
            <div class="offercard">
                <div class="offerTitle">
                    <h3 class="title">
                       ${offers[b].title}
                    </h3>
                </div>
                <hr>
                <div class="offerDetails">
                    <div class="offerdescription">
                        <p>${offers[b].montly}</p>
                        <p>${offers[b].years}</p>
                        <p>${offers[b].h}</p>
                    </div>
                </div>
                <div class="offerCardControl">
                    <button class="btn btn-danger" type="button">
                        <a href="https://chat.whatsapp.com/HrYQMeOaSVb7btHH5OuSsG" class="nav-link">Get It Now</a> 
                    </button>
                </div>
            </div>
        </a>
    </li>
    `;
}
for(c in compare){
    console.log(compare[c].new.img);
    compareCarsList.innerHTML += `
    <li>
        <div class="img-comp-container">
            <div class="img-comp-img">
                <img src="${compare[c].new.img}" width="300" height="200">
                
            </div>
            <div class="img-comp-img img-comp-overlay">
                <img src="${compare[c].old.img}" width="300" height="200">
            </div>
        </div>
    </li>
    `;
}
for(d in buy){
    SellCarList.innerHTML +=`
    <li>
        <div class="product-card">
            <div class="product-img">
                <img src="${buy[d].img}" alt="" class="w-100">
            </div>
            <div class="product-details p-2 pb-0">
                <h1 class="title"><span class="red"><i class="fa fa-car" aria-hidden="true"></i> ${buy[d].brand}</span></h1>
            
                <span><i class="fa fa-cog" aria-hidden="true"></i>  ${buy[d].model}</span>
                <p><i class="fa-solid fa-gas-pump"></i> ${buy[d].Km} <br> KmsDieselAutomatic</p>
            </div>
            <div class="product-prise p-2 pt-0">
                <div class="d-flex justify-content-between align-items-center">
                    <p class="mt-2"><strong>₹ 22,13,000</strong></p>
                <div>
                    <button class="btn btn-outline-danger">Enqury Now</button>
                </div>
                </div>
            </div>
        </div>
    </li>  
    `;
}