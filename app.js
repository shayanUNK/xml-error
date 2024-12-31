let error200 = document.querySelector("#error200");
let error400 = document.querySelector("#error400");
let error500 = document.querySelector("#error500");
let output = document.querySelector("#output");

error200.addEventListener("click", submitOutput);

function submitOutput() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "/successful.txt");

  xhr.onload = function () {
    if (this.status === 200) {
      output.innerHTML = this.response;
    }
  };
  xhr.send();
}

error400.addEventListener("click", clientError);

function clientError() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/ucesful.txt");
  if (this.status >= 400 && this.status < 500) {
    console.error("client error");
  }
  xhr.send();
}

error500.addEventListener("click", clientError);

function clientError() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://httpstat.us/500");
  if (this.status >= 500) {
    alert("server error");
  }
  xhr.send();
}
