var movieData = JSON.parse(data);
for (var i in movieData) {
	console.log(movieData[i].likes)
}