function togglePopup() {
    const popup = document.getElementById('settings_popup');
    
    popup.classList.add('show');

    void popup.offsetWidth; 
    popup.classList.add('animate-popup');
}

document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('closePopup');
    closeBtn.addEventListener('click', () => {
        const popup = document.getElementById('settings_popup');
        popup.classList.remove('show', 'animate-popup');
    });
});



