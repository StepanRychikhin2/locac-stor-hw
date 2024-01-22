
    const userForm = document.getElementById('userForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const ageInput = document.getElementById('age');

    userForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const user = {
            username: usernameInput.value,
            email: emailInput.value,
            age: ageInput.value
        };

        localStorage.setItem('userData', JSON.stringify(user));
    });


    const saveUserData = JSON.parse(localStorage.getItem('userData'));

    if (saveUserData) {
        usernameInput.value = saveUserData.username || '';
        emailInput.value = saveUserData.email || '';
        ageInput.value = saveUserData.age || '';
    }
