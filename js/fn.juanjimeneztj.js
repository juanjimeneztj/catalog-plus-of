$('body').on('click','.btn-gsweb-add',function(e){
    e.preventDefault();
    let ID = $(this).attr('data-id');
    $(this).addClass('disabled').attr('disabled',true);
    const fragment = document.createDocumentFragment();
    const templateProducts = document.querySelector('#template-tableProducts').content;

    templateProducts.querySelector('.name').textContent = $(this).parent().find('.title-gsweb').attr('title');
    templateProducts.querySelector('a').setAttribute('data-id',ID);

    const clone = templateProducts.cloneNode(true);
    fragment.appendChild(clone);
    $('#ProductsCart').find('tbody').append(fragment);
    cardProds();

    $('form').prepend('<input type="hidden" name="'+$(this).parent().find('.title-gsweb').attr('title').replace(/ /g, "")+'" value="'+$(this).parent().find('.title-gsweb').attr('title')+'" id="'+ID+'" />');

    window.currentPrice = (parseFloat(window.currentPrice) + parseFloat($(this).parent().find('.price-gsweb').text().replace(/ /g, "").replace(/,/g, "").replace(/\$/g, "").replace(/USD/g, "")));

    allin();
});

$('body').on('click','.btn-gsweb-read-more',function(e){
    e.preventDefault();
    $('#ModalProdDescriptionTitle').text($(this).parent().find('.title-gsweb').text());
    $('.modal-body').html(`
            <div class="row justify-content-center">
                <div class="col-7 col-md-3">
                    <figure>
                        <img class="img-fluid" src="`+$(this).parent().parent().find('img').attr('src')+`" />
                    </figure>
                </div>
                <div class="col-12 col-md">
                    `+$(this).parent().find('.description-gsweb').text()+`
                </div>
            </div>
        `);
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

            templateProducts.querySelector('.name').textContent = $(this).find('.btn-gsweb-add').parent().find('.title-gsweb').attr('title');
            templateProducts.querySelector('a').setAttribute('data-id',ID);

            const clone = templateProducts.cloneNode(true);
            fragment.appendChild(clone);
            $('#ProductsCart').find('tbody').append(fragment);
            
            $('form').prepend('<input type="hidden" name="'+$(this).find('.btn-gsweb-add').parent().find('.title-gsweb').attr('title').replace(/ /g, "")+'" value="'+$(this).find('.btn-gsweb-add').parent().find('.title-gsweb').attr('title')+'" id="'+ID+'" />');

            window.currentPrice = (parseFloat(window.currentPrice) + parseFloat($(this).find('.btn-gsweb-add').parent().find('.price-gsweb').text().replace(/ /g, "").replace(/,/g, "").replace(/\$/g, "").replace(/USD/g, "")));
        }
    });
    cardProds();
    allin();
});

$('body').on('click','.removeProductCart',function(e){
    e.preventDefault();
    let ID = $(this).attr('data-id');
    $(this).parent().parent().remove();

    $('.card').each(function(ele){
        if($(this).find('.btn-gsweb-add').attr('data-id')==ID){
            $(this).find('.btn-gsweb-add').removeClass('disabled').attr('disabled',false);
            $('form').find('#'+ID).remove();
            window.currentPrice = (parseFloat(window.currentPrice) - parseFloat($(this).find('.btn-gsweb-add').parent().find('.price-gsweb').text().replace(/ /g, "").replace(/,/g, "").replace(/\$/g, "").replace(/USD/g, "")));
        }
    });

    cardProds();
    allin();
});

function cardProds(){
    $('.cart-art-count').text(
        $('#ProductsCart').find('tbody').children('tr').size()
    );
}

function allin(){
    let tv = window.tprice;
    let cp = window.currentPrice;
    let mp = parseFloat(window.tprice)*0.50;
    var number_format = function(total) { 
        return total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
    };

    if(cp>=mp){
        console.log('mitad de precio alcanzado');
    }
    if(cp > 999){
        $('#ttprice').text('$'+number_format(cp));
    }else{
        $('#ttprice').text('$'+number_format(cp));
    }

    $('#totalp').attr('value',cp)

}

$('.goup').on('click',function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

$(window).on('scroll',function() {
    let scroll = $(window).scrollTop(), mrk = ($('form').scrollTop() + $('form').height());
    if(scroll > mrk) {
        $('.goup').addClass('active');
    } else {
        $('.goup').removeClass('active');
    }
});