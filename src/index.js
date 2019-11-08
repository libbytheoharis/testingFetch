import "./styles.css";

// Endpoint URL
const endpoint = "https://api.jsonbin.io/b/5cafcc83d36b7231d8f6ea1a";

// Fetch Function
const fetchDate = () => {
  console.log("button is clicked");
  fetch(endpoint)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      //console.log(data);
      parseData(data);
    });
};

// Parse Data Function
const parseData = produce => {
  console.log(produce);
  const data = produce
    .map(item => {
      return `
      <p>Name: ${item.name}</p>
      <p>Color: ${item.color}</p>
      <p>Types: ${item.type}</p>
      <p>Quantity: ${item.quantity}</p>
      <p>Chilled: ${item.chillled}</p>
      `;
    })
    .join("<hr>");
  document.getElementById("app").innerHTML = `<h1>There are ${
    produce.length
  } items</h1>${data}`;
};

// Initiate the Fetch Process
document.getElementById("fetch-button").addEventListener("click", () => {
  fetchDate();
});
