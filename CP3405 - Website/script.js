const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    if (username === '' || password === '') {
        alert('Please enter both username and password');
    } else {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/login');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                if (response.success) {
                    window.location.href = '/dashboard';
                } else {
                    alert('Invalid username or password');
                }
            } else {
                alert('Error: ', xhr.status);
            }
        };
        xhr.onerror = () => {
            alert('Error: ', xhr.status);
        };
        xhr.send(JSON.stringify({ username, password }));
    }
});
