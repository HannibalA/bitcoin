$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
$(document).ready(function(){
      $('.parallax').parallax();
    });

// var userDate = $("#userDate").val();
//       var bitcoinApiUrl = "http://crossorigin.me/http://api.bitcoincharts.com/v1/markets.json";
// $(document).ready(function(){
//     $(".btn").on("click", function(){
      
      

//       $.ajax({
//         type: "GET",
//         url: bitcoinApiUrl,
//         success: function(currency) {
//           // for(var i = 0; i < currency.length; i++) {
//             console.log(currency);
//           // }
//         },
//         error:function(jqXHR, textStatus, errorThrown){
//           alert("something went wrong man!")
//         }
//       });

//       });
//     });

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
          