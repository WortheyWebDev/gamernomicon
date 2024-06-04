document.addEventListener('DOMContentLoaded', function () {
	var games = document.querySelectorAll('.gameArt');

	games.forEach(function (game) {
		var releaseDate = game.getAttribute('data-release-date');
		var currentDate = new Date();
		releaseDate = new Date(releaseDate);

		if (currentDate >= releaseDate) {
			var releaseDateText = game.querySelector('.releaseDate');

			releaseDateText.innerHTML = "Released";
			game.classList.remove('unreleased');
		}
	});
});