$(document).ready(function(){
	var quotes=
		{
			songName:"What Doesn't Kill You Makes You Stronger",
			artist:"Kelly Clarkson",
			link:"https://youtu.be/Xn676-fLq7I",
			lyrics:[
			"Baby you don't know me cause you're dead wrong",
			"What doesn't kill you makes you stronger",
			"Stand a little taller",
			"Doesn't mean I'm lonely when I'm alone",
			"Thanks to you I got a new thing started",
			"Thanks to you I'm not the broken hearted",
			"The day you left was just my beginning"
		]
	}
	
	document.getElementById('quote').innerHTML = quotes.lyrics[0];
	document.getElementById('artist').innerHTML = quotes.songName + ' by ' + quotes.artist;

	$('#quoteGenerator').click(function(event){
		var quote = $('#quote').text();
		var artist = $('#artist').text();

		event.preventDefault();

		var sourceLength = quotes.lyrics.length;
		var randomNumber = Math.floor(Math.random()*sourceLength);

		for( i = 0; i <= sourceLength; i += 1){
			var newQuoteText = quotes.lyrics[randomNumber];
			var newQuoteArtist = quotes.artist;
			var newQuoteSongName = quotes.songName;
			
			var timeAnimation = 500;
			var quoteContainer = $('#quote');

			quoteContainer.fadeOut(timeAnimation, function(){
				quoteContainer.html('');
				quoteContainer.append('<h2 id="quote">'+newQuoteText+'</h2>');
				quoteContainer.fadeIn(timeAnimation);
			});

			var quoteContainerSongName = '<h3 id="artist">'+newQuoteSongName+' by '+newQuoteArtist+'</h3>'

			document.getElementById('artist').innerHTML = quoteContainerSongName;

			break;
		};

	});

});