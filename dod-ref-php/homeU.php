<?php
session_start();

include("connection.php");
include("functions.php");


if($_SERVER['REQUEST_METHOD']=="POST")
{
    $search=$_POST['domain'];
    if(!empty($search))
{  
    $query = "select * from users where domain_name='$search' limit 1";
    $result = mysqli_query($con,$query);
    
    if($result)
    {
        $user_data = mysqli_fetch_assoc($result);
        if(!empty($user_data['url']))
        {
            open_window($user_data['url']);

        }
        $query = "select domain_name from users where domain_name='$search'";
        $result = mysqli_query($con,$query);
        $num_rows=mysqli_num_rows($result);
        if($result)
        {
            if($num_rows==0)
            {
                echo'<script language="javascript">';
                echo 'alert("no domain found")';
                echo '</script>';
            }
        }
    }
}
}
?>






<!DOCTYPE html>

<html>

<head>
    <title>DOMAIN-IN-DOMAIN</title>
    <style>
        .b2,.b3,.b1
        {
            color : white;
            background-color : rgb(46,164,79);
            border:none;
            height:25px;
            width:90px;
            border-radius:5px;
            font-weight:bold;
            transition:box-shadow 0.15s;
        }
        .b2:hover
        {
            box-shadow: 0px 2px 5px black;
        }
        .b2:active
        {
            box-shadow: 0px 0px 0px black;
        }
        .b1:hover
        {
            box-shadow: 0px 2px 5px black;
        }
        .b1:active
        {
            box-shadow: 0px 0px 0px black;
        }
        .b3:hover
        {
            box-shadow: 0px 2px 5px black;
        }
        .b3:active
        {
            box-shadow: 0px 0px 0px black;
        }
        .i1
        {
            border:none;
            border-radius:10px;
            box-shadow: 0px 1px 5px rgba(0,0,0,0.5);
            transition:box-shadow 0.15s;
            width:500px;
            height:25px;
        }
        .d6
        {
            margin-left:30px ;
        }
        header
        {
            background-color: #333;
			color: #fff;
			padding: 20px;
			display: flex;
			justify-content: space-between;
			text-align: center;
        }
        footer 
		{
			background-color: #ccc;
			padding: 20px;
			text-align: center;
		}
        .d1 {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
        .d3
        {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
        .d2,
        .d4
        {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
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


        .b {
            background-color: #bfbfbf;
            transition-duration: 2s;
            margin:0;
            padding:0;
            min-width: 100vh;
        }

        .b:hover {
            background-color: #999999;
        }
    </style>
</head>
<section>
<body class="b">
    <form method="post">
<div class="d5">
        <h1 class="h1">DOMAIN-IN-DOMAIN</h1>
</div>

        <div class="d4">
            <h2>Search Below</h2>
        </div>
            <div class="d1">
                <section>
                <input class="i1" type="text" placeholder="search here..(eg:www.google.com)" name="domain" >
                <button class="b1"><b>SEARCH</b></button>
                </section>
            </div>
    </form>
        <div class="d3">
            <section>
                <br><br>
            <button onclick="window.location.href='login.php';" class="b2"><b>login</b></button>
            <button onclick="window.location.href='signup.php';" class="b3"><b>signup</b></button>
            </section>
        </div>
    <h2><b>Our main targets</b></h2>
    <div class="d6">
        <h6>.................</h6>
        <li>To provide acces</li>
		<li>make it easy to find your website</li>
		<li>domainNames</li>
        <h6>.................</h6>
    </div>
    <marquee behavior="scroll" direction="left">THANK YOU FOR VISITING THE WEBSITE
    </marquee>
    <footer>
		<p>Copyright &copy; 1992 DomainaInDomain</p>
	</footer>
</body>
</section>
</html>