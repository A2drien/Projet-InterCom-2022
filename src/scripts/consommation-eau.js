const EAU_PAR_PERSONNE_PAR_MOIS = 4000;
const EAU_PAR_DOUCHE_PAR_MINUTE = 6;
const NOMBRE_JOURS_MOIS = 30;

$(document).ready(function () {
    $('button').click(ConsEau);
});

function ConsEau() {
    let nbPers = $('#nbP').val();
    let minutesDouche = $('#minD').val();
    let EauParMois = (EAU_PAR_PERSONNE_PAR_MOIS * nbPers) + (EAU_PAR_DOUCHE_PAR_MINUTE * minutesDouche * NOMBRE_JOURS_MOIS);

    $('#EstiEau').text('Vous allez consommer en moyenne ' + EauParMois + ' litres par mois.');
}

