const scroller = document.querySelectorAll(".scroller");
const directions_btn = document.querySelectorAll(".controlles-btn .directions");
const speeds_btn = document.querySelectorAll(".controlles-btn .speeds");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scroller.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scroller_inner = scroller.querySelector(".scroller__inner");
    const scroller_content = Array.from(scroller_inner.children);
    scroller_content.forEach((item) => {
      const doplicatedItem = item.cloneNode(true);
      doplicatedItem.setAttribute("aria-hidden", true);
      scroller_inner.appendChild(doplicatedItem);
    });
  });
}

directions_btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    scroller.forEach((scroller) => {
      scroller.setAttribute(
        "data-direction",
        e.target.getAttribute("data-value")
      );
    });
  });
});
speeds_btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    scroller.forEach((scroller) => {
      scroller.setAttribute(
        "data-speed",
        e.target.getAttribute("data-value")
      );
    });
  });
});
