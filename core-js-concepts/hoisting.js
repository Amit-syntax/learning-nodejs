const func1 = ()=>{
    var temp=10;

    var getName = ()=>{
        let b=20;
        console.log('Hello I am amit')
        return function(){
            let a=10, b=20;

            return a+b;
        }
    }

    console.log(temp)
    const sumer = getName()
    let sum = sumer()
}



const func2 = ()=>{
    var var1 = 10;

    console.log('Before if statment : ', var1);

    // creating a block
    if(true){
        let var1 = 20;
    }


    // test-2
    let var2 = 200;
    /*
    // not allowed
    if(true){
        var var2 = 20;
    }
    */

    // test-3
    /* 
    creating function to check weather :var1 of this scope will be replaced by this functional scope below 
    */
    (() => {
        var var1 = 100;
        console.log('var1 in another function: ', var1);
    })()

    console.log('After if statment : ', var1)
}

func2()