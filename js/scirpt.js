// DEM
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".controls button");
  const mapFrame = document.getElementById("mapFrame");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const lat = this.dataset.lat;
      const lng = this.dataset.lng;

      mapFrame.src =
        `https://www.google.com/maps?q=${lat},${lng}&z=12&output=embed`;
    });
  });
});
// DEM
