document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');

    const usernamePattern = /^[a-z0-9]{1,20}$/;
    const passwordPattern = /^(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{8,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{3}-\d{4}-\d{4}$/;

    if (!usernamePattern.test(username.value)) {
        alert('아이디는 영문 소문자와 숫자만 허용되며, 20자 이내여야 합니다.');
        username.focus();
        return;
    }

    if (!passwordPattern.test(password.value)) {
        alert('비밀번호는 영문, 숫자, 특수기호를 포함하며 최소 8자 이상이어야 합니다.');
        password.focus();
        return;
    }

    if (!emailPattern.test(email.value)) {
        alert('올바른 이메일 형식을 입력하세요.');
        email.focus();
        return;
    }

    if (!phonePattern.test(phone.value)) {
        alert('전화번호는 000-0000-0000 형식이어야 합니다.');
        phone.focus();
        return;
    }

    alert('회원가입이 완료되었습니다.');
});

document.getElementById('phone').addEventListener('input', function (event) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
    } else if (value.length > 3) {
        value = value.replace(/(\d{3})(\d{1,4})/, '$1-$2');
    }
    event.target.value = value;
});
