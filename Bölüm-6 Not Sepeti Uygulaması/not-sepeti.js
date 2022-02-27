const yeniGorev = document.querySelector(".input-gorev")
const yeniGorevEkleBtn = document.querySelector(".btn-gorev-ekle")
const gorevListesi = document.querySelector(".gorev-listesi")

yeniGorevEkleBtn.addEventListener('click', gorevEkle);
gorevListesi.addEventListener('click', gorevSilTamamla)
document.addEventListener('DOMContentLoaded',localStorageOku)

function gorevEkle(e) {
    e.preventDefault();
    if(yeniGorev.value!=""){
        gorevItemOlustur(yeniGorev.value);
        localStorageKaydet(yeniGorev.value);
        yeniGorev.value = '';

    }
    else{
        alert('Boş Not Girilemez');
    }

}


function gorevSilTamamla(e) {

    const tiklanilanEleman = e.target;

    if (tiklanilanEleman.classList.contains('gorev-btn-tamamlandi')) {
        tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi');//sınıfı ekledik.s
    }
    if (tiklanilanEleman.classList.contains('gorev-btn-sil')) {
        if(confirm('Silmek istediğinize emin misiniz ?')){
            tiklanilanEleman.parentElement.classList.toggle('kaybol');
            const silinicekGorev=tiklanilanEleman.parentElement.children[0].innerText;
            localStorageSil(silinicekGorev);
            tiklanilanEleman.parentElement.addEventListener(('transitionend'),function (){//animasyon bitince sildik
                tiklanilanEleman.parentElement.remove();
            })
        }

    }
}

function localStorageKaydet(yeniGorev) {
    let gorevler;

    if (localStorage.getItem('gorevler')===null){
        gorevler=[];
    }else{
        gorevler=JSON.parse(localStorage.getItem('gorevler'));
    }

    gorevler.push(yeniGorev);

    localStorage.setItem('gorevler', JSON.stringify(gorevler));
}

function localStorageOku() {
    let gorevler;

    if (localStorage.getItem('gorevler')===null){
        gorevler=[];
    }else{
        gorevler=JSON.parse(localStorage.getItem('gorevler'));
    }

    gorevler.forEach(function (gorev) {
        gorevItemOlustur(gorev);
    });
}

function gorevItemOlustur(gorev) {
    //div oluşturma
    const gorevDiv = document.createElement("div");
    gorevDiv.classList.add("gorev-item")

    //li oluşturma
    const gorevLi = document.createElement("li")
    gorevLi.classList.add("gorev-tanim")
    gorevLi.innerText = gorev

    //li'yi div içine ekleme
    gorevDiv.appendChild(gorevLi)

    //div'i ul içine ekleme
    gorevListesi.appendChild(gorevDiv)

    //tamamlandı butonu ekleme

    const gorevTamamlandiBtn = document.createElement("button")
    gorevTamamlandiBtn.classList.add("gorev-btn")
    gorevTamamlandiBtn.classList.add("gorev-btn-tamamlandi")
    gorevTamamlandiBtn.innerHTML = '<i class="fa-solid fa-calendar-check"></i>'

    gorevDiv.appendChild(gorevTamamlandiBtn)

    //silme butonu ekleme
    const gorevSilBtn = document.createElement("button")
    gorevSilBtn.classList.add("gorev-btn")
    gorevSilBtn.classList.add("gorev-btn-sil")
    gorevSilBtn.innerHTML = '<i class="fa-solid fa-calendar-xmark"></i>'

    gorevDiv.appendChild(gorevSilBtn)

    
}


function localStorageSil(gorev) {
    let gorevler;

    if (localStorage.getItem('gorevler')===null){
        gorevler=[];
    }else{
        gorevler=JSON.parse(localStorage.getItem('gorevler'));
    }

    //splice ile item sil
    const silinecekElemanIndex = gorevler.indexOf(gorev);
    console.log(silinecekElemanIndex);
    gorevler.splice(silinecekElemanIndex, 1);

    localStorage.setItem('gorevler', JSON.stringify(gorevler));

    
}