// Replace the button click event with a form submit event.
/*
$('form').submit( function(evt) {
// Stop the form from submitting
  evt.preventDefault();
  // Retrieve the value the visitor typed in the input field send that value to the Flickr API (remember the tags property).
  var searchTerms - $("#search").val()
);
*/
// Retrieve the value the visitor typed in the input field send that value to the Flickr API (remember the tags property).

$(document).ready(function() {


/*
 $('button').click(function () {
    // highlight the button
    // not AJAX, just cool looking
    $("button").removeClass("selected");
    $(this).addClass("selected");
*/

  $('form').submit( function(evt) {
    // Stop the form from submitting
    evt.preventDefault();
    // Retrieve the value the visitor typed in the input field send that value to the Flickr API (remember the tags property)
    var $searchTerms = $("#search");
    var $submitButton = $("#submit");

    $searchTerms.prop("disabled", true);
    $submitButton.attr("disabled", true).val("searching...");

    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $searchTerms.val();
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
      $searchTerms.prop("disabled", false);
      $submitButton.attr("disabled", false).val("Search");
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end submit

}); // end ready
