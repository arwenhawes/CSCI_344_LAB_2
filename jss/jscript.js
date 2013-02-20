var main = function () {
  var twitter = new ctwitter.CTwitter();
  twitter.stream("statuses/filter", { track:["JDK 1.7"] }, function (stream) { 
    stream.on("data", function(tweet) {
      $(".tweet").prepend("<p class='tweet'>"+tweet.text+"<p>");//adds to top of screen 
      $(".tweet").slideDown(200);//makes it slide down page
      $('.tweet p:gt(10)') //gets 10 and removes moore than that by fading
		    .fadeOut(500, function() { $(this).remove() });
    });
  });  
}

$(document).ready(main);
