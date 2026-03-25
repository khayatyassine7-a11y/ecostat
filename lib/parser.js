export function parse(text){
  return {
    nom: text.match(/[A-Z]{3,}/)?.[0]||"",
    immatriculation: text.match(/\d{5}-[A-Z]-\d/)?.[0]||""
  };
}