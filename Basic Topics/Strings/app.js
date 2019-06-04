let value;

const firstname = "Zumrudu";
const lastname = "Anka";

const languages = "Java,Python,C++";

value = firstname + lastname;
console.log(value);

value = firstname + " " + lastname;
console.log(value);

value = "Zumrudu ";
value += "Anka";
console.log(value);

value = firstname.length;
console.log(value);

value = firstname.concat(" ",lastname," ",firstname);   // firstname + " " + lastname ile ayni islev...stringleri birbirine baglar..concatenation
console.log(value);

value = firstname.toLowerCase();
console.log(value);

value = firstname.toUpperCase();
console.log(value);

value = firstname[3];
console.log(value);

value = firstname[firstname.length-1];

// Index of

value = firstname.indexOf("Z"); // fonksiyon icine aldigi karakterin ilk olarak hangi indexte bulundugunu geri dondurur
console.log(value);

value = firstname.indexOf("u"); //  karakterden birden cok olsa da bu karakterin bulundugu en kucuk indis no yani ilk denk gelinen index return edilir.
console.log(value);

value = firstname.indexOf("a"); // aranilan karakter stringin icinde yoksa fonksiyon -1 degerini return eder..
console.log(value);


// Char at

value = firstname.charAt(0);    // ilgili indisteki karakteri return eder
console.log(value);

value = firstname.charAt(firstname.length-1);
console.log(value);


// Split

value = languages.split(",");   // Stringi virgül(,) karakterine gore parcalar ve her parcayi diziye atar...
console.log(value);

//  Replace

value = languages.replace("Python","CSS");  // String icinde belirli veri parcasi yerine baska veri koymamizi saglar..
console.log(value);

value = languages.replace("P","CSS");
console.log(value);

//  Includes

value = languages.includes("Java"); // string ilgili veriyi iceriyorsa true deger doner...
console.log(value);

value = languages.includes("asdf"); // string ilgili veriyi icermiyorsa false deger doner..
console.log(value);