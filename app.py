import torch
from flask import Flask, render_template, request, jsonify
from PIL import Image, ImageDraw
import io
import base64
import random
from transformers import DetrImageProcessor, DetrForObjectDetection

app = Flask(__name__)

# Load pre-trained model and processor
processor = DetrImageProcessor.from_pretrained("facebook/detr-resnet-50")
model = DetrForObjectDetection.from_pretrained("facebook/detr-resnet-50")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    # Load image
    image = Image.open(file.stream)
    
    # Preprocess and detect objects
    inputs = processor(images=image, return_tensors="pt")
    outputs = model(**inputs)
    
    # Post-process results
    target_sizes = torch.tensor([image.size[::-1]])  # H, W
    results = processor.post_process_object_detection(outputs, target_sizes=target_sizes, threshold=0.9)[0]

    # Draw bounding boxes and labels on the image
    draw = ImageDraw.Draw(image)
    objects = []
    for box, label in zip(results["boxes"], results["labels"]):
        color = f"#{random.randint(0, 0xFFFFFF):06x}"  # Generate random hex color
        box = box.tolist()
        label_name = model.config.id2label[label.item()]
        
        # Draw box and label
        draw.rectangle(box, outline=color, width=12)  # Draw the box with random color
        draw.text((box[0], box[1]), label_name, fill=color)  # Draw label with the same color
        
        objects.append({"label": label_name, "box": box, "color": color})

    # Convert the annotated image to Base64
    img_io = io.BytesIO()
    image.save(img_io, format="PNG")
    img_io.seek(0)
    base64_image = base64.b64encode(img_io.read()).decode("utf-8")

    # Return JSON response with the base64 image and object details
    return jsonify({"image": base64_image, "objects": objects})

if __name__ == "__main__":
    app.run(debug=True)
