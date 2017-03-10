var quoteContainer = document.getElementById('quote');
var artistContainer = document.getElementById('artist');
var listenLink = document.getElementById('listenLink');
var newLyric = document.getElementById('newLyric');

newLyric.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/acespacecase/galpalpeptalk/master/js/quotes.json');
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
  newLyric.innerHTML = "give me another pep talk";
});

function renderHTML(data) {
  var pickSong = Math.floor((Math.random() * data.length));

  // insert song name and artist into the dom
  artistContainer.innerHTML = "\"" + data[pickSong].songName + "\"" + " by " + data[pickSong].artist;

  // update listen link
  listenLink.innerHTML = '<a class="btn btn-outline btn-row" id="listenLink" type="button" target="_blank" href="' + data[pickSong].link + '">listen</a>';



  //
  //
  //
  // var htmlString = "";
  //
  // htmlString += "<p>" + data[0].songName + "</p>";
  //
  // quoteContainer.insertAdjacentHTML('beforeend', htmlString);

}
