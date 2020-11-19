let $win = $(window), $doc = $(document), $catalog = $('.catalog-finmc .row');

$(function(){
    initGSWEB();
});

function initGSWEB(){
    $.get('products.php', function(resp){
        let $response = JSON.parse(resp);
        const fragment = document.createDocumentFragment();
        const templateProducts = document.querySelector('#template-product').content;

        $response.forEach(element => {
            if($win.width() > 1601){
                if(element.product_name.length > 35){
                    $name = element.product_name.substr(0,35)+'...';
                }else{
                    $name = element.product_name;
                }
            }else{
                if(element.product_name.length > 30){
                    $name = element.product_name.substr(0,26)+'...';
                }else{
                    $name = element.product_name;
                }
            }
            templateProducts.querySelector('img').setAttribute('src',element.image);
            templateProducts.querySelector('img').setAttribute('alt',element.product_name);
            templateProducts.querySelector('.title-gsweb').setAttribute('title',element.product_name);
            templateProducts.querySelector('.title-gsweb strong').innerHTML = $name;
            templateProducts.querySelector('.price-gsweb').textContent = '$'+element.actual_price+' USD';
            templateProducts.querySelector('.description-gsweb').innerHTML = element.description;
            templateProducts.querySelector('.btn-gsweb-add').setAttribute('data-id',element.id);
            templateProducts.querySelector('.btn-gsweb-read-more').setAttribute('data-id',element.id);

            const clone = templateProducts.cloneNode(true);

            fragment.appendChild(clone);
            $catalog.append(fragment);
        });
    });
}