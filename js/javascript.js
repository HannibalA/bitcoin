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
    $.ajax({
      type: "GET",
      url: bitcoinApiUrl,
      dataType: "json",
      success: function(currency) {
        // loop through currency
        for (var i = 0; i < currency.length; i++) 
        {
          var $tr = $("<tr />");
          $tr.append( $("<td />").text(currency[i].volume) );
          $tr.append( $("<td />").text(currency[i].latest_trade) );
          $tr.append( $("<td />").text(currency[i].bid) );
          $tr.append( $("<td />").text(currency[i].high) );
          $tr.append( $("<td />").text(currency[i].currency) );
                     
          $("#theTable tbody").append($tr);
        }
      }
    });
  });
})
 

        
 



 $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
          