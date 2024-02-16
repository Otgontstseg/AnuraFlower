let list = document.querySelector('.list');
let products = [

    {
        name: "Лили",
        price: "150000",
        image: "../img/otgoo.jpeg"
    },

    {
        name: "Нил ягаан сарнай",
        price: "350000",
        image: "../img/sarnai.jpeg"
    },
    {
        name: "Цээнэ",
        price: "200000",
        image: "../img/tseene.jpeg"
    },
    {
        name: "Цагаан сарнай",
        price: "270000",
        image: "../img/icebergrosa.jpeg"
    },
    {
        name: "Улаан сарнай",
        price: "3400000",
        image: "../img/ulaan.webp"
    },
    {
        name: "Цахирмаа",
        price: "1200000",
        image: "../img/anura.jpg"
    }

];
let categories = [...new Set(products.map((item) => { return item }))];
//root id-tai hesegt doorh zagwart tohiruulan ogogdliig haruulah
let cart = document.getElementById('root');
cart.innerHTML = categories.map((item) => {
    var { name, price, image } = item;
    return (`<article class="content">
            
    <img class="images" src=${image}>
                    <h3>${name} </h3>
                    <h6>${price}</h6>
                    <ul>
                        <li><i class="fa fa-star checked" aria-hidden="true"> </i></li>
                        <li><i class="fa fa-star checked" aria-hidden="true"> </i></li>
                        <li><i class="fa fa-star checked" aria-hidden="true"> </i></li>
                        <li><i class="fa fa-star " aria-hidden="true"> </i></li>
                        <li><i class="fa fa-star " aria-hidden="true"> </i></li>
                    </ul>
               
                <button id="buy" onclick="addCard()">Сагсанд нэмэх</button>
               
            </article>`
    )


}).join('')
