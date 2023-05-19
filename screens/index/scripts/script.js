const button = document.getElementsByClassName('button');
const map = {
    'github': 'https://github.com/poqob',
    'giris': 'screens/login/login.html',
    'linkedin': 'https://www.linkedin.com/in/mustafa-bi%C3%A7er-7164221b4/',
}
Array.from(button).forEach(element => {
    element.addEventListener('click', () => {
        switch (element.id) {
            case 'github':
                window.location.href = map['github'];
                break;
            case 'giris':
                window.location.href = map['giris'];
                break;
            case 'linkedin':
                window.location.href = map['linkedin'];
                break;
            default:
                break;
        }
    });

    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = '#039be5';
        element.style.height = '50%';
    });

    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = '#01579b';
        element.style.height = '25%';

    });
});