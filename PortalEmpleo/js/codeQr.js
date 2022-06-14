function myFunction() {
    document.getElementById("alert").innerHTML = "";
}
$("#generate").on("click", function() {
    var data = $("#codeData").val();
    var size = $("#codeSize").val();
    if (data == "") {
        $("#alert").append("<p style='color:#fff;font-size:20px'>Please Enter A Url Or Text</p>"); // If Input Is Blank
        return false;
    } else {
        if ($("#image").is(':empty')) {

            //QR Code Image
            $("#image").append("<img src='http://chart.apis.google.com/chart?cht=qr&chl=" + data + "&chs=" + size + "' alt='qr' />");

            //This Provide An Image Download Link
            $("#link").append("<a style='color:#fff;' href='http://chart.apis.google.com/chart?cht=qr&chl=" + data + "&chs=" + size + "'>Download QR Code</a>");

            //This Provide the Image Link Path In Text
            $("#code").append("<p style='color:#fff;'><strong>Image Link:</strong> http://chart.apis.google.com/chart?cht=qr&chl=" + data + "&chs=" + size + "</p>");
            return false;
        } else {
            $("#image").html("");
            $("#link").html("");
            $("#code").html("");

            //QR Code Image
            $("#image").append("<img src='http://chart.apis.google.com/chart?cht=qr&chl=" + data + "&chs=" + size + "' alt='qr' />");

            //This Provide An Image Download Link
            $("#link").append("<a style='color:#fff;' href='http://chart.apis.google.com/chart?cht=qr&chl=" + data + "&chs=" + size + "'>Download QR Code</a>");

            //This Provide the Image Link Path In Text
            $("#code").append("<p style='color:#fff;'><strong>Image Link:</strong> http://chart.apis.google.com/chart?cht=qr&chl=" + data + "&chs=" + size + "</p>");
            return false;
        }
    }
});