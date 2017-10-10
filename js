function numeroReverso(n){

  //transforma o número em uma string
  var str = String(n);
  
  //separa o numero em "pedaços" ex 2454 --> '2', '4', '5', '4'
  var splitString = str.split("");
  
  //faz o reverso 
  var reverseArray = splitString.reverse();
  
  //junta os "pedaços" e joga na variavel
  var joinArray = reverseArray.join("");
  
  //transforma o o numero, que era string, em int de novo
  var number = Number(joinArray);
  return number;
  
}
