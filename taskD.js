let myarr=[1,false,2,false,3,true,4,true]
console.log(myfunction(myarr));


function myfunction(arr){
    let result=1;
    for(let i=1;i<arr.length;i+=2){
         if(arr[i]===true){
            result*=arr[i-1];
         }
    }
    return result;
}