function playSound(event) {
	let key = event.key.toLowerCase()

	// Verifica se a tecla pressionada é válida
	const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
	if (!keys.includes(key)) {
		return
	}

	// Seleciona o audio e o botão equivalentes à tecla pressionada
	const audio = document.querySelector(`audio[data-key="${key}"]`)
	const button = document.querySelector(`button[data-key="${key}"]`)

	// Reinicia o áudio sempre que a tecla for pressionada
	// Isso possibilita clicar várias vezes repetidas
	audio.currentTime = 0
	audio.play()

	button.classList.add("active")
}

function notActive(event) {
	let key = event.key.toLowerCase()

	// Verifica se a tecla soltada é válida
	const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
	if (!keys.includes(key)) {
		return
	}

	const button = document.querySelector(`button[data-key="${key}"]`)

	button.classList.remove("active")
}

function playSoundOnTouch(key) {
	const audio = document.querySelector(`audio[data-key="${key}"]`)

	audio.currentTime = 0
	audio.play()
}

window.addEventListener("keydown", playSound)
window.addEventListener("keyup", notActive)