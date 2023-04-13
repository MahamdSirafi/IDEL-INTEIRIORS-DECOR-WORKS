let myDiv = document.getElementById("myDiv");
    let images = myDiv.querySelectorAll("#myDiv img");
    window.addEventListener("load", function() {
      let height = 0;
      for (let i = 0; i < images.length; i++) {
          height += images[i].height;
      }
      height *= 2 ;
      myDiv.style.maxHeight = height + "px";
      console.log(height);
    });