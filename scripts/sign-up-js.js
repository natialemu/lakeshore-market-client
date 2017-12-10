$(document).ready(function () {

    var source = $("#project-modal-template").html();
    var project_modal_template = Handlebars.compile(source);

    var productData1 = {
        ProductTitle:"Harry potter",
        ProductCost: "33",
        ProductType: "something"

    };
    var html1 = project_modal_template(productData1);

   // $("#content").append(html1);

    $.getJSON('http://localhost:8081/products/', function (product) {
        //console.log(product);


        for (var i = 0; i < product.length; i++) {

            if(i < 3){
                var productData = {
                    ProductTitle: ""+product[i].productName,
                    ProductCost: ""+product[i].productCost,
                    ProductType: ""+product[i].productType

                };

                var html = project_modal_template(productData);

                $("#content").append(html);
            }
        }
       // productsToDisplay = product;

    });







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
            url: 'http://localhost:8081/account/',
            data: JSON.stringify(formData),
            dataType: 'json',
            encode: true
            }).done(function(data){
                window.location.href="login.html";
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
        var productsToDisplay;




        return productsToDisplay;


    }



});