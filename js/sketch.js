$(document).ready(function(){
    var dim;
    var h;
    var s;
    var value;
   create();

 });


function create(){
	
	do{
	h = parseInt(prompt("How many rows and collumns?","16"))

	dim = (h>0 && h<70) ? h:'';
	}while(!dim);

	clear();

	s = Math.round(660/dim);
	//$(size);
	
	console.log("after size");
	$('body').append('<table>');

	for (var i = 0; i < dim; i++) {
	 	$('table').append('<tr>');
	};

    for (var j = 0; j < dim; j++) {
    	$('tr').append('<td><div></div></td>');
	};


	$('table').append('</tr>');

	size(s);
/*
	$('div').mouseenter(function(){		//MUST REFRESH AFTER NEW CREATION
		$(this).addClass('b');
	})
*/
	$('div').mouseenter(function(){		//MUST REFRESH AFTER NEW CREATION
		var opac = $(this).css('opacity');
	
		if (opac > 0)
			//$(this).css('opacity',opac - 0.1);
			$(this).fadeTo(200,opac - 0.1);
		
	})
};



function size(){
	console.log(s);
	$("div").width(s);
	$('div').height(s);

};

function clear(){
	$('table').remove();
};


//http://htmlpreview.github.io/?https://github.com/RebootJeff/myLearning/blob/master/odin.js.sketch_pad/index.html
