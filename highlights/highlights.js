// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// // URL for scorebat video API
// var queryURL = "https://cors-anywhere.herokuapp.com/https://www.scorebat.com/video-api/v1/";

// // Get data from API using URL
// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function (result) {
//   // console.log(result);
//   // console.log(result[26].videos[0].embed);
//   // var videoURL = result[26].videos[0].embed;
//   html = $.parseHTML(result[26].videos[0].embed);
//   console.log(html)
//   console.log(html[0].find("iframe"))

//   var video = $("#modal-content");

  

//   video.append(html.find("iframe"));

// });


  var root = $("#root");
  var str = "<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https:\/\/www.scorebat.com\/embed\/g\/824178\/?s=2' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'><\/iframe><\/div>";
  var html = $.parseHTML(str);
  // Append the parsed HTML
  root.append(html);