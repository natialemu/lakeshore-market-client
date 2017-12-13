$(document).ready(function (){

    var username = getCookie('username');
    var isCustomer = getCookie('isCustomer');
    if(username === "" || isCustomer === ""){

        window.location.href = '../index.html';


    }

    $(".home_button").click(function () {
        if(isCustomer==="true"){
            window.location.href="homepage.html";
        }else{
            window.location.href="../seller/homepage.html";
        }

    });

    var IDs = getAllIds('productIDs');
    console.log(IDs);

    var shoppingCartProducts = [];
    var source = $("#shopping_cart_modal_template").html();
    var project_modal_template = Handlebars.compile(source);

    for(var i =0; i < IDs.length;i++){

        $.getJSON('http://localhost:8081/products/id/'+IDs[i], function (product) {
            var currentProduct = product[0];



                var productData = {
                    ProductName: ""+currentProduct.productName,
                    PartnerName: ""+currentProduct.partnerName,
                    ProductCost: ""+currentProduct.productCost
                };



                var html = project_modal_template(productData);

                $("#activeCartViewForm").append(html);


                shoppingCartProducts.push(product[0]);


            //shoppingCartProducts.push(currentProduct);

        });

    }


    $("#sc-buy-box-ptc-button").click(function () {
       window.location.href="homepage.html";
    });

    //placing an order
    $("#sc-cancel-box-ptc-button").click(function () {
       var productData = [];

        for(var k =0; k < shoppingCartProducts.length;k++){
           var productRequest = {
               'productCost':shoppingCartProducts[k].productCost,
               'productName': shoppingCartProducts[k].productName,
               'productType': shoppingCartProducts[k].productType,
               'productTag':shoppingCartProducts[k].productTag
           };

           productData.push(productRequest);
        }

        $.ajax({
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: 'http://localhost:8081/orders/'+username,
            data: JSON.stringify(formData),
            dataType: 'json',
            encode: true
        }).done(function(data){
            if(data.isSuccessful){

                    window.location.href="order-confirmation.html";
                    //use the link returned for viewing order or order status within in a cookie
                document.cookie = 'placedOrderLink='+ data.link[0] +'; path=/';



            }else{

                alert("Order couldn't be proccessed!");

            }

        });
    });
    //console.log(shoppingCartProducts);

   // console.log("shopping cart products: " + shoppingCartProducts);
    //console.log(shoppingCartProducts.length);











    $('form').submit(function (event) {






        event.preventDefault();


    });

    function getUsername(){
        return $("input[name=login]").val();

    }

    function getPassword(){
        return $("input[name=password]").val();


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

    function getAllIds(cname) {
        var idsString = getCookie(cname);
        return idsString.split(',');

    }

});



