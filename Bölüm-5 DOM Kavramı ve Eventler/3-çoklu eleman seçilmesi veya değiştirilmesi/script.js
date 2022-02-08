// burda class'ı link olan tüm elemanları değişkene atayıp her bir elemanını tek tek çağırdık
const linkler = document.getElementsByClassName('link');
console.log(linkler[0]);
console.log(linkler[2]);

// burda ise atadığımız değişkenlerin içinden eleman seçip stil özellikleri verdik
linkler[0].style.color = 'red';
linkler[1].style.backgroundColor = '#ccc';
linkler[2].textContent = 'INSTAGRAM LINKI';

// burda ilk başta ul nesnesini çağırıp sonra ul içindeki liste-item class'ına sahip olan elemanları listeledik
console.log(document.querySelector('ul').getElementsByClassName('liste-item'));

// burda ise linkleri dizi içine alıp reverse ile ters çevirip konsola tersten yazdırdık
const dizi = Array.from(linkler);
dizi.reverse();
dizi.forEach(item => {
    console.log(item);
});

const listeElemanlarim = document.getElementsByTagName('h1');
console.log(listeElemanlarim);

const sehirlerTek = document.querySelectorAll('li:nth-child(odd)');
const sehirlerCift = document.querySelectorAll('li:nth-child(even)');

sehirlerTek.forEach(item => {
    item.style.backgroundColor = '#ccc';
});

for (let i = 0; i < sehirlerCift.length; i++){
    sehirlerCift[i].style.backgroundColor = '#eee';
}