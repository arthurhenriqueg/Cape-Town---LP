
/**
 * Gera um link para WhatsApp com mensagem pré-definida
 * @param message Mensagem a ser enviada (opcional)
 * @returns URL formatada para WhatsApp
 */
export const getWhatsAppLink = (message: string = "Gostei do Cape Town, posso saber mais?") => {
  const phoneNumber = "5547992421044";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
