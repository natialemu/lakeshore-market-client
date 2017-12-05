(function () {

    var source = $("#project-modal-template").html();
    var project_modal_template = Handlebars.compile(source);

    var product_display = getSomeProducts();
    for(var i =0; i < product_display.length;i++){
        var productData = {
            ProductTitle: ""+product_display[i].productName,
            ProductCost: ""+product_display[i].productCost,
            ProductType: ""+product_display[i].productType

        }

        var html = project_modal_template(productData);

        $("#content").append(html);

    }





    //attach clicklistener to the search button
    $("#job_search_button").click(function () {
        var searchTerm = extractSearchTerm();
        var searchResults = getProducts(searchTerm);

        $("#content").empty();
        for(var i =0; i < searchResults.length;i++){
            var productData = {
                ProductTitle: ""+searchResults[i].productName,
                ProductCost: ""+searchResults[i].productCost,
                ProductType: ""+searchResults[i].productType

            }

            var html = project_modal_template(productData);

            $("#content").append(html);

        }

        //change the sign of teh identical thing

    })

    function extractSearchTerm(){
        return $("#product_query").val();
    }

    function getProducts(searchTerm) {
        var productName = searchTerm;
        var productsToDisplay = [];

        $.getJSON('http://localhost:8081/products/'+productName, function (products) {

            for (var i = 0; i < products.link.length; i++) {
                if(i < 5){
                    productsToDisplay.push(products[i]);
                }
            }

        });

        return productsToDisplay;
    }

    function getSomeProducts(){
        var productsToDisplay = [];


        $.getJSON('http://localhost:8081/products/', function (product) {

            for (var i = 0; i < product.link.length; i++) {
                if(i < 3){
                    productsToDisplay.push(product[i]);
                }
            }

        });

        return productsToDisplay;


    }

});