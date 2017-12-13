$(document).ready(function () {

    console.log(document.cookie);
    var username = getCookie('username');
    var isCustomer = getCookie('isCustomer');
    if(!username === "" && !isCustomer === ""){
        if(isCustomer === "true"){
            window.location.href = 'buyer/homepage.html';
        }else{
            window.location.href ='seller/homepage.html';
        }

    }

    var source = $("#project-modal-template").html();
    var project_modal_template = Handlebars.compile(source);

    var productData1 = {
        ProductTitle:"Harry potter",
        ProductType: "something"

    };
    var placedOrderLink = getCookie('placedOrderLink');




    $.getJSON(placedOrderLink, function (order) {
        console.log(order);

        /*
        Order has fields:
        1. customerName
        2. orderCost
        3. orderDate
         */
        var customerName = order.customerName;
        var ordercost = order.orderCost;
        var orderDate = order.orderDate;

       $("#card-order-fullname").html(customerName);
        $("#card-order-date").html(orderDate);
        $("#card-order-cost").html(ordercost);

        // productsToDisplay = product;

    });


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



});