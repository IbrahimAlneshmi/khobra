from flask import Flask, request, jsonify,render_template
import pytesseract
from PIL import Image

app = Flask(__name__)

def extract_text_from_image(image):
    img = Image.open(image)
    text = pytesseract.image_to_string(img)
    return text

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload_image', methods=['POST'])
def upload_image():
    extracted_text = extract_text_from_image(request.files['image'])
    return jsonify({'text': extracted_text})

if __name__ == '__main__':
    app.run(debug=True)
