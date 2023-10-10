function postContactFormData(event) {
  event.preventDefault();

  // Ambil data dari form
  const form = event.target;
  const name = form.querySelector('[name="name"]').value;
  const email = form.querySelector('[name="email"]').value;
  const phone = form.querySelector('[name="phone"]').value;
  const company = form.querySelector('[name="company"]').value;
  const message = form.querySelector('[name="message"]').value;

  // Buat objek data
  const data = {
    name: name,
    email: email,
    phone: phone,
    company: company,
    message: message
  };

  // Kirim data sebagai JSON
  fetch('https://be-jayapura-9-production.up.railway.app/contact', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Terima kasih! Pesan Anda telah terkirim.");
        form.reset();
      } else {
        alert("Maaf, terjadi kesalahan. Silakan coba lagi.");
      }
    })
    .catch((error) => console.error("Error sending contact data:", error));
}

// Event listener untuk form submission
document
  .querySelector(".contact-form")
  .addEventListener("submit", postContactFormData);


// function menyimpan data register
function postRegisterFormData(event) {
  event.preventDefault();

  // Ambil data dari form
  const form = event.target;
  const name = form.querySelector('[name="name"]').value;
  const email = form.querySelector('[name="email"]').value;
  const pass = form.querySelector('[name="pass"]').value;
  const phone = form.querySelector('[name="phone"]').value;
  const kelas = form.querySelector('[name="kelas"]').value;
  const dates = form.querySelector('[name="dates"]').value;

  // Buat objek data
  const data = {
    name: name,
    email: email,
    phone: phone,
    pass: pass,
    kelas: kelas,
    dates: dates
  };

  // Kirim data sebagai JSON
  fetch('https://be-jayapura-9-production.up.railway.app/register', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert(
          "Terima kasih! Pendaftaran Anda Berhasi, silahkan tunggu tim kami mengubungi anda."
        );
        form.reset();
      } else {
        alert("Maaf, terjadi kesalahan. Silakan coba lagi.");
      }
    })
    .catch((error) => console.error("Error sending register data:", error));
}

// Event listener untuk form submission
document
  .querySelector(".registration-form")
  .addEventListener("submit", postRegisterFormData);