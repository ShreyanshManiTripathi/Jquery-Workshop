$(document).ready(
()=>{
    $('input[type="button"]').click(
()=>{
    var username=$('input[type="text"]').val();
    var password=$('input[type="password"]').val();
    if (username==''&&password==''){
        alert("Username or Password is not entered");
    }
else{
    $.ajax({
        url:"https://localhost:3000/users",type:'GET',
        data:{
            "username":username,
            "password":password,
        },
success:(x)=>{
    alert(username+"Log in Successful");
    console.log(x);
    window.location="http://127.0.0.1:5500/html/registration.html"
}
    })
}

}
    )
}

)

$('form.ajax').on('submit',function(){
    alert('submitted')
})