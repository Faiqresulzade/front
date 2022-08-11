let elements=prompt("elementi daxil edin: ")
let indexstr=prompt("indexi daxil edin: ")
let index=parseInt(indexstr)

let arr=[1,4,9,10];
function Addmethods(arr, elements, index){
  if(index<0){
    alert("duzgun daxil edin!!");
    return;
  }
  if(index>arr.length){
    let Beforeindex=arr.length;
    arr.length=index;
    arr.push(elements);
    for(Beforeindex;Beforeindex<arr.length-1;Beforeindex++){
        arr[Beforeindex]=undefined;
    }
    console.log(arr);
    return;
  }
  arr.push(elements);
  for (index; index < arr.length; index++){ 
        let exchange=arr[index];
        arr[index]=arr[arr.length-1]
        arr[arr.length-1]=exchange;
    }
    alert(arr);
}
 Addmethods(arr,elements,index)