let claimInsur = document.getElementById('insuranceClaim');
let claimbtn = document.getElementById('claimbtn');

claimInsur.style.display = "none" ;

claimbtn.addEventListener('click',function(){
    setTimeout(function() {
        if( claimbtn.clicked = true ){
            claimInsur.style.display = "block";
        }else{
            claimInsur.style.display = "none";  
        }
    },100);
});

