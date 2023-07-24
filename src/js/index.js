const form = document.querySelector('.form');
const btnSubscribe = document.querySelector('#btn-subscribe');
const input = document.querySelector('#email');
const btnDismiss = document.querySelector('#btn-dismiss');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const container1 = document.querySelector('.container');
    const container2 = document.querySelector('.container-2');
    const userEmail = document.querySelector('#user-email');

    if (input.value !== "") {
        container2.classList.remove('hide');
        container1.classList.add('hide');

        userEmail.innerText = input.value;
    }
    else {
        form.classList.add('invalid');
    }
})
