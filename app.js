const API_URL = "https://698a179bc04d974bc6a154af.mockapi.io/api/v1/dispositivos_IoT";

const form = document.getElementById("deviceForm");
const table = document.getElementById("devicesTable");

const direccionMap = {
  1: "Adelante",
  2: "Detener",
  3: "Atrás",
  4: "Vuelta derecha adelante",
  5: "Vuelta izquierda adelante",
  6: "Vuelta derecha atrás",
  7: "Vuelta izquierda atrás",
  8: "Giro 90° derecha",
  9: "Giro 90° izquierda"
};

// ================== READ ==================
async function loadDevices() {
  const res = await fetch(API_URL);
  const data = await res.json();

  table.innerHTML = "";

  data.forEach(device => {
    table.innerHTML += `
      <tr>
        <td>${device.deviceName}</td>
        <td>${device.direccionText}</td>
        <td>${device.ipClient}</td>
        <td>${new Date(device.dateTime).toLocaleString()}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editDevice('${device.id}')">✏️</button>
          <button class="btn btn-danger btn-sm" onclick="deleteDevice('${device.id}')">🗑️</button>
        </td>
      </tr>
    `;
  });
}

// ================== CREATE & UPDATE ==================
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const id = document.getElementById("deviceId").value;
  const deviceName = document.getElementById("deviceName").value;
  const direccionCode = document.getElementById("direccionCode").value;

  const payload = {
    deviceName,
    direccionCode: Number(direccionCode),
    direccionText: direccionMap[direccionCode]
  };

  if (id) {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } else {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  }

  form.reset();
  document.getElementById("deviceId").value = "";
  loadDevices();
});

// ================== EDIT ==================
async function editDevice(id) {
  const res = await fetch(`${API_URL}/${id}`);
  const device = await res.json();

  document.getElementById("deviceId").value = device.id;
  document.getElementById("deviceName").value = device.deviceName;
  document.getElementById("direccionCode").value = device.direccionCode;
}

// ================== DELETE ==================
async function deleteDevice(id) {
  if (confirm("¿Seguro que deseas eliminar este dispositivo?")) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    loadDevices();
  }
}

// INIT
loadDevices();
