const iframeVideo = document.querySelector('.iframe-tizer');

//Click mainTizer
const mainTizerPlayButton = document.querySelector('.play-tizer');
mainTizerPlayButton.addEventListener('click', (e) => playVideo(e.currentTarget.dataset.src));

// Click one of tizers
const previewTizers = document.querySelectorAll('.preview');
previewTizers.forEach(item => {
    item.addEventListener('click', (e) => playVideo(e.currentTarget.dataset.src))
})
// Click button close video
const closeVideoButton = document.querySelector('.close-tizer');
closeVideoButton.addEventListener('click', () => closeVideo());

// Open iframe with video tizer
const playVideo = (iframeSrc) => {
    ga('send', 'event', 'Roast', 'Play', `Tizer ${iframeSrc}`);
    iframeVideo.classList.add('active');
    iframeVideo.querySelector('iframe').setAttribute('src', `${iframeSrc}?autoStart=true`);
}
// Close iframe with video tizer
const closeVideo = (iframeSrc) => {
    iframeVideo.classList.remove('active');
    iframeVideo.querySelector('iframe').setAttribute('src', '');
}