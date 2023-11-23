function changecolor(hex){
  const ishex = /#([0-9a-f]{6}|[0-9a-f]{3})/i;
  if (hex.test(ishex)) {
    document.getElementById("preview").style.fill = hex;
  }
  else alert("Invalid hexidecimal code(maybe you forgot the #?)");
}
