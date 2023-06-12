// geting canvas by Boujjou Achraf
let c = document.getElementById("canv");
let ctx = c.getContext("2d");

var cartArray = [
    {
        "color":"white",
        0: {
            "size": "L",
            "quantity":0
        },
        1: {
            "size": "XL",
            "quantity":0
        }

    },
    {
        "color":"black",
        0: {
            "size": "L",
            "quantity":0
        },
        1: {
            "size": "XL",
            "quantity":0
        }

    },
    {"orderSum": 0},
    {"shipCost": 0}
   ]


c.height = window.innerHeight;
c.width = window.innerWidth;

let matrix = "skiSKI$";
matrix = matrix.split("");

let font_size = 12;
let columns = c.width/font_size;
let drops = [];
for(var x = 0; x < columns; x++)
    drops[x] = 1; 

function draw()
{
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#ab4657";
    ctx.font = font_size + "px arial";
    for(var i = 0; i < drops.length; i++)
    {
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}

setInterval(draw, 60);

var loader = document.getElementById("preloader")
function loaderDisable(){
    loader.style.display="none";
}

setTimeout(loaderDisable, 3250);

// popUp image slider
var modal = document.getElementById("myModal");
var spanClose = document.getElementsByClassName("close-popup")[0];
var carousel = document.getElementById("carousel");
var slides = carousel.getElementsByTagName("div");
var slideIndex = 0;
var slideInterval;

var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");

spanClose.onclick = function() {
    let popupWrapper = document.querySelector(".popup-wrapper")
    popupWrapper.classList.remove("visible")
    popupWrapper.classList.add("hidden")
    modal.style.display = "none";
    stopCarousel();
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        stopCarousel();
    }
}

prevBtn.onclick = function() {
    slideIndex--;
    showSlide(slideIndex);
}

nextBtn.onclick = function() {
    slideIndex++;
    showSlide(slideIndex);
}

function showSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[index].style.display = "block";
    slideIndex = index;
}

function startCarousel() {
    showSlide(slideIndex);
    slideInterval = setInterval(function() {
        slideIndex++;
        showSlide(slideIndex);
    }, 3000);
}

function stopCarousel() {
    clearInterval(slideInterval);
}

// Открытие галереи при загрузке страницы
setTimeout( function() {
    modal.style.display = "block";
    startCarousel();
}, 3000)

// ItemsFolder
let itemsFolderCSS = document.querySelector('.items.folder');
let itemsFolderButton = document.querySelector('.desktop-button.itemsbutton');

itemsFolderButton.onclick = function () {
    itemsFolderCSS.classList.remove("hidden")
    itemsFolderCSS.classList.add("visible")
    backArrow.classList.remove("hidden")
    backArrow.classList.add("visible")
};

// djFolder
let djFolderCSS = document.querySelector('.dj.folder');
let djFolderButton = document.querySelector('.desktop-button.djbutton');

djFolderButton.onclick = function () {
    djFolderCSS.classList.remove("hidden")
    djFolderCSS.classList.add("visible")
    backArrow.classList.remove("hidden")
    backArrow.classList.add("visible")
};

// picsFolder
let picsFolderCSS = document.querySelector('.pics.folder');
let picsFolderButton = document.querySelector('.desktop-button.picsbutton');

picsFolderButton.onclick = function () {
    picsFolderCSS.classList.remove("hidden")
    picsFolderCSS.classList.add("visible")
    backArrow.classList.remove("hidden")
    backArrow.classList.add("visible")
};

// vidsFolder
let vidsFolderCSS = document.querySelector('.vids.folder');
let vidsFolderButton = document.querySelector('.desktop-button.vidsbutton');

vidsFolderButton.onclick = function () {
    vidsFolderCSS.classList.remove("hidden")
    vidsFolderCSS.classList.add("visible")
    backArrow.classList.remove("hidden")
    backArrow.classList.add("visible")
};

// txtFolder
let txtFolderCSS = document.querySelector('.readme.folder');
let txtFolderButton = document.querySelector('.desktop-button.readmebutton');

txtFolderButton.onclick = function () {
    txtFolderCSS.classList.remove("hidden")
    txtFolderCSS.classList.add("visible")
    backArrow.classList.remove("hidden")
    backArrow.classList.add("visible")
};

//shippingFolder
let shippingFolderCSS=document.querySelector('.shipping.folder')
let shippingFolderButton=document.querySelector('.desktop-button.shippingbutton')

shippingFolderButton.onclick = function() {
    shippingFolderCSS.classList.remove("hidden")
    shippingFolderCSS.classList.add("visible")
    backArrow.classList.remove("hidden")
    backArrow.classList.add("visible")
};

// archiveFolder
let archiveFolderCSS = document.querySelector('.archive.folder');
let archiveFolderButton = document.querySelector('.desktop-button.archivebutton');

archiveFolderButton.onclick = function () {
    archiveFolderCSS.classList.remove("hidden")
    archiveFolderCSS.classList.add("visible")
    backArrow.classList.remove("hidden")
    backArrow.classList.add("visible")
};

// backArrow, nameButton
let backArrow = document.querySelector('.back')

function backFunction() {
   let allVisibleWindows = document.querySelectorAll(".visible")
   let lastOne = [].slice.call(allVisibleWindows).pop();
   lastOne.classList.remove("visible")
   lastOne.classList.add("hidden")
}

function homeFunction() {
    let allVisibleWindows = document.querySelectorAll(".visible")
    for (let i of allVisibleWindows) {
        i.classList.remove("visible")
        i.classList.add("hidden")
    }
}

// openCards

function cardItemFunction(id) {
    let cardFolder = document.getElementById(id+"F")
    cardFolder.classList.remove("hidden")
    cardFolder.classList.add("visible")
}

// cardImageSwiper

function cardFunction() {
let mainImage = document.querySelector('div.card.folder.visible ul li .main-image');
let previews = document.querySelectorAll('div.folder.visible ul li .slider-preview-item a');

for (let activeImage of previews) {
activeImage.onclick = function (evt) {
  evt.preventDefault();
  mainImage.src = activeImage.href;

  let currentActive = document.querySelector('div.card.folder.visible ul li .slider-preview-item .active');
  currentActive.classList.remove('active');
  activeImage.classList.add('active');
};    
}
}
// cartOpen
let allItems = document.querySelectorAll(".hiddenitem")
function openCart() {
    if (cartArray[0][0].quantity || cartArray[0][1].quantity || cartArray[1][0].quantity || cartArray[1][1].quantity) {
        let emptyCartTitle = document.querySelector(".empty")
        emptyCartTitle.classList.remove("visibleitem")
        emptyCartTitle.classList.add("hiddenitem")
    }

    let cartFolder = document.querySelector('.cart')
    var cartCount = document.querySelectorAll(".count-pieces")
    cartFolder.classList.remove("hidden")
    cartFolder.classList.add("visible")
    backArrow.classList.remove("hidden")
    backArrow.classList.add("visible")
    if (cartArray[0][0].quantity > 0) {
        allItems[2].classList.add("visibleitem")
        allItems[2].classList.remove("hiddenitem")
        cartCount[2].innerHTML = cartArray[0][0].quantity
    }
    if (cartArray[0][1].quantity > 0) {
        allItems[3].classList.add("visibleitem")
        allItems[3].classList.remove("hiddenitem")
        cartCount[3].innerHTML = cartArray[0][1].quantity
    }
    if (cartArray[1][0].quantity > 0) {
        allItems[0].classList.add("visibleitem")
        allItems[0].classList.remove("hiddenitem")
        cartCount[0].innerHTML = cartArray[1][0].quantity
    }
    if (cartArray[1][1].quantity > 0) {
        allItems[1].classList.add("visibleitem")
        allItems[1].classList.remove("hiddenitem")
        cartCount[1].innerHTML = cartArray[1][1].quantity
    }

}


function deleteItemFromCart(id) {
    let selectedDiv = document.getElementById(id).closest("div")
    selectedDiv.classList.remove("visibleitem")
    selectedDiv.classList.add("hiddenitem")

    if (id === "item_1") {
        cartArray[1][0].quantity = 0
    }
    if (id === "item_2") {
        cartArray[1][1].quantity = 0
    }
    if (id === "item_3") {
        cartArray[0][0].quantity = 0
    }
    if (id === "item_4") {
        cartArray[0][1].quantity = 0
    }

    var sum = cartArray[0][0].quantity+cartArray[0][1].quantity+cartArray[1][0].quantity+cartArray[1][1].quantity
    var carditemcounter = document.querySelector(".cart-item-counter")
    carditemcounter.innerHTML = sum
    cartArray[2].orderSum = sum * 3500

    var totalPrice = document.querySelector(".total-price")
    totalPrice.innerHTML = cartArray[2].orderSum


    let allItems = document.querySelectorAll(".visibleitem")
    var finalPrice = 0 
    for (let i of allItems) {
        var temp=Number(i.querySelector(".cart-item-price").textContent)
        finalPrice=finalPrice+temp
    }



    if (document.querySelectorAll(".visibleitem").length==0) {
        let b=document.querySelector(".empty")
        b.classList.add("visibleitem")
        b.classList.remove("hiddenitem")
    }
}
function GetQtyPlus() {
    var input = document.querySelector(".visible > ul > li > form > section > p > #qty")
    var max = Number(input.getAttribute('max'));
    var step = Number(input.getAttribute('step'));

    var current = Number(input.value);
    var newval = (current + step);
    if(newval > max) newval = max;
    input.value = Number(newval);

    event.preventDefault()
}

function GetQtyMinis() {
    var input = document.querySelector(".visible > ul > li > form > section > p > #qty")
    var min = Number(input.getAttribute('min'));
    var max = Number(input.getAttribute('max'));
    var step = Number(input.getAttribute('step'));

    var current = Number(input.value);
    var newval = (current - step);
    if(newval < min) {
        newval = min;
    } else if(newval > max) {
        newval = max;
    }
    input.value = Number(newval);

    event.preventDefault()
}

function submitPurchaseForm(id) {
    var size = document.querySelector(".visible > ul > li > form > div > #size").value;
    var quantity =     document.querySelector(".visible > ul > li > form > section > p > #qty").value;
    var form = document.querySelector(".visible > ul > li > form");

    if (id === "tb-w-add") {

        if (cartArray[0][0].quantity === 0 && size === "L") {
            cartArray[0][0].quantity = parseInt(quantity)
        } else if (cartArray[0][0].quantity !== 0 && size === "L") {
            cartArray[0][0].quantity += parseInt(quantity)
        }

        if (cartArray[0][1].quantity === 0 && size === "XL") {
            cartArray[0][1].quantity = parseInt(quantity)
        } else if (cartArray[0][1].quantity !== 0 && size === "XL") {
            cartArray[0][1].quantity += parseInt(quantity)
        }

    }
    if (id === "tb-b-add") {
        if (cartArray[1][0].quantity === 0 && size === "L") {
            cartArray[1][0].quantity = parseInt(quantity)
        } else if (cartArray[1][0].quantity !== 0 && size === "L") {
            cartArray[1][0].quantity += parseInt(quantity)
        }

        if (cartArray[1][1].quantity === 0 && size === "XL") {
            cartArray[1][1].quantity = parseInt(quantity)
        } else if (cartArray[1][1].quantity !== 0 && size === "XL") {
            cartArray[1][1].quantity += parseInt(quantity)
        }

    }
    // console.log(cartArray)
    form.reset()
}


$(".addtocart-button").click(function () {
    var sum = cartArray[0][0].quantity+cartArray[0][1].quantity+cartArray[1][0].quantity+cartArray[1][1].quantity
    var carditemcounter = document.querySelector(".cart-item-counter")
    carditemcounter.classList.remove("hidden")
    carditemcounter.innerHTML = sum
    cartArray[2].orderSum = sum*3500
    var totalPrice = document.querySelector(".total-price")
    totalPrice.innerHTML = parseInt(cartArray[2].orderSum)
})

$(document).ready(function() {
    $("#final-order-form").submit(function(event) {
        event.preventDefault();

        var fio = $("#name").val();
        var phone = $("#online_phone").val();
        var purchase = `${cartArray[0].color}: ${cartArray[0][0].size} - ${cartArray[0][0].quantity}, ${cartArray[0][1].size} - ${cartArray[0][1].quantity}, ${cartArray[1].color}: ${cartArray[1][0].size} - ${cartArray[1][0].quantity}, ${cartArray[1][1].size} - ${cartArray[1][1].quantity}`
        var ordersum =`${cartArray[2].orderSum+ cartArray[3].shipCost}`
        var social = $("#social").val();
        var deliveryrf = $("#delivery-rf").is(':checked')
        var deliveryww = $("#delivery-ww").is(':checked')
        var freeDelivery = $("#free-delivery").is(':checked')
        var selfPickup = $("#self-pickup").is(':checked')
        var shipType

        if (deliveryrf) {
            shipType = "по РФ"
        } else if (deliveryww) {
            shipType = "по Миру"
        } else if (freeDelivery) {
            shipType = "по Екб"
        } else if (selfPickup) {
            shipType = "Самовывоз"
        }

        var address = $("#address").val();

        var formData = {
            fio: fio,
            phone: phone,
            purchase: purchase,
            ordersum: ordersum,
            social: social,
            shipType: shipType,
            address: address
        };

        $.ajax({
            url: "php/add_data.php",
            type: "POST",
            data: formData,
            success: function(response) {
                window.open(`https://www.tinkoff.ru/rm/khusnutdinov.vlad1/2rVee42229/?moneyAmount=${cartArray[2].orderSum+ cartArray[3].shipCost}`);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Ошибка: " + textStatus, errorThrown);
            }
        });
        var url = `https://www.tinkoff.ru/rm/khusnutdinov.vlad1/2rVee42229/?moneyAmount=${cartArray[2].orderSum+ cartArray[3].shipCost}`
        window.open(url, '_blank');
        let orderPopup = document.querySelector(".order-popup")
        orderPopup.classList.remove("hidden")
        orderPopup.classList.add("visible")
    });
});

function closeOrderPopup() {
    let orderPopup = document.querySelector(".order-popup")
    orderPopup.classList.remove("visible")
    orderPopup.classList.add("hidden")
}

// cartOrderForm *************************

const deliveryRFRadio = document.getElementById('delivery-rf');
const addressField = document.getElementById('address-field');

deliveryRFRadio.addEventListener('change', function() {
    var totalPrice = document.querySelector(".total-price")

    if (this.checked) {
        cartArray[3].shipCost = 300
        totalPrice.innerHTML = cartArray[2].orderSum + cartArray[3].shipCost
        addressField.style.display = 'block';
    } else {
        cartArray[3].shipCost = 0
        cartArray[2].orderSum = cartArray[2].orderSum - cartArray[3].shipCost
        totalPrice.innerHTML = cartArray[2].orderSum
        addressField.style.display = 'none';
    }
});

function addressFieldHide() {
    var totalPrice = document.querySelector(".total-price")
    cartArray[3].shipCost = 0
    totalPrice.innerHTML = cartArray[2].orderSum + cartArray[3].shipCost
    addressField.style.display = 'none';
}

// phoneNumberValidation *****************

function setCursorPosition(pos, e) {
    // e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function mask() {
    //console.log('mask',e);
    var matrix = this.placeholder,// .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function() {
        return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
}
window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#online_phone");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
});



