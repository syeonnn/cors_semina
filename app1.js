document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');

    form.onsubmit = (e) => {
        e.preventDefault();

        const xhr = new XMLHttpRequest();
        const formData = new FormData(form);

        xhr.open('POST', '/simple', true);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        const result = JSON.parse(xhr.responseText);
                        alert(result.message);
                    } catch (error) {
                        console.error('Error parsing JSON response:', error);
                        alert('An error occurred while parsing the response.');
                    }
                } else {
                    console.error('Error with the request:', xhr.statusText);
                    alert('An error occurred while sending the request.');
                }
            }
        };

        xhr.send(formData);
    };
});
