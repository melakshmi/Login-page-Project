function fun1(){
    var uname=document.forms["myform"]["uname"].value;
    var upwd=document.forms["myform"]["upwd"].value;

if(uname==null || uname=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the user name";
         return false;
}

if(upwd==null || upwd==""){
          document.getElementById("errorBox").innerHTML =
           "enter the password";
         return false;
}

if (uname != '' && upwd != '' ){
 alert("Login successfully");
                 }

}



function fun2(){
    var uname1=document.forms["myform1"]["uname1"].value;
    var email1=document.forms["myform1"]["email1"].value;
    var upwd1=document.forms["myform1"]["upwd1"].value;
    var upwd2=document.forms["myform1"]["upwd2"].value;


if(uname1==null || uname1=="" )
{
          document.getElementById("errorBox1").innerHTML =
           "enter the user name";
         return false;
}

if(email1==null || email1=="")
{
          document.getElementById("errorBox1").innerHTML =
           "enter the email";
         return false;
}

if(upwd1==null || upwd1=="" )
{
          document.getElementById("errorBox1").innerHTML =
           "enter the password";
         return false;
}

if(upwd2==null || upwd2=="")
{
          document.getElementById("errorBox1").innerHTML =
           "enter the password";
         return false;
        }

 if(upwd1 != upwd2)
 {
          document.getElementById("errorBox1").innerHTML =
           "password don't match";
         return false;
        }



if (uname1 != '' && upwd1 != '' && upwd2 != '' && email1 != '' && upwd1 == upwd2)
{

  alert("Register successfull");
}
}