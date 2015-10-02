<?php

$query = $_GET['query'];

$logfile = 'log.log';

//file_put_contents($logfile, '\n QUERY: ' . $query, FILE_APPEND | LOCK_EX);


$conn_string = "host=localhost port=5432 dbname=arbj user=arbj password=3jNtvyfcR1";
$conn = pg_connect($conn_string);

if (!$conn) {
	echo "An error occurred.\n";
    exit;
}
$result = pg_query($conn, $query);

$data = array();

while ($row = pg_fetch_row($result)) {
       $data[] = $row;
}

//file_put_contents($logfile, '\n data lenght: ' . count($data), FILE_APPEND | LOCK_EX);

//$data = [$query];

header('Content-type: application/json');
echo json_encode(array('result'=>$data));
?>
