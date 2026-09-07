<?php

header('Content-Type: application/json; charset=utf-8');

// Nur POST-Anfragen erlauben
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);

    echo json_encode([
        'success' => false,
        'message' => 'Methode nicht erlaubt.'
    ]);

    exit;
}


// JSON-Daten aus Angular lesen
$data = json_decode(file_get_contents('php://input'), true);


// Daten auslesen und validieren
$name = htmlspecialchars(trim($data['name'] ?? ''));
$email = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$instrument = htmlspecialchars(trim($data['instrument'] ?? ''));
$message = htmlspecialchars(trim($data['message'] ?? ''));


// Pflichtfelder prüfen
if (!$name || !$email || !$instrument) {

    http_response_code(400);

    echo json_encode([
        'success' => false,
        'message' => 'Bitte fülle alle Pflichtfelder aus.'
    ]);

    exit;
}


// Bei "Nicht dabei" Nachricht verlangen
if ($instrument === 'Nicht dabei' && empty($message)) {

    http_response_code(400);

    echo json_encode([
        'success' => false,
        'message' => 'Bitte gib an, welches Instrument du lernen möchtest.'
    ]);

    exit;
}

// Spam-Schutz: Honeypot muss leer bleiben
if (!empty($data['contact_check'])) {
    http_response_code(400);

    echo json_encode([
        'success' => false,
        'message' => 'Anfrage konnte nicht verarbeitet werden.'
    ]);

    exit;
}


// ==========================================
// KONFIGURATION
// ==========================================

$to = 'JanHorstmann@yahoo.de';

$from = 'kontakt@rockin-amadeus.de';


// ==========================================
// E-MAIL AN LARS
// ==========================================

$subject = "$name möchte $instrument lernen";

$mailMessage = "
$name hat Interesse daran, Musikunterricht zu nehmen.

Bitte nimm Kontakt auf und antworte unter folgender E-Mail-Adresse:

$email
";


if (!empty($message)) {

    $mailMessage .= "

$name hat folgende Nachricht hinterlassen:

$message
";
}


$headers = [
    "From: $from",
    "Reply-To: $email",
    'Content-Type: text/plain; charset=UTF-8'
];


$mailSent = mail(
    $to,
    $subject,
    $mailMessage,
    implode("\r\n", $headers)
);


// Wenn die Mail an Lars nicht versendet werden konnte
if (!$mailSent) {

    http_response_code(500);

    echo json_encode([
        'success' => false,
        'message' => 'Die Nachricht konnte nicht versendet werden.'
    ]);

    exit;
}


// ==========================================
// AUTOMATISCHE ANTWORT AN DEN BESUCHER
// ==========================================

$autoSubject = "Deine Anfrage bei Musikschule Rockin' Amadeus";


$autoMessage = "
Hallo $name,

vielen Dank für deine Nachricht und dein Interesse an Musikunterricht!

Deine Anfrage ist erfolgreich bei uns angekommen.

Lars wird sich schnellstmöglich bei dir melden.

Musikalische Grüße

Musikschule Rockin' Amadeus
";


$autoHeaders = [
    "From: $from",
    "Reply-To: $from",
    'Content-Type: text/plain; charset=UTF-8'
];


$autoMailSent = mail(
    $email,
    $autoSubject,
    $autoMessage,
    implode("\r\n", $autoHeaders)
);


// ==========================================
// ANTWORT AN ANGULAR
// ==========================================

if ($autoMailSent) {

    echo json_encode([
        'success' => true,
        'message' => 'Deine Nachricht wurde erfolgreich versendet. Du erhältst in Kürze eine Bestätigung per E-Mail.'
    ]);

} else {

    // Anfrage an Lars wurde gesendet,
    // automatische Antwort konnte aber nicht versendet werden
    echo json_encode([
        'success' => true,
        'message' => 'Deine Nachricht wurde erfolgreich versendet.'
    ]);
}

?>