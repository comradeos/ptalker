$(document).ready(function() {
    const sounds = [
        'да', 'нет', 'привет',
        'больно', 'не_больно', 'горячо',
        'воды', 'кушать', 'лучше',
        'наелся', 'не_нужно', 'не_уверен',
        'не_удобно', 'очень_больно', 'пить',
        'сок', 'терпимо', 'томатный_сок',
        'хватит', 'холодно', 'хуже'
    ];

    const audioMap = {};

    sounds.forEach(id => {
        const audio = new Audio(`sounds/${id}.mp3`);
        audioMap[id] = audio;
    });

    sounds.forEach(id => {
        $(`#${id}`).on('click', function() {
            audioMap[id].currentTime = 0;
            audioMap[id].play();
        });
    });
});
