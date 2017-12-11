$(document).ready(function (){

    console.log(document.cookie);
    //del_cookie('productIDs');




    var username = getCookie('username');

    var isCustomer = getCookie('isCustomer');
    if(username === "" || !isCustomer === ""){

            window.location.href = '../index.html';

    }
    $("#welcome_text").html('Welcome, '+username);
    $("#logout_button").click(function () {
        logout();

    });



    var source = $("#project-modal-template").html();
    var project_modal_template = Handlebars.compile(source);


    $.getJSON('http://localhost:8081/products/', function (product) {
        console.log(product);

        for (var i = 0; i < product.length; i++) {

                var productData = {
                    ProductTitle: ""+product[i].productName,
                    ProductCost: ""+product[i].productCost,
                    ProductType: ""+product[i].productType,
                    productID: ""+product[i].productID
                };

            console.log(product[i].productID);

            //     for( j =0; j < product[i].link.length;j++){
            //         $("#project4").attr('href',product[i].link[j]);
            //
            // }



                var html = project_modal_template(productData);

                $("#content").append(html);
            }


    });








    //attach clicklistener to the search button
    $('form').submit(function (event) {


        var searchTerm = extractSearchTerm();

        console.log(searchTerm);
        $("#home_body_title").html('Search Results')
        $("#content").empty();
        $.getJSON('http://localhost:8081/products/', function (searchResults) {

            for(var i =0; i < searchResults.length;i++){
                if(searchResults[i].productName ===searchTerm){
                    var productData = {
                        ProductTitle: ""+searchResults[i].productName,
                        ProductCost: ""+searchResults[i].productCost,
                        ProductType: ""+searchResults[i].productType,
                        productID: ""+searchResults[i].productID

                    };


                    var html = project_modal_template(productData);

                    $("#content").append(html);

                }


            }


        });
        event.preventDefault();



        //change the sign of teh identical thing

    });



    $(".add_to_cart").click(function () {
        var productID = $(this).attr('name');//id of clicked product

        console.log("clicked product id is: " + productID);

        console.log("before: "+getCookie('productIDs'));
        if(getCookie('productIDs') === ""){
            document.cookie = 'productIDs='+ productID+'; path=/';
            console.log(document.cookie);
        }else{
            var listOfIDs = getCookie('productIDs');
            document.cookie = 'productIDs='+listOfIDs+","+productID+'; path=/';
        }

        console.log("after:  "+getCookie('productIDs'));


    });

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

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function getProductD(tileID) {
        return $("#"+tileID).attr('name');

    }
    function del_cookie(name) {
        document.cookie = name +
            '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    function logout() {
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "isCustomer=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "productIDs=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        window.location.href="../index.html";

    }






});