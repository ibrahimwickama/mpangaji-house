<?php

	$host = "localhost";
	$user = "wickigcb_ibra";
	$password = "wickama1234"; 
	$db = "wickigcb_ibra2";
	
	$con = mysqli_connect($host, $user, $password, $db);
	
	if(!$con){
		die("Error in connection" .mysqli_connect_error());
	}else{
		//echo "Connection success";
                //Header("Location: ../SmsClone/inbox.php");
	}

?>