OPENAPI_KEY = ""

smodel35 = "gpt-3.5-turbo"
smodelmini = "gpt-4o-mini"
//squestion = "황진이가 누구지"
squestion = "txtMsg.value"
function draw(){
    squestion = "txtMsg.value"
    data ={
        model: smodelmini,
        prompt: squestion,
        n: 2,
        size:"512x512"
    }

    $.ajax({
        type:"POST",
        url: "https://api.openai.com/v1/images/generations",
        headers:{
            "Authorization": "Bearer " + OPENAPI_KEY
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done( function(response){
        console.log(response)
        gimage.src = response.data[0].url
        gimage2.src = response.data[0].url
    }).fail(function(error){
        console.log(error)
errormsg = error.status + ":" + error.responseJSON.error.code + "-" + error.responseJSON.error.message
txtOut.value=errormsg

    })
    
}

talk()