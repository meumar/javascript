


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var p = [
//     {population:12},
//     {population:1},
//     {population:2},
//     {population:142},
//     {population:122},
// ]
// const odjsort = (n) => {
//     return n.sort((a, b) => a.population > b.population ? 1 : -1);
// }
// console.log(odjsort(p));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var num = 153;
// const arm = (n) => {
//     let m = n + '';
//     let s = 0;
//     let l = m.length;
//     for(var i = 0; i < m.length; i++){
//         s += Math.pow(Number(m[i]), l);
//     }
//     return s === n;
// }
// console.log(arm(num));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var str = '({[]})';
// const nes = (str) => {
//     const stack = [];
//     let openers = ["{", "[", "("];
//     let closers = ["}", "]", ")"];
    
//     const dict = {
//       "{" : "}",
//       "[" : "]",
//       "(" : ")"
//     }
  
//     for(let i = 0; i < str.length; i++) {
//           let char = str[i];
//           if(openers.includes(char)) {
//               stack.push(char);
//           }
//           else if(closers.includes(char)) {
  
//               if(!stack.length) {
//                   return false;
//               }
//               else if(dict[stack.pop()] !== char) {
//                   return false;
//               }
//           }
//       }
      
//       return stack.length === 0;
  
//   }
// console.log(nes(str));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var str = 'p o p';
// const pal = (n) => {
//     let m = n.split('').reverse().join('');
//     if(n == m){return true}
//     else{return false}
// }
// console.log(pal(str));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// var str = 'jaan';
// var str2 = 'jaan';
// const com = (st1, st2) => {
//     if(st1.length == st2.length){
//         var new_st1 = st1.split('').sort((a,b)=> a.localeCompare(b)).join('');
//         var new_st2 = st2.split('').sort((a,b)=> a.localeCompare(b)).join('');
//         if(new_st1 == new_st2){
//             return true;
//         }else{
//             return false;
//         }
//     }else{
//         return false;
//     }
// }
// console.log(com(str, str2));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var str = 'theqwe rtyyyyyyyu iop';
// const most = (n) =>{
//     const chara = {};
//     let max = 0;
//     let m = ''
//     for(var i=0; i<=n.length; i++){
//         chara[n[i]]= ++chara[n[i]] || 1;
//     }
//     for(key in chara){
//         if(chara[key] >= max){
//             max = chara[key];
//             m = key;
//         }
//     }
//     return m;
// }
// console.log(most(str));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var str =["a","b","c","ac","ses","qwerty"];
// function max(n){
//     let res ='';
//     for(var i=0; i<n.length; i++){
//         if(n[i].length > max.length);{}
//          res = n[i];
//          }
//     }
//     return res;
// }
// const max = (arr) => {
//     let res = '';
//         arr.forEach((element) => {
//         if(element.length > res.length)
//         {
//             res = element;
//         }
//     });
//     return res;
// }
// console.log(max(str));