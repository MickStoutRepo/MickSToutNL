#Bishmillah
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $reason = htmlspecialchars($_POST['reason']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);

    $to = "mick@mickstout.nl";
    $subject = "Nieuwe contactaanvraag";
    $message = "Naam: $name\nReden van contact: $reason\nE-mail: $email\nTelefoonnummer: $phone";
    $headers = "From: no-reply@yourdomain.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "E-mail verzonden!";
    } else {
        echo "Er is een fout opgetreden bij het verzenden van de e-mail.";
    }
}
?>
#Elhamdulillah