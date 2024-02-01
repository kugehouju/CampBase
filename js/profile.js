document.querySelector('.setting').addEventListener('click', function() {
    const editWindow = document.getElementById('editWindow');
    if (editWindow.style.transform === 'translateY(0)') {
        editWindow.style.transform = 'translateY(100%)';
    } else {
        editWindow.style.transform = 'translateY(3%)';
    }
});

