
function move() {
              
    var elem = document.getElementById("myBar01");
    var width = 1;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 45) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }

function move() {
  
    var elem = document.getElementById("myBar02");
    var width = 1;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 30) {
        clearInterval(id);
        i = 0;
        
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }

