let btn = document.getElementById("btn");
let text = document.getElementById("text");
let loadingIndicator = document.getElementById("load");

btn.addEventListener("click", handleClick);

function showLoadingIndicator() {
  loadingIndicator.classList.add("visible");
  text.classList.remove("visible");

  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

function hideLoadingIndicator() {
  loadingIndicator.classList.remove("visible");
  text.classList.add("visible");
}

async function handleClick() {
  await showLoadingIndicator();
  hideLoadingIndicator();
}
