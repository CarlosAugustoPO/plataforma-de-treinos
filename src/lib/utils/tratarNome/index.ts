export function abreviacao(s: string) {
  return /^([A-Z]\.)+$/.test(s);
}

export function numeralRomano(s: string) {
  return /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(
    s,
  );
}

export default function tratarNome(nome: string) {
  let prepos = ['da', 'do', 'das', 'dos', 'a', 'e', 'de'];
  return nome
    .split(' ') // quebra o nome em palavras
    .map((palavra) => {
      // para cada palavra
      if (abreviacao(palavra) || numeralRomano(palavra)) {
        return palavra;
      }

      palavra = palavra.toLowerCase();
      if (prepos.includes(palavra)) {
        return palavra;
      }
      return palavra.charAt(0).toUpperCase() + palavra.slice(1);
    })
    .join(' '); // junta as palavras novamente
}
