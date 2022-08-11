let arr=[1,2,6,9,3]; 
let indexstr=prompt(arr+" bu arrayde silmek istediyiniz indeksi daxil edin: "); 
let index=parseInt(indexstr)
    if(index>arr.length || index<0){
       alert("duzgun daxil edin!!!")
    }
function RemoveFunction(arr, index){
    for (index; index < arr.length; index++) {
        arr[index]=arr[index+1];
    }
   arr.length=arr.length-1;
   alert(arr)
}
RemoveFunction(arr,index)