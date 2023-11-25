const red = document.getElementById('red');
const green = document.getElemenyById('green');
const blue = document.getElementById('blue');
const hexidecimal = document.getElementById('hex');

function changehex(hex){
  const ishex = /^#(([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})|([a-f\d][a-f\d][a-f\d]))$/i;
  if (ishex.test(hex) {
    document.getElementById("preview").style.fill = hex;
    let rgbVals = hexToRgb(hex);
    alert(rgbVals);
  } else alert("Something went wrong.");
}
function changergb(r, g, b){
  document.getElementById("preview").style.fill = rgbToHex(r, g, b);
  alert(rgbToHex(r, g, b));
  hexidecimal.value = rgbToHex(r, g, b);
}

function rgbToHex(r, g, b) {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

function hexToRgb(hex){
  var shorthandRegex = /^#([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
