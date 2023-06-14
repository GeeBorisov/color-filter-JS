
let autoImg = document.querySelector('#imgHolder img');
let colorsSelector = document.querySelector('#colorsSelector');

colorsSelector.addEventListener('click', function(e) {
    if(!e.target.classList.contains('colorItem')) {
        return
    }

    if(e.target.classList.contains('colorBlack')) {
        autoImg.src = 'https://webcademy.ru/files/js2020/solaris/black.png';
    } else if (e.target.classList.contains('colorBlue')) {
        autoImg.src = 'https://webcademy.ru/files/js2020/solaris/blue.png';
    } else if (e.target.classList.contains('colorGraphite')) {
        autoImg.src = 'https://webcademy.ru/files/js2020/solaris/graphite.png';
    } else if (e.target.classList.contains('colorOrange')) {
        autoImg.src = 'https://webcademy.ru/files/js2020/solaris/orange.png';
    } else if (e.target.classList.contains('colorRed')) {
        autoImg.src = 'https://webcademy.ru/files/js2020/solaris/red.png';
    } else if (e.target.classList.contains('colorWhite')) {
        autoImg.src = 'https://webcademy.ru/files/js2020/solaris/white.png';
    } else if (e.target.classList.contains('colorWhitePure')) {
        autoImg.src = 'https://webcademy.ru/files/js2020/solaris/white-pure.png';
    }
    const prevActiveButton = document.querySelector('.colorItem--active');
    prevActiveButton.classList.remove('colorItem--active');

    e.target.classList.add('colorItem--active');
})
    
