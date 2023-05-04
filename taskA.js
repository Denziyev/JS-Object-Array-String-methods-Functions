let integerarray=[ -7, -71, 66, 11 ,3 , 8 , 67];



print_max_and_min(integerarray)

function print_max_and_min(arr){
      arr.sort(function(a,b){ return a-b});
      console.log("En boyuk ikinci:", arr[arr.length-2]);
      console.log("En kicik ikinci:", arr[1]);
}
