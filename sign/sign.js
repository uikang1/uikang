// 폼 요소를 가져오고 폼 제출 이벤트를 처리하는 데 사용
const signupForm = document.getElementById('signupForm');

// 아이디 입력란 요소를 가져와서 사용자가 아이디를 입력
const username = document.getElementById('username');

// 비밀번호 입력란 요소를 가져와서 사용자가 비밀번호를 입력
const password = document.getElementById('password');

// 이메일 입력란 요소를 가져와서 사용자가 이메일 주소를 입력
const email = document.getElementById('email');

// 전화번호 입력란 요소를 가져와서 사용자가 전화번호를 입력
const phone = document.getElementById('phone');

// 개인정보 취급방침 동의 체크박스 요소를 가져와서 사용자가 개인정보 취급방침에 동의하는지 확인하는 체크박스 체크
const policy = document.getElementById('policy');

// 정규 표현식을 정의합니다. 이는 특정한 형식을 검사하는 데 사용
// 비밀번호는 최소 8자 이상, 영문, 숫자, 특수기호를 포함필수
const passwordPattern = /^(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{8,}$/;
// 이메일 형식을 검사
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 전화번호는 000-0000-0000 형식
const phonePattern = /^\d{3}-\d{4}-\d{4}$/;

// 폼 유효성을 검사하는 함수
const validateForm = (event) => {
    // 폼 제출 막기
    event.preventDefault();

    // 아이디 유효성을 검사합니다. 아이디는 영문 소문자와 숫자만 허용되며, 20자 이내여야 함
    if (username.value.length > 20 || /[^a-z0-9]/.test(username.value)) {
        alert('아이디는 영문 소문자와 숫자만 허용되며, 20자 이내여야 합니다.');
        username.focus(); // 아이디 입력란에 포커스를 맞춘다
        return;
    }

    // 비밀번호 유효성을 검사
    if (!passwordPattern.test(password.value)) {
        alert('비밀번호는 영문, 숫자, 특수기호를 포함하며 최소 8자 이상이어야 합니다.');
        password.focus(); // 비밀번호 입력란에 포커스를 맞춘다
        return;
    }

    // 이메일 유효성을 검사
    if (!emailPattern.test(email.value)) {
        alert('올바른 이메일 형식을 입력하세요.');
        email.focus(); // 이메일 입력란에 포커스를 맞춘다
        return;
    }

    // 전화번호 유효성을 검사
    if (!phonePattern.test(phone.value)) {
        alert('전화번호는 000-0000-0000 형식이어야 합니다.');
        phone.focus(); // 전화번호 입력란에 포커스를 맞춘다
        return;
    }

    // 개인정보 취급방침 동의 여부를 검사
    if (!policy.checked) {
        alert('개인정보 취급방침에 동의해야 회원가입이 가능합니다.');
        policy(); // 개인정보 취급방침 체크박스에 포커스를 맟추
        return;
    }

    // 모든 유효성 검사를 통과하면 회원가입이 완료되었다고 알리고
    alert('회원가입이 완료되었습니다.');
};

// 전화번호를 형식에 맞게 자동으로 포맷팅하는 함수
const formatPhoneNumber = (event) => {
    // 숫자 이외의 문자를 모두 제거
    let value = event.target.value.replace(/\D/g, '');
    // 전화번호 길이를 11자로 제한
    if (value.length > 11) {
        value = value.slice(0, 11);
    }
    // 전화번호를 000-0000-0000 형식으로 변환
    if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
    } else if (value.length > 3) {
        value = value.replace(/(\d{3})(\d{1,4})/, '$1-$2');
    }
    // 변환된 값을 입력란에 설정
    event.target.value = value;
};

// 입력란의 최대 글자 수를 제한하는 함수
const limitLength = (event, maxLength) => {
    // 최대 길이를 초과하면 초과된 부분을 잘라냠
    if (event.target.value.length > maxLength) {
        event.target.value = event.target.value.slice(0, maxLength);
    }
};

// 이메일 입력란에서 한글을 제거하는 함수
const blockInvalidKorean = (event) => {
    // 한글 문자를 모두 제거
    event.target.value = event.target.value.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
};

// 이벤트 리스너를 추가
// 아이디 입력란에 글자 수 제한을 추가
username.addEventListener('input', (event) => limitLength(event, 20));
// 비밀번호 입력란에 글자 수 제한을 추가
password.addEventListener('input', (event) => limitLength(event, 30));
// 이메일 입력란에 글자 수 제한과 한글 제거를 추가
email.addEventListener('input', (event) => {
    limitLength(event, 50);
    blockInvalidKorean(event);
});
// 전화번호 입력란에 글자 수 제한과 포맷팅을 추가
phone.addEventListener('input', (event) => {
    limitLength(event, 13);
    formatPhoneNumber(event);
});

// 폼 제출 시 유효성 검사를 실행
signupForm.addEventListener('submit', validateForm);

/*
 * 기능 수정사항
 * 1. 필수 처리 : required로 처리하지 않고 JS 함수로 폼 제출 시 검사 처리
 * 2. 글자 수 제한 : 정규 표현식이 아닌 input 이벤트로 입력할 때마다 검사 처리
 * 3. 전화번호 제한 오류 : 형식으로 잘나오는데 글자 수 초과 문제 해결
 *
 * 코드 수정
 * 1. 변수 -> 함수 -> 이벤트 순으로 정리
 * 2. ES6 문법 적용
 * 3. 코드 설명 주석 추가
 */
