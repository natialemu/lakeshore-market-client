$(document).ready(function (){

    var username = getCookie('username');
    var isCustomer = getCookie('isCustomer');
    if(username === "" || isCustomer === ""){

        window.location.href = 'index.html';


    }

    //request for getting account summary
    $.getJSON('http://localhost:8081/account/', function (account) {
        //console.log(product);



        // productsToDisplay = product;

    });


    /*
    The three buttons are:
    1. profile_bank_save_profile
    2. profile_card_save_profile
    3. profile_save_profile
     */

    $("#profile_bank_save_profile").click(function () {
        var routingNumber = $("input[name=routingNumber]").val();
        var accountType = $("input[name=accountType]").val();
        var accountNumber = $("input[name=accountNumber]").val();
        var bankName = $("input[name=bankName]").val();

        var bankData ={
            'bankName':bankName,
            'accountNumber':accountNumber,
            'accountType':accountType,
            'routingNumber':routingNumber
        };

        $.ajax({
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: 'http://localhost:8081/account/bank/profile/'+username,
            data: JSON.stringify(bankData),
            dataType: 'json',
            encode: true
        }).done(function(data){
            if(data.isSuccessful){



            }else{
                alert("Couldn't update bank information!");
            }

        });


    });

    $("#profile_card_save_profile").click(function () {
        var billingAddress = $("input[name=billingAddress]").val();
        var billingCity = $("input[name=billingCity]").val();
        var billingState = $("input[name=billingState]").val();
        var billingZipcode = $("input[name=billingZipcode]").val();
        var cardNumber = $("input[name=card_number]").val();
        var nameOnCard = $("input[name=name_on_card]").val();
        var cardEd = $("input[name=expirationDate]").val();
        var cardsecurity = $("input[name=securityCode]").val();



        var paymentCardData ={
            'billingStreetAddress':billingAddress,
            'billingCity':billingCity,
            'billingState':billingState,
            'billingZipcode':billingZipcode,
            'cardNumber':cardNumber,
            'nameOnCard':nameOnCard,
            'cardExpirationDate':cardEd,
            'cardSecurityCode':cardsecurity
        };

        $.ajax({
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: 'http://localhost:8081/account/bank/card/'+username,
            data: JSON.stringify(paymentCardData),
            dataType: 'json',
            encode: true
        }).done(function(data){
            if(data.isSuccessful){



            }else{
                alert("Couldn't update bank information!");
            }

        });



    });

    $("#profile_save_profile").click(function () {
        var fullName = $("input[name=fullName]").val();
        var dob = $("input[name=dateofbirth]").val();
        var address = $("input[name=address]").val();
        var zipcode = $("input[name=zipcode]").val();
        var city = $("input[name=city]").val();
        var state = $("input[name=state]").val();
        var phone = $("input[name=cellphone]").val();


        var profileData ={
            'fullName':fullName,
            'birthDate':dob,
            'streetAddress':address,
            'zipcode':zipcode,
            'city':city,
            'state':state,
            'cellphone':phone
        };

        $.ajax({
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: 'http://localhost:8081/account/profile/'+username,
            data: JSON.stringify(bankData),
            dataType: 'json',
            encode: true
        }).done(function(data){
            if(data.isSuccessful){



            }else{
                alert("Couldn't update profile information!");
            }

        });



    });


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

        $("#submenu-item-contact-information").attr('class','active');
        $("#submenu-item-account-overview").attr('class','');
        $("#submenu-item-bank-information").attr('class','');
        $("#submenu-item-payment-card-information").attr('class','');

    });

    $("#editProfileCard").click(function () {
        editProfile.css('display','none');
        accountOverview.css('display','none');
        editProfileCard.css('display','block');
        editBankCard.css('display','none');
        $("#left_account_container").append(editProfileCard);

        $("#submenu-item-contact-information").attr('class','');
        $("#submenu-item-account-overview").attr('class','');
        $("#submenu-item-bank-information").attr('class','');
        $("#submenu-item-payment-card-information").attr('class','active');


    });

    $("#editBankCard").click(function () {
        editProfile.css('display','none');
        accountOverview.css('display','none');
        editProfileCard.css('display','none');
        editBankCard.css('display','block');
        $("#left_account_container").append(editBankCard);


        $("#submenu-item-contact-information").attr('class','');
        $("#submenu-item-account-overview").attr('class','');
        $("#submenu-item-bank-information").attr('class','active');
        $("#submenu-item-payment-card-information").attr('class','');

    });

    $("#accountOverview").click(function () {
        editProfile.css('display','none');
        accountOverview.css('display','block');
        editProfileCard.css('display','none');
        editBankCard.css('display','none');
        $("#left_account_container").append(accountOverview);

        $("#submenu-item-contact-information").attr('class','');
        $("#submenu-item-account-overview").attr('class','active');
        $("#submenu-item-bank-information").attr('class','');
        $("#submenu-item-payment-card-information").attr('class','');


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

    function logout() {
        document.cookie =
            'username=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';

    }

});



