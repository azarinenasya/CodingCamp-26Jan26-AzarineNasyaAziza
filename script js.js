document.addEventListener("DOMContentLoaded", function () {

  // ===== HI GUEST =====
  const usernameEl = document.getElementById("username");
  const savedName = localStorage.getItem("username");

  if (usernameEl && savedName) {
    usernameEl.textContent = savedName;
  }

  // ===== FORM =====
  const form = document.getElementById("contactForm");
  const resultBox = document.getElementById("result");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const userMessage = document.getElementById("userMessage").value;

      // simpan nama
      localStorage.setItem("username", name);

      // update greeting
      if (usernameEl) {
        usernameEl.textContent = name;
      }

      // tampilkan hasil
      resultBox.innerHTML = `
        <h3>Message Sent ✅</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${userMessage}</p>
      `;

      form.reset();
    });
  }

});
