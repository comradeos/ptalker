$(document).ready(function() {
    handle('да');
    handle('нет');
    handle('привет');
    handle('больно');
    handle('не_больно');
    handle('горячо');
    handle('воды');
    handle('кушать');
    handle('лучше');
    handle('наелся');
    handle('не_нужно');
    handle('не_уверен');
    handle('не_удобно');
    handle('очень_больно');
    handle('пить');
    handle('сок');
    handle('терпимо');
    handle('томатный_сок');
    handle('хватит');
    handle('холодно');
    handle('хуже');
});

function handle(id) {
    $(`#${id}`).on('click', function() {
        const audio = new Audio(`sounds/${id}.mp3`);
        audio.play();
    });
}