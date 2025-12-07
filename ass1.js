function square (n){
    return n * n ;
}
function cube (n){
    return n*n*n 
}
function quad (n){
    return n*n*n*n
}
 
function sumofsquares (a,b,fn) {
let square1 = fn(a);
let square2 = fn(b);
return square1 + square2;

}
let ans = sumofsquares(1,2,quad);
console.log(ans)
