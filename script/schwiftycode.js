'use strict'

$(document).ready(function() {

    var $ink1 = $( '#ink1' );
    var $ink2 = $( '#ink2' );
    var $ink3 = $( '#ink3' );
    var $ink4 = $( '#ink4' );
    // var $ink5 = $( '#ink5' );
    var $ink6 = $( '#ink6' );
    var $ink7 = $( '#ink7' );
    var $ink8 = $( '#ink8' );
    var $ink9 = $( '#ink9' );
    
    function hideAngles(){
        $ink1.hide();
        $ink2.hide();
        $ink3.hide();
        $ink4.hide();
        // $ink5.hide();
        $ink6.hide();
        $ink7.hide();
        $ink8.hide();
        $ink9.hide();
    }
    hideAngles();

    let imageTop;
	let imageBottom;
	let imageLeft;
    let imageRight;
    var $inkDiv = $('#inkDiv');
    var $html=$('html');

    // let center = ($(window).width())/2;

    function inkInit(){
        imageTop = $inkDiv.offset().top;
        imageBottom = imageTop + 150;
        imageLeft = $inkDiv.offset().left;
        imageRight = imageLeft + 150;
    }
    inkInit();

    $( window ).resize(function() {
        picPlaceInit();
      });

    $html.mousemove(function(event) {
        let mouseX = event.pageX;
        let mouseY = event.pageY;
        // console.log(event.pageX, event.pageY);

        // top left
        if((     mouseX < imageLeft) && (mouseY < imageTop)){hideAngles(); $ink1.show();}
        else if((mouseX < imageLeft) && (mouseY > imageBottom)){hideAngles(); $ink7.show();}
        else if((mouseX > imageRight) && (mouseY < imageTop)){hideAngles(); $ink3.show();}
        else if((mouseX > imageRight) && (mouseY > imageBottom)){hideAngles(); $ink9.show();}
        else{hideAngles();}


// else{hideAngles();}
        

        

    });

});