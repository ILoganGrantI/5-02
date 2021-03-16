document.getElementById('message').addEventListener('click', displayMessage)

function displayMessage () {
	alert('Hello')
}

document.getElementById('color').addEventListener('click', color)

function color () {
	document.getElementById('paragraph').style.color='red'
}

document.getElementById('font').addEventListener('click', font)

function font () {
	document.getElementById('paragraph').style.fontFamily='arial'
}

document.getElementById('size').addEventListener('click', size)

function size () {
	document.getElementById('paragraph').style.fontSize='300%'
}

document.getElementById('reset').addEventListener('click', reset)