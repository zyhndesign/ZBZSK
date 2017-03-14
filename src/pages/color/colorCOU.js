$(document).ready(function(){
    var formHandler=new ZYFormHandler({
        redirectUrl:"/pages/color/color.html",
        keyName:"color"
    });
    $("#myForm").validate({
        ignore:[],
        rules:{
            name:{
                required:true,
                maxlength:32
            },
            value:{
                required:true
            }
        },
        messages:{
            name:{
                required:config.validErrors.required,
                maxlength:config.validErrors.maxLength.replace("${max}",32)
            },
            value:{
                required:config.validErrors.required
            }
        },
        submitHandler:function(form) {
            formHandler.submitForm(form);
        }
    });
});