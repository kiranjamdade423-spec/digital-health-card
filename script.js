// Get elements
const fileInput = document.querySelector("input[type='file']");
const button = document.querySelector("button");

// Create output section
const output = document.createElement("div");
output.style.marginTop = "20px";
output.style.padding = "15px";
output.style.borderRadius = "10px";
output.style.display = "none";
output.style.background = "#fee2e2";
output.style.color = "#7f1d1d";
document.querySelector(".card").appendChild(output);

// Image preview
fileInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.style.width = "100%";
    img.style.marginTop = "10px";
    img.style.borderRadius = "8px";

    // Remove old preview if exists
    const oldImg = document.querySelector(".card img");
    if (oldImg) oldImg.remove();

    document.querySelector(".card").appendChild(img);
  }
});

// Button click action
button.addEventListener("click", function () {
  output.style.display = "block";

  output.innerHTML = `
    <h3>🚨 Digital Health Card Generated</h3>
    <p><b>Status:</b> Dangerous Condition</p>
    <p><b>Safety Index:</b> 25 / 100</p>
    <p><b>Recommended Action:</b> Immediate Repair Mandatory</p>
  `;
});
