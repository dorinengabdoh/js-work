let chese = "";
for (let i=1; i<=8; i++) {
  for(let j=1; j<=8; j++){
    if ((i+j)%2 == 0){
        chese += "*"
    }
    else {
      chese += "+"
    }
    
  }
  chese += "\n"
}
console.log(chese)