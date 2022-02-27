const yeniGorev = document.querySelector(".input-gorev") 
const yeniGorevEkleBtn = document.querySelector(".btn-gorev-ekle")
const gorevListesi = document.querySelector(".gorev-listesi")

yeniGorevEkleBtn.addEventListener("click",gorevEkle)

function gorevEkle(e) {
    e.preventDefault();

    //div oluşturma
    const gorevDiv = document.createElement("div");
    gorevDiv.classList.add("gorev-item")

    //li oluşturma
    const gorevLi = document.createElement("li")
    gorevLi.classList.add("gorev-tanim")
    gorevLi.textContent = yeniGorev.value

    //li'yi div içine ekleme
    gorevDiv.appendChild(gorevLi)

    //div'i ul içine ekleme
    gorevListesi.appendChild(gorevDiv)

    //tamamlandı butonu ekleme

    const gorevTamamlandiBtn = document.createElement("button")
    gorevTamamlandiBtn.classList.add("gorev-btn")
    gorevTamamlandiBtn.classList.add("gorev-btn-tamamlandi")
    gorevTamamlandiBtn.innerHTML='<i class="fa-solid fa-calendar-check"></i>'
    
    gorevDiv.appendChild(gorevTamamlandiBtn)

    //silme butonu ekleme
    const gorevSilBtn = document.createElement("button")
    gorevSilBtn.classList.add("gorev-btn")
    gorevSilBtn.classList.add("gorev-btn-sil")
    gorevSilBtn.innerHTML='<i class="fa-solid fa-calendar-xmark"></i>'

    gorevDiv.appendChild(gorevSilBtn)

    //görevi ekledikten sonra input'taki değeri siler
    yeniGorev.value = ' '
}

gorevListesi.addEventListener("click",goreviSilTamamla)

function goreviSilTamamla(e){

    const tiklanilanEleman = e.target

    //contains metodu class'ın olup olmadığını sorgular. burda bu class varsa bunu yap, yoksa şu class varsa bunu yap dedik
    if(tiklanilanEleman.classList.contains("gorev-btn-tamamlandi")){
        //toggle ile bu class yoksa ekle ama varsa sil dedik. böylelikle butona tıkladığımızda üstü çizilir, yeniden tıkladığımızda çizgi kalkar
        tiklanilanEleman.parentElement.classList.toggle("gorev-tamamlandi")
    }
    else if(tiklanilanEleman.classList.contains("gorev-btn-sil")){
        tiklanilanEleman.parentElement.classList.toggle("kaybol")
        //transitionend event'i animasyon bittikten sonra kodu çalıştırır
        tiklanilanEleman.parentElement.addEventListener("transitionend",function (){
            tiklanilanEleman.parentElement.remove()
        })

    }
}