const form = document.querySelector(".login-form");
const inputUserEmail = document.querySelector(".login-form > email");
const inputUserPassword = document.querySelector(".login-form > password");

form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const { elements: { email, password }, } = event.currentTarget;

    if ( !email.value || !password.value ) {
        return alert("Please fill in all the fields! \nThanks a lot!");
    };

    console.log(`Email: ${email.value}, Password: ${password.value} `);
    event.currentTarget.reset();
};
