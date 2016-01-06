$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
$(document).ready(function(){
      $('.parallax').parallax();
    });
var newP = $("<p>")
var userDate = ("#userDate")
var bitcoinApiUrl = "https://crossorigin.me/https://api.bitcoincharts.com/v1/markets.json";
$(document).ready(function(){
  $(".btn").on("click", function(){
    var userCurrency = $('#userCurrency option:selected').text();
    $("#div1").append("<p id='currencylabel' />");
    $.ajax({
      type: "GET",
      url: bitcoinApiUrl,
      dataType: "json",
      success: function(currency) {
        // loop through currency
        for (var i = 0; i < currency.length; i++) 
        {
          if(currency[i].currency == userCurrency)
          {
              var $tr = $("<tr class='hello' />");
              $tr.append( $("<td />").text(currency[i].volume || "Information Unavailable") );
              $tr.append( $("<td />").text(currency[i].latest_trade || "Information Unavailable") );
              $tr.append( $("<td />").text(currency[i].bid || "Information Unavailable") );
              $tr.append( $("<td />").text(currency[i].high || "Information Unavailable") );     
              $("#theTable tbody").append($tr);
              
              
          }
        }
        $("#currencylabel").append(userCurrency);
      }
      });
    });
  });

$(".btn").on("click", function(){
   if($(".hello").length > 0) $(".hello").remove(); 
   // rest of click handler
});

$(".btn").on("click", function(){
   if($("#currencylabel").length > 0) $("#currencylabel").remove(); 
   // rest of click handler
});



 $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
          