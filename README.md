Rock-Paper-Scissors-Javascript
==============================

Week 5: Introduction To Javascript

This week, we have been introduced to Javascript and JQuery.  The end goal of the task was to replicate [Rock-Paper-Scissors-Lizard-Spock](http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock) using Javascript for much of the logic and JQuery and CSS for transition and front-end effects.  We used Jasmine as a way of adhering to the test-driven-development philosophies and begun to use Javascript templating with Mustache as a way of templating and refactoring.  We have integrated an external animation stylesheet by [Justin Aguilar](http://www.justinaguilar.com/animations/) and also used the ```innerHTML``` syntax for the first time.  The end app is hosted on [Heroku](https://agile-everglades-6175.herokuapp.com/) as a Sinatra app.

###Code Snippet

We enjoyed learning about ```slideDown()``` and ```animate()``` in action.  After each play, a "winning message" is prepended to a list.  The previous message is then animated through opacity and fontSize adjustments before being deleted from the list to prevent the file size from becoming too bloated.

``` javascript

  $(document).ready(function(){
    var removeListItem = function(){
          $(this).remove();
        };
    var render = function(rules){
      var html = $('#list-item-template').html();
      var data = {message: rules.winningMessage()}
      return Mustache.render(html, data);
         };
    var giorgia = new Player('You');
    var computer = new Computer;
    var rules = new Rules(giorgia, computer)
    $('.choices img').on('click', function(){
      giorgia.picks($(this).data('pick'));
      computer.picks();
      $(render(rules)).prependTo('#results').slideDown(1000);      
      $('li:nth-child(2)').animate({opacity: 0, fontSize: 0}, 3000,removeListItem);
    });
  });    

```

###Technologies
- Javascript
- JQuery
- Jasmine
- Sinatra
- CSS/HTML
- Mustache