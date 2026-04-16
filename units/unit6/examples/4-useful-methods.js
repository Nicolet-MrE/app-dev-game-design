/* 
    There are some useful methods of the document and element objects that will help you to
    fulfill your assignment.
*/

function create(){
    const ball = document.createElement('div');
    // creates a new <div> in the DOM - but but does not assign it a location yet.

    ball.setAttribute('style', 'background-color: red;');
    // this adds the style attribute and sets it to background-color: red;

    return ball;
    // return keyword means the function will answer a query or assignment with this value
}

const ballElement = create();
console.log(ballElement);   // prints <div style="background-color: red;"></div>