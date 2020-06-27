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

  // (function (d, s, id) {
  //   var js, fjs = d.getElementsByTagName(s)[0];
  //   if (d.getElementById(id)) return;
  //   js = d.createElement(s);
  //   js.id = id; js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv';
  //   fjs.parentNode.insertBefore(js, fjs);
  // }(document, 'script', 'scorebat-jssdk'));

// URL for scorebat video API
var queryURL = "https://www.scorebat.com/video-api/v1/";

// Get data from API using URL
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (result) {
  console.log(result);
});
