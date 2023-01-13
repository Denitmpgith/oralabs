const container = document.getElementsByClassName("readme")[0];
if (container) {
  container.addEventListener("click", function (e) {
    if (e.target.className === "closereadme") {
      container.style.display = "none";
      e.preventDefault();
    }
  });
}
