const errs = () => {
    let custInput = document.getElementById('email-input');
    const place = document.querySelector('.email-block');
    const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const valid = re.test(custInput.value);

    console.log(custInput.value);

    if (!valid) {
        place.classList.add('error');
        custInput.placeholder = 'example@email/com';
    } else{
        place.classList.remove('error');
    }
}