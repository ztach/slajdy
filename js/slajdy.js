
 var wykaz = document.querySelector('.wykaz');

    /* lista obrazków */
    var picture=['img1.png',
                 'img2.png',
                 'img3.png',
                 'img4.png',
                 'img5.png'
                ];
    
    /* opis obrazków np ['*','*','*','*','*']; */
    var photo=[];

    for(var i = 0; i<picture.length;i++){
        photo.push("obrazek "+(i+1) );
    }


    var loadImgFront = '<img draggable="true" id="obrotek" src="img/';
    var loadImgEnd = '">';

    var span = document.querySelector('span');
    var pokaz = document.querySelector('.pokaz');

    var photoFront = "<span class=\"nrId" ;
    var photoEnd = "</span>";

/* funkcja tworzy opis obrazków i wyróżnia wylosowany obrazek */

function descriptionSlide (lo) {
    var s = ""; 
    for (var i=0; i<photo.length; i++){
        if (i+1==lo){
            s += photoFront + '\">' + photo[i] + photoEnd;
        }else{
            s += photoFront + (i+1)+"\">  " + photo[i] + photoEnd;
        }
    }
    return s;
}


function slideShow(){
    var drawPicture = Math.floor(Math.random()*5)+1;
    var s = ""; 

    s = descriptionSlide(drawPicture);

    wykaz.innerHTML = s; 

    pokaz.innerHTML = loadImgFront + picture[drawPicture-1] + loadImgEnd; 
    
    //var n = document.querySelector('#obrotek');    
    
    setTimeout(slideShow,10000);
}
 
slideShow();

