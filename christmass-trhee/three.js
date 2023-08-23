
// let x = "";
// let l = 8;
// for (let i = 0; i < l; i++) {
//   x += " ".repeat(l - i) + "*" + "*".repeat(i * 2) + `\n`;
// }
// console.log(x);

let n = 8,ans="";
for(let i=0; i<n; i++){
  for(j=i; j<n; j++){
    ans += " ";
  }
  for(j=1; j<=(2*i-1); j++){
    ans += "*";
  }
  ans += "\n";
}
console.log(ans);