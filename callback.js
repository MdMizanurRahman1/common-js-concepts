//By definition, a callback is a function that you pass into another function as an argument for executing later.

function greeting(greetingHandler, name) {
    greetingHandler(name)
}

function greetingHandler(name) {
    console.log('Good morning', name)

}
function greetingEvening(name) {
    console.log('Good evening', name)
}

greeting(greetingHandler, 'HeyMan');
greeting(greetingHandler, 'HeyMan23');
greeting(greetingHandler, 'HeyMan45');
greeting(greetingEvening, 'tom brady');