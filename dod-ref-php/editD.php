<?php
session_start();

include("connection.php");
include("functions.php");
$user_data = check_login($con);


if($_SERVER['REQUEST_METHOD']=="POST")
{
    $oldPassword = $_POST['password'];
$newDomain = $_POST['newDomain'];
$reenter_newDomain = $_POST['reenter_newDomain'];
if(!empty($newDomain) && !empty($reenter_newDomain) && $reenter_newDomain== $newDomain)
{  
    $query="UPDATE users SET domain_name = '$newDomain' WHERE password = '$oldPassword' ";
    if(mysqli_query($con,$query))
    {
        echo'<script language="javascript">';
    echo 'alert("edit sucessful")';
    echo '</script>';
    }
}


}
?>





<!DOCTYPE html>
<html lang='en'>
    <head>
        <style>
            footer 
		{
			background-color: #ccc;
			padding: 20px;
			text-align: center;
		}
                .d5
        {
            flex-direction: column;
            background-color: #333;
			color: #fff;
			padding: 20px;
			display: flex;
			justify-content: center;
			align-items: center;
        }
            .b
            {
                transition-duration: 2s;
            }
            .b:hover{
                background-color: #666666;
            }
            .row{
             
          display:grid;
            grid-template-columns: 80px 1fr 10fr;
            margin-top:30px;
            margin-right:5px;
            }
            .for-label{
              box-shadow: 0px 1px 5px rgba(0,0,0,0.5);  
              
            }
            .search
            {
                border:none;
                border-radius:10px;
                box-shadow: 0px 1px 5px rgba(0,0,0,0.5);
                margin-left: 10px;
                transition:box-shadow 0.15s;

                
            }
            .search:hover{
                background-color: beige;
                 box-shadow: 0px 0px 0px rgba(0,0,0,0.5);
            }
           .login{
            
            margin-top:30px;

            margin-left:80px;
            color : white;
            background-color : rgb(46,164,79);
            border:none;
            height:36px;
             width:90px;
            border-radius:5px;
            font-weight:bold;
            transition:box-shadow 0.15s;
           }
           .login:hover{
        box-shadow: 0px 2px 5px black;
             }
            .login:active{
                box-shadow: 0px 0px 0px black;
            }
        </style>
        <title>Domain In Domain</title>
        <link rel="stylesheet" href="index.html">
    </head>
    <body class="b">
        <form method="post">
    <div class="d5">
        <h1 class="h1">DOMAIN-IN-DOMAIN</h1>
</div>
<div class="row">
                <label class="for-label">password</label>
                <input class="search" type="text" placeholder="enter password" name="password" >
                </div>
            <div class="row">
                <label class="for-label">New Domain</label>
                <input class="search" type="text" placeholder="enter New Domain" name="newDomain" >
                </div>
              <div class="row">
                <label class="for-label">re-enter Domain </label>
                <input class="search" type="text" placeholder="re-enter Domain" name="reenter_newDomain">
                </div>
                <input class="login" type="submit" value="save">
                
                
        </form>
        <section>
                    <br><br>
        <button onclick="window.location.href='editM.php';" class="search">"<"Go Back</button>
        <button onclick="window.location.href='homeL.php';" class="search">"<<"Go To Home</button>
        </section>
                <marquee behavior="scroll" direction="left">if you are lucky! then i am Lucky. If yu are bot Fellow then i am bot Fellow!
    </marquee>
    <footer>
		<p>Copyright &copy; 1992 DomainaInDomain</p>
	</footer>
            </body>
</html>
