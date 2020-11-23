window.tprice = 0;
window.diffprice = 0;
window.currentPrice = 0;
window.msh = 0;
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
            window.tprice = parseFloat(window.tprice) + parseFloat(element.actual_price.replace(/,/g, ""));
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
            if(element.label == ''){
                templateProducts.querySelector('.ribbon-wrapper-red').classList.add('d-none');
            }else{
                templateProducts.querySelector('.ribbon-wrapper-red').classList.remove('d-none');
                templateProducts.querySelector('.ribbon-wrapper-red .ribbon-red').textContent = element.label;
            }
            if(element.image == 'images/Roadmap_TraderRoom_Combo.png' || element.image == 'images/TBB.png' || element.image == 'images/TBUZ_TSPY_COMBO.png'){
                templateProducts.querySelector('img').style.maxWidth = '350px';
            }else if(element.image == 'images/EOT.png'){
                templateProducts.querySelector('img').style.maxWidth = '310px';
            }else{
                templateProducts.querySelector('img').style.maxWidth = '200px';
            }
            templateProducts.querySelector('img').setAttribute('src',element.image);
            templateProducts.querySelector('img').setAttribute('alt',element.product_name);
            if(element.label == ''){
                templateProducts.querySelector('.title-gsweb').setAttribute('title',element.product_name);
            }else{
                templateProducts.querySelector('.title-gsweb').setAttribute('title',element.product_name+' - '+element.label);
            }
            templateProducts.querySelector('.title-gsweb strong').innerHTML = $name;
            if(element.retail_price == ''){
                templateProducts.querySelector('.retail-price').innerHTML = '&nbsp;';
            }else{
                templateProducts.querySelector('.retail-price').textContent = '$'+element.retail_price;
            }
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