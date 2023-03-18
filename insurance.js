let claimInsur = document.getElementById('insuranceClaim');
let claimbtn = document.getElementById('claimbtn');

claimInsur.style.display = "none";

claimbtn.addEventListener('click',function(){
    setTimeout(function() {
        if( claimInsur.style.display === "none" ){
        }else{
            claimInsur.style.display = "none";  
        }
    },100);
});