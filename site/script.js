$(window).on("load", function () {

    if ($('#welcome').mouseover(function () {
        $("#it1").addClass("selected1");
        $("#it2").removeClass("selected1");
        $("#it3, #it5").removeClass("selected2");
        $("#it4").removeClass("selected3");
    }));


    if ($('#presentation').mouseover(function () {
        $("#it1").removeClass("selected1");
        $("#it2").addClass("selected1");
        $("#it3, #it5").removeClass("selected2");
        $("#it4").removeClass("selected3");

    }));

    if ($('#concept').mouseover(function () {
        $("#it1, #it2").removeClass("selected1");
        $("#it3").addClass("selected2");
        $("#it4").removeClass("selected3");
        $("#it5").removeClass("selected2");
    }));

    if ($('#engagement').mouseover(function () {
        $("#it1, #it2").removeClass("selected1");
        $("#it3, #it5").removeClass("selected2");
        $("#it4").addClass("selected3");

    }));

    if ($('#telechargement').mouseover(function () {
        $("#it1, #it2").removeClass("selected1");
        $("#it3").removeClass("selected2");
        $("#it4").removeClass("selected3");
        $("#it5").addClass("selected2");
    }));

});