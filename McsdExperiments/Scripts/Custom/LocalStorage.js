$(function () {
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

        $("#Button3").click(function (evt) {
            var data = {};
            data.FullName = storage.getItem("fullname");
            data.Email = storage.getItem("email");

            var options = {};
            options.url = "Home/Index";
            options.type = "POST";
            options.data = JSON.stringify({ "data": data });
            options.dataType = "json";
            options.contentType = "application/json";
            options.success = function (result) {
                $("#Label3").html(result);
        };


            options.error = function (xhr, err) {
                var msg = "readyState: " + xhr.readyState + "\nstatus: " + xhr.status;
                msg += "responseText: " + xhr.responseText;
                $("#Label3").html("Error invoking the web method!" + msg);
            };

            $.ajax(options).done(function(data){
                $("#Label3").html(data);
            });
            evt.preventDefault();
        });
    });
