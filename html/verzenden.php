<?php 


if(isset($_POST['email'])) {
	
	// Pas deze twee regels aan.
	$email_to = "han3132@live.nl";
	$email_subject = "Contact formulier filmpje";
	
	
	function died($error) {
		// je foutbericht staat hier
		echo "Het spijt ons, vanwege een fout is het formulier niet verzonden. ";
		echo "Deze fout(en) tonen zich hieronder.<br /><br />";
		echo $error."<br /><br />";
		echo "Ga aub terug om de velden correct in te vullen.<br /><br />";
		die();
	}
	
	// validation expected data exists
	if(!isset($_POST['first_name']) ||
		!isset($_POST['last_name']) ||
		!isset($_POST['email']) ||
		!isset($_POST['telephone']) ||
		!isset($_POST['comments'])) {
		died('Het spijt ons, er is een probleem opgetredn bij het verzenden van het formulier.');		
	}
	
	$first_name = $_POST['first_name']; // verplicht
	$last_name = $_POST['last_name']; // verplicht
	$email_from = $_POST['email']; // verplicht
	$telephone = $_POST['telephone']; // niet verplicht
	$comments = $_POST['comments']; // verplicht
	
	$error_message = "";
	$email_exp = "^([a-zA-Z0-9]+[a-zA-Z0-9._%\-\+]*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4})$";
  if(!mb_ereg($email_exp,$email_from)) {
  	$error_message .= 'Het emailadres is niet geldig.<br />';
  } 
  
	$string_exp = "^[a-z .'-]+$";
  if(!mb_ereg($string_exp,$first_name)) {
  	$error_message .= 'De voornaam is niet geldig.<br />';
  }
  if(!mb_ereg($string_exp,$last_name)) {
  	$error_message .= 'De achternaam is niet geldig.<br />';
  }
  if(strlen($comments) < 2) {
  	$error_message .= 'Het bericht is niet geldig.<br />';
  }
  $string_exp = "^[0-9 .-]+$";
  if(!mb_ereg($string_exp,$telephone)) {
  	$error_message .= 'Het telefoonnummer is niet geldig.<br />';
  }
  if(strlen($error_message) > 0) {
  	died($error_message);
  }
	$email_message = "Gegevens formulier.\n\n";
	
	function clean_string($string) {
	  $bad = array("content-type","bcc:","to:","cc:","href");
	  return str_replace($bad,"",$string);
	}
	
	$email_message .= "Voornaam: ".clean_string($first_name)."\n";
	$email_message .= "Achternaam: ".clean_string($last_name)."\n";
	$email_message .= "Email: ".clean_string($email_from)."\n";
	$email_message .= "Telefoon: ".clean_string($telephone)."\n";
	$email_message .= "Bericht: ".clean_string($comments)."\n";
	
	
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>

<!-- Creeer je eigen succes pagina hier -->

Bedankt voor uw bericht. U krijgt zo spoedig mogelijk een reactie.

<?
}
?>