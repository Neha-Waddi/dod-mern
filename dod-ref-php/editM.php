<?php 
session_start();

include("connection.php");
include("functions.php");

    $user_data = check_login($con);
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
            justify-content: center;
            display:grid;
            grid-template-columns: 80px 1fr 10fr;
            margin-top:30px;
            margin-right:5px;
            flex-direction: column;
			color: #fff;
			padding: 20px;
			display: flex;
			justify-content: center;
			align-items: center;
        }
            .search{
                border:none;
                 border-radius:10px;
                 box-shadow: 0px 1px 5px rgba(0,0,0,0.5);
                 margin-left: 10px;
                 transition:box-shadow 0.15s;
                background-color: rgb(46,164,79);

                
            }
            .search:hover{
                background-color: beige;
                 box-shadow: 0px 0px 0px rgba(0,0,0,0.5);
            }
        </style>
        <title>Domain In Domain</title>
        <link rel="stylesheet" href="index.html">
    </head>
    <body class="b">
    <a href="logout.php">logout</a>
    <div class="d5">
        <h1 class="h1">DOMAIN-IN-DOMAIN</h1>
</div>
<section>
            <div class="row">
                <section>
            <button onclick="window.location.href='editP.php';" class="search">Edit Password</button>
            <button onclick="window.location.href='editD.php';" class="search">Edit Domain</button>
            <button onclick="window.location.href='editU.php';" class="search">Edit url</button>
        </section> 
                <br><br>
                <button onclick="window.location.href='homeL.php';" class="search">"<<"Go To Home</button>
        </div>
                
                <marquee behavior="scroll" direction="left">if you are lucky! then i am Lucky. If yu are bot Fellow then i am bot Fellow!
        </section>
            </marquee>
    <footer>
		<p>Copyright &copy; 1992 DomainaInDomain</p>
	</footer>
            </body>
</html>
