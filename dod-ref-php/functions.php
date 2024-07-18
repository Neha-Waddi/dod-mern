<?php

function random_num($length)
{
    $text="";
    if($length<5)
    {
        $length=5;
    }

    $len = rand(4,$length);

    for($i=0; $i < $len; $i++)
    {
        $text.=rand(0,9);
    }

    return $text;
}

function open_window($url)
{
    echo '<script>window.open ("'.$url.'", "mywindow","status=0,toolbar=0")</script>';
}

function check_login($con)
{
    if(isset($_SESSION['user_id']))
    {
        $id=$_SESSION['user_id'];
        $query= "select * from users where user_id = '$id'";

        $result=mysqli_query($con,$query);
        if($result && mysqli_fetch_assoc($result)>0)
        {
            $user_data = mysqli_fetch_assoc($result);

            return $user_data;
        }
    }
}