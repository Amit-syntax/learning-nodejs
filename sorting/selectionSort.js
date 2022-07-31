let arr = [1,20,4,35,23]

function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            if(arr[j] < arr[i]){
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}

console.log(selectionSort(arr))