document.querySelector('.setting').addEventListener('click', function() {
    const editModal = document.getElementById('editModal');
    if (editModal.style.transform === 'translateY(0)') {
        editModal.style.transform = 'translateY(100%)';
    } else {
        editModal.style.transform = 'translateY(3%)';
    }
});

document.querySelector('.cancelBtn').addEventListener('click', function() {
    const editModal = document.getElementById('editModal');
    editModal.style.transform = 'translateY(100%)';
});
