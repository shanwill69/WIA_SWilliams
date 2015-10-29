/*
     Name:  Shannon Williams
     Date:  November 2015
     Class & Section:  WIA-01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a height of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

window.onload = function(){

    var theCanvas = document.getElementById("canvas01");

    if(theCanvas) {
        var ctx = theCanvas.getContext("2d");

        if(ctx){

            //set up style
            ctx.strokeStyle = "black";
            ctx.fillStyle = "rgb(60, 175,239)";
            ctx.lineWidth = 100;

            //draw rectangle
            ctx.strokeRect(0,0,50,100);
            ctx.fillRect(0,0,50,100);

        }
    }
}


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here


    var theCanvas02 = document.getElementById('canvas02');

    if (theCanvas02) {
        var ctx02 = theCanvas02.getContext("2d");

        if(ctx02) {

            //set up style
            ctx02.strokeStyle = "black";
            ctx02.fillStyle = "rgba(142, 23, 23, .5)";
            ctx02.lineWidth = 2;

            //draw a full circle
            ctx02.beginPath();
            ctx02.arc(50, 50, 20, 0 * Math.PI, 2 *Math.PI);
            ctx02.fill();
            ctx02.stroke();
        }
    }

/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

var theCanvas03 = document.getElementById('canvas03');

    if (theCanvas03){
        var ctx03 = theCanvas03.getContext('2d');

        if(ctx03){

            //set up style
            ctx03.strokeStyle = "rgb(85, 12, 132)";
            ctx03.fillStyle = "rgb(169, 55, 244)";
            ctx03.lineWidth = 2;

            //draw star
            ctx03.beginPath();
            ctx03.moveTo(100, 100);
            ctx03.lineTo(108, 96);
            ctx03.lineTo(129, 100);
            ctx03.lineTo(114, 113);
            ctx03.lineTo(117, 134);
            ctx03.lineTo(100, 124);
            ctx03.lineTo(81, 134);
            ctx03.lineTo(84, 113);
            ctx03.lineTo(69, 100);
            ctx03.lineTo(90, 96);
            ctx03.lineTo(100, 100);
            ctx03.closePath();
            ctx03.fill();
            ctx03.stroke();
        }
}



/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

var theCanvas04 = document.getElementById('canvas04');

if (theCanvas04){
    var ctx04 = theCanvas04.getContext('2d');

    if(ctx04){

        ctx04.lineWidth = 5;
        ctx04.strokeStyle = 'teal';
        ctx04.beginPath();
        ctx04.moveTo(50, 130);
        ctx04.bezierCurveTo(25, 100, 90, 20, 120, 120);
        ctx04.stroke();
    }
}

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

var theCanvas05 = document.getElementById('canvas05');

if (theCanvas05) {
    var ctx05 = theCanvas05.getContext('2d');

    if(ctx05){

        var theString = "Second time is a charm!!";
        ctx05.font = "10pt Arial";
        ctx05.fillStyle = "rgb(108, 1, 114)";
        ctx05.fillText(theString, 10, 55);
    }
}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.
********************************************/

//Draw images here


var theCanvas06 = document.getElementById('canvas06');
if (theCanvas06) {
    var ctx06 = theCanvas06.getContext('2d');

    if(ctx06){

        var srcImg = document.getElementById("img01");

        ctx06.drawImage(srcImg, 0,0);

        //ctx06.drawImage(srcImg, 10, 10, 100, 75);

        //ctx06.drawImage(srcImg, 130, 100, 50, 50, 0, 0, 50, 50);
    }
}


/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

var theCanvas07 = document.getElementById('canvas07');
if (theCanvas07) {
    var ctx07 = theCanvas07.getContext('2d');

    if(ctx07){

        ctx07.strokeStyle = "black";
        ctx07.fillStyle = "white";
        ctx07.lineWidth = 1;


        ctx07.beginPath();
        ctx07.arc(75, 50, 20, 0 * Math.PI, 2 *Math.PI);
        ctx07.fill();
        ctx07.stroke();

        ctx07.beginPath();
        ctx07.arc(75, 90, 25, 0 * Math.PI, 2 *Math.PI);
        ctx07.fill();
        ctx07.stroke();


    }
}

