$('.btn-gsweb-add').click(function(e){
    e.preventDefault();
    $(this).addClass('disabled');
    $('#ProductsCart').children().append('<p>'+$(this).parent().parent().find('.card-header').children().text()+'</p>');
    cardProds();
});

$('.btn-gsweb-read-more').click(function(e){
    e.preventDefault();
    $('#ModalProdDescriptionTitle').text($(this).parent().parent().find('.card-header').text().replace(/ /g, ""));
});

function cardProds(){
    $('.cart-art-count').text($('#ProductsCart').children().children('p').size());
}