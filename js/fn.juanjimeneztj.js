$('body').on('click','.btn-gsweb-add',function(e){
    e.preventDefault();
    $(this).addClass('disabled').attr('disabled',true);
    $('#ProductsCart').children().append('<p>'+$(this).parent().find('.title-gsweb').children().text()+'</p>');
    cardProds();
});
$('body').on('click','.btn-gsweb-read-more',function(e){
    e.preventDefault();
    $('#ModalProdDescriptionTitle').text($(this).parent().find('.title-gsweb').text());
    $('.modal-body').html($(this).parent().find('.description-gsweb').text());
    $('#ModalProdDescription').find('#addProdModalBtn').attr('data-id',$(this).attr('data-id'));
    // .replace(/ /g, "")
    if($(this).parent().find('.btn-gsweb-add').hasClass('disabled')){
        $('#ModalProdDescription').find('#addProdModalBtn').addClass('disabled').attr('disabled',true);;
    }else{
        $('#ModalProdDescription').find('#addProdModalBtn').removeClass('disabled').attr('disabled',false);;
    }
});
$('body').on('click','#addProdModalBtn',function(e){
    e.preventDefault();
    let ID = $(this).attr('data-id');
    $(this).addClass('disabled').attr('disabled',true);;
    $('.card').each(function(ele){
        if($(this).find('.btn-gsweb-add').attr('data-id')==ID){
            $(this).find('.btn-gsweb-add').addClass('disabled').attr('disabled',true);;
            $('#ProductsCart').children().append('<p>'+$(this).find('.btn-gsweb-add').parent().find('.title-gsweb').children().text()+'</p>');
        }
    });
    cardProds();
});

function cardProds(){
    $('.cart-art-count').text($('#ProductsCart').children().children('p').size());
}