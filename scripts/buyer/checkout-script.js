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

    var shoppingCartProducts = [];

    for(var i =0; i < IDs.length;i++){

        $.getJSON('http://localhost:8081/products/id/'+IDs[i], function (product) {
            console.log(product);


            shoppingCartProducts.push(product);


        });

    }

    console.log(shoppingCartProducts);

    var source = $("#shopping_cart_modal_template").html();
    var project_modal_template = Handlebars.compile(source);

    for (var j = 0; j < shoppingCartProducts.length; j++) {

        var productData = {
            ProductName: ""+shoppingCartProducts[j].productName,
            PartnerName: ""+shoppingCartProducts[j].partnerName,
            ProductCost: ""+shoppingCartProducts[j].productCost
        };



        var html = project_modal_template(productData);

        $("#activeCartViewForm").append(html);
    }





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



