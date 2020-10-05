for(let i = 100; i <= 200; i++){
  let out = "";
  if(i % 3 === 0){
    out += "Loopy";
  }
  if(i % 4 === 0){
    out += "Lighthouse";
  }
  if(!out){
    out = i;
  }
  console.log(out);
}