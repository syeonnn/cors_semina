// const formbtn = document.getElementById('formbtn');

// formbtn.addEventListener('click', form.submit)
// })

// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('myForm');

//     form.onsubmit = async (e) => {
//         e.preventDefault(); // 기본 제출 동작 방지

//         const formData = new FormData(form);

//         try {
//             const response = await fetch('/submit', {
//                 method: 'POST',
//                 body: formData
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const result = await response.json();
//             document.getElementById('responseMessage').innerText = result.message;
//         } catch (error) {
//             console.error('There was a problem with the fetch operation:', error);
//             document.getElementById('responseMessage').innerText = 'An error occurred.';
//         }
//     };
// });


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');

    form.addEventListener('submit', (e) => {
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
    })
});