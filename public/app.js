
var addBear = function(event){
	console.log('trying to add bear');
	event.preventDefault();


	var name = $('#name').val();
	var age = $('#age').val();
	var gender = $('#gender').val();

	var bear = {};
	bear.name = name;
	bear.age = age;
	bear.gender = gender;
	console.log('adding a bear');

	$.ajax({
		url:'/api/bears/',
		method: 'POST',
		data: bear
	}).done(function(data){
		console.log('I posted a bear!', data);
	});
};



var deleteBear = function(event){
	var id = $(event.target).closest('tr').attr('id');
	var bear = $(event.target).closest('tr');

	//	alert('The id of this bear is: ' + id); this aler was used to test
	if(confirm('are you sure')) {
		$.ajax({
			url:'/api/bears/' + id,
			method: 'DELETE'
		}).done(function(){
			console.log('bear deleted!');
			bear.remove();
		})
	}
};



//$.ajax is used to refresh the page when a bear is deleted and you don't have to refresh the page
//browser and server is need to talk $.ajax is their voice


$('.deleteBear').on('click', deleteBear);

$('#addBear').on('click', addBear);

$('form').on('click', function(event){
	event.preventDefault();
})