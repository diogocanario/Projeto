const API_KEY = "9091e687";
const API_URL = "http://www.omdbapi.com/?apikey=" + API_KEY + "&";
const DEFAULT_POSTER = "na_poster.jpg";
const IMDB_URL = "https://www.imdb.com/title/";
const DEFAULT_URL = "https://www.imdb.com";


var clone_media = null;

$(function () {
	clone_media = $('.media').clone();

	$('#btSearch').on('click', function () {
		

		var search_keywords = $('#pesquisa').val();
		$('.panel-title').text('Search results for "' + search_keywords + '"');

		$('.media-list').html('');

		var search_url = API_URL + "s=" + search_keywords;
		
		$.ajax({
			method: "GET",
			url: search_url
		}).done(function (msg) {

			msg.Search.forEach(function (result) {
				var div_media = clone_media.clone();

				var posterURL = result.Poster;
				if (posterURL == "N/A" || posterURL == "") {
					posterURL = DEFAULT_POSTER;
				}
				var poster = $('#image', div_media);

				// In case image could not be loaded properly, replace it with "na_poster.jpg"
				poster.on("error", function (event) {
					event.target.src = DEFAULT_POSTER;
				});
				poster.attr("src", posterURL);

				
				
		
				
				
				$('.title', div_media).text(result.Title);
				$('.ano', div_media).text(result.Year);
				$('.tipo', div_media).text(result.Type);
				$('.thumbnail', div_media).attr('href', 'http://www.imdb.com/title/'+result.imdbID);
				$('.media-list').append(div_media);

				
			});
		});
	});
});