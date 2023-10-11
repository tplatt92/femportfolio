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

// Fade-in-on-scroll

document.addEventListener("scroll", function () {
  var pageTop = document.documentElement.scrollTop;
  var pageBottom = pageTop + window.innerHeight;
  var tags = document.querySelectorAll(".tag");

  tags.forEach(function (tag) {
    if (tag.getBoundingClientRect().top < pageBottom) {
      tag.classList.add("visible");
    } else {
      tag.classList.remove("visible");
    }
  });
});

// typewriter

class TxtType {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  }

  tick() {
    let i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.textContent = this.txt;

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(() => {
      this.tick();
    }, delta);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".typewrite");
  elements.forEach((element) => {
    const toRotate = JSON.parse(element.getAttribute("data-type"));
    const period = element.getAttribute("data-period");
    if (toRotate) {
      const lineHeight = getComputedStyle(element).lineHeight;
      const padding = getComputedStyle(element).padding;
      element.style.height = lineHeight;
      element.style.padding = padding;

      // Delay typewriter animation by 4 seconds (4000 milliseconds)
      setTimeout(() => {
        new TxtType(element, toRotate, period);
      }, 2000);
    }
  });
});
