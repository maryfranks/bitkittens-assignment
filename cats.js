document.addEventListener("DOMContentLoaded", function() {

  var summonCatsButton = document.querySelector('.summon-cats');

  summonCatsButton.addEventListener('click', function(e) {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    }).done(function (responseData) {
      var catsArray = responseData.cats;
      // var catBox = document.querySelector('.cat-box');
      for (var i = 0; i < catsArray.length; i++) {
        var newImage = document.createElement('img');
        var catURL = catsArray[i].photo;
        var catName = catsArray[i].name;
        newImage.src = catURL;
        newImage.alt = "Photo of " + catName;
        var catBoxes = document.querySelectorAll('.cat-box');
        catBoxes[i].appendChild(newImage); 
      }
    });
  });



});
