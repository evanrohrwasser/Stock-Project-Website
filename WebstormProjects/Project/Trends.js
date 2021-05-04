$(document).ready(function(){


//ajax request for json file
    $.getJSON("stocks.json", function(data) {
        $.each(data.stocks, function(){
            $("#stock").append(
                "<h2>" + this.name + "</h2>" +
                "<h3>" + this.title + "</h3>" +
                "<p>" + this.bio + "</p>" +
                 "<p>" + this.info + "</p>"
            );
        });
    });
});

