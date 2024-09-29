const colorList = document.querySelector(".color-list");
const refreshBtn = document.querySelector(".color-button");

const maxPalleteBoxes = 30;
const generatePalette = () => {
  colorList.innerHTML = ""; // Clear existing colors before generating new ones

  // Generate new colors and add them to the color list
  for (let i = 0; i < maxPalleteBoxes; i++) {
    let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
    randomColor = `#${randomColor.padStart(6, "0")}`;

    const color = document.createElement("li");
    color.classList.add("color-item");
    color.innerHTML = `<div class="color-box" style="background:${randomColor}"></div>
                    <span class="color-code">${randomColor}</span>`;
    color.addEventListener("click", () => copyColor(color, randomColor));
    colorList.appendChild(color);
  }
};

generatePalette();
const copyColor = (elem, hexVal) => {
  //   console.log(elem, hexVal);
  const colorElement = elem.querySelector(".color-code");
  navigator.clipboard
    .writeText(hexVal)
    .then(() => {
      colorElement.innerText = "Copied";
      setTimeout(() => (colorElement.innerText = hexVal), 1000);
    })
    .catch(() => alert("Failed to copy the color code"));
};
refreshBtn.addEventListener("click", generatePalette);
