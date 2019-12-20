<?php
$host = "localhost";
$db_name = "dev_to";
$username = "root";
$password = "";
$connection = null;
try{
$connection = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
$connection->exec("set names utf8");
}catch(PDOException $exception){
echo "Connection error: " . $exception->getMessage();
}

function saveData($name, $email, $subject, $message){
global $connection;
$query = "INSERT INTO test(name, email,subject, message) VALUES( :name, :email, :subject, :message)";

$callToDb = $connection->prepare( $query );
$name=htmlspecialchars(strip_tags($name));
$email=htmlspecialchars(strip_tags($email));
$subject=htmlspecialchars(strip_tags($subject));
$message=htmlspecialchars(strip_tags($message));
$callToDb->bindParam(":name",$name);
$callToDb->bindParam(":email",$email);
$callToDb->bindParam(":subject",$subject);
$callToDb->bindParam(":message",$message);

if($callToDb->execute()){
return '<h3 style="text-align:center;">We will get back to you very shortly!</h3>';
}
}

if( isset($_POST['submit'])){
$name = htmlentities($_POST['name']);
$email = htmlentities($_POST['email']);
$message = htmlentities($_POST['message']);
$subject = htmlentities($_POST['subject']);
//then you can use them in a PHP function. 
$result = saveData($name, $email, $subject, $message);
echo $result;
}
else{
echo '<h3 style="text-align:center;">A very detailed error message ( ͡° ͜ʖ ͡°)</h3>';
}
?>