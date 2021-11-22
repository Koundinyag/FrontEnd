const slider = document.getElementById('glide')

new Glide(slider, {
    type: 'carousel',
    startAt: 0,
    preView: 1,
    animationDuration: 800,
    animationTimingFunc:"linear",
}).mount();