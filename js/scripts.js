$(document).ready(function() {
    $(".iconOne").click(function(){
        $("#id2").toggle()
        $("#id1").toggle()
    })
    $(".iconTwo").click(function(){
        $("#id4").toggle()
        $("#id3").toggle()
    })
    $(".iconThree").click(function(){
        $("#id6").toggle()
        $("#id5").toggle()
    })
    $("#prj1").hover(function(){
        $("prj1").toggle();
    })
})