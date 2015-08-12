$(document).ready(function(){
  $("select[ng-model=mapName]").change(function(){
    if ($(this).val() === "string:Other"){
    $("li#otherMap").show();
  } else {
    $("li#otherMap").hide();
  }
  });
});