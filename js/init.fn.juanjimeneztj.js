let $win = $(window), $doc = $(document), $catalog = $('.catalog-finmc');

$doc.ready(function(){
    initGSWEB();
});

function initGSWEB(){
    $.get('products.php', function(resp){
        let $response = JSON.parse(resp);
        $response.forEach(element => {
            if($win.width() > 1601){
                if(element.product_name.length > 35){
                    $name = element.product_name.substr(0,35)+'...';
                }else{
                    $name = element.product_name;
                }
                $catalog.children().append(`
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 mb-5">
                        <div class="card text-center">
                            <figure class="prod-image">
                                <img src="${element.image}" alt="${element.product_name}" />
                            </figure>
                            <div class="card-body">
                                <p class="title-gsweb text-left text-uppercase mb-0" title="${element.product_name}"><strong>${$name}</strong></p>
    
                                <p class="text-left text-info mb-0"><small>DTI Trading</small></p>
    
                                <div class="range-details text-left">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                                <div class="price-gsweb text-left mb-4">$${element.actual_price} USD</div>
                                <div class="description-gsweb d-none">${element.description}</div>
    
                                <a href="#" class="btn-gsweb-add btn btn-primary d-block mb-2" data-id="${element.id}">Add to cart</a>
                                <a href="#" class="btn-gsweb-read-more btn btn-link text-info d-block" data-toggle="modal" data-target="#ModalProdDescription" data-id="${element.id}">Read More</a>
                            </div>
                        </div>
                    </div>
                `);
            }else{
                if(element.product_name.length > 35){
                    $name = element.product_name.substr(0,35)+'...';
                }else{
                    $name = element.product_name;
                }
                $catalog.children().append(`
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-5">
                        <div class="card text-center">
                            <figure class="prod-image">
                                <img src="${element.image}" alt="${element.product_name}" />
                            </figure>
                            <div class="card-body">
                                <p class="title-gsweb text-left text-uppercase mb-0" title="${element.product_name}"><strong>${$name}</strong></p>
    
                                <p class="text-left text-info mb-0"><small>DTI Trading</small></p>
    
                                <div class="range-details text-left">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                                <div class="price-gsweb text-left mb-4">$${element.actual_price} USD</div>
                                <div class="description-gsweb d-none">${element.description}</div>
    
                                <a href="#" class="btn-gsweb-add btn btn-primary d-block mb-2" data-id="${element.id}">Add to cart</a>
                                <a href="#" class="btn-gsweb-read-more btn btn-link text-info d-block" data-toggle="modal" data-target="#ModalProdDescription" data-id="${element.id}">Read More</a>
                            </div>
                        </div>
                    </div>
                `);
            }
        });
    });
}