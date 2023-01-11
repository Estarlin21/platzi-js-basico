function ready(){
    if(document.readyState == "complete"){
        main();
    }else{
        setTimeout(() => {
            ready();
        }, 100);
    }
}

ready();
let allScreemItem = [];
function main(){
    let emailClick = document.querySelector('.d-title-email');
    let mobileHamburgher = document.querySelector('.menu-m');
    let cart = document.querySelector('.cart')

    let mMenu = document.querySelector('.mobile-menu');
    let showUserOPtions = document.querySelector('.user-menu');
    let myCart = document.querySelector('.myCart');

    let addInactive = [showUserOPtions,  mMenu, myCart];

    mobileHamburgher.addEventListener('click', () =>{
        addClass(addInactive, 'inactive', mMenu);
        changeClass(mMenu, 'inactive');
    });
    emailClick.addEventListener('click', () => {
        addClass(addInactive, 'inactive', showUserOPtions);
        changeClass(showUserOPtions, 'inactive');
    });
    
    cart.addEventListener('click', () => {
        addClass(addInactive, 'inactive', myCart);
        changeClass(myCart, 'inactive');
    });
    for (let index = 0; index < 10; index++) {
        addProduct('Coffe', '1.00', 'img/pexels-engin-akyurt-3154094 (1).jpg');
        addProduct('Caje', '20.00', 'img/pexels-geraud-pfeiffer-6607325 (1).jpg');
    }
}

function changeClass(item, itemClass){
    item.classList.toggle(itemClass);
}

function addClass(items, itemClass, nop){
    items.forEach(item => {
        if(!(item == nop)){
            item.classList.add(itemClass);
        }
    });
}



function addProduct(item, itemPrice, image){
    let position = document.querySelector('.product-container');
    let container = document.createElement('section');

    let imgContainer = document.createElement('div');
    let img = document.createElement('img');

    let info = document.createElement('div');
    let infocontainer = document.createElement('div');
    let price = document.createElement('p');
    let name = document.createElement('p');

    let picture = document.createElement('picture');
    let cart = document.createElement('img');

    container.classList.add('item-container');

    imgContainer.classList.add('img-container');
    img.setAttribute('src', image);
    imgContainer.appendChild(img);

    info.classList.add('info-container');

    infocontainer.classList.add('item-price');
    price.innerText ='$' + itemPrice + '.00';
    name.innerText = item;
    infocontainer.appendChild(price)
    infocontainer.appendChild(name)

    picture.classList.add('icon-shop-container');
    cart.setAttribute('src', "icons/bt_add_to_cart.svg" );
    picture.appendChild(cart);

    info.appendChild(infocontainer);
    info.appendChild(picture);

    container.appendChild(imgContainer);
    container.appendChild(info);

    position.appendChild(container);

}

