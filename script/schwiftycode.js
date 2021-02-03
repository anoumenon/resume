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

    let imageTop;
	let imageBottom;
	let imageLeft;
    let imageRight;
    var $inkDiv = $('#inkDiv');
    
    function inkInit(){

        imageTop = $inkDiv.offset().top;
        console.log(imageTop);
        imageBottom = $inkDiv.offset().top + 150;
        console.log(imageBottom);
        imageLeft = $inkDiv.offset().left;
        console.log(imageLeft);
        imageRight = $inkDiv.offset().left + 150;
        console.log(imageRight);
    }

    inkInit();

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

        });