<?php
session_start();

include("connection.php");
include("functions.php");

if($_SERVER['REQUEST_METHOD']=="POST")
{
    $user_name=$_POST['user_name'];
    $password=$_POST['password'];
    $reenter_password=$_POST['reenter_password'];
    $domain_name=$_POST['domain_name'];
    $url=$_POST['url'];

    if(!empty($user_name) && !empty($url) && !empty($reenter_password) && !empty($domain_name) && !empty($password) && $password==$reenter_password)
    {
        $user_id = random_num(20);
        $query="insert into users(user_id,user_name,password,domain_name,url) values('$user_id','$user_name','$password','$domain_name','$url')";

        $result=mysqli_query($con,$query);
        header("Location: homeU.php");
        die;
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
            footer 
		{
			background-color: #ccc;
			padding: 20px;
			text-align: center;
		}
            .search{
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
        <section>
        <div class="d5">
        <h1 class="h1">DOMAIN-IN-DOMAIN</h1>
</div>

            <div class="row">
                <label class="for-label">User Name </label>
                <input class="search" type="text" placeholder="enter user name" name="user_name">
                </div>
            <div class="row">
                <section>
                <label class="for-label">password </label>
                </section>
                <section>
                <input class="search" type="password" placeholder="enter password" name="password">
                </section>
            </div>
            <div class="row">
                <section>
                <label class="for-label">re-enter password </label>
                </section> 
                <section>
                <input class="search" type="password" placeholder="reenter password" name="reenter_password" >
                </section>
            </div>
            <div class="row">
                <section>
                <label class="for-label">Domain Name</label>
                </section> 
                <section>
                <input class="search" type="text" placeholder="enter domain name" name="domain_name">
                </section>
            </div>
            <div class="row">
                <section>
                <label class="for-label">enter url </label>
                </section> 
                <section>
                <input class="search" type="url" placeholder="enter url" name="url" >
                </section>
            </div>
                <input class="login" type="submit" value="signup" name="signup">
                <a href="login.php">click to login</a><br><br>
        
        <marquee behavior="scroll" direction="left">if you are lucky! then i am Lucky. If yu are bot Fellow then i am bot Fellow!
        </marquee>
        
        </section>
        </form>
        <button onclick="window.location.href='homeU.php';" class="search">"<<"Go To Home</button>
        <footer>
		    <p>Copyright &copy; 1992 DomainaInDomain</p>
	    </footer>
            </body>
            
</html>
