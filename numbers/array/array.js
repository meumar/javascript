fetch('https://jsonplaceholder.typicode.com/users').then(function (data){return data.json()}).then(function(res){
    
    console.log(res.filter(ab));
    console.log(res.find(ab));
    console.log(res.isIncludes("id"));
});
function ab(n){
    a=n;
    // console.log(a)
    return n.id==1;
}
function c(m){
    return m.id == 2;
}
// console.log(a);
// function ac(n){
//     return n>2;
// }
// var res = b.filter(ab);
// console.log(res);
// console.log(b.constructor);
// console.log(a.concat(b,c));
// console.log(b.includes("app"));
// var b = 
// [
//     {"app":"vue","bro":"fir"},
//     {"app":"ang","bro":"chr"},
//     {"app":"rec","bro":"chr"},
//     {"app":"ang","bro":{"a":"1","a":"2","a":"3"}},
//     {"app":"vue","bro":[{"a":1,"b":2,"c":3,"4":4}]}
// ];
// var c = [true, false, true, false];