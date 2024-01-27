
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const btn = document.getElementById('btn');

  function getLoginFromLocalStorage(e) {
    const loginData = localStorage.getItem("userData");
const parsLoginData = JSON.parse(loginData);
loginForm.elements.value = parsLoginData?.username || "";
loginForm.elements.value = parsLoginData?.password || "";

  }

getLoginFromLocalStorage()




   

    btn.addEventListener("click", (e) => {
        e.preventDefault()
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
       
        const parseData = JSON.parse(dataFromLocalStorage);
   
   
           if (parseData && parseData.username === enteredUsername && parseData.password === enteredPassword) {
               alert('Успішно');
   
           } else {
               alert('Ні Ні і ще раз ні ');
           }
   
   
    })