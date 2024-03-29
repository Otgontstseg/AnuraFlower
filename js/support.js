let contact = document.querySelector('.list');
let info = [{
    name: 'Хаяг',
    text: 'Хан-Уул дүүрэг 120 мянгат <br>Jetro худалдааны төв, 2 давхар',
    links: 'github.com',
    logo: 'fa-solid fa-location-dot',
    idName: 'address'
},
{
    name: 'Facebook',
    text: 'AnuraFlower.mn',
    links: 'https://www.facebook.com/AnuraFlower.mn/',
    logo: 'fa-brands fa-facebook',
    idName: 'fb'
},
{
    name: 'Instagram',
    text: 'AnuraFlower.mn',
    links: 'https://www.instagram.com/AnuraFlower.mn/',
    logo: 'fa-regular fa-circle-check',
    idName: 'ig'
},
{
    name: 'Утас',
    text: '88472657',
    links: 'telecom.mn',
    logo: 'fa-solid fa-phone-volume',
    idName: 'telphone'
}
];
let categories = [... new Set(info.map((item) => { return item }))];
let sort = document.getElementById('contactInfo');
sort.innerHTML = categories.map((item) => {
    var { name, text, links, logo, idName } = item;
    return (`<div class="box">
    <div class="icon">
    <i id='${idName}' class='${logo}'></i>
    <a href=${links}></a>
    </div>
    <div class="text">
        <h3>${name}</h3>
        <p>${text}</p>
    </div>
</div>`)
}).join('')