document.getElementById('encryptBtn').addEventListener('click', async () => {
	await processText('encrypt');
});

document.getElementById('decryptBtn').addEventListener('click', async () => {
	await processText('decrypt');
});

const containsInvalidCharacters = (text) => {
	// Verifica si el texto contiene letras mayúsculas o caracteres con acentos
	const invalidChars = /[A-ZÁÉÍÓÚÑáéíóúñ]/;
	return invalidChars.test(text);
};

// Procesa el texto y switchea dependiendo si es encriptar o desencriptar, muestra el resultado.
const processText = async (action) => {
	let text = document.getElementById('inputText').value;

	if (containsInvalidCharacters(text)) {
		alert('Solo se permite texto en minusculas y sin ascentos!');
		return;
	}

	let result = '';

	if (action === 'encrypt') {
		result = await encryptText(text);
	} else if (action === 'decrypt') {
		result = await decryptText(text);
	}

	displayResult(result);
};

// Encripta
const encryptText = async (text) => {
	const encryptionKeys = {
		e: 'enter',
		i: 'imes',
		a: 'ai',
		o: 'ober',
		u: 'ufat',
	};

	let encryptedText = text;

	for (const [key, value] of Object.entries(encryptionKeys)) {
		const regex = new RegExp(key, 'g');
		encryptedText = encryptedText.replace(regex, value);
	}

	return encryptedText;
};

// Desencripta
const decryptText = async (text) => {
	const decryptionKeys = {
		enter: 'e',
		imes: 'i',
		ai: 'a',
		ober: 'o',
		ufat: 'u',
	};

	let decryptedText = text;

	for (const [key, value] of Object.entries(decryptionKeys)) {
		const regex = new RegExp(key, 'g');
		decryptedText = decryptedText.replace(regex, value);
	}

	return decryptedText;
};

// Muestra el resultado
const displayResult = (result) => {
	document.getElementById('outputImage').classList.add('hidden');
	document.getElementById('outputText').classList.remove('hidden');
	document.getElementById('messageText').textContent = result;
	document.getElementById('copyBtn').classList.remove('hidden');
};

// Copiar en portapapeles
document.getElementById('copyBtn').addEventListener('click', async () => {
	const text = document.getElementById('messageText').textContent;
	const copyMessage = document.getElementById('copyMessage');
	try {
		await navigator.clipboard.writeText(text);
		copyMessage.classList.remove('hidden');
		copyMessage.classList.add('show');

		// Ocultar el mensaje después de 3 segundos
		setTimeout(() => {
			copyMessage.classList.remove('show');
			copyMessage.classList.add('hidden');
		}, 3000);
	} catch (err) {
		console.error('Error al copiar el texto:', err);
	}
});
