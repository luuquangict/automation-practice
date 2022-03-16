async function includeFileAsync(fileName) {
  return new Promise((resolve, reject) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          resolve(this.responseText);
        }
        if (this.status == 404) {
          resolve("Page not found");
        }
      }
    };
    xhttp.open("GET", fileName, true);
    xhttp.send();
  });
}