
// Toplama işlemi
function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
}

// Çıkarma işlemi
function cikar(sayi1, sayi2) {
    return sayi1 - sayi2;
}

// Çarpma işlemi
function carp(sayi1, sayi2) {
    return sayi1 * sayi2;
}

// Bölme işlemi
function bol(sayi1, sayi2) {
    // sıfıra bölme hatasını kontrol et
    if (sayi2 === 0) {
        return "Sıfıra bölme hatası!";
    }
    return sayi1 / sayi2;
}

// Örnek kullanım
let sayi1 = 10;
let sayi2 = 5;

console.log(`${sayi1} + ${sayi2} = ${topla(sayi1, sayi2)}`);
console.log(`${sayi1} - ${sayi2} = ${cikar(sayi1, sayi2)}`);
console.log(`${sayi1} * ${sayi2} = ${carp(sayi1, sayi2)}`);
console.log(`${sayi1} / ${sayi2} = ${bol(sayi1, sayi2)}`);


