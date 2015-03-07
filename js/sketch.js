$(document).ready(function(){
    
    for (var i = 0; i < 16; i++) {
    	for (var j = 0; j < 16; j++) {
    		$('body').append('<div></div>')
    	};
    	$('body').append('</br>')
    };
    



$('div').mouseenter(function(){

	$(this).addClass('c');
})


})

//http://htmlpreview.github.io/?https://github.com/RebootJeff/myLearning/blob/master/odin.js.sketch_pad/index.html
