$('.btn-gsweb-add').click(function(){
    $(this).addClass('disabled');
    $('#ProductsCart').children().append('<p>'+$(this).parent().parent().find('.card-header').children().text()+'</p>');
    cardProds();
});

function cardProds(){
    $('.cart-art-count').text($('#ProductsCart').children().children('p').size());
}