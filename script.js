// jQuery animations
$(document).ready(function() {
    // body animation
    $("body").addClass("animated fadeIn");
    // h1 animation
    $("h1").addClass("animated fadeInDown");
  });
  
  // gradient generator code
  var displayCssCode = document.querySelector(".cssCode");
  var inputColorOne = document.querySelector(".inputColorOne");
  var inputColorTwo = document.querySelector(".inputColorTwo");
  var body = document.querySelector("body");
  var randomColorBtn = document.querySelector(".randomColorBtn");
  
  // picks colors by user
  function backgroundColorSet() {
      body.style.background = "linear-gradient(to right ," 
      + inputColorOne.value 
      + ", " 
      + inputColorTwo.value 
      + ")";
  
      displayCssCode.textContent = "background-color: " + body.style.background + ";";
  }
  
  // generate random color
  var randomInputColorOne = document.querySelector(".inputColorOne");
  var randomInputColorTwo = document.querySelector(".inputColorTwo");
  
  function randomBackgroundColorSet() {
      randomInputColorOne = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
      randomInputColorTwo = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  
      body.style.background = "linear-gradient(to right ," 
      + randomInputColorOne 
      + ", " 
      + randomInputColorTwo
      + ")";
  
      displayCssCode.textContent = "background-color: " + body.style.background + ";";
      $(document).ready(function(){
        $('#color1').val(randomInputColorOne);
        $('#color2').val(randomInputColorTwo);
     });
    }
  
  randomColorBtn.addEventListener("click", randomBackgroundColorSet)
  
  inputColorOne.addEventListener("input", backgroundColorSet);
  
  inputColorTwo.addEventListener("input", backgroundColorSet);