<?php

header("Content-Type: Application/json");

	require "db_connect.php";

	$data = json_decode(file_get_contents("php://input"));
	$fname =  $data->fname;
	$lname =  $data->lname;
	$username =  $data->username;
	$password =  $data->password;
	$email =  $data->email;
	$phone =  $data->phone;
	
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
			 $sucessful = true;
			echo json_encode($sucessful, JSON_PRETTY_PRINT);
			 //Header("Location: ../../../");
		}else{
			$sucessful = false;
			echo json_encode($sucessful, JSON_PRETTY_PRINT);
			//echo "error 1 in insertion..." .mysqli_error($con);
		}

		
		
	}else{
		//$sucessful = false;
		//echo "error 2 in insertion..." .mysqli_error($con);
	}

	//echo json_encode($sucessful, JSON_PRETTY_PRINT);


?>