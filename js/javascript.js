$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
$(document).ready(function(){
      $('.parallax').parallax();
    });
var newP = $("<p>")
var userDate = ("#userDate")
var bitcoinApiUrl = "https://crossorigin.me/http://api.bitcoincharts.com/v1/weighted_prices.json";
$(document).ready(function(){
  $(".btn").on("click", function(){
    var currencySymbol = {"USD":"$", "EUR":"\u20AC", "GBP":"\u00A3", "CHF":"", "CAD":"C$", "AUD":"A$", "MXN":"\u20B1", "CNY":"\u00A5", "NZD":"NZ$", "SEK":"kr ", "RUB":"\u20BD", "HKD":"HK$", "NOK":"kr ", "SGD":"S$", "ARS":"$", "CZK":"KC$", "ZAR":"R ", "BRL":"R$", "INR":"\u20B9", "IDR":"Rp ", "DKK":"kr ", "ILS":"\u20AA", "LTC":"", "NMC":"", "PLN":"zł", "THB":"\u0E3F", "XRP":"XRP "};
    var userCurrency = $('#userCurrency option:selected').text();
    $("#div1").append("<p id='currencylabel' />");
    $.ajax({
      type: "GET",
      url: bitcoinApiUrl,
      dataType: "json",
      success: function(currency) {
        // loop through currency
        
          if (userCurrency in currency)
          {
              var $tr = $("<tr class='hello' />");
              $tr.append( $("<td />").text(currencySymbol [userCurrency]+currency[userCurrency]['7d'] ));
              $tr.append( $("<td />").text(currencySymbol [userCurrency]+currency[userCurrency]['24h'] ));
              $tr.append( $("<td />").text(currencySymbol [userCurrency]+currency[userCurrency]['30d'] ));
              console.log("I am here");
              console.log($tr);     
              $("#theTable tbody").append($tr);
              
              
          }
        $("#currencylabel").append(userCurrency);
        console.log(userCurrency)
        console.log(currency)
        console.log(currency[userCurrency])
        console.log($tr)
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
          