$(document).ready(function(){
  $('.quoteContainer').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });



/*$(document).ready(function(){
	var quotes01 = [
		{
			songName: "(Stronger) What Doesn't Kill You", 
			artist:"Kelly Clarkson",
			link:"https://youtu.be/Xn676-fLq7I",
			lyrics:"Baby you don't know me cause you're dead wrong."
		},
		{
			songName: "(Stronger) What Doesn't Kill You",  
			artist:"Kelly Clarkson",
			link:"https://youtu.be/Xn676-fLq7I",
			lyrics:"Stand a little taller."
		},
		{
			songName: "Born This Way",  
			artist:"Lady Gaga",
			link:"https://youtu.be/wV1FrqwZyKw",
			lyrics:"There's nothin' wrong with lovin' who you are."
		},
		{
			songName: "(Stronger) What Doesn't Kill You",  
			artist:"Kelly Clarkson",
			link:"https://youtu.be/Xn676-fLq7I",
			lyrics:"Doesn't mean I'm lonely when I'm alone."
		},
		{
			songName: "(Stronger) What Doesn't Kill You",  
			artist:"Kelly Clarkson",
			link:"https://youtu.be/Xn676-fLq7I",
			lyrics:"Thanks to you I got a new thing started."
		},
		{
			songName: "Born This Way",  
			artist:"Lady Gaga",
			link:"https://youtu.be/wV1FrqwZyKw",
			lyrics:"We are all born superstars."
		},
		{
			songName: "(Stronger) What Doesn't Kill You",  
			artist:"Kelly Clarkson",
			link:"https://youtu.be/Xn676-fLq7I",
			lyrics:"The day you left was just my beginning."
		},
		{
			songName: "Born This Way",  
			artist:"Lady Gaga",
			link:"https://youtu.be/wV1FrqwZyKw",
			lyrics:"So hold your head up, girl, and you'll go far."
		},
		{
			songName: "(Stronger) What Doesn't Kill You",  
			artist:"Kelly Clarkson",
			link:"https://youtu.be/Xn676-fLq7I",
			lyrics:"What doesn't kill you makes you stronger." // add new lyric, add one to if statement
		},
		{
			songName: "Born This Way",  
			artist:"Lady Gaga",
			link:"https://youtu.be/wV1FrqwZyKw",
			lyrics:"Don't hide yourself in regret, just love yourself and you're set."
		},
	]
	
	// 01 - they don't need you anyway



	/*
	var i = 1;
	var count = quotes01.length;
		
	$('#quoteGenerator1').click(function(){
		if (i < count) {
			var content = '<div class="quoteContainer text-center"><h2 class="quote">' + quotes01[i].lyrics + '</h2></div>';
			content += '<h3 class="artist">' + quotes01[i].songName + ' by ' + quotes01[i].artist + '</h3>';
			$('.quoteContainer').html('');
			$(content).appendTo('.quoteContainer').show(300);
			if (i != count-1) { i += 1};
			if (i === count) { i = 1 };
		}

		//$('.quoteContainer').hide();
		//var newQuote = '<div class="quoteContainer">something</div>';
		//$('.gradients').append(newQuote).fadeIn();
		//console.log(nextQuote);
	});

*/
/*
	var i = 0;

	$('#quoteGenerator1').click(function(){
		var quotesLength = quotes01.length;
		console.log(quotesLength);
		$('.quote').html(quotes01[i].lyrics);
		$('.artist').html(quotes01[i].songName + ' by ' + quotes01[i].artist);
		$('.listenLink').attr("href", quotes01[i].link);
		i++;
		if (i === quotesLength) {i = 0};
	});
*/
/*

	var quotes02 = [
		{
			songName: "Hold On", 
			artist:"Wilson Phillips",
			link:"https://youtu.be/uIbXvaE39wM",
			lyrics:"Don't ever let anyone step all over you."
		},
		{
			songName: "Hold On", 
			artist:"Wilson Phillips",
			link:"https://youtu.be/uIbXvaE39wM",
			lyrics:"No one can change your life except for you."
		},
		{
			songName: "Hold On", 
			artist:"Wilson Phillips",
			link:"https://youtu.be/uIbXvaE39wM",
			lyrics:"Open your heart and your mind."
		},
		{
			songName: "Hold On", 
			artist:"Wilson Phillips",
			link:"https://youtu.be/uIbXvaE39wM",
			lyrics:"Things'll go your way if you hold on for one more day."
		},
		{
			songName: "Hold On", 
			artist:"Wilson Phillips",
			link:"https://youtu.be/uIbXvaE39wM",
			lyrics:"Some day somebody's gonna make you want to turn around and say goodbye."
		},
		{
			songName: "Hold On", 
			artist:"Wilson Phillips",
			link:"https://youtu.be/uIbXvaE39wM",
			lyrics:"Is it really fair to feel this way inside?"
		},
		{
			songName: "Hold On", 
			artist:"Wilson Phillips",
			link:"https://youtu.be/uIbXvaE39wM",
			lyrics:"You've got no one to blame for your unhappiness."
		},
		{
			songName: "Hold On", 
			artist:"Wilson Phillips",
			link:"https://youtu.be/uIbXvaE39wM",
			lyrics:"You could sustain or are you comfortable with the pain?"
		},
		{
			songName: "Hold On", 
			artist:"Wilson Phillips",
			link:"https://youtu.be/uIbXvaE39wM",
			lyrics:"You got yourself into your own mess."
		},
		{
			songName: "Hold On", 
			artist:"Wilson Phillips",
			link:"https://youtu.be/uIbXvaE39wM",
			lyrics:"Don't you think it's worth your time to change your mind?"
		},
		{
			songName: "Hold On", 
			artist:"Wilson Phillips",
			link:"https://youtu.be/uIbXvaE39wM",
			lyrics:"I know that there is pain, but you hold on for one more day."
		},
		{
			songName: "Hold On", 
			artist:"Wilson Phillips",
			link:"https://youtu.be/uIbXvaE39wM",
			lyrics:"Make up your mind."
		},
			
	]
	
	// 02 - you need a change
	var i = 1;
	$('#quoteGenerator2').click(function(){
		console.log(quotes02[i]);
		$('.quote').html(quotes02[i].lyrics);
		$('.artist').html(quotes02[i].songName + ' by ' + quotes02[i].artist);
		$('.listenLink').attr("href", quotes02[i].link);
		i++;
		if (i === 12) {i = 0};
	});
*/

	// removing active class on navigation
	$('.dropdown-menu a').click(function(){
		$('.dropdown-menu li').removeClass('active');
	});

});