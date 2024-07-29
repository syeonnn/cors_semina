document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');

    form.onsubmit = (e) => {
        e.preventDefault();

        const xhr = new XMLHttpRequest();
        const formData = new FormData(form);

        xhr.onload = () => {
            if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                const responseData = xhr.responseText; // responseText: 서버로부터 받은 응답 데이터
                const result = JSON.parse(responseData); // JSON 역직렬화
                console.log(result); 
            }
        }

        xhr.open('POST', '/simple');

        xhr.send(formData);
    };
});
