let btn = document.getElementById("btn");
let text = document.getElementById("text");
let loadingIndicator = document.getElementById("load");

btn.addEventListener("click", handleClick);

function showLoadingIndicator(callback) {
  loadingIndicator.classList.add("visible");
  text.classList.remove("visible");

  setTimeout(callback, 1000)  
}

function hideLoadingIndicator() {
  console.log('e')
  loadingIndicator.classList.remove("visible");
  text.classList.add("visible");
}

function handleClick() {
  showLoadingIndicator(hideLoadingIndicator);
}
