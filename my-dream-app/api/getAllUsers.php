<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

	$mysqli = new mysqli("localhost","root","","angular");

	if ($mysqli->connect_errno) {
	  echo json_encode(array("status"=>"failure","message" => "Failed to connect to MySQL: " . $mysqli->connect_error));
	  exit();
	}
	else{
		$query 	= "SELECT * FROM users ORDER BY user_id desc";
		$result = $mysqli->query($query);

		$users = array();
		while($row 	= $result->fetch_assoc()){
			$user['user_id'] = $row['user_id'];
			$user['fname']	= $row['fname'];
			$user['lname']	= $row['lname'];
			$user['age']	= $row['age'];
			$user['address']['street'] = $row['street'];
			$user['address']['city'] = $row['city'];
			$user['address']['pincode'] = $row['pincode'];

			$user['hobbies'] = explode(',',$row['hobbies']);
				

			$fam_query 	= "SELECT * FROM family WHERE user_id=".$row['user_id'];
			$fam_result = $mysqli->query($fam_query);
			$families 	= array();
			while($fam_row 	= $fam_result->fetch_assoc()){
				$family['mem_name'] = $fam_row['member_name'];
				$family['age'] = $fam_row['age'];	
				$families[] =$family;
			}	
			$user['familymembers'] = $families;
			$users[] 	= $user;

		}
		echo json_encode($users);	
	}
?>