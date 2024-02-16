let list = document.querySelector('.list');
let details = [
    {
        header: "Захиалга",
        logo: 'fa-regular fa-laptop',
        information: 'Чиглэлүүдийн мэдээлэл'
    },
    {
        header: "Нислэгийн үед анхаарах зүйлс",
        logo: 'fa-regular fa-handshake',
        information: ''
    },
    {
        header: "Түгээмэл асуултууд",
        logo: 'fa-regular fa-circle-check',
        information: 'Хэрэглэгчдийн асуудаг нийтлэг асуултууд'
    }
];
 //delgerengui button deer darahad tuhain medeeleltei holbootoi
    //medeelliin heseg garch ireh
let listing = [...new Set(details.map((item) => { return item }))];
let inf = document.getElementById('cont');
inf.innerHTML = listing.map((item) => {
    var { header, logo, information } = item;
    return (`<article class="next">
    
    <article class="icon"><i class="${logo}"></i>
    </article>
    <article id='header'>
        <h3>${header}</h3>
    </article>
    <article class='intro'>
        <p>${information}</p>
    </article>
   
    <button class='butt'><h3>More...</h3></button>
</article>`)
}).join('')