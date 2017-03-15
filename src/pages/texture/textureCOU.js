$(document).ready(function(){
    var formHandler=new ZYFormHandler({
        redirectUrl:"/pages/texture/texture.html",
        keyName:"texture"
    });
    $("#myForm").validate({
        ignore:[],
        rules:{
            name:{
                required:true,
                maxlength:32
            }
        },
        messages:{
            name:{
                required:config.validErrors.required,
                maxlength:config.validErrors.maxLength.replace("${max}",32)
            }
        },
        submitHandler:function(form) {
            formHandler.submitForm(form);
        }
    });
});