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


/**
 * 기능 수정사항
 * 1. 필수 처리 : required로 처리 X, JS 함수로 만들어서 submit시 검사 처리
 * 2. 글자 수 제한 : 정규 표현식이 아닌 input 이벤트로 입력할 때마다 검사 처리
 * 3. 전화번호 제한 오류 : 형식으로 잘나오는데 글자 수 초과 ex) 010-1234-5678909121231...
 * 
 * 코드 수정
 * 1. 변수 -> 함수 -> 이벤트 순으로 변경
 * 2. ES6문법 적용
 * 3. 코드 설명 주석 처리
 */