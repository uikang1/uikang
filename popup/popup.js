const popup = document.getElementById('popup');
const close = document.getElementById('close');
const noShow = document.getElementById('noShow');

const closePopup = () => {
    if (noShow.checked) {
        localStorage.setItem('popupTime', new Date().getTime());
    }
    popup.style.display = 'none';
};
const openPopup = () => {
    const popupTime = localStorage.getItem('popupTime');

    if (!popupTime || new Date().getTime() - popupTime > 3 * 24 * 60 * 60 * 1000) {
        popup.style.display = 'block';
    }
};
window.onload = openPopup;
close.onclick = closePopup;
