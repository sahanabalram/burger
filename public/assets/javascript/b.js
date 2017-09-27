// function for the devour button
// Step1: when the devoured button is clicked the devoured value in the database will become true.
// Step2: the div with id(devouredBurger) should be appended with the devoured burger name and the id.
// Step3: the burger name and the devour it button should be removed from the div class(bname).
// bid parameter is the button id from index.handlebars file
function devourButton(bid) {
    $.ajax({
        url: "/",
        type: "PUT",
        data: {
            devoured: true,
            id: bid
        },
        success: function (data, textStatus, jqXHR) {
            console.log(data, textStatus);
        }
    });
    // move from one div to another
    $("#burgerID" + bid).appendTo("#devouredBurger");
    $("#label" + bid).addClass("red lighten-3");
    // removing the button and burger name
    $("#" + bid).remove();
}