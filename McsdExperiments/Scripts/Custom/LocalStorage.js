(function ()
{
    $(document).ready(function () {
        var storage = window.localStorage;
        $("#Button1").click(function (evt) {
            storage.setItem("fullname", $("#TextBox1").val());
            storage.setItem("email", $("#TextBox2").val());
            $("#Label3").html("Data saved to LocalStorage!");
            evt.preventDefault();
        });

        $("#Button2").click(function (evt) {
            var data = {};
            data.FullName = storage.getItem("fullname");
            data.Email = storage.getItem("email");
            $("#HiddenField1").val(JSON.stringify(data));
        });


    });
})();

