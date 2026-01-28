function generateCard() {
  const severity = document.getElementById("severity").value;
  const structureId = document.getElementById("structureId").value;
  const location = document.getElementById("location").value;
  const inspector = document.getElementById("inspector").value;
  const imageInput = document.getElementById("imageInput");

  if (!severity || !structureId || !location || !inspector) {
    alert("Please complete all inspection details");
    return;
  }

  let status = "", priority = "", color = "", score = 0;

  if (severity === "minor") { status="SAFE"; priority="Routine Monitoring"; color="green"; score=85; }
  else if (severity === "moderate") { status="WARNING"; priority="Maintenance Required Soon"; color="orange"; score=55; }
  else { status="DANGEROUS"; priority="Immediate Repair Required"; color="red"; score=25; }

  document.getElementById("healthStatus").innerText = status + " CONDITION";
  document.getElementById("healthStatus").style.color = color;
  document.getElementById("priority").innerText = "Priority: " + priority;
  document.getElementById("score").innerText = "Safety Index: " + score + "/100";

  const badge = document.getElementById("badge");
  badge.innerText = status;
  badge.style.background = color;

  document.getElementById("details").innerText =
    "Structure ID: " + structureId + " | Location: " + location + " | Inspector: " + inspector;

  if (imageInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function(e) { document.getElementById("previewImage").src = e.target.result; };
    reader.readAsDataURL(imageInput.files[0]);
  }

  document.getElementById("outputCard").style.display = "block";
}
