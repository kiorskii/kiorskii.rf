// geting canvas by Boujjou Achraf
var c = document.getElementById("canv");
var ctx = c.getContext("2d");

const price = 3500
var cartArray = [
    {
        "color":"white",
        0: {"size": "L",
            "quantity":0}

    },
    {
        "color":"white",
        "size": "XL",
        "quantity":0
    },
    {
        "color":"black",
        "size": "L",
        "quantity":0
    },
    {
        "color":"black",
        "size": "XL",
        "quantity":0
    },    ]

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var matrix = "skiSKI$";
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 12;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
    drops[x] = 1; 

//drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#ab4657";//green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 60);

var loader = document.getElementById("preloader")
function loaderDisable(){
    loader.style.display="none";
}

setTimeout(loaderDisable, 1);

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
};

function homeFunction() {
    let allVisibleWindows = document.querySelectorAll(".visible")
    for (let i of allVisibleWindows) {
        i.classList.remove("visible")
        i.classList.add("hidden")
    }
};

// openCards

function cardItemFunction(id) {
    let cardFolder = document.getElementById(id+"F")
    cardFolder.classList.remove("hidden")
    cardFolder.classList.add("visible")
};

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

function openCart() {
    let cartFolder = document.querySelector('.cart')
    cartFolder.classList.remove("hidden")
    cartFolder.classList.add("visible")
    backArrow.classList.remove("hidden")
    backArrow.classList.add("visible")
    let allItems = document.querySelectorAll(".visibleitem")
    var finalPrice = 0 
    for (let i of allItems) {
        var temp=Number(i.querySelector(".cart-item-price").textContent)
        finalPrice=finalPrice+temp
    }
    let totalPrice = document.querySelector('.total-price')
    totalPrice.innerHTML=finalPrice
}

// cart

function addToCart(id) {
    let a=document.querySelector(".card.folder.visible>ul>li>.order-options>li>#item-size").value
    let cartItemAdd = document.getElementById(id+"ed_"+a)
    cartItemAdd.classList.remove("hiddenitem")
    cartItemAdd.classList.add("visibleitem")
    let b=document.querySelector(".empty")
    b.classList.remove("visibleitem")
    b.classList.add("hiddenitem")
}

function deleteItemFromCart(id) {
    let selectedDiv = document.getElementById(id).closest("div")
    selectedDiv.classList.remove("visibleitem")
    selectedDiv.classList.add("hiddenitem") 
    let allItems = document.querySelectorAll(".visibleitem")
    var finalPrice = 0 
    for (let i of allItems) {
        var temp=Number(i.querySelector(".cart-item-price").textContent)
        finalPrice=finalPrice+temp
    }
    let totalPrice = document.querySelector('.total-price')
    totalPrice.innerHTML=finalPrice
    if (document.querySelectorAll(".visibleitem").length==0) {
        let b=document.querySelector(".empty")
        b.classList.add("visibleitem")
        b.classList.remove("hiddenitem")
    }
}

var input = document.querySelector('#qty');
var btnminus = document.querySelector('.qtyminus');
var btnplus = document.querySelector('.qtyplus');

if (input !== undefined && btnminus !== undefined && btnplus !== undefined && input !== null && btnminus !== null && btnplus !== null) {

    var min = Number(input.getAttribute('min'));
    var max = Number(input.getAttribute('max'));
    var step = Number(input.getAttribute('step'));

    function qtyminus(e) {
        var current = Number(input.value);
        var newval = (current - step);
        if(newval < min) {
            newval = min;
        } else if(newval > max) {
            newval = max;
        }
        input.value = Number(newval);
        e.preventDefault();
    }

    function qtyplus(e) {
        var current = Number(input.value);
        var newval = (current + step);
        if(newval > max) newval = max;
        input.value = Number(newval);
        e.preventDefault();
    }

    btnminus.addEventListener('click', qtyminus);
    btnplus.addEventListener('click', qtyplus);

} // End if test

    var form = document.querySelector("form");

    form.addEventListener('submit', function(event) {

        var size = document.getElementById('size').value;
        var quantity = document.getElementById('qty').value;

        // Ваши действия с полученными значениями
        console.log('Размер: ' + size);
        console.log('Количество: ' + quantity);

        // Здесь вы можете отправить данные на сервер для обработки и добавления в корзину
        // Например, с помощью AJAX-запроса

        event.preventDefault(); // Отменяем стандартное поведение формы (перезагрузку страницы)

        // Очищаем форму после отправки данных
        form.reset();
    });


function submitPurchaseForm(id) {
    var size = document.getElementById('size').value;
    var quantity = document.getElementById('qty').value;

    switch (id === "tb-w-add") {
        case cartArray
    }

    if (id === "tb-w-add") {
        if (cartArray[0].attr.size === "0") {
            cartArray[0].attr.size = size
            cartArray[0].attr.quantity = quantity
        } else {
            cartArray[0].attr.size += size
            cartArray[0].attr.quantity += quantity
        }
    } else if (id === "tb-b-add") {
        if (cartArray[1].attr.size === "0") {
            cartArray[1].attr.size = size
            cartArray[1].attr.quantity = quantity
        } else {
            cartArray[1].attr.size += size
            cartArray[1].attr.quantity += quantity
        }

    }

    console.log(cartArray)
    form.reset()
}

