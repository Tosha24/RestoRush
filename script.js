// change value of button (Add to cart -> Remove from Cart)
// function handlingEvent(i){
//     if(document.getElementsByClassName('addCart')[i].innerText == "Add to Cart"){
//     document.getElementsByClassName('addCart')[i].innerText = "Remove from Cart";
//     }
//     else{
//         document.getElementsByClassName('addCart')[i].innerText = "Add to Cart";
//     }
// }

function handlingEvent(){
    const event = document.querySelectorAll('.addCart');
    for(let j=0; j<event.length; j++){
        event[j].addEventListener("click", function(){
            if(event[j].innerText == "Add to Cart"){
                event[j].innerText = "Remove from Cart";
                return;
            }
            else{
                event[j].innerText = "Add to Cart";
                return;
            }
        })
    }  
}

// Add item to cart and increase price
function includePrice(price){
    
}

// to validate contact number and password (PHP)
function validateForm(){

}

// alert to login then adding to cart is possible
function alertLogin(){
    const query = document.querySelectorAll('.addCart');
    let result;
    for(let i=0; i<query.length; i++){
        result = true;
    }   
    if(result == true){
        alert("Please login to add items to your cart");
    }
}



