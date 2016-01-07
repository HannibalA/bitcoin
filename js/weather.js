var weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}";
var weatherApiParams = {
	api_key:"e53146b42db2ab0cf243fc5d9a8e76f6"}
$(document).ready(function(){
	$(".btn").on("click", function(){
		$.ajax({
			type: "GET",
			url: weatherApiUrl +$.param(weatherApiParams),
			dataType:"json", 
			success: function(main) {
				for (var i = 0; i < main.length; i++) {
					console.log (main[i]);
				}
			}
		});
	});
});