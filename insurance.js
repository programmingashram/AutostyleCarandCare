let claimInsur = document.getElementById('insuranceClaim');
let claimbtn = document.getElementById('claimbtn');

claimInsur.style.display = "none";

claimbtn.addEventListener('click',function(){
    setTimeout(function() {
        if( claimInsur.style.display === "none" ){
            claimInsur.style.display = "block";
        }else{
            claimInsur.style.display = "none";  
        }
    },100);
});