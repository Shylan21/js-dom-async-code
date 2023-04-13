// Use the `setInterval` (see [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/setInterval#examples)) function along with the DOM functions to implement a simple page that displays a countdown from "10". When the page opens, 10 should be displayed. After a second, it should change to 9, then to 8, etc. Once the countdown reaches 0, the text should turn red and the countdown should stop.

let count = 10;
let intervalId = undefined

const div = document.querySelector("div");
div.innerText = count;

document.body.append(div)

function countdown() {
   count = count - 1
    
    if (count === 0) {
        console.log("Stop!")
       clearInterval(intervalId)
    }
    div.innerText = count;
}
 intervalId = setInterval(countdown, 1000)


// call a function when you ant the result of the function to be passed onto other function

// don't call the function when the other function is expecting to be given a function to call (other function takes care of calling the function)