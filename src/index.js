module.exports = function reverse (n) {
    return parseInt((''+n).split('').reverse().join(''));
}
//console.log(reverse (162));

//
// let r = ('' + n).split('');
// let rArr = [];
// for (let i = r.length; i>=0; i--){
//     rArr.push(r[i]);
// }
// return parseInt(rArr.join(''));
