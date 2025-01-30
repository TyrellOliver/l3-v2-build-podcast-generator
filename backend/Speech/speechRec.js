const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (speechRecognition) {
  const recognition = new SpeechRecognition();
}
