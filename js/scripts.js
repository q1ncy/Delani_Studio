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
    $("button").click(function(){
        var Name=document.getElementById("name").value
        var Email=document.getElementById("email").value
       
        if (Name=="" || Email==""){
            alert("please fill in form correctly")
        }else{
        alert("we have received your email "+Name +" Thank you for contacting us");
        }
    })
    
})
