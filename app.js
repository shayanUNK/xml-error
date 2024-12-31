let error200 = document.querySelector("#error200");
let output = document.querySelector("#output");

error200.addEventListener("click", submitOutput);

function submitOutput() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "/successful.txt");

  xhr.onload = function () {
    if (this.status === 200) {
      output.innerHTML = this.response;
    } else if (this.status >= 400 && this.status < 500) {
      console.error("error 404");
    } else if (this.status >= 500) {
      console.error("error 504");
    }
  };
  xhr.send();
}
