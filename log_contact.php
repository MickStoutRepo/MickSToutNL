<?php
# Bishmillah
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $reason = htmlspecialchars($_POST['reason']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);

    $logData = "Naam: $name\nReden van contact: $reason\nE-mail: $email\nTelefoonnummer: $phone\n\n";
    $logFile = 'contacten/contact_log.txt';

    if (file_put_contents($logFile, $logData, FILE_APPEND | LOCK_EX)) {
        echo "Log opgeslagen!";
    } else {
        echo "Er is een fout opgetreden bij het opslaan van de log.";
    }
}
# Elhamdulillah
?>