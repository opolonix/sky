// document.addEventListener('wheel', (event) => {
//     console.log(event);
// })

const stringToHTML = (str)  => {
	var parser = new DOMParser();
	var doc = parser.parseFromString(str, 'text/html');
	return doc.body.childNodes[0];
};
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerHeight/1.777 - window.innerHeight*1.777 < 0){document.querySelector('video').style.height = '100%'}
    else {document.querySelector('video').style.width = '100%'}
    video = document.querySelector('video')
    video.playbackRate = 10
    var loadVideo = false
    video.onloadeddata = loadVideo = true;
    while (loadVideo == false) console.log('loadfile');
    setTimeout(()=>{
        clearInterval(loadInterval)
        document.querySelector('pre-loader').style = 'opacity: 0'
        video.play()
    }, 400)
    setTimeout(()=>{
        
        video.innerHTML = '<source src="src/after-load.mp4" type="video/mp4">'
        video.play()
    }, 10000)
    // interval = setInterval(() => {
    //     // 
    //     if (speed <= 0){
    //         clearInterval(interval)
    //     }
    //     speed = speed - 0.3
    //     console.log(speed);
    // }, 100)


    // setTimeout(()=>{
    //     video.innerHTML = '<source src="after-pre-loader.mp4" type="video/mp4">'
    //     video.playbackRate = 3.0
    //     video.play()
    //     console.dir(video)
    // }, 1687)
    // console.log(stringToHTML(video.innerHTML))
 }, false)