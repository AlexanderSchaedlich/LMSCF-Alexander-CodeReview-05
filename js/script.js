//get data
var movieData = JSON.parse(data);
//loop through data
for (var i in movieData) {
	//add cards
	$(".row").append(`
		<div id="card${i}" class="d-flex col-md-5 col-sm-10 mb-5 p-2">
			<img class="rounded border border-secondary" src="${movieData[i].src}" alt="${movieData[i].name}">
			<div class="px-2">
				<p class="h4">${movieData[i].name}</p>
				<p>${movieData[i].desc}</p>
				<span class="text-success float-right">
					Like 
					<i class="fa fa-thumbs-up" onclick="increaseLikes(${i})"></i>
					<input id="${i}" value="${movieData[i].likes}"">
				</span>
			</div>
		</div>
	`);
};
//set offset
$(".row > :nth-child(even)").addClass("offset-md-2")

//increase likes
function increaseLikes(n) {
	//get value
	var oldValue = $("#" + n).val();
	//increase value
	$("#" + n).val(function(x){return ++x}(oldValue));
};