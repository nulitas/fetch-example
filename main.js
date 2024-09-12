import axios from "axios";
// https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Blue-Eyes%20White%20Dragon

function fetchNormally() {
  fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?")
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetch Normally");
      console.log(data.data[0]);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

function fetchObjDestructing() {
  fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?")
    .then((response) => response.json())
    .then(({ data }) => {
      console.log("Fetch Object Destructing");
      console.log(data[1]);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

async function fetchAsyncThen() {
  try {
    const response = await fetch(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?"
    );
    response.json().then((data) => {
      console.log("Fetch Async Then");
      console.log(data.data[2]);
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

async function fetchData() {
  try {
    const response = await fetch(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?"
    );
    const data = await response.json();

    console.log("Fetch");
    console.log(data.data[3]);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

async function fetchDataWithErrors() {
  try {
    const response = await fetch(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?"
    );
    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }
    const data = await response.json();

    console.log("Fetch with Errors");
    console.log(data.data[4]);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

async function fetchDataWithAxios() {
  try {
    await axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?")
      .then((response) => {
        console.log("Axios");
        console.log(response.data.data[5]);
      });
  } catch (error) {
    console.log("Error:", error.message);
  }
}

fetchNormally();
fetchObjDestructing();
fetchAsyncThen();
fetchData();
fetchDataWithErrors();
fetchDataWithAxios();
