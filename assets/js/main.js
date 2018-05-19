// Global Variables
    // boo!
    var booCounter = 0;
    var booCounter2 = 0;
    var booOOF = 3;
    var booOOF2 = booOOF+2;
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
    var messageDelay = '3000'
    var messageHead = '';
    var messageContent = 'OHAIYO~ :3';
    var messageTimeout = '6000';

// onload
function onload() {
    setTimeout(hideSplash, splashDelay);
    setTimeout(showMessage, messageDelay);
    imageGallery();
}

// boo!
function boo() {
    if(booCounter == 1){
        document.getElementsByTagName('html')[0].style.filter = 'inherit';
        booCounter = 0;
    }else{
        document.getElementsByTagName('html')[0].style.filter = 'invert(100%)';
        booCounter = 1;
        booCounter2++;
    }
    if(booCounter2>=booOOF){
        messageContent = 'BOO!';
        showMessage('noTimeout');
    }
    if(booCounter2>=booOOF2){
        messageContent = 'OOF!';
        showMessage('noTimeout');
        document.getElementsByTagName('html')[0].classList.remove('transition');
    }
}

// Image Gallery
function imageGallery(){
    var gallery = [];
    for(var i=0;i<imageGalleryArray.length;i++){
        gallery.push('<div id="section-2-'+i+'" class="section-2-child" style="background-image:url('+imageGalleryArray[i]+')"></div>');
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
    document.getElementsByTagName('body')[0].style.overflow = '-webkit-paged-y';
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