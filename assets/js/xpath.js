async function loadFile(fileName) {
  const html = await includeFileAsync(`./${fileName}.html`);
  document.getElementById("container").innerHTML = html;
}

async function example1() {
  loadFile("example1");
}

function example2() {
  loadFile("example2");
}
