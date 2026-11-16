const viewer = document.querySelector(".viewer");

if (viewer && typeof viewer.showModal === "function") {
  const image = viewer.querySelector("img");
  const caption = viewer.querySelector("#viewer-caption");

  document.querySelectorAll(".screens a").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      event.preventDefault();
      image.src = link.href;
      image.alt = link.querySelector("img").alt;
      caption.textContent = image.alt;
      viewer.showModal();
    });
  });

  viewer.addEventListener("click", (event) => {
    if (event.target !== viewer) return;

    const bounds = viewer.getBoundingClientRect();
    if (
      event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom
    ) {
      viewer.close();
    }
  });

  viewer.addEventListener("close", () => {
    image.removeAttribute("src");
  });
}
