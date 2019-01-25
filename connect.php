<?php 

$characterId = filter_input(INPUT_POST, 'characterId');

if(!empty($characterId)){
    $host = "remotemysql.com:3306";
    $dbusername = "1wJBWsmcNZ";
    $dbpassword = "G8GSFmndcH";
    $dbname = "1wJBWsmcNZ";

    $conn = new mysqli($host,$dbusername,$dbpassword,$dbname);
    if(mysqli_connect_error()){
        die('Connect Error ('. mysqli_connect_errno() .') '
            . mysqli_connect_error());
    } else{
        $sql = "INSERT INTO Character (name)
        values ('$characterId')";
        if ($conn->query($sql)){
            echo "New record is inserted sucessfully";
        } else {
            echo "Error: ". $sql ."
            ". $conn->error;
        }
        $conn->close();
    }
}

?>