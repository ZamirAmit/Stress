      // http://...?initial_frame=value&final_frame=vlaue
      // URL params:
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      // Initial width of progress bar:
      const initial_frame = urlParams.get('initial_frame') * 10;
      // Final width of progress bar
      const final_frame = urlParams.get('final_frame') * 10;

      var elem = document.getElementById("myBar");
      var val = document.getElementById("val");
      //var final_frame = 100;
      //var initial_frame = 10;
      elem.style.width = initial_frame + "%";
      var width = 1;
      width = initial_frame;
      elem.innerHTML = "<br/>";
      val.innerHTML = Math.ceil(width / 10);

      setInterval(function() {
          move()
      }, 1000);
      set_color();
      var id;

      function set_color() {

          if (width > 80) {
              elem.classList = 'w3-container w3-padding-large w3-red w3-center';

          } else if (width > 60) {
              elem.classList = 'w3-container w3-padding-large w3-orange w3-text-white w3-center';

          } else if (width > 40) {
              elem.classList = 'w3-container w3-padding-large w3-yellow w3-text-white w3-center';
          }
      }

      function move() {

          if (initial_frame < final_frame) {

              id = setInterval(function() {
                  frame_up()
              }, 100);

          } else {
              id = setInterval(function() {
                  frame_down()
              }, 100);

          }


          function frame_up() {
              if (width >= final_frame) {
                  clearInterval(id);
              } else {
                  width++;
                  elem.style.width = width + '%';
                  val.innerHTML = Math.ceil(width / 10);
                  set_color();


              }
          }

          function frame_down() {
              if (width <= final_frame) {
                  clearInterval(id);
              } else {
                  width--;
                  elem.style.width = width + '%';
                  val.innerHTML = Math.ceil(width / 10);
                  set_color();

              }
          }

      }