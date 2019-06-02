; (function () {
    const iframeBlock = document.querySelector('.iframe-tizer');
    const iframeVideo = iframeBlock.querySelector('iframe');
    const mainTizerPlayButton = document.querySelector('.play-tizer');
    const previewTizers = document.querySelectorAll('.preview');
    const closeVideoButton = document.querySelector('.close-tizer');

    //Click mainTizer
    mainTizerPlayButton.addEventListener('click', (e) => consrolVideo.playVideo(iframeVideo, e.currentTarget.dataset.src, iframeBlock));

    // Click one of tizers
    previewTizers.forEach(item => {
        item.addEventListener('click', (e) => consrolVideo.playVideo(iframeVideo, e.currentTarget.dataset.src, iframeBlock))
    });

    // Click button close video
    closeVideoButton.addEventListener('click', () => consrolVideo.closeVideo(iframeVideo, iframeBlock));

    const consrolVideo = {
        // Open iframe with video tizer
        playVideo: function (iframeVideo, iframeSrc, iframeBlock) {
            if (arguments.length == 3) {
                this.gaSend(iframeSrc);
                this.toggleView(iframeBlock);
                iframeVideo.setAttribute('src', `${iframeSrc}?autoStart=true`);
            }
        },
        // Close iframe with video tizer
        closeVideo: function (iframeVideo, iframeBlock) {
            if (arguments.length == 2) {
                this.toggleView(iframeBlock);
                iframeVideo.setAttribute('src', '');
            }
        },
        toggleView: function (iframeBlock) {
            iframeBlock.classList.toggle('active');
        },
        gaSend: function (iframeSrc) {
            ga('send', 'event', 'Roast', 'Play', `Tizer ${iframeSrc}`);
        }
    }
}());