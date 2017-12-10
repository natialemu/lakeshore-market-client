// $(document).ready(function (){
//
//     console.log(document.cookie);
//
//
//
//     var username = getCookie('username');
//     $("#welcome_text").html('Welcome, '+username);
//
//
//     var source = $("#project-modal-template").html();
//     var project_modal_template = Handlebars.compile(source);
//
//
//     $.getJSON('http://localhost:8081/products/', function (product) {
//         console.log(product);
//
//         for (var i = 0; i < product.length; i++) {
//
//             var productData = {
//                 ProductTitle: ""+product[i].productName,
//                 ProductCost: ""+product[i].productCost,
//                 ProductType: ""+product[i].productType
//             };
//
//
//
//             var html = project_modal_template(productData);
//
//             $("#content").append(html);
//         }
//
//
//     });
//
//
//
//
//
//     //attach clicklistener to the search button
//     $('form').submit(function (event) {
//
//
//         var searchTerm = extractSearchTerm();
//
//         console.log(searchTerm);
//         $("#home_body_title").html('Search Results')
//         $("#content").empty();
//         $.getJSON('http://localhost:8081/products/', function (searchResults) {
//
//             for(var i =0; i < searchResults.length;i++){
//                 if(searchResults[i].productName ===searchTerm){
//                     var productData = {
//                         ProductTitle: ""+searchResults[i].productName,
//                         ProductCost: ""+searchResults[i].productCost,
//                         ProductType: ""+searchResults[i].productType
//
//                     };
//
//                     var html = project_modal_template(productData);
//
//                     $("#content").append(html);
//
//                 }
//
//
//             }
//
//
//         });
//         event.preventDefault();
//
//
//
//         //change the sign of teh identical thing
//
//     });
//
//     function extractSearchTerm(){
//         return $("#product_query").val();
//     }
//
//     function getProducts(searchTerm) {
//         var productName = searchTerm;
//         var productsToDisplay = [];
//
//         $.getJSON('http://localhost:8081/products/'+productName, function (products) {
//
//             for (var i = 0; i < products.link.length; i++) {
//                 if(i < 5){
//                     productsToDisplay.push(products[i]);
//                 }
//             }
//
//         });
//
//         return productsToDisplay;
//     }
//
//     function getCookie(cname) {
//         var name = cname + "=";
//         var decodedCookie = decodeURIComponent(document.cookie);
//         var ca = decodedCookie.split(';');
//         for(var i = 0; i <ca.length; i++) {
//             var c = ca[i];
//             while (c.charAt(0) === ' ') {
//                 c = c.substring(1);
//             }
//             if (c.indexOf(name) === 0) {
//                 return c.substring(name.length, c.length);
//             }
//         }
//         return "";
//     }
//
//
//
// });