// while loop 

/* while döngüsü ise for'un alternatifi olarak kullanılır. kullanım farkı dışında işlevleri aynıdır */

let sayı = 10;

while (sayı < 20) {
    console.log("while döngüsü kullanımı");
    ++sayı;
}

//aynı işlemi for ile yapalım

for (sayı = 10; sayı < 20; sayı++){
    console.log("for kullanımı")
}

/* ikisi de aynı görevi gördü. peki nerde kullanalım dersek tekrar sayımız belli ise yani ne kadar döneceğini biliyor isek for kullanmak daha mantıklıdır.çünkü for içindeki değişken değiştirilemez ve sürekli tanımladığımız değerde döner.*/

/* eğer elimizde bir şart var ama kaç kere tekrar edeceğini bilmiyorsak while kullanmak daha mantıklıdır çünkü while'de değer sürekli değiştirilebilir */

// do while kullanımı

/* diğer döngü elemanlarında koşula bakılıp doğru olması halinde döngü başlatılıyordu. do while'de ise ilk başta değeri yazdırır ve sonra koşulun doğruluğuna bakar.koşul doğru değilse değer 1 kere döndürülür. doğru ise koşula göre döndürülür */
do {
  console.log("do while kullanımı");
} while (sayı > 20); // koşul doğru değil ama değer ekrana 1 kere döndürüldü

do {
  console.log("do while doğru kullanımı");
  sayı++
} while (sayı < 30); 

// break ve continue kullanımı

/* break özelliği döngünün durmasını sağlar. burda döngünün 20 kere dönmesini belirttik ama içeride ise döngünün 12'ye gelince durmasını söyledik ve böylece döngü 12 kere döndü */
for (let i=0; i < 20; i++){
    
    if(i === 12){
        break;
    }

    console.log("break kullanımı " +i)
} // burda i'nin 12'ye gelince döngüden çıkmasını söyledik ve değer 12 kere döndü 

/* continue özelliği ise döngünün devam etmesini söyler.burda döngü 15'e gelince döngü 15'i görmez ve 15'ten sonrasını döndürür. 15 ise içine bir değer verdiğimizde etkin olur ve sonraki sayıdan devam eder. kullanım amacı ise genellikle 15'e gelince birşey yapmasını söylediğimizde yaptıktan sonra sayıyı tekrarlamadan devam etmesini sağlamaktır */
for (let i=0; i<25; i++){

    if(i === 15){
        continue;
    }

    console.log("continue kullanımı " +i);
} 

for (let i=0; i<25; i++){

    if(i === 15){
        console.log("15 değerine gelince bu yazı görünür ve sonraki sayıdan devam eder")
        continue;
    }

    console.log("continue kullanımı " +i);
} 

// yukarıdaki işlemi continue olmadan yaparsak :

for (let i=0; i<25; i++){

    if(i === 15){
        console.log("continue olmadan 15'e değer verilirse 15 iki kere tekrarlanmış olur. aşağıda tekrarlandığını görürüz")
    }

    console.log("continue kullanımı " +i);
} 