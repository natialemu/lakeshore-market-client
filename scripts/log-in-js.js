$(function () {



        //alert("this is something");

        $('form').submit(function (event) {

            var formData = {
                'email': getEmail(),
                'password': getPassword(),
                'isCustomer':getUserType() === "customer"
            };
            console.log(formData);

            $.ajax({
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                url: 'http://localhost:8081/account/login',
                data: formData,
                dataType: 'json',
                encode: true
            }).done(function(data){
                console.log(data);
            });
            event.preventDefault();





        });

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


    function redirect(newPage){
        window.location = newPage;
    }
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