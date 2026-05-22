
//Tapşırıq 2 : let cumle = "Bu gun hava cox gozeldir" string-i verilib. 
// Dövr vasitəsilə içindəki bütün boşluqları silərək tamamilə bitişik yeni bir string ("Bugunhavacoxgozeldir") yaradın.
let cumle = "Bu gun hava cox gozeldir";
let yeniCumle = "";
for(i=0;i<cumle.length ; i++){
       if(cumle[i] !== " "){
        yeniCumle += cumle[i];
    }

    
}
console.log(yeniCumle);
