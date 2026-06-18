function addItem() {
  let item = document.getElementById("item").value;
  let stock = document.getElementById("stock").value;
  let expiry = document.getElementById("expiry").value;

  if (!item || !stock || !expiry) {
    alert("Please fill all fields");
    return;
  }

  let today = new Date();
  let expDate = new Date(expiry);

  let diff = expDate - today;
  let daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  let status = "";
  let statusClass = "";

  if (daysLeft <= 0) {
    status = "Expired";
    statusClass = "status-expired";
  } else if (daysLeft <= 7) {
    status = "Critical";
    statusClass = "status-critical";
  } else if (daysLeft <= 30) {
    status = "Expiring Soon";
    statusClass = "status-warning";
  } else {
    status = "Good";
    statusClass = "status-good";
  }

  let row = `
    <tr>
      <td>${item}</td>
      <td>${stock}</td>
      <td>${expiry}</td>
      <td>${daysLeft}</td>
      <td class="${statusClass}">${status}</td>
    </tr>
  `;

  document.getElementById("tableBody").innerHTML += row;

  document.getElementById("item").value = "";
  document.getElementById("stock").value = "";
  document.getElementById("expiry").value = "";
}
