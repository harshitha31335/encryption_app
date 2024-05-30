from flask import Flask, render_template, request, jsonify
from cryptography.fernet import Fernet

app = Flask(__name__)

# Generate a key for Fernet encryption
key = Fernet.generate_key()
cipher_suite = Fernet(key)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/encrypt', methods=['POST'])
def encrypt():
    plaintext = request.form['plaintext']
    encrypted_text = cipher_suite.encrypt(plaintext.encode())
    return jsonify({'encrypted_text': encrypted_text.decode()})

@app.route('/decrypt', methods=['POST'])
def decrypt():
    encrypted_text = request.form['encrypted_text']
    decrypted_text = cipher_suite.decrypt(encrypted_text.encode())
    return jsonify({'decrypted_text': decrypted_text.decode()})

if __name__ == '__main__':
    app.run(debug=True)
