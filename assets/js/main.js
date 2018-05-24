// Global Variables
    // Background Music
    var bgMusicArray = ['http://m1.jixun.moe/459115868/320000/64e3f46d2c309c61c297eefb28b97dac433a9284021f8e637b5b103e7718adb2'];
    var bgMusicLoop = false;
    // Image Gallery
    var imageGalleryArray = ['https://i.loli.net/2018/05/19/5affb6b7d8b51.jpg',
                            'https://i.loli.net/2018/05/15/5af9c96fbb31e.jpg',
                            'https://i.loli.net/2018/05/15/5af9cb67f40c6.png',
                            'https://i.loli.net/2018/05/15/5af9d08952f98.jpg',
                            'https://i.loli.net/2018/05/15/5af9d18b8f0af.jpg',
                            'https://i.loli.net/2018/05/15/5af9d19321da6.jpg',
                            'https://i.loli.net/2018/05/15/5af9d1fe0c0a6.png',
                            'https://i.loli.net/2018/05/15/5af9d202e34bf.png'];
    var imageGalleryAlign = [{image:2, align:'right center'},
                            {image:4, align:'right center'},
                            {image:5, align:'right center'},
                            {image:7, align:'right center'}];
    // Splash
    var splashDelay = '1000';
    // Message
    var messageDelay = '2400'
    var messageHead = '';
    var messageContent = 'OHAIYO~ :3';
    var messageTimeout = '6000';

// onload
function onload() {
    setTimeout(hideSplash, splashDelay);
    setTimeout(showMessage, messageDelay);
    bgMusic();
    imageGallery();
}

// Functions
    // Background Music
    function bgMusic(){
        var music = document.createElement('AUDIO');
        if(bgMusicLoop){
            music.setAttribute('loop','');
        }
        for(var i=0;i<bgMusicArray.length;i++){
            var x = document.createElement('SOURCE');
            x.setAttribute('src',bgMusicArray[i]);
            x.setAttribute('type','audio/mpeg');
            music.appendChild(x);
        }
        music.play().then(function(){
            // console.log('music playback initiated');
            // console.log('loop: ' + music.loop);
        });
    }

    // Image Gallery
    function imageGallery(){
        var gallery = [];
        for(var i=0;i<imageGalleryArray.length;i++){
            gallery.push('<div id="section-2-'+i+'" class="section-2-child transition" style="background-image:url('+imageGalleryArray[i]+')"></div>');
        }
        document.getElementById('section-2').innerHTML = gallery.join('\n');
        // if(imageGalleryAlignRight.length!=0){
        //     for(var image in imageGalleryAlignRight){
        //         document.getElementById('section-2-'+imageGalleryAlignRight[image]).style.backgroundPosition = 'right center';
        //     }
        // }
        if(imageGalleryAlign.length!=0){
            imageGalleryAlign.forEach(function (image){
                document.getElementById('section-2-'+image.image).style.backgroundPosition = image.align;
            })
        }
    }

    // Splash
    function hideSplash() {
        document.getElementById('splash').style.opacity = '0';
        document.getElementById('splash').style.pointerEvents = 'none';
        document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
        document.getElementsByTagName('body')[0].style.overflowX = 'hidden';
    }

    // Message
    function showMessage(cond) {
        document.getElementById('message').innerHTML = messageHead + messageContent;
        document.getElementById('message').style.opacity = '1';
        if(cond!='noTimeout'){
            setTimeout(hideMessage, messageTimeout);
        }
    }
    function hideMessage() {
        document.getElementById('message').style.opacity = '0';
    }