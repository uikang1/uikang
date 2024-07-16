// 팝업, 닫기 버튼, 체크박스 요소를 가져오기
const popup = document.getElementById('popup');
const close = document.getElementById('close');
const noShow = document.getElementById('noShow');

// 팝업을 닫는 함수
const closePopup = () => {
    // 체크박스가 선택되어 있으면 현재 시간을 localStorage에 저장
    if (noShow.checked) {
        localStorage.setItem('popupTime', new Date().getTime());
    }
    // 팝업을 숨깁니다.
    popup.style.display = 'none';
};

// 팝업을 열는 함수
const openPopup = () => {
    // localStorage에서 팝업이 닫힌 시간을 가져ㅇ기
    const popupTime = localStorage.getItem('popupTime');

    // 팝업이 닫힌 시간이 없거나 3일이 지났으면 팝업을 표시함
    if (!popupTime || new Date().getTime() - popupTime > 3 * 24 * 60 * 60 * 1000) {
        popup.style.display = 'block';
    }
};

// 페이지가 로드되면 팝업을 열기
window.onload = openPopup;

// 닫기 버튼을 클릭하면 팝업을 닫기
close.onclick = closePopup;
