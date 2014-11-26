Rock-Paper-Scissors-Javascript
==============================

Week 5: Introduction To Javascript

This week, we have been introduced to Javascript and JQuery.  The end goal of the task was to replicate [Rock-Paper-Scissors-Lizard-Spock](http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock) using Javascript for much of the logic and JQuery and CSS for transition and front-end effects.  We used Jasmine as a way of adhering to the test-driven-development philosophies.  The end app is hosted on Heroku as a Sinatra app.

###Code Snippet

We enjoyed learning about ```slideDown()``` and ```animate()``` in action.  After each play, a "winning message" is prepended to a list.  The previous message is then animated through opacity and fontSize adjustments before being deleted from the list to prevent the file size from becoming too bloated.

``` javascript

  $('<li>'+rules.winningMessage()+'</li>').prependTo('#results').slideDown(1000);      
  
  $('li:nth-child(2)').animate({opacity: 0, fontSize: 0}, 3000, function(){
    $(this).remove();
    });

```


###Technologies
- Javascript
- JQuery
- Jasmine
- Sinatra
- CSS/HTML