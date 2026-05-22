
//Tapşırıq 3: Verilmiş ədədin (məsələn, 17) "sadə ədəd"
//  (yalnız 1-ə və özünə qalıqsız bölünən) olub-olmadığını tapın.
let eded=prompt("bir eded daxil edin");
for (let i=0;i<eded;i++){
    if(eded %i===0){
        sade=false;
    }

}
if(sade){
    alert("Sadə ədəddir");
}else{
    alert("Sadə ədəd deyil");
}