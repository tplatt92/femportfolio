const contactForm = document.querySelector(".contact__form");

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    SecureToken: "C973D7AD-F097-4B95-91F4-40ABC5567812",
    To: "thomasjplatt0107@gmail.com",
    From: document.getElementById("email").value,
    Subject: "Contact",
    Body: document.getElementById("message").value,
  }).then((message) => alert(message));
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // handle submit
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");
  if (name.value == "" || email.value == "" || message.value == "") {
    //throw error
    alert("Ensure that you input a value in all fields.");
  } else {
    alert("Sumbmission successful!");
  }

  name.value = "";
  email.value = "";
  message.value = "";
});
