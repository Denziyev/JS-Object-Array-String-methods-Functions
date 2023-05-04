let integerarray=[ -7, -71, 66, 11 ,3 , 8 , 67];
 console.log(printnewarr(integerarray,3));



function printnewarr(arr,limit){
    let result=[];
    arr.forEach(element => {
        if(element>limit){
            result.push(element);
        }
    });
    return result;
}


