let myarr=[5, 2, "salam", "necesen", "salam", 56, 2, 7, 7, 7 ];
myfunction(myarr);


function myfunction(arr){
    let arrayy=[];
    let count;
    for(let i=0;i<arr.length;i++){
       if(!arrayy.includes(arr[i])){
           arrayy.push(arr[i]);
           count=0;
           for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
                count++;
            }
           }
           console.log(arr[i]," -> ",count," eded");
        }
        
    }
}