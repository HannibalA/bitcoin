$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
$(document).ready(function(){
      $('.parallax').parallax();
    });

var bitcoinApiUrl = "https://crossorigin.me/https://api.bitcoincharts.com/v1/markets.json";
$(document).ready(function(){
  $(".btn").on("click", function(){
    $.ajax({
      type: "GET",
      url: bitcoinApiUrl,
      success: function(currency) {
        // parse currency
        currency = JSON.parse(currency);
        // loop through currency
        for(var i = 0; i < currency.length; i++) {
          console.log(currency[i]); //this is the object
          //use dot notation to get object values
          var volume = currency[i].volume,
          latestTrade = currency[i].latest_trade,
          bid = currency[i].bid,
          high = currency[i].high,
          currencyString = currency[i].currency;
          
          //Create a string to log
          var curObjLog = "Volume:"+volume+"\n"+"Latest Trade: "+latestTrade+"\n"+"Bid: "+bid+"\n"+"High: "+high+"\n"+"Currency: "+currencyString+"\n"+"\n"+"\n";
          // log the string
          console.log(curObjLog);
        }
      },
      error:function(jqXHR, textStatus, errorThrown){
        alert("something went wrong man!");
      }
    });
  });
});

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
          