<?php
header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");


$postdata = file_get_contents("php://input");
$request = json_decode($postdata,true);

if(!empty($request)){
	$mysqli = new mysqli("localhost","root","","angular");

	if ($mysqli->connect_errno) {
	  echo json_encode(array("status"=>"failure","message" => "Failed to connect to MySQL: " . $mysqli->connect_error));
	  exit();
	}
	else{
		$hobbies = implode(',',$request['hobbies']);
		if(isset($request['user_id']) && !empty($request['user_id'])){
			$user_id = $request['user_id'];

			$query = "UPDATE users SET fname='".$request['fname']."',lname='".$request['lname']."',age='".$request['age']."',street='".$request['address']['street']."',city='".$request['address']['city']."',pincode='".$request['address']['pincode']."',hobbies='".$hobbies."' WHERE user_id='".$user_id."'";
			$mysqli->query($query);

			$del_query = "DELETE FROM family WHERE user_id='".$user_id."'";
			$mysqli->query($del_query);

			foreach($request['familymembers'] as $member){
				$fam_query = "INSERT INTO family (user_id, member_name,age) VALUES (".$user_id.", '".$member['mem_name']."', ".$member['age'].")";		
				$mysqli->query($fam_query);
			}
			echo json_encode(array("status"=>"success","message" => "User updated successfully"));
		}
		else{
			$query = "INSERT INTO users (fname, lname, age, street, city, pincode, hobbies) VALUES ('".$request['fname']."', '".$request['lname']."', ".$request['age'].", '".$request['address']['street']."', '".$request['address']['city']."', '".$request['address']['pincode']."', '".$hobbies."' )";
			$mysqli->query($query);
			$user_id = $mysqli->insert_id;
			if(!empty($user_id)){
				foreach($request['familymembers'] as $member){
					$fam_query = "INSERT INTO family (user_id, member_name,age) VALUES (".$user_id.", '".$member['mem_name']."', ".$member['age'].")";		
					$mysqli->query($fam_query);
				}

				echo json_encode(array("status"=>"success","message" => "User created successfully"));
			}
			else{
				echo json_encode(array("status"=>"failure","message" => "User not created"));
			}
		}
	}
}

?>