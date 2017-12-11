$(document).ready(function (){

    var username = getCookie('username');
    var isCustomer = getCookie('isCustomer');
    if(username === "" || isCustomer === ""){

        window.location.href = 'index.html';


    }

    // append account_summary into left_account_container
    var accountOverview = $("#account_summary");
    var editProfile = $("#edit_profile");
    var editProfileCard = $("#edit_profile_card");
    var editBankCard = $("#edit_profile_bank");
    accountOverview.css('display','block');
    $("#left_account_container").append(accountOverview);

    $("#edit_contact_info").click(function () {
        editProfile.css('display','block');
        accountOverview.css('display','none');
        editProfileCard.css('display','none');
        editBankCard.css('display','none');
        $("#left_account_container").append(editProfile);

    });

    $("#editProfileCard").click(function () {
        editProfile.css('display','none');
        accountOverview.css('display','none');
        editProfileCard.css('display','block');
        editBankCard.css('display','none');
        $("#left_account_container").append(editProfileCard);


    });

    $("#editBankCard").click(function () {
        editProfile.css('display','none');
        accountOverview.css('display','none');
        editProfileCard.css('display','none');
        editBankCard.css('display','block');
        $("#left_account_container").append(editBankCard);

    });

    $("#accountOverview").click(function () {
        editProfile.css('display','none');
        accountOverview.css('display','block');
        editProfileCard.css('display','none');
        editBankCard.css('display','none');
        $("#left_account_container").append(accountOverview);

    });

    $(".home_button").click(function () {
        if(isCustomer==="true"){
            window.location.href="buyer/homepage.html";
        }else{
            window.location.href="seller/homepage.html";
        }

    });

    $("#logout_button").click(function () {
        logout();

    });



    $.getJSON('http://localhost:8081/account/'+username, function (account) {
        console.log(account);




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
    //get account information

    // $('form').submit(function (event) {
    //
    //     var formData = {
    //         'email': getUsername(),
    //         'password': getPassword(),
    //         'isCustomer':true
    //     };
    //     console.log(formData);
    //     var username = getUsername();
    //
    //
    //
    //     event.preventDefault();
    //
    //
    // });

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

    function logout() {
        document.cookie =
            'username=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';

    }

});



