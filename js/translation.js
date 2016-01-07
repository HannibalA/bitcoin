var translateUrl = "https://crossorigin.me/https://translate.yandex.net/api/v1.5/tr.json/translate%20?1.1.20160107T023736Z.c7fa2fa702e65042.c8c0acd05d99aad22ddef8f0e9b0f46e1e0f6357"
$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: translateUrl,
		dataType: "json",
		success: function(translate){
			console.log(translate)
		}
	});
});
console.log("cool");