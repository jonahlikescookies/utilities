function changehex(hex){
  const ishex = /#([0-9a-f]{6}|[0-9a-f]{3})/i;
  if (ishex.test(hex)) document.getElementById("preview").style.fill = hex;
  else alert("Invalid hexidecimal code(maybe you forgot the #?)");
}
function changergb(r, g, b){
  document.getElementById("preview").style.fill = rgbToHex(r, g, b);
}

function rgbToHex(r, g, b) {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}
