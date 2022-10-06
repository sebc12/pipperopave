<?php

// CONNECT TIL DB
// Inkluder til password i din .env fil

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials : true");


// Her connecter du til databasen

// Hvor din database skal køre
$servername = "localhost:3306";

// Dit brugernavn i mySQL
$username = "root";

// Dit password som du henter fra .env filen
$password = 'Bella1234';

$requestType = $_SERVER["REQUEST_METHOD"];



if ($requestType === "GET") {
  try {
    $conn = new PDO("mysql:host=$servername;dbname=pipper-opgave", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $statement = $conn->query("select * from pips ORDER BY datetime DESC");
    $result = $statement->fetchAll();

    echo json_encode($result);
  } catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }
} if ($requestType === "POST") {
  $input = (array) json_decode(file_get_contents('php://input'), TRUE);
  try {
      $statement = 
      "
      INSERT INTO pips 
            (username, pipmessage) 
            VALUES
            (:username, :pip);
      ";

    $conn = new PDO("mysql:host=$servername;dbname=pipper-opgave", $username, $password);
    $statement = $conn->prepare($statement);
    $statement->execute(array(
      'pip' => $input['pipmessage'],
      'username' => $input['username']
    ));

    $id = $conn->lastInsertId();
    $pip = (object) $input;
    $pip->id = $id;

    $response['status_code_header'] = 'HTTP/1.1 201 Created';
    $response['body'] = json_encode($pip);
    return $response;
    
  } 
  catch (\PDOException $e) {
    exit($e->getMessage());
  }
}

if($requestType === "PUT") {
   $updateinput = (array) json_decode(file_get_contents('php://input'), TRUE);
  
   $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
   $uri = explode( '/', $uri );
   $pipID = (string) $uri[1];
      $update = 
      "UPDATE pips 
      SET 
      pipmessage= :pipmessage, 
      username= :username 
      WHERE pipID= :id;
      ";

    try {
    $updateconn = new PDO("mysql:host=$servername;dbname=pipper-opgave", $username, $password);
    $update = $updateconn->prepare($update);
    $update->execute(array(
      'id' => (int) $updateinput['pipID'],
      'pipmessage' => $updateinput['pipmessage'],
      'username' => $updateinput['username']
    ));

    $id = $updateconn->lastInsertId();
    $pip = (object) $updateinput;
    $pip->id = $id;

    $updateresponse['status_code_header'] = 'HTTP/1.1 201 Created';
    $updateresponse['body'] = json_encode($pip);
    return $updateresponse;
    
  } 
  catch (\PDOException $e) {
    exit($e->getMessage());
  }
}

elseif($requestType === "DELETE") {
  try {
    $deleteconn = new PDO("mysql:host=$servername;dbname=pipper-opgave", $username, $password);
    $deleteconn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $deleteinput = (array) json_decode(file_get_contents('php://input'), TRUE);
    
    // sql to delete a record
    $deletestatement = 
    "DELETE FROM pips 
    WHERE pipID = :pip";

    $deletestatement = $deleteconn->prepare($deletestatement);
    $deletestatement->execute(array(
      'pip' => $deleteinput['pipID']
    ));

    $deleteconn->exec($deletestatement);
    echo "Record deleted successfully";

  } catch(PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
  }
  
  $deleteconn = null;

}
