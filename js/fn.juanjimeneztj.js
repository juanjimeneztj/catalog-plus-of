$('body').on('click','.btn-gsweb-add',function(e){
    e.preventDefault();
    let ID = $(this).attr('data-id');
    $(this).addClass('disabled').attr('disabled',true);
    const fragment = document.createDocumentFragment();
    const templateProducts = document.querySelector('#template-tableProducts').content;

    templateProducts.querySelector('.name').textContent = $(this).parent().find('.title-gsweb').children().text();
    templateProducts.querySelector('a').setAttribute('data-id',ID);

    const clone = templateProducts.cloneNode(true);
    fragment.appendChild(clone);
    $('#ProductsCart').find('tbody').append(fragment);
    cardProds();
});
$('body').on('click','.btn-gsweb-read-more',function(e){
    e.preventDefault();
    $('#ModalProdDescriptionTitle').text($(this).parent().find('.title-gsweb').text());
    $('.modal-body').html($(this).parent().find('.description-gsweb').text());
    $('#ModalProdDescription').find('#addProdModalBtn').attr('data-id',$(this).attr('data-id'));
    // .replace(/ /g, "")
    if($(this).parent().find('.btn-gsweb-add').hasClass('disabled')){
        $('#ModalProdDescription').find('#addProdModalBtn').addClass('disabled').attr('disabled',true);
    }else{
        $('#ModalProdDescription').find('#addProdModalBtn').removeClass('disabled').attr('disabled',false);
    }
});
$('body').on('click','#addProdModalBtn',function(e){
    e.preventDefault();
    let ID = $(this).attr('data-id');
    $(this).addClass('disabled').attr('disabled',true);
    $('.card').each(function(ele){
        if($(this).find('.btn-gsweb-add').attr('data-id')==ID){
            $(this).find('.btn-gsweb-add').addClass('disabled').attr('disabled',true);
            const fragment = document.createDocumentFragment();
            const templateProducts = document.querySelector('#template-tableProducts').content;

            templateProducts.querySelector('.name').textContent = $(this).find('.btn-gsweb-add').parent().find('.title-gsweb').children().text();
            templateProducts.querySelector('a').setAttribute('data-id',ID);

            const clone = templateProducts.cloneNode(true);
            fragment.appendChild(clone);
            $('#ProductsCart').find('tbody').append(fragment);
        }
    });
    cardProds();
});

function cardProds(){
    $('.cart-art-count').text(
        $('#ProductsCart').find('tbody').children('tr').size()
    );
}