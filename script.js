const tableBody = document.querySelector("#locationTable tbody");
const coordsEl  = document.getElementById("coordinates");
const btnGet    = document.getElementById("btnGet");
const btnClear  = document.getElementById("btnClear");

let map, marker;

function initMap(lat = 45.8150, lng = 15.9819) { 
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat, lng },
    zoom: 13
  });
  marker = new google.maps.Marker({
    position: { lat, lng },
    map
  });
}

window.addEventListener("load", () => initMap());

function readStorage() {
  return JSON.parse(localStorage.getItem("locationData") || "[]");
}
function writeStorage(arr) {
  localStorage.setItem("locationData", JSON.stringify(arr));
}

function addRecord(name, lat, lng) {
  const arr = readStorage();
  arr.push({ name, lat, lng, time: new Date().toLocaleString() });
  writeStorage(arr);
}

function renderTable() {
  const data = readStorage().slice().reverse();
  tableBody.innerHTML = "";
  data.forEach(r => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${r.name}</td>
      <td>${Number(r.lat).toFixed(6)}, ${Number(r.lng).toFixed(6)}</td>
      <td>${r.time}</td>
    `;
    tableBody.appendChild(tr);
  });
}

btnGet.addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();
  if (!name) return alert("Molimo unesite svoje ime.");

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      coordsEl.textContent = `Latitude: ${lat}, Longitude: ${lng}`;
      coordsEl.classList.remove("muted");

      map.setCenter({ lat, lng });
      marker.setPosition({ lat, lng });

      addRecord(name, lat, lng);
      renderTable();
    },
    () => alert("Dozvoli pristup lokaciji u pregledniku.")
  );
});

btnClear.addEventListener("click", () => {
  if (confirm("Sigurno obrisati sve podatke?")) {
    localStorage.removeItem("locationData");
    renderTable();
  }
});

renderTable();
