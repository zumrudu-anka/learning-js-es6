const name = "Osman";

console.log(name);

//name="Anka";    //  Const degisken bir kere tanimlanir ve bir daha icerigi degistirilemez...

/*
const a;

a=10;

Const degisken tanimlandigi an degeri belirtilmelidir daha sonradan atanamaz..
*/

const a =[1,2,3,4,5];

console.log(a);

//a=[1,2,3,4,5,6];    // Bu kullanim hatalidir cunku a degeri yeniden setlenmek istiyor, referans ettigi yer degistirilebilir...

a.push(6);  // Bu kullanim hata vermez.. a nin referans ettigi yer degismiyor. sadece icerigi degisiyor...

console.log(a);