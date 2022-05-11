async function populate() {
  const requestURL = "https://api.adviceslip.com/advice";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const adviceSlip = await response.json();

  populateContainer(adviceSlip);

  //   console.log(adviceSlip.slip.id);
}

function populateContainer(obj) {
  const adviceNumber = document.querySelector("#adviceNumber");
  const adviceNumberDiv = document.createElement("div");
  adviceNumberDiv.textContent = obj.slip.id;
  adviceNumber.appendChild(adviceNumberDiv);

  const adviceText = document.querySelector("#advice");
  const adviceTextDiv = document.createElement("div");
  adviceTextDiv.textContent = obj.slip.advice;
  adviceText.appendChild(adviceTextDiv);
}

populate();
