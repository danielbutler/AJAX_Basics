$(document).ready(function() {
  $('button').click(function() {
    $("button").removeClass("selected");
    $(this).addClass("selected");
    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
    var animal = $(this).text();
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      // how to loop through an array in JQuery
      // $.each(array, function(i, item)) {};
      $.each(data.items, function(i, photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '">';
        photoHTML += '</li>';
      })
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    };
    // flickrAPI = url
    // flickrOptions = data
    // displayPhotos = callback function
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  }); //end button click
}); // end ready
