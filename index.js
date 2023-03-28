let allproduct = {
    carAcc:[
        {
            img:"./assest/images/product/product-as (1).jpeg",
            name:"",
            price:""
        },
        {
            img:"./assest/images/product/product-as (2).jpeg",
            name:"",
            price:""
        },
        {
            img:"./assest/images/product/product-as (3).jpeg",
            name:"",
            price:""
        },
        {
            img:"./assest/images/product/product-as (4).jpeg",
            name:"",
            price:""
        },
        {
            img:"./assest/images/product/product-as (5).jpeg",
            name:"",
            price:""
        },
        {
            img:"./assest/images/product/product-as (6).jpeg",
            name:"",
            price:""
        },
        {
            img:"./assest/images/product/product-as (7).jpeg",
            name:"",
            price:""
        },
        {
            img:"./assest/images/product/product-as (8).jpeg",
            name:"",
            price:""
        }   
    ],
    fragrance:[
        {
            img:"./assest/images/product/product-frag (1).jpeg",
            name:"",
            price:""
        },
        {
            img:"./assest/images/product/product-frag (2).jpeg",
            name:"",
            price:""
        },
        {
            img:"./assest/images/product/product-frag (3).jpeg",
            name:"",
            price:""
        }
    ],
    spray:[
        {
            img:"./assest/images/product/product-spray (1).jpeg",
            name:"",
            price:""
        },
        {
            img:"./assest/images/product/product-spray (2).jpeg",
            name:"",
            price:""
        }, 
        {
            img:"./assest/images/product/product-spray (3).jpeg",
            name:"",
            price:""
        },
        {
            img:"./assest/images/product/product-spray (4).jpeg",
            name:"",
            price:""
        },
    ],
}
//for caracc
for( i = 0; i < allproduct.carAcc.length; i++){
    console.log(allproduct.carAcc[i]);
    let carAcc = document.getElementById('productdetails');
    carAcc.innerHTML += `
    <li>
        <div class="product-card">
            <div class="product-img">
                <img src="${allproduct.carAcc[i].img}" alt="" class="w-100">
            </div>
            <div class="product-details p-2 pb-0">
                <h1 class="title"><span class="red">Iris</span></h1>
                <p>Lorem ipsum dolor.</p>
            </div>
        </div>
</li>
    `;
}
//for productspray
for( i = 0; i < allproduct.spray.length; i++){
    console.log(allproduct.spray[i]);
    let productspray = document.getElementById('productspray');
    productspray.innerHTML += `
    <li>
        <div class="product-card">
            <div class="product-img">
                <img src="${allproduct.spray[i].img}" alt="" class="w-100">
            </div>
            <div class="product-details p-2 pb-0">
                <h1 class="title"><span class="red">Iris</span></h1>
                <p>Lorem ipsum dolor.</p>
            </div>
        </div>
</li>
    `;
}
//
for( i = 0; i < allproduct.fragrance.length; i++){
    console.log(allproduct.fragrance[i]);
    let productFrag = document.getElementById('productFrag');
    productFrag.innerHTML += `
    <li>
        <div class="product-card">
            <div class="product-img">
                <img src="${allproduct.fragrance[i].img}" alt="" class="w-100">
            </div>
            <div class="product-details p-2 pb-0">
                <h1 class="title"><span class="red">Iris</span></h1>
                <p>Lorem ipsum dolor.</p>
            </div>
        </div>
</li>
 `;
}