// Display the results dynamically
function displayResults(data) {
  const resultsSection = document.getElementById("resultsSection");
  const detectedCanvas = document.getElementById("detectedCanvas");
  const detectedObjects = document.getElementById("detectedObjects");

  const image = new Image();
  image.onload = function () {
    // Set canvas dimensions to match the image
    detectedCanvas.width = image.width;
    detectedCanvas.height = image.height;
    const ctx = detectedCanvas.getContext("2d");

    // Draw the image on the canvas
    ctx.drawImage(image, 0, 0);

    // Draw bounding boxes with labels
    data.objects.forEach((obj) => {
      const { label, box, color } = obj;
      const [x1, y1, x2, y2] = box;

      // Draw bounding box
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);

      // Draw label
      ctx.fillStyle = color;
      ctx.font = "24px Arial";
      ctx.fillText(label, x1, y1 - 5); // Label above the box

      // Add label and box details in a list below
      const li = document.createElement("li");
      li.innerHTML = `<span style="color: ${color}; font-weight: bold;">${label}</span> - Box: [${box
        .map((b) => b.toFixed(2))
        .join(", ")}]`;
      detectedObjects.appendChild(li);
    });
  };
  image.src = `data:image/png;base64,${data.image}`;

  // Show the results section
  resultsSection.style.display = "flex";
}
