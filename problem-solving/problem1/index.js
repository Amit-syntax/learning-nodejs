function check_elements(arr, n, A, B){
    //code here
    for(let i=A; i<=B; i++){
        let found = false
        for(let j=0; j<arr.length; j++){
            if(i == arr[j]){
                found = true
                break
            }else{
                found = false
            }
        }
        if(!found){
            return found
        }
    }
    return true
}

let a=[1, 4, 5, 2, 7, 8, 3]
console.log(check_elements(a, a.length, 2, 5))