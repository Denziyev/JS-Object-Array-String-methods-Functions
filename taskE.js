let myarray=[2, "class", 1, true, "class", 16, 17, 18,  "17"];
console.log(myfunction(myarray));


function myfunction(arr){
    let result=[];
    arr.forEach(element => {
        if(!String(result).includes(String(element))){
            result.push(element);
        }
    });
    return result;
}