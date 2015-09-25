<?php

/**
 * Description of GetData
 *
 * @author Evaristo
 */
class GetData {
  public function connectFunction($query){
    $conn_string = "host=sheep port=5432 dbname=test user=lamb password=bar";
    
    $conn = pg_connect($conn_string);
 
    if (!$conn) {
      echo "An error occurred.\n";
      exit;
    }

    $result = pg_query($conn, "SELECT author, email FROM authors");
    if (!$result) {
      echo "An error occurred.\n";
      exit;
    }

    while ($row = pg_fetch_row($result)) {
      echo "Author: $row[0]  E-mail: $row[1]";
      echo "<br />\n";
    }
  }
}