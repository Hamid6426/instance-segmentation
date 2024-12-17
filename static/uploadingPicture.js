// Handle form submission
document
  .getElementById("uploadForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const formData = new FormData(this); // Get form data
    const spinner = document.getElementById("loadingSpinner");
    const resultsSection = document.getElementById("resultsSection");

    // Show the spinner and hide results section
    spinner.style.display = "flex";
    resultsSection.style.display = "none";

    try {
      // Send the image to the server via POST request
      const response = await fetch("/predict", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json(); // Parse JSON response
        displayResults(data);
      } else {
        alert("Error uploading the image or processing failed.");
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    } finally {
      // Hide the spinner
      spinner.style.display = "none";
    }
  });

