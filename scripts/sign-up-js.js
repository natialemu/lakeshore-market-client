$(function () {

    var registrationLink = "http://localhost:8081/account/";
    //var sampleProducts = getProducts();
    //diplayProducts(sampleProducts);

    $('form').submit(function (event) {

        var formData = {
            'username': getUsername(),
            'email': getEmail(),
            'password': getPassword(),
            'isCustomer':getUserType() === "customer"
        };
        console.log(formData);

        $.ajax({
            method: 'POST',
            headers: {
                         'Accept': 'application/json',
                         'Content-Type': 'application/json'
            },
            url: 'http://localhost:8081/account/',
            data: formData,
            dataType: 'json',
            encode: true
            }).done(function(data){
                console.log(data);
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




    function redirect(newPage){
        window.location =newPage;
    }
    function getEmail(){
        return $("input[name=email]").val();

    }

    function getPassword(){
        return $("input[name=password]").val();


    }

    function getUsername(){
        return $("input[name=username]").val();
    }

    function getUserType(){
        return $("input[name=user_type]").val();

    }

    function getProducts(){
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