var movieData = JSON.parse(data);
for (var i in movieData) {
	$(".row").children(i).append(`
		<div class="px-2">
			<p class="h4">${movieData[i].name}</p>
			<p>${movieData[i].desc}</p>
			<i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>
		</div>
	`);
};