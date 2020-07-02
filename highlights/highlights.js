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

$("#Submit").on("click", function () {
  var myBtn = $("#myBtn");
  myBtn.removeClass("button-hide");
  myBtn.addClass("button-show");


  var teamID = $("#dropMenu").val();
  console.log(teamID);

  if (teamID == 58) { // Aston Villa
    videoID = "Gtf8RaGTepg";
    console.log(videoID);
  }
  else if (teamID == 1044) { // Bournemouth
    videoID = "sWl8uJtZsnU";
  }
  else if (teamID == 397) { // Brighton & Hove Albion
    videoID = "ozgT-RXsw2k";
  }
  else if (teamID == 328) { // Burnley
    videoID = "jEuqoYYdmeA";
  }
  else if (teamID == 61) { // Chelsea
    videoID = "AbEgrehvIDU";
  }
  else if (teamID == 354) { // Crystal Palace
    videoID = "7Tp9UvXwkaE";
  }
  else if (teamID == 62) { // Everton
    videoID = "DLS_wilf52U";
  }
  else if (teamID == 338) { // Leicester City
    videoID = "x-eq6Fd4ykg";
  }
  else if (teamID == 64) { // Liverpool
    videoID = "oFWZB49Z0bk";
  }
  else if (teamID == 65) { // Manchester City
    videoID = "7yR9oNmzuPA";
  }
  else if (teamID == 66) { // Manchester United
    videoID = "8iEFSs58JbA";
  }
  else if (teamID == 67) { // Newcastle United
    videoID = "7P9_te0zg4Y";
  }
  else if (teamID == 68) { // Norwich City
    videoID = "qmnc_RbJ4AM";
  }
  else if (teamID == 356) { // Sheffield United
    videoID = "kErsW2jZ-pg";
  }
  else if (teamID == 340) { // Southampton
    videoID = "_Em5f9NHoa0";
  }
  else if (teamID == 73) { // Tottenham Hotspur
    videoID = "awXPbfBMo60";
  }
  else if (teamID == 346) { // Watford
    videoID = "IwSe1x3uVk0";
  }
  else if (teamID == 563) { // West Ham United
    videoID = "AbEgrehvIDU";
  }
  else if (teamID == 76) { // Wolverhampton Wanderers
    videoID = "3n_PsxOZh4Q";
  }
  else {
    console.log("error");
  }

  // var videoID = "oFWZB49Z0bk";
  videoURL = ("https://www.youtube.com/embed/" + videoID + "?enablejsapi=1&origin=http://example.com");
  console.log(videoURL);
  document.getElementById("player").src = videoURL;
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  $(function () {
    $('.close').click(function () {
      $('iframe').attr('src', $('iframe').attr('src'));
    });
  });
});