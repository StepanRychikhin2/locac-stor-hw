
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;
      
        const user = {
            username: enteredUsername,
            password: enteredPassword
        };


        const zipInformation = JSON.stringify(user);
        console.log(zipInformation);
       localStorage.setItem('userData', zipInformation);
      
        const dataFromLocalStorage = localStorage.getItem('userData');
        console.log(dataFromLocalStorage);
        const parseData = JSON.parse(dataFromLocalStorage);


        if (parseData && parseData.username === enteredUsername && parseData.password === enteredPassword) {
            alert('Успішно');

        } else {
            alert('Ні Ні і ще раз ні ');
        }

    });