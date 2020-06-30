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

// array videoID = ["oFWZB49Z0bk", "", "", etc.]
// if team == Liverpool
// i = 1
// videoURL = ("http://www.youtube.com/embed/" + videoID(i) + "?enablejsapi=1&origin=http://example.com");

var videoID = "oFWZB49Z0bk";
        
videoURL = ("http://www.youtube.com/embed/" + videoID + "?enablejsapi=1&origin=http://example.com");

document.getElementById("player").src = videoURL;

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
