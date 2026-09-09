<?php
/**
 * Woodex theme — minimal PHP mail handler for Hostinger shared hosting.
 * Enable by setting "forms.provider": "php" in content/site.json.
 * Change $to below. Sends a plain-text email; returns JSON.
 */
$to = 'hello@woodexinterior.com';
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo '{"ok":false}'; exit; }
if (!empty($_POST['_honey'])) { echo '{"ok":true}'; exit; } // honeypot
$email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
if (!$email) { http_response_code(422); echo '{"ok":false,"error":"invalid email"}'; exit; }
$subject = substr(strip_tags($_POST['subject'] ?? 'Website enquiry'), 0, 120);
$body = '';
foreach ($_POST as $k => $v) { if (in_array($k, ['_honey','subject'])) continue; $body .= ucfirst(str_replace('_',' ',$k)) . ": " . trim(strip_tags($v)) . "\n"; }
$headers = "From: no-reply@" . ($_SERVER['HTTP_HOST'] ?? 'localhost') . "\r\nReply-To: $email\r\nContent-Type: text/plain; charset=utf-8";
$sent = @mail($to, $subject, $body, $headers);
echo json_encode(['ok' => (bool)$sent]);
