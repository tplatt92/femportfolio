// Fade-in-on-scroll

document.addEventListener("scroll", () => {
  const pageTop = document.documentElement.scrollTop;
  const pageBottom = pageTop + window.innerHeight;
  const tags = document.querySelectorAll(".tag");

  tags.forEach((tag) => {
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
