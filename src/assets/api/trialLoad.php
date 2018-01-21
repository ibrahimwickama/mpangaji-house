<?php

header("Content-Type: Application/json");

	require "db_connect.php";

	$data = json_decode(file_get_contents("php://input"));
	$fname = mysql_real_escape_string($data->fname);
	$lname = mysql_real_escape_string($data->lname);
	$username = mysql_real_escape_string($data->username);
	$password = mysql_real_escape_string($data->password);
	$email = mysql_real_escape_string($data->email);
	$phone = mysql_real_escape_string($data->phone);


	// $fname = $_POST["fname"];
	// $lname = $_POST["lname"];
	// $username = $_POST["username"];
	// $phone = $_POST["phone"];
	// $email = $_POST["email"];
	// $password = $_POST["password"];
        $sucessful = true;
	
	$status = $_POST["status"];
        $status = $status ?: 'Pending';
	
	$sql = " insert into user(fname, lname, phone, email) values('$fname', '$lname', '$phone', '$email');";
	$use_id = "select user_id from user where fname='$fname' and lname='$lname'";
	$loginfo = " insert into login(user_id, username, password) values(($use_id), '$username', '$password');";
	if(mysqli_query($con, $sql)){
		
		if(mysqli_query($con, $loginfo)){
			//$sucessful = true;
			 echo json_encode($sucessful, JSON_PRETTY_PRINT);
		}else{
			//$sucessful = false;
			//echo "error 1 in insertion..." .mysqli_error($con);
		}

		
		//Header("Location: ../SmsClone/inbox.php");
	}else{
		//$sucessful = false;
		//echo "error 2 in insertion..." .mysqli_error($con);
	}

	//echo json_encode($sucessful, JSON_PRETTY_PRINT);


?>