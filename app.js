//Problem: It looks gross in smaller browser widths and devices
//Solution: To hide the text links and swap them out with a better naviagation

//Create a select to append to the #menu
var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  //create an option
  var $option = $("<option></option>");
  
  //Deal with selected options depending on current page
  
  if($anchor.parent().hasClass("selected")){
    $option.prop("selected", true);
  }
  
  //option's value is the href of the link
  $option.val($anchor.attr("href"))
  //option's text is the text of link
  $option.text($anchor.text());
  //append option to select
  $select.append($option);
});


//bind click to button
$select.change(function(){
  // go to select's location
  window.location = $select.val();
});
