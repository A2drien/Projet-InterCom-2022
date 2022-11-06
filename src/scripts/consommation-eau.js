let Eppers = 4000 ;
let Epdouche = 6 ;
let nbJ = 30;

$(document).ready(function () {
    $('button').click(ConsEau);
});

function ConsEau(){
    let nbPers = $('#nbP').val();
    let minD = $('#minD').val();
    let EpMois = (Eppers * nbPers) + (Epdouche * minD * nbJ) ;

    $('#EstiEau').text('Vous allez consommer en moyenne ' + EpMois + ' litres par mois.');
}

