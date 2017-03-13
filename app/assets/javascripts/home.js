// A $( document ).ready() block.
$( document ).ready(function() {
    $('.boxes .media').on('click',function(){
        document.location = $(this).data("target")
    });

    $(".modal").on('shown.bs.modal',function(){
        $(this).find("textarea").focus();
    });
});