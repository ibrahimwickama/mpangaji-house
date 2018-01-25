<?php

header("Content-Type: Application/json");

	require "db_connect.php";

	$data = json_decode(file_get_contents("php://input"));
	$username =  $data->username;
	$password =  $data->password;

$sql = "SELECT * FROM login";
$sql2 = "SELECT username,password FROM login where username='$username' and password='$password'";
$user_id = "select user_id from login where username='$username'";
$sql3 = "SELECT user.user_id,login.username,user.fname,user.lname,user.phone,user.email,admin.apt_name,admin.admin 
			FROM user 
			INNER JOIN admin ON admin.user_id=user.user_id 
			INNER JOIN login ON login.user_id=user.user_id
			where user.user_id=(select user_id from login where username='zzzzzz')";

$sucessful = true;
		
$query = mysqli_query($con, $sql3);



if (!$query) {
	die ('SQL Error: ' . mysqli_error($con));
}

$no 	= 1;
$total 	= 0;
$payLoad = array();





// if($query){
// 	$sucessful = true;
// 	 echo json_encode($sucessful, JSON_PRETTY_PRINT);
// }else{
// 	$sucessful = false;
// 	echo json_encode($sucessful, JSON_PRETTY_PRINT);
// 	echo "error 1 in insertion..." .mysqli_error($con);
// }



		while ($row = mysqli_fetch_array($query))
		{
		
			array_push($payLoad, array(
				'user_id'=>$row['user_id'],
				'username'=>$row['username'],
				'fname'=>$row['fname'],
				'lname'=>$row['lname'],
				'phone'=>$row['phone'],
				'email'=>$row['email'],
				'apt_name'=>$row['apt_name']
			
			));

			

			

			// echo '<tr>
			// 		<td>'.$no.'</td>
			// 		<td>'.$row['sent_to'].'</td>
			// 		<td>'.$row['message'].'</td>
			// 		<td>'.$row['sms_type'].'</td>
			// 		<td>'.$row['status'].'</td>
					
			// 	</tr>';
			
			$no++;
		}
		echo json_encode($response, JSON_PRETTY_PRINT);

return mysqli_fetch_array($query);
?>
