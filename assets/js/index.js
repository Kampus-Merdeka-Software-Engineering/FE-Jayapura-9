// Fetch data untuk header
function fetchHeaderData() {
  fetch("")
    .then((response) => response.json())
    .then((data) => {
      const headerElement = document.querySelector("header .header-text");
      headerElement.querySelector("h1").textContent = data.title;
      headerElement.querySelector("p").textContent = data.description;
    })
    .catch((error) => console.error("Error fetching header data:", error));
}
