$(document).ready(function(){

	$("#test").on("click",function(e){
		e.preventDefault()
		var nyTimesMovieApiUrl = "http://api.nytimes.com/svc/movies";
		nyTimesMovieApiUrl += "key=6361b0bb49de7dfe873a73b320c0af73:6:73911657";

		$.ajax({
			type:"GET"
			url:nyTimesMovieApiUrl
				success: function (response){
					var
				}
		})


	})
})