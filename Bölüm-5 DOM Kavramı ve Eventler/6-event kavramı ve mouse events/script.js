//addEventListener

//addEventListener ile bir event olayı oluştumuş oluyoruz. baştaki değere event türünü giriyoruz,diğer değere ise event gerçekleştikden sonra çalışacak fonksiyonu yazıyoruz

// document.querySelector(".page-title").addEventListener("click",function(e){
//   let deger;

//   deger = e.type //e.type bize event'in tipini verir. e'nin bir özelliği yoktur sadece fonksiyon adıdır. metod kullanılmasının sebebi bir event kullandığımızdan event elemanı olarak görünüt

//   console.log(deger);

//   e.preventDefault()//normalde linklerin görevi bir sayfaya veya adrese gitmektir ve onun için çalışır ki buda sayfayı yenilemesine neden olur. ama biz burda linkin bir sayfaya gitmesini değil de bir görevi yerine getirmesini istiyoruz yani sayfa içinde bir görev atıyoruz ki bu durumda preventDefault metodu link'in amacını devre dışı bırakıyor
// })

// ayrı bir fonksiyonu event içine tanımlayıp kullanabiliriz

//mouseEvents

//click event

//click eventi bir elemana veya linke tıklandığında çalışır.
// document.querySelector(".page-title").addEventListener("click",tıklanma)

// //double click event

// //dblclick eventi çift tıklanıldığında çalışır
// document.querySelector(".page-title").addEventListener("dblclick",tıklanma)

// //mousedown event

// //mousedown eventi basılı tutulduğunda çalışır
// document.querySelector(".page-title").addEventListener("mousedown",tıklanma)

// //mouseup event

// //mouseup eventi basılı tutulan elemanı veya linki bıraktığımızda çalışır
// document.querySelector(".page-title").addEventListener("mouseup",tıklanma)

// //mouseenter event

// //mouseenter elemanın veya linkin üstüne geldiğinde çalışır.kapsama alanı dışında farklı bir element varsa çalışmaz. örneğin bir resim üzerinde gezdiğimizde resmin içine bir p etiketi varsa p etiketine gelince çalışmaz
// document.querySelector(".page-title").addEventListener("mouseenter",tıklanma)
// document.querySelector(".box").addEventListener("mouseenter",tıklanma)

// //mouseleave event

// //mouseleave kapsam alanının dışına çıkıldığında çalışır
// document.querySelector(".box").addEventListener("mouseleave",tıklanma)

// //mouseover event

// //mouseover mouseenter ile aynı görevi görür. tek farkı kapsam alanı içinde farklı bir element olsada çalışır
// document.querySelector(".box").addEventListener("mouseover",tıklanma)
// document.querySelector(".page-title").addEventListener("mouseover",tıklanma)

// //mouseout event

// //mouseout mouseleave ile aynı görevi görür. tek farkı kapsam alanı içinde farklı bir element olsada çalışır
// document.querySelector(".box").addEventListener("mouseout",tıklanma)
// document.querySelector(".page-title").addEventListener("mouseout",tıklanma)

//mousemove event

//mousemove event mouse her hareket ettiğinde çalışır.
document.querySelector(".box").addEventListener("mousemove",arkaPlanDegistir)

function tıklanma(e) {
    let deger;

    deger = e.type //e.type bize event'in tipini verir. e'nin bir özelliği yoktur sadece fonksiyon adıdır. metod kullanılmasının sebebi bir event kullandığımızdan event elemanı olarak görünüt

    console.log(deger);

    e.preventDefault()
}

function arkaPlanDegistir(e) {
    document.querySelector(".content").textContent=`X: ${e.clientX}, Y: ${e.clientY}` //burda mouse'u her hareket ettirdiğimizde hangi kordinatlarda olduğu gelecektir
    document.querySelector(".content").textContent=`R: ${(e.clientX)%255}, G: ${(e.clientY)%255}, B: ${(e.clientX + e.clientY)%255}`
    document.querySelector(".box").style.backgroundColor = `rgb(${(e.clientX)%255},${(e.clientY)%255},${(e.clientX + e.clientY)%255})`
}