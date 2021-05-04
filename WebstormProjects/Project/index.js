$(document).ready(function () {

    //calling the responsiveSlides method on my rslides class
    $(".rslides").responsiveSlides();

});
$(document).ready(function () {

//ajax request for json file home
    $.getJSON("home.json", function (data) {
        $.each(data.why, function () {
            $("#why").append("<img src=" + this.image + ">" +
                "<h3>" + this.title + "</h3>" +
                "<p>" + this.bio + "</p>" +
                "<h2>" + this.catch + "</h2>"
            );
        });
    });
});
