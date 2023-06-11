const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handlesubmit);

function handlesubmit (event)  {
    event.preventDefault();
    
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("всі поля повинні бути заповнені!");
    } else {
        const formData = {
            email: email.value,
            password: password.value,
        };
    }
        console.log(formData);
        event.currentTarget.reset();
}

