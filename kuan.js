alert("Disclaimer ...");


function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
}

function toggleDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const content = document.querySelector('.content');
    
    if (darkModeToggle.checked) {
        content.style.backgroundColor = '#333';
        content.style.color = '#fff';
    } else {
        content.style.backgroundColor = '#fff';
        content.style.color = '#000';
    }
}
