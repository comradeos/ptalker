$(document).ready(function () {
    const audioMap = {};

    $(".item, .yesNo div").each(function () {
        const id = $(this).attr("id");
        if (id) {
            const audio = new Audio(`sounds/${id}.mp3`);
            audioMap[id] = audio;
        }
    });

    $(".item, .yesNo div").on("click", function () {
        const id = $(this).attr("id");
        if (audioMap[id]) {
            audioMap[id].currentTime = 0;
            audioMap[id].play();
        }
    });
});
