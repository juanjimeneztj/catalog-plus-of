$('body').on('click','.btn-gsweb-add',function(e){
    e.preventDefault();
    $(this).addClass('disabled');
    $('#ProductsCart').children().append('<p>'+$(this).parent().find('.title-gsweb').children().text()+'</p>');
    cardProds();
});
$('body').on('click','.btn-gsweb-read-more',function(e){
    e.preventDefault();
    $('#ModalProdDescriptionTitle').text($(this).parent().find('.title-gsweb').text());
    $('.modal-body').html($(this).parent().find('.description-gsweb').text());
    // .replace(/ /g, "")
});

function cardProds(){
    $('.cart-art-count').text($('#ProductsCart').children().children('p').size());
}