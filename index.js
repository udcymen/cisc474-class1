$(function(){

    $('#nameform').submit(function (event){
        event.preventDefault();
        $('.jumbotron').html('Hello ' + $('#fname').val() + " " + $('#lname').val()).removeClass('d-none');
        return false;
    })

});