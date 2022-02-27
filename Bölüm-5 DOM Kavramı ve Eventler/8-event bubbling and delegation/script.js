//event bubbling ve  delegation

// document.querySelector('.parent').addEventListener('click', e => {
//    console.log('parent'); 
// });

// document.querySelector('.child').addEventListener('click', e => {
//     console.log('child'); 
// });
 
// document.querySelector('.item').addEventListener('click', e => {
//     console.log('itemmmm'); 
//  });


document.querySelector('.parent').addEventListener('click', (e) => {
    if (e.target.classList.contains ('item')) /* normalde class'ı seçmek için classname kullanırız fakat burda tüm class adlarını girmek zorundayız ve yeni class'lar eklendikçe hepsi eklenmek zorunda. bu yüzden classList.contain kullanarak sadece bir class ismi tanımlayarak kullanabiliriz ve yeni class eklense bile içine tanımladığımız class silinmedikçe kod çalışır */ {
        console.log('merhaba tıklandı');
    }
});