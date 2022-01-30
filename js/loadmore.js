$(document).ready(function() {
    $(".item-hidden").slice(0, 2).show();
    if ($(".item-hidden").length != 0) {
        $("#load").show();
    }
    $("#load").on("click", function(e) {
        e.preventDefault();
        $(".item-hidden").slice(0, 2).slideDown();
        if ($(".item-hidden").length == 0) {
            $("#load").text("No More to view").fadOut("slow");
        }
    });
}) 