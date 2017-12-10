$(document).ready(function (){
    $('form').submit(function (event) {

        var formData = {
            'email': getEmail(),
            'password': getPassword(),
            'isCustomer':getUserType() === "customer"
        };
        console.log(formData);
        var username = getEmail();

        $.getJSON('http://localhost:8081/account/'+formData.email, function (account) {
            console.log(account);

            if(formData.password === account.password){
                //redirect to the homepage
                //$("#login_form").attr('action','buyer/homepage.html');
                document.cookie =
                    'username='+formData.email+'; path=/';

                if(formData.isCustomer){
                    window.location.href = "buyer/homepage.html";

                }else{
                    window.location.href = "seller/homepage.html";
                }




            }else{
                alert("Incorrect username or password");
            }


            // for (var i = 0; i < product.length; i++) {
            //
            //     if(i < 3){
            //         var productData = {
            //             ProductTitle: ""+product[i].productName,
            //             ProductCost: ""+product[i].productCost,
            //             ProductType: ""+product[i].productType
            //
            //         };
            //
            //         var html = project_modal_template(productData);
            //
            //         $("#content").append(html);
            //     }
            // }
            // productsToDisplay = product;

        });

        event.preventDefault();


    });

    function getEmail(){
        return $("input[name=login]").val();

    }

    function getPassword(){
        return $("input[name=password]").val();


    }

    function getUserType(){
        return $("input[name=user_type]").val();

    }

});



//alert("this is something");



// $.ajax({
//     method: 'PUT',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     url: 'http://localhost:8081/account/login',
//     data: formData,
//     dataType: 'json',
//     encode: true
// }).done(function(data){
//     console.log(data);
// });
// event.preventDefault();







//     $("#login_form").attr('action','buyer/homepage.html');
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
//     //            // $("#login_field").attr('value','Yassss');
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








