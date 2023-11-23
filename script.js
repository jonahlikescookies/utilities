function changehex(hex){
  const ishex = /#([0-9a-f]{6}|[0-9a-f]{3})/i;
  if (ishex.test(hex)) document.getElementById("preview").style.fill = hex;
  else alert("Invalid hexidecimal code(maybe you forgot the #?)");
}
function changergb(r, g, b){
  document.getElementById("preview").style.fill = rgb(r, g, b);
}
