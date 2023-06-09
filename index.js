// geting canvas by Boujjou Achraf
var c = document.getElementById("canv");
var ctx = c.getContext("2d");

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

/*
function toNum(str) {
    const num = Number(str.replace(/ /g, ""));
    return num;
}
  
function toCurrency(num) {
    const format = new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
    }).format(num);
    return format;
}

const cart = document.querySelector("#cart");

const popup = document.querySelector(".popup");
const popupClose = document.querySelector("#popup_close");
const body = document.body;
const popupContainer = document.querySelector("#popup_container");
const popupProductList = document.querySelector("#popup_product_list");
const popupCost = document.querySelector("#popup_cost");
const popupDiscount = document.querySelector("#popup_discount");
const popupCostDiscount = document.querySelector("#popup_cost_discount");

cart.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.add("popup--open");
    body.classList.add("lock");
});

popupClose.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.remove("popup--open");
    body.classList.remove("lock");
});

class Product {
    imageSrc;
    name;
    price;
    priceDiscount;
    constructor(card) {
      this.imageSrc = card.querySelector(".card__image").children[0].src;
      this.name = card.querySelector(".card__title").innerText;
      this.price = card.querySelector(".card__price--common").innerText;
      this.priceDiscount = card.querySelector(".card__price--discount").innerText;
    }
}

const cardAddArr = Array.from(document.querySelectorAll(".card__add"));
const cartNum = document.querySelector("#cart_num");

class Cart {
  products;
  constructor() {
    this.products = [];
  }
  get count() {
    return this.products.length;
  }
  addProduct(product) {
    this.products.push(product);
  }
  removeProduct(index) {
    this.products.splice(index, 1);
  }
  get cost() {
    const prices = this.products.map((product) => {
      return toNum(product.price);
    });
    const sum = prices.reduce((acc, num) => {
      return acc + num;
    }, 0);
    return sum;
  }
  get costDiscount() {
    const prices = this.products.map((product) => {
      return toNum(product.priceDiscount);
    });
    const sum = prices.reduce((acc, num) => {
      return acc + num;
    }, 0);
    return sum;
  }
  get discount() {
    return this.cost - this.costDiscount;
  }
}

const myCart = new Cart();

if (localStorage.getItem("cart") == null) {
  localStorage.setItem("cart", JSON.stringify(myCart));
}

const savedCart = JSON.parse(localStorage.getItem("cart"));
myCart.products = savedCart.products;
cartNum.textContent = myCart.count;

myCart.products = cardAddArr.forEach((cardAdd) => {
    cardAdd.addEventListener("click", (e) => {
      e.preventDefault();
      const card = e.target.closest(".card");
      const product = new Product(card);
      const savedCart = JSON.parse(localStorage.getItem("cart"));
      myCart.products = savedCart.products;
      myCart.addProduct(product);
      localStorage.setItem("cart", JSON.stringify(myCart));
      cartNum.textContent = myCart.count;
    });
});

function popupContainerFill() {
    popupProductList.innerHTML = null;
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    myCart.products = savedCart.products;
    const productsHTML = myCart.products.map((product) => {
      const productItem = document.createElement("div");
      productItem.classList.add("popup__product");
  
      const productWrap1 = document.createElement("div");
      productWrap1.classList.add("popup__product-wrap");
      const productWrap2 = document.createElement("div");
      productWrap2.classList.add("popup__product-wrap");
  
      const productImage = document.createElement("img");
      productImage.classList.add("popup__product-image");
      productImage.setAttribute("src", product.imageSrc);
  
      const productTitle = document.createElement("h2");
      productTitle.classList.add("popup__product-title");
      productTitle.innerHTML = product.name;
  
      const productPrice = document.createElement("div");
      productPrice.classList.add("popup__product-price");
      productPrice.innerHTML = toCurrency(toNum(product.priceDiscount));
  
      const productDelete = document.createElement("button");
      productDelete.classList.add("popup__product-delete");
      productDelete.innerHTML = "✖";
  
      productDelete.addEventListener("click", () => {
        myCart.removeProduct(product);
        localStorage.setItem("cart", JSON.stringify(myCart));
        popupContainerFill();
      });
  
      productWrap1.appendChild(productImage);
      productWrap1.appendChild(productTitle);
      productWrap2.appendChild(productPrice);
      productWrap2.appendChild(productDelete);
      productItem.appendChild(productWrap1);
      productItem.appendChild(productWrap2);
  
      return productItem;
    });
  
    productsHTML.forEach((productHTML) => {
      popupProductList.appendChild(productHTML);
    });
  
    popupCost.value = toCurrency(myCart.cost);
    popupDiscount.value = toCurrency(myCart.discount);
    popupCostDiscount.value = toCurrency(myCart.costDiscount);
}
*/