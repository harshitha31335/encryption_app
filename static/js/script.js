function encryptText() {
    const plaintext = document.getElementById('inputText').value;
    fetch('/encrypt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `plaintext=${encodeURIComponent(plaintext)}`,
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('outputText').innerText = data.encrypted_text;
    })
    .catch(error => console.error('Error:', error));
}

function decryptText() {
    const encryptedText = document.getElementById('inputText').value;
    fetch('/decrypt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `encrypted_text=${encodeURIComponent(encryptedText)}`,
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('outputText').innerText = data.decrypted_text;
    })
    .catch(error => console.error('Error:', error));
}
