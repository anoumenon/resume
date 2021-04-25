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

    var $clearPic = $( '#clearPic' );
    
    
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

    if(document.body.clientWidth < 1000){
        $ink1.hide();
        $ink2.hide();
        $ink3.hide();
        $ink4.hide();
        $ink5.hide();
        $ink6.hide();
        $ink7.hide();
        $ink8.hide();
        $ink9.hide();
        $clearPic.show();
        } else { 
            $clearPic.hide();
            hideAngles();
            };

    let imageTop;
	let imageBottom;
	let imageLeft;
    let imageRight;
    var $inkDiv = $('#inkDiv');
    var $html=$('html');

    // let center = ($(window).width())/2;

    function inkInit(){

        imageTop = $inkDiv.offset().top;
        imageBottom = imageTop + 200;
        imageLeft = $inkDiv.offset().left;
        imageRight = imageLeft + 200;
    }
    inkInit();

    $( window ).resize(function() {
        inkInit();
      });

    $html.mousemove(function(event) {
        let mouseX = event.pageX;
        let mouseY = event.pageY;
        // console.log(event.pageX, event.pageY);

        // corners
        if((     mouseX <= imageLeft) && (mouseY <= imageTop)){hideAngles(); $ink1.show();}
        else if((mouseX <= imageLeft) && (mouseY >= imageBottom)){hideAngles(); $ink7.show();}
        else if((mouseX >= imageRight) && (mouseY <= imageTop)){hideAngles(); $ink3.show();}
        else if((mouseX >= imageRight) && (mouseY >= imageBottom)){hideAngles(); $ink9.show();}

        // edges

        //left
        else if((mouseX < imageLeft) && (mouseY > imageTop) && (mouseY < imageBottom)){hideAngles(); $ink4.show();}
        //top
        else if((mouseY < imageTop) && (mouseX > imageLeft) && (mouseX < imageRight)){hideAngles(); $ink2.show();}
        //right
        else if((mouseX > imageRight) && (mouseY > imageTop) && (mouseY < imageBottom)){hideAngles(); $ink6.show();}
        //bottom
        else if((mouseY > imageBottom) && (mouseX > imageLeft) && (mouseX < imageRight)){hideAngles(); $ink8.show();}

        else{hideAngles();}

    });

});