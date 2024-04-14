function redirectToContact(productName, productImage) {
  var whatsappNumber = '27683918844'; // Replace 'your_whatsapp_number' with your WhatsApp Business number
  var message = 'Hello! I would like to inquire about ' + encodeURIComponent(productName) + '. Here is the picture: ' + encodeURIComponent(productImage);

  // Redirect to WhatsApp with predefined message
  window.location.href = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(message);
}


