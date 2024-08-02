document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const btn = document.getElementById("preflightButton");
  const responseContainer = document.getElementById("reponse-result");

  form.onsubmit = (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    const formData = new FormData(form);

    xhr.onload = () => {
      if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        const responseData = xhr.responseText;
        const result = JSON.parse(responseData);
        alert("축하드립니다. 맛있는 하루였네요 ^___^");
      }
    };

    xhr.open("POST", "http://localhost:3000/simple");
    xhr.send(formData);
  };

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:3000/data");
    xhr.send();

    xhr.onload = () => {
      if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        const responseData = xhr.responseText;
        const result = JSON.parse(responseData);
        console.log(result);
        console.log(result.name, result.favoriteFood);
        responseContainer.textContent = `${result.name} 의 최애음식 ${result.favoriteFood}`;
      } else {
        console.log(`error: ${xhr.status}`);
      }
    };

    // fetch("http://localhost:3000/data", { method: "GET" })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.error("Error:", err));
  });
});
