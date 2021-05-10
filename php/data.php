<?php 
	$flag = true;

	$data = $_POST;

	foreach ($data as $row) {
		if ($row === '') {
			$flag = false;
		}
	}
	echo $flag;

 ?>