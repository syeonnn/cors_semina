document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  form.onsubmit = (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    const formData = new FormData(form);

    // 로그로 formData의 내용을 출력
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    xhr.onload = () => {
      if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        const responseData = xhr.responseText; // responseText: 서버로부터 받은 응답 데이터
        const result = JSON.parse(responseData); // JSON 역직렬화
        alert("축하드립니다. 맛있는 하루였네요 ^___^");
      }
    };

    xhr.open("POST", "/simple");
    // xhr.setRequestHeader("Content-type", "multipart/form-data");
    xhr.send(formData);
  };
});
