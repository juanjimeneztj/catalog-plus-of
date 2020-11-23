$('body').on('click','.btn-gsweb-add',function(e){
    e.preventDefault();
    $('.btn-gsweb-add').each(function(){
        $(this).removeClass('disabled').attr('disabled',false);
    });
    let ID = $(this).attr('data-id');
    $(this).addClass('disabled').attr('disabled',true);
    
    $('#productName').html($(this).parent().find('.title-gsweb').attr('title'));
    $('#productID').attr('value',ID);

    window.currentPrice = parseFloat($(this).parent().find('.price-gsweb').text().replace(/ /g, "").replace(/,/g, "").replace(/\$/g, "").replace(/USD/g, ""));

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
    $('.btn-gsweb-add').each(function(){
        $(this).removeClass('disabled').attr('disabled',false);
    });
    $(this).addClass('disabled').attr('disabled',true);
    $('.card').each(function(ele){
        if($(this).find('.btn-gsweb-add').attr('data-id')==ID){

            $('#productName').html($(this).find('.btn-gsweb-add').parent().find('.title-gsweb').attr('title'));
            $('#productID').attr('value',ID);

            $(this).find('.btn-gsweb-add').addClass('disabled').attr('disabled',true);

            window.currentPrice = parseFloat($(this).find('.btn-gsweb-add').parent().find('.price-gsweb').text().replace(/ /g, "").replace(/,/g, "").replace(/\$/g, "").replace(/USD/g, ""));
        }
    });
    allin();
});

function allin(){
    let tv = window.tprice;
    let cp = window.currentPrice;
    let mp = parseFloat(window.tprice)*0.50;
    let offP = parseFloat(window.tprice)-3000;
    var number_format = function(total) { 
        return total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
    };

    if(cp > 999){
        $('#ttprice').text('$'+number_format(cp));
    }else{
        $('#ttprice').text('$'+number_format(cp));
    }
    
    window.diffprice = parseFloat(offP) - parseFloat(cp);

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