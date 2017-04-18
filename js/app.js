
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $('<p></p>');

//Add image to overlay
$overlay.append($image);
$overlay.append($caption);

//append overlay to body
$("body").append($overlay);

//capture the click event on an image link
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  
  //update the overlay with the linked image
  $image.attr('src', imageLocation);
  
  $overlay.fadeIn();

  //get the alt text of the image and display it as the caption
  var captionText = $(this).children('img').attr('alt');
  $caption.text(captionText); 
  
});

//when overlay is clicked, hide overlay
$overlay.click(function(){
  $(this).fadeOut();
        
});
  
  
  
