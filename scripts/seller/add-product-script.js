$(document).ready(function () {
    var username = getCookie('username');

    $('form').submit(function (event) {

        var formData = [{
            'productName': getProductName(),
            'productType': getProductType(),
            'productCost': getProductCost(),
            'productTag':getProductTag()
        }];
        console.log(formData);

        // $.post("http://localhost:8081/account/", function(data, status){
        //     //alert("Data: " + data + "\nStatus: " + status);
        //     console.log(status);
        // });

        $.ajax({
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: 'http://localhost:8081/products/'+username,
            data: JSON.stringify(formData),
            dataType: 'json',
            encode: true
        }).done(function(data){
            console.log(data);
            alert("Product has been added");
            window.location.href="inventory.html";
        });
        event.preventDefault();





    });

    // $("#register_button").click(function () {
    //
    //
    //
    //     // $.ajax({
    //     //     url: "http://localhost:8081/account/",
    //     //     headers: {
    //     //         'Accept': 'application/json',
    //     //         'Content-Type': 'application/json'
    //     //     },
    //     //     method: 'POST',
    //     //     data: login_payload,
    //     //     dataType: 'json',
    //     //     success: function (response) {
    //     //         if(response.isSuccessful === true){//login was successful
    //     //             $("#login-form").attr('action','buyer/homepage.html');
    //     //
    //     //
    //     //             //write login to cookie
    //     //             //document.cookie = "email="+login_payload["email"];
    //     //             //document.cookie = "password="+login_payload["password"]
    //     //             //redirect to the next page
    //     //             //redirect("customer/homepage.html");
    //     //             // $("#login_field").attr('value','Yassss');
    //     //
    //     //         }else{
    //     //             //there was a problem loggin in
    //     //             alert("incorrect username or password");
    //     //             $("#login_field").attr('value','Yassss');
    //     //
    //     //         }
    //     //     }
    //     // });
    //
    //
    //
    //
    //
    //     // var userType = getUserType();
    //     // if(userType.equals("customer")){
    //     //     login_payload.isCustomer = true;
    //     // }else{
    //     //     login_payload.isCustomer = false;
    //     // }
    //
    //     //alert("email: " + getEmail() +", password: "+ getPassword() + ", user type: " + login_payload.isCustomer);
    //     //var link = "";
    //
    //     //alert("email: " + getEmail() +", password: "+ getPassword() + ", user type: " + userType);
    //     //$("#login-form").attr('action','buyer/homepage.html');
    //     //redirect("http://localhost:63342/lakeshore-market-client/buyer/homepage.html");
    //
    //
    //     /*
    //     public class AccountRequestion{
    //        private String email;
    //        private String password;
    //        private boolean isCustomer;
    //     }
    //
    //      */
    //
    //
    //
    // });





    function getProductName(){
        return $("input[name=product_name]").val();

    }

    function getProductType(){
        return $("input[name=product_type]").val();


    }

    function getProductTag(){
        return $("input[name=product_tag]").val();
    }

    function getProductCost(){
        return parseFloat($("input[name=product_cost]").val());

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



});