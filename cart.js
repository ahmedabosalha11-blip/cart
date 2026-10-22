// start variabls
let CounterCart = document.querySelector('.count');
let CounterProducts = document.querySelector('.countr');
let TotalArea = document.querySelector('.total-area');
let headingText = ['premium sound unmatched ','Premium Time, Timeless','Style Meets Everyday'];
let primaryText = ['quality','Style','Convenience'];
let seacrhBtn = document.querySelector('.search-btn');
let heartIcon = document.querySelectorAll('.heart');
let proFav = document.querySelector('.fav-products ');
let favCounter = document.querySelector('.fav-counter');
let counterFav = document.querySelector('.counter-fav');
let favList = document.querySelector('.fav-list');
let addForm = document.querySelector('.add-form');
let formCloseBtn = document.querySelector('.add-form .close-btn');
let cancel = document.querySelector('.add-form .btns .cancel');
let saveAddress = document.querySelector('.add-form .btns .save');
let space = document.getElementById('space');
let fullName = document.getElementById('fullname');
let street = document.getElementById('street');
let city = document.getElementById('city');
let country = document.getElementById('country');
let phone = document.getElementById('phone');
let code = document.getElementById('code');
let addressSection = document.querySelector('.address-section');
let data = document.getElementById('data');
const countries = ["Egypt", "Saudi Arabia", "United Arab Emirates", "Morocco", "Algeria", "Iraq", "Qatar", "Jordan", "United States", "United Kingdom", "France", "Germany", "Japan", "Brazil", "Canada", "Italy", "Spain", "Turkey", "Australia", "India"];
let favArray = [];
let updateBtn = document.querySelector('.update');
let displayBtn = document.querySelector('.display');
let themeSlide = document.querySelector('.account-setting');
let themeCloseBtn = document.querySelector('.account-setting .close-btn');
let lightTheme = document.querySelector('.account-setting .themes .light');
let darkTheme = document.querySelector('.account-setting .themes .dark');
let themeMood = 'light';
let aboutSlide = document.querySelector('.about-us');
let aboutCloseBtn = document.querySelector('.about-us .close-btn');
let aboutBtn = document.querySelector('.about');
let helpSlide = document.querySelector('.help');
let helpCloseBtn = document.querySelector('.help .close-btn');
let helpBtn = document.querySelector('.help-support');
if(localStorage.favpro != null){
    favArray = JSON.parse(localStorage.favpro);
    favCounter.innerHTML = `(${favArray.length})`;
    counterFav.innerHTML = `${favArray.length}`;
}

// end variabls
// menue event
seacrhBtn.onclick = function(){
    document.querySelector('.container nav .search-section input').focus()
}

// end event
// start user slide
let cartSlide = document.querySelector('.cart-slide');
let userIcon = document.querySelector('.user');
let logInSlide = document.querySelector('.login-slide');
let overlay = document.querySelector('.overlay');
let loginCloseBtn = document.querySelector('.login-slide .close-btn');
let orders = document.querySelector('.orders');
let favSlide = document.querySelector('.fav-slide');
let favIcon = document.querySelector('.fav-icon');
let favCloseBtn = document.querySelector('.fav-slide .close-btn');
let addressBtn = document.querySelector('.my-address');
let addressSlide = document.querySelector('.address-slide');
let addressCloseBtn = document.querySelector('.address-slide .close-btn');
let addAddressBtn = document.querySelector('.address-slide .add-address');


userIcon.onclick = function(){
    overlay.style.display = 'block';
    logInSlide.style.display = 'block';
}
loginCloseBtn.onclick = function(){
    overlay.style.display = 'none';
    logInSlide.style.display = 'none';
}
overlay.onclick = function(){
    overlay.style.display = 'none';
    logInSlide.style.display = 'none';
    cartSlide.style.display = 'none'; 
    favSlide.style.display = 'none';
    addressSlide.style.display = 'none';
    addForm.style.display = 'none';
    themeSlide.style.display = 'none';
    aboutSlide.style.display = 'none';
    helpSlide.style.display = 'none';
}
orders.onclick = function(){
    cartSlide.style.display= 'block';
    logInSlide.style.display = 'none';
}
// end user slide

// start search events
let searchIcon = document.querySelector('.search-icon');
let input = document.querySelector('.search');
let inputIcon = document.querySelector('.input-icon');
searchIcon.onclick = function(e){
    e.stopPropagation();
    input.style.display = 'block'; 
    inputIcon.style.display = 'block'; 
}
input.onclick = function(e){
    e.stopPropagation();
}
document.onclick = function(){
    input.style.display = 'none'; 
    inputIcon.style.display = 'none'; 
}
// end search events
// start changing the img
let images = ['images/headphone-removebg-preview.png','imgs/wa-removebg-preview.png','imgs/bag-removebg-preview.png'];
let paraText = ['experience crystal clear sound with our premium headphones bulit for comfort, made for you.','Experience precision and elegance with our premium black stainless-steel watch. Designed for everyday confidence, with a classic look that fits every occasion.','Carry your essentials in style with our modern, durable bag. Designed for comfort, organization, and a polished look wherever you go.'];
let num = 0 ;
let ForwarBtn = document.querySelector('.forward');
let BackarBtn = document.querySelector('.back');
let image = document.querySelector('.img');
let DivOne = document.querySelector('.one');
let DivTwo = document.querySelector('.two');
let DivThree = document.querySelector('.three');
let chosen = document.querySelectorAll('.chosen');
let heading = document.querySelector('.heading');
let headingSpan = document.querySelector('.heading span');
let paragraph = document.querySelector('.paragraph');

ForwarBtn.onclick = function(){
    num++
    if(num == 3){
        num = 0
        
    }
    image.src = images[num]
    heading.innerHTML = `${headingText[num]} <span>${primaryText[num]}`;
    paragraph.innerHTML = paraText[num];
    chosen.forEach(ele => ele.style.backgroundColor = '#ccc')
    chosen[num].style.backgroundColor = 'rgb(0, 110, 255)'
}
BackarBtn.onclick = function(){
    num--
    if(num == -1){
        num = 2
    }
    image.src = images[num]
    heading.innerHTML = `${headingText[num]} <span>${primaryText[num]}`;
    paragraph.innerHTML = paraText[num];
    chosen.forEach(ele => ele.style.backgroundColor = '#ccc');
    chosen[num].style.backgroundColor = 'rgb(0, 110, 255)';
    
}
setInterval(function(){
    num++
    if(num == 3){
        num = 0
    }
    image.src = images[num];
    heading.innerHTML = `${headingText[num]} <span>${primaryText[num]}`;
    paragraph.innerHTML = paraText[num];
    chosen.forEach(ele => ele.style.backgroundColor = '#ccc');
    chosen[num].style.backgroundColor = 'rgb(0, 110, 255)';
    
},15000)
// end changing the img

// add cards
let ProductsBoxs = document.querySelector('.products-boxs')
let products;
if(localStorage.cards != null){
    products = JSON.parse(localStorage.cards);
}else{
    products = [
        {id:1,ProductName:'white sneakers',price: '69.99',ImgSrc: "images/shose.png",stock:10,count:0,},
        {id:2,ProductName:'classic watch',price: '89.99',ImgSrc: "images/watch2-removebg-preview.png",stock:5,count:0,},
        {id:3, ProductName:'sunglasses',price: '24.99',ImgSrc: "images/glsses.png",stock:7,count:0,},
        {id:4, ProductName:'smart watch',price: '49.99',ImgSrc: "images/watch-removebg-preview.png",stock:8,count:0,},
        {id:5,ProductName:'wierless headphones',price: '59.99',ImgSrc: "images/headphone-removebg-preview.png",stock:11,count:0,},
        {id:6,ProductName:'backBag',price: '39.99',ImgSrc: "images/bagback.png",stock:20,count:0,},
        {id:7,ProductName:'coffe machine',price: '3599.99',ImgSrc: "imgs/coffe_m-removebg-preview.png",stock:5,count:0,},
        {id:8,ProductName:'camera pro',price: '799.99',ImgSrc: "imgs/camera-removebg-preview.png",stock:3,count:0,},
        {id:9,ProductName:'backBag',price: '29.99',ImgSrc: "imgs/bag-removebg-preview.png",stock:10,count:0,},
        {id:10,ProductName:'adidas shose ',price: '89.99',ImgSrc: "imgs/black_s-removebg-preview.png",stock:25,count:0,},
        {id:11,ProductName:'wierless headphones pro ',price: '79.99',ImgSrc: "imgs/headp-removebg-preview.png",stock:26,count:0,},
        {id:12,ProductName:'luxury prefume ',price: '39.99',ImgSrc: "imgs/perfiom-removebg-preview.png",stock:100,count:0,},
        {id:13,ProductName:'iphone 15 pro ',price: '999.99',ImgSrc: "imgs/phone-removebg-preview.png",stock:150,count:0,},
        {id:14,ProductName:'white sneakers ',price: '75.99',ImgSrc: "imgs/sho-removebg-preview.png",stock:35,count:0,},
        {id:15,ProductName:'classic sunglasses ',price: '39.99',ImgSrc: "imgs/sung-removebg-preview.png",stock:45,count:0,},
        {id:16,ProductName:'classic t-shirt ',price: '34.99',ImgSrc: "imgs/t-shirt-removebg-preview.png",stock:50,count:0,},
        {id:17,ProductName:'travel bag ',price: '89.99',ImgSrc: "imgs/travel_bag-removebg-preview.png",stock:73,count:0,},
        {id:18,ProductName:'elegant classic watch ',price: '34.99',ImgSrc: "imgs/wa-removebg-preview.png",stock:95,count:0,},
        {id:20,ProductName:'Classic Cotton T-Shirt ',price: '35.99',ImgSrc: "imgs/t-removebg-preview.png",stock:45,count:0,},
        {id:21,ProductName:'Premium Neck T-Shirt ',price: '32.99',ImgSrc: "imgs/t-shirt2-removebg-preview.png",stock:50,count:0,},
        {id:22,ProductName:'classic shose ',price: '97.99',ImgSrc: "imgs/shose-removebg-preview.png",stock:25,count:0,},
        {id:23,ProductName:'black cap ',price: '25.99',ImgSrc: "imgs/black_cap-removebg-preview.png",stock:15,count:0,},
        {id:24,ProductName:'white cap ',price: '25.99',ImgSrc: "imgs/white_cap-removebg-preview.png",stock:35,count:0,},
        {id:25,ProductName:'diseny cap ',price: '28.99',ImgSrc: "imgs/cap_3-removebg-preview.png",stock:45,count:0,},
    ]
}
// start sections
let ElectronicsBtn = document.querySelector('.electronics');

let electronics = products.filter( pro => [4, 7, 5, 8, 11, 13].includes(pro.id));

let section = 'all';
function ElectronicSection() {
    renderProducts(electronics);
}
ElectronicsBtn.onclick = function(){
    section = 'Electronic'
    ElectronicSection();
}
let fashion = products.filter(pro => [3,15,16,20,21].includes(pro.id));
let FashionBtn = document.querySelector('.fashion')
function FashionSection() {
    renderProducts(fashion);
}
FashionBtn.onclick = function(){
    section = 'fashion';
    FashionSection()
}

let Bags = products.filter( pro => [6,9,17].includes(pro.id));
let BagsBtn = document.querySelector('.bags');
function BagsSection() {
    renderProducts(Bags);
}
BagsBtn.onclick = function(){
    section = 'Bags';
    BagsSection();
}

let watches = products.filter( pro => [2,4,18].includes(pro.id));
let WatchBtn = document.querySelector('.watches')
function WhatchesSection() {
    renderProducts(watches);
}
WatchBtn.onclick = function(){
    section = 'Watches';
    WhatchesSection();
}
let shoeses = products.filter(pro => [1,14,22].includes(pro.id));
let ShoesBtn = document.querySelector('.shoes');
function ShoesSection() {
    renderProducts(shoeses);
}
ShoesBtn.onclick = function(){
    section = 'shoes';
    ShoesSection();
}
let caps = products.filter(pro => [23,24,25].includes(pro.id));
let capsBtn = document.querySelector('.caps');
function capsSection() {
    renderProducts(caps);
}
capsBtn.onclick = function(){
    section = 'caps';
    capsSection();
}
let ViewAll = document.querySelector('.View-all');
ViewAll.onclick = function(){
    section = 'all';
    ShowProduct();
}
// end start sections

function ShowProduct() {
    renderProducts(products);
}
ShowProduct();
// end add cards
// start render function
function renderProducts(productArray) {
    ProductsBoxs.innerHTML = '';

    for (let i = 0; i < productArray.length; i++) {
        let product = productArray[i];
        let outOfStock = product.stock <= 0;
        let isFavorite = favArray.some(fav => fav.id == product.id);

        ProductsBoxs.insertAdjacentHTML('beforeend', `
            <div class="parent">
                <i onclick="addFavPro(${product.id}, this)"
                   class="heart ${isFavorite ? 'gold-heart fa-solid' : 'fa-regular'} fa-heart"></i>

                <img src="${product.ImgSrc}" alt="">

                <div class="text">
                    <h3>${product.ProductName}</h3>
                    <p>$${product.price}</p>

                    <div class="star d-flex justify-sb align-c">
                        <div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>

                        <div>
                            <p class="stock">stock : ${product.stock}</p>
                        </div>
                    </div>
                </div>

                <p class="quantity"
                   style="display: ${outOfStock ? 'flex' : 'none'};">
                   The quantity is out of stock
                </p>

                <button onclick="BuyProduct(${product.id})"
                        class="add"
                        style="display: ${outOfStock ? 'none' : 'flex'};">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>add to cart</p>
                </button>
            </div>
        `);
    }
}
// end render function
// start refresh function
function refreshProducts() {
    if (section == 'all') ShowProduct();
    else if (section == 'Electronic') ElectronicSection();
    else if (section == 'fashion') FashionSection();
    else if (section == 'Bags') BagsSection();
    else if (section == 'Watches') WhatchesSection();
    else if (section == 'shoes') ShoesSection();
    else if (section == 'caps') capsSection();
}
// end refresh function
// start cart 

$('.cart').click(function () {
    $('.overlay').show();
    $('.cart-slide').show();
});
$('.close-btn').click(function(){
    $('.overlay').hide();
    $('.cart-slide').hide();
})
$('.continue p').click(function(){
    $('.overlay').hide();
    $('.cart-slide').hide();
})
// start cart
// add product to the cart
let empty = document.querySelector('.empty')
let NewArray;
if(localStorage.newproduct != null){
    NewArray = JSON.parse(localStorage.newproduct)
}else{
    NewArray = [];
}

function BuyProduct(id){
    let product = products.find(pro => pro.id == id)
        if(!product || product.stock <= 0){
            return
        }
        let CartProduct = NewArray.find(pro => pro.id == id)
        if(!CartProduct){
            product.count = 1
            NewArray.push({...product})
        }
        else{
            CartProduct.count++
        }
        product.stock--
        localStorage.cards = JSON.stringify(products)
        localStorage.newproduct = JSON.stringify(NewArray)
        ShowProductInCart();
        showFavPro();
        refreshProducts();
        
}

// end add product to the cart
// show product in acrt
let productBox = document.querySelector('.products-box');
let ContentArea = document.querySelector('.content-area')
function ShowProductInCart(){
    if(NewArray.length == 0){
        empty.style.display = 'flex';
        productBox.style.display = 'flex';
    }else{
        empty.style.display = 'none';
        productBox.style.display = 'block';
    }
    ContentArea.innerHTML = '';
    for(let i = 0 ; i < NewArray.length ; i++){
        let product = products.find(pro => pro.id == NewArray[i].id)
        ContentArea.insertAdjacentHTML('beforeend',`
                <div class="my-product">
                    <div class="image-box">
                        <img src=${NewArray[i].ImgSrc} alt="">
                    </div>
                    <div class="info">
                        <div class="text d-flex-c g-10 fw-b">
                            <p>${NewArray[i].ProductName}</p>
                            <span>unit price: $${NewArray[i].price}</span>
                            <span class="d-flex">total price: $<p class="price">${Math.floor(+NewArray[i].price * NewArray[i].count)}</p></span>
                            <span>stock : (${product.stock})</span>
                        </div>
                        <div class="math-box d-flex align-c g-10">
                            <div class="math d-flex align-c">
                                <span onclick="minus(${i})" class="minus">-</span>
                                <span class="counter">${NewArray[i].count}</span>
                                <span onclick="Plus(${i})" class="plus">+</span>
                            </div>
                            <i onclick="DeletPro(${i})" class="delete fa-solid fa-trash-can"></i>
                        </div>
                    </div>
                </div>
            
            `)
    }
    GetTotal();
    GetTotalPrice();
    
    
}
ShowProductInCart()
// end show product in acrt

// delete product
function DeletPro(i){
    let product = NewArray[i]
    let OriginalProduct = products.find(pro => pro.id == product.id)
    OriginalProduct.stock += product.count
    NewArray.splice(i,1);
    localStorage.newproduct = JSON.stringify(NewArray);
    localStorage.cards = JSON.stringify(products);
    ShowProductInCart();
    showFavPro();
    refreshProducts();
}
// end delete product
// plus and muins


function Plus(i){
    let CartProduct = NewArray[i]
    let OriginalPro = products.find(pro => pro.id == CartProduct.id);
    if (!OriginalPro || OriginalPro.stock <= 0) {
        return;
    }
    OriginalPro.stock--
    CartProduct.count++
    localStorage.newproduct = JSON.stringify(NewArray);
    localStorage.cards = JSON.stringify(products);
    ShowProductInCart();
    showFavPro();
    GetTotal();
    refreshProducts();
}
function minus(i){
    let CartProduct = NewArray[i]
    let OriginalPro = products.find(pro => pro.id == CartProduct.id);
    if(!OriginalPro){
        return
    }
    OriginalPro.stock++
    if(NewArray[i].count <= 1){
        NewArray.splice(i,1)
    }
    else{
        CartProduct.count--
    }
    
    localStorage.newproduct = JSON.stringify(NewArray);
    localStorage.cards = JSON.stringify(products);
    ShowProductInCart();
    showFavPro();
    GetTotal();
    refreshProducts();
}
// end plus and muins
// get total products
if(localStorage.TaotalProducts != null){
    CounterCart.innerHTML = `(${localStorage.TaotalProducts})`;
    CounterProducts.innerHTML = `${localStorage.TaotalProducts}`;
}else{
    CounterCart.innerHTML = `(0)`;
    CounterProducts.innerHTML = `0`;
}
function GetTotal(){
    let CounterSpan = document.querySelectorAll('.counter');
    let spanInner = [...CounterSpan].map(span => span.innerHTML);
    let total = spanInner.reduce((pre,curr) => +pre + +curr , 0);
    localStorage.TaotalProducts = total;
    CounterCart.innerHTML = `(${localStorage.TaotalProducts})`;
    CounterProducts.innerHTML = `${localStorage.TaotalProducts}`;

}
GetTotal();
// end get total products
// get total price
if(localStorage.TotalPrice != null){
    TotalArea.innerHTML = `$${localStorage.TotalPrice}`;
}
else{
    TotalArea.innerHTML = `$0`;
}
function GetTotalPrice(){
    let AllPrice = document.querySelectorAll('.price');
    let InnerPrice = [...AllPrice].map(iner => iner.innerHTML);
    let TotalPrice = InnerPrice.reduce((pre,curr) => +pre + +curr ,0);
    localStorage.TotalPrice = TotalPrice
    TotalArea.innerHTML = `$${localStorage.TotalPrice}`;

    
}
GetTotalPrice();
// end get total price
// start fav slide



favIcon.onclick = function(){
    overlay.style.display = 'block';
    favSlide.style.display = 'block';
}
favCloseBtn.onclick = function(){
    overlay.style.display = 'none';
    favSlide.style.display = 'none';
}
favList.onclick = function(){
    overlay.style.display = 'block';
    favSlide.style.display = 'block';
    logInSlide.style.display = 'none';
}

function addFavPro(id,heart){
    let product = products.find(pro=> pro.id == id);
    let favProduct = favArray.find(pro => pro.id == id);
    let favIndex = favArray.findIndex(pro => pro.id == id);
    console.log(favIndex);
    
    if(!favProduct){
        favArray.push(product);
        heart.classList.add('gold-heart')
    }
    else{
        favArray.splice(favIndex,1)
    }
    localStorage.favpro = JSON.stringify(favArray);
    favCounter.innerHTML = `(${favArray.length})`;
    counterFav.innerHTML = `${favArray.length}`;
    refreshProducts();

    showFavPro();
}
// end fav slide
// start show fav pro in fav slide
function showFavPro(){
    proFav.innerHTML = '';
    if(favArray.length == 0){
        proFav.style.cssText = `
                display: flex;
                flex-direction:column;
                justify-content: center;
                align-items: center;  
                gap:10px;
        `
        proFav.innerHTML = `
            <i class="fa-solid fa-heart-circle-xmark f-150 c-primary mb-10"></i>
            <h4>your wishlist is empty</h4>
            <p class="c-primary">you haven't added any products to your wishlist yet</p>
        `
    }else{
        proFav.style.display = 'block'
        for(let i = 0 ; i < favArray.length ; i++){
            let product = products.find(pro => pro.id == favArray[i].id)
            proFav.insertAdjacentHTML("beforeend",`
                
                    <div class="product d-flex justify-sb align-c">
                    <div class="image-info d-flex align-c g-10">
                        <img src=${favArray[i].ImgSrc} alt="">
                        <div class="text d-flex-c g-10">
                            <h4>${favArray[i].ProductName}</h4>
                            <p class="fw-b">$${favArray[i].price}</p>
                            <div class="d-flex align-c g-5 c-gold f-14">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <p>(<span>${product.stock}</span>)</p>
                            </div>
                        </div>
                    </div>
                    <div class="btns d-flex-c g-15">
                        <button onclick="DeletFavPro(${i})" class="remove"><i class=" fa-solid fa-trash-can"></i></button>
                        <button onclick="BuyProduct(${favArray[i].id})" class="add-fav d-flex align-c g-5">add<i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                </div>
                
                
                `)
        }
    }
}
showFavPro();

function DeletFavPro(i){
    favArray.splice(i,1);
    localStorage.favpro = JSON.stringify(favArray);
    favCounter.innerHTML = `(${favArray.length})`;
    counterFav.innerHTML = `${favArray.length}`;
    showFavPro();
    refreshProducts();
}
// end show fav pro in fav slide
// start my address slide
addressBtn.onclick = () => {
    overlay.style.display = 'block';
    logInSlide.style.display = 'none';
    addressSlide.style.display = 'block';
}
addressCloseBtn.onclick = () => {
    overlay.style.display = 'none';
    addressSlide.style.display = 'none';
}

// end my address slide
// start add form
addAddressBtn.onclick = () => {
    addForm.style.display = 'block';
    addressSlide.style.display = 'none';
    updateBtn.style.display = 'none';
    saveAddress.style.display = 'block';
}
formCloseBtn.onclick = () => {
    addForm.style.display = 'none';
    overlay.style.display = 'none';
}
cancel.onclick = () => {
    overlay.style.display = 'block';
    addForm.style.display = 'none';
    addressSlide.style.display = 'block';
    
}
let numId;
let allAddresses;
if(localStorage.all != null){
    allAddresses = JSON.parse(localStorage.all);
    numId = localStorage.id
}else{
    allAddresses = [];
    numId = 0
}
saveAddress.onclick = () => {

    // Check inputs first
    if (
        space.value.trim() !== '' &&
        fullName.value.trim() !== '' &&
        street.value.trim() !== '' &&
        city.value.trim() !== '' &&
        country.value.trim() !== '' &&
        phone.value.trim() !== '' &&
        code.value.trim() !== ''
    ) {

        numId++;
        localStorage.id = numId;

        let newAddress = {
            id: numId,
            space: space.value,
            fullName: fullName.value,
            street: street.value,
            city: city.value,
            country: country.value,
            phone: phone.value,
            code: code.value,
        };

        allAddresses.push(newAddress);
        localStorage.all = JSON.stringify(allAddresses);

        // Clear inputs
        space.value = '';
        fullName.value = '';
        street.value = '';
        city.value = '';
        country.value = '';
        phone.value = '';
        code.value = '';

        // Show addresses
        addForm.style.display = 'none';
        addressSlide.style.display = 'block';

        makingAddress();

    } else {
        alert('Please fill in all fields');
    }
};

// end add form
// start append data in datalist
countries.forEach(coun => {
    data.innerHTML += `<option>${coun}</option>`
})
// end append data in datalist
// start making address
function makingAddress(){
    addressSection.innerHTML ='';
    if(allAddresses.length == 0){
        addressSection.style.cssText = `
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            gap:10px;
        `
        addressSection.innerHTML = `
        
            <i class="fa-solid fa-location-pin f-150 c-primary mb-10"></i>
            <h3>No saved addresses yet</h3>
            <p class="c-primary">add an address to make your checkout faster</p>
        `;
    }
    else{
        addressSection.style.display = 'block';
        for(let i = 0 ; i < allAddresses.length ; i++){
            addressSection.insertAdjacentHTML("beforeend",`
                <div class="address d-flex align-c g-15">
                    <i class="main-icon fa-solid fa-house-chimney"></i>
                    <div class="text-btns d-flex align-c justify-sb">
                        <div class="text d-flex-c g-5">
                            <p class="fw-b">${allAddresses[i].space}</p>
                            <p class="fw-b">${allAddresses[i].fullName}</p>
                            <p class="op-5">${allAddresses[i].street}</p>
                            <p class="op-5">${allAddresses[i].city}, ${allAddresses[i].country} - ${allAddresses[i].code}</p>
                            <p class="op-5"><i class="fa-solid fa-phone"></i> ${allAddresses[i].phone}</p>
                        </div>
                        <div class="btns d-flex-c g-15">
                            <button onclick="updateAddress(${i})"><i class="fa-solid fa-pencil"></i></button>
                            <button onclick="deleteAddress(${i})"><i class="x-btn fa-solid fa-trash-can"></i></i></button>
                        </div>
                    </div>
                </div>
            
            
            `)
        }
    }
    
}
makingAddress()
// end making address
// start delete address
function deleteAddress(i){
    allAddresses.splice(i,1);
    localStorage.all = JSON.stringify(allAddresses);
    makingAddress();
}
// end delete address
// start update data
function updateAddress(i){
    currentIndex = i;
    space.value= allAddresses[i].space;
    fullName.value= allAddresses[i].fullName;
    street.value= allAddresses[i].street;
    city.value= allAddresses[i].city;
    country.value= allAddresses[i].country;
    phone.value= allAddresses[i].phone;
    code.value = allAddresses[i].code;
    localStorage.all = JSON.stringify(allAddresses)
    addressSlide.style.display = 'none';
    addForm.style.display = 'block';
    saveAddress.style.display = 'none';
    updateBtn.style.display = 'block';
}
function finishUpdate(){
    // Check inputs first
    if (
        space.value.trim() !== '' &&
        fullName.value.trim() !== '' &&
        street.value.trim() !== '' &&
        city.value.trim() !== '' &&
        country.value.trim() !== '' &&
        phone.value.trim() !== '' &&
        code.value.trim() !== ''
    ) {
        allAddresses[currentIndex] = {
        space: space.value,
        fullName: fullName.value,
        street: street.value,
        city: city.value,
        country: country.value,
        phone: phone.value,
        code: code.value,
    }
    // save updated array
    localStorage.all = JSON.stringify(allAddresses);
    makingAddress();
    // Clear inputs
    space.value= '';
    fullName.value= '';
    street.value= '';
    city.value= '';
    country.value= '';
    phone.value= '';
    code.value = '';
    // show updated address
    addressSlide.style.display = 'block';
    addForm.style.display = 'none';
    saveAddress.style.display = 'block';
    updateBtn.style.display = 'none';
    }
    else {
        alert('Please fill in all fields');
    }
    
}
// end update data
// start top button
let topBtn = document.querySelector('.top');
window.onscroll = function(){
    let y = scrollY;
    if(y >= 150){
        topBtn.style.display = 'block';
    }else{
        topBtn.style.display = 'none';
    }
    
}
topBtn.onclick = function(){
    window.scrollTo({
        top: 0 ,
        behavior: "smooth"
    })
}
// end top button
// start change theme
if (localStorage.getItem('themeMood') === 'dark') {
    document.body.classList.add('dark-theme');
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('preload');
});


displayBtn.onclick = () => {
    themeSlide.style.display = 'block';
    overlay.style.display = 'block';
    logInSlide.style.display = 'none';
};

themeCloseBtn.onclick = () => {
    themeSlide.style.display = 'none';
    overlay.style.display = 'none';
};

darkTheme.onclick = () => {
    localStorage.setItem('themeMood', 'dark');
    document.body.classList.add('dark-theme');
};

lightTheme.onclick = () => {
    localStorage.setItem('themeMood', 'light');
    document.body.classList.remove('dark-theme');
};
// end change theme
// start about slide
aboutBtn.onclick = function(){
    aboutSlide.style.display = 'block';
    overlay.style.display = 'block';
    logInSlide.style.display = 'none';
}
aboutCloseBtn.onclick = function(){
    aboutSlide.style.display = 'none';
    overlay.style.display = 'none';
    logInSlide.style.display = 'none';
}
// end about slide
// start help slide
helpBtn.onclick = function(){
    helpSlide.style.display = 'block';
    overlay.style.display = 'block';
    logInSlide.style.display = 'none';
}
helpCloseBtn.onclick = function(){
    helpSlide.style.display = 'none';
    overlay.style.display = 'none';
}
// end help slide