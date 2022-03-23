

function fibonacci(n){
    if (n<2){
        return n
    }

    return fibonacci(n-1)+fibonacci(n-2)
}

let n=5;

for (i=0; i<n; i++){
    console.log(fibonacci(i))
}