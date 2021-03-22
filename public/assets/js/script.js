// Run this only after html doc has finished loading
$(document).ready(function() {
    $(".eat-list").on("submit", function(event) {
        event.preventDefault();
// Trigger update/PUT of devoured with btn_id click & reload page afterwards
        var btn_id = $(this).children(".btn_id").val();
        $.ajax({
            method: "PUT",
            url: "/burgers/" + btn_id
        }).then(function() {
            location.reload();
        });
    });
});