
let btnBuyClick = () => {
    document.getElementsByClassName("ticket-modal")[0].style.display = 'block';
}

function showModalTicket () {
    console.log("Check")
    
    document.getElementsByClassName("ticket-modal")[0].style.display = "block";
}


//close ticket modal on header
document.getElementsByClassName("model-header__close")[0].onclick = function () {
    console.log("Check")
    document.getElementsByClassName("ticket-modal")[0].style.display = 'none';
}

//close ticket modal on content
document.getElementsByClassName("model-content__btn-close")[0].onclick = function() {
    document.getElementsByClassName("ticket-modal")[0].style.display = 'none';
}