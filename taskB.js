let integerarray=[ -7, -71, 66, 11 ,3 , 8 , 67];
printsum(integerarray)

function printsum(arr){
    let positive=0;
    let negative=0;
    arr.forEach(element => {
        if(element>0){
            positive+=element;
        }
        else{
            negative+=element;
        }
    });

    console.log("Musbet toplam: ",positive);
    console.log("Menfi toplam: ",negative);
}