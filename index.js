let selectionSort = (arr) => {
  for (i=0; i<arr.length-1; i++){
    for (j=i+1; j<arr.length; j++){
      if(arr[j]<arr[i]){
        let temp = arr[i];
          console.log(arr[i]);
          arr[i] = arr[j];
         arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(selectionSort([64, 25, 12, 22, 11]));
