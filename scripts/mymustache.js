 $("document").ready(function() {
 	$.getJSON('./projects.json', function(data) {
		var template = $('#projectsTpl').html();
		var html = Mustache.to_html(template, data);
		$('#mustache').html(html);
	});
 });