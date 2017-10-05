// generator function
  function getColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
  }
// sets background color style
  function setBackground() {
    var bgColor = getColor();
    document.body.style.background = bgColor;
  }

  //runs on click
  document.onclick= function(event) {
    setBackground();
};