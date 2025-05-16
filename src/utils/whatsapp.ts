/**
 * Gera um link para WhatsApp com mensagem pré-definida
 * @param message Mensagem a ser enviada (opcional)
 * @returns URL formatada para WhatsApp
 */
export const getWhatsAppLink = (message: string = "Quero saber mais sobre o Cape Town") => {
  const phoneNumber = "5547992421044";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

/**
 * Gera um link para WhatsApp com UTMs
 * @param utmMedium Valor do utm_medium
 * @param message Mensagem a ser enviada (opcional)
 */
export const getWhatsAppLinkWithUTM = (utmMedium: string, message: string = "Quero saber mais sobre o Cape Town") => {
  const baseLink = getWhatsAppLink(message);
  const utms = `utm_source=site&utm_medium=${utmMedium}&utm_campaign=capetown`;
  return baseLink + (baseLink.includes('?') ? '&' : '?') + utms;
};
