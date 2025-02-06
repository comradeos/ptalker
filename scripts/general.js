let favorites = [];

$(document).ready(function() {
    handle('да');
    handle('нет');

    handle('привет');
    handle('больно');
    handle('не_больно');
});

function handle(id) {
    $(`#${id}`).on('click', function() {
        const audio = new Audio(`sounds/${id}.mp3`);
        audio.play();
    });
}