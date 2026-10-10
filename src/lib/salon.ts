// Public salon facts are centralized; photos are local, portable web assets.
export const SALON = {
  name: "Espaço de Beleza Nanna Oliveira",
  shortName: "Nanna Oliveira",
  city: "Sinop · MT",
  address: "Rua das Primaveras, 5107 · Sala 01 · Jardim Primavera · Sinop/MT",
  hours: "Atendimento com horário a combinar",
  whatsapp: "5566992105483",
  whatsappLabel: "(66) 99210-5483",
  instagram: "https://www.instagram.com/espaco.nannaoliveira/",
  instagramHandle: "@espaco.nannaoliveira",
  heroImg: "/images/nanna-salao.webp",
};
export type Category = "Cabelos" | "Maquiagem" | "Sobrancelhas" | "Unhas";
export type Service = {
  id: string; title: string; category: Category; copy: string; cta: string;
  img: string; pros: string[]; source: string; alt?: string; photoLabel?: string;
};
const post = (code: string) => `https://www.instagram.com/espaco.nannaoliveira/p/${code}/`;
export const SERVICES: Service[] = [
  { id: "morena", title: "Morena iluminada", category: "Cabelos", copy: "Luz na medida certa, mantendo a profundidade da morena. Dimensão e movimento para os fios.", cta: "Solicitar iluminação", img: "/images/morena-iluminada.webp", pros: [], source: post("Dd1p9yylM_y"), alt: "Morena iluminada da Karen, vista de costas, no Espaço Nanna Oliveira" },
  { id: "mechas", title: "Mechas & iluminação", category: "Cabelos", copy: "Luminosidade que valoriza o rosto e o seu tom natural. O cuidado começa com a avaliação dos fios.", cta: "Consultar mechas", img: "/images/mechas.webp", pros: [], source: post("Dd1p9yylM_y"), alt: "Vista frontal do resultado de iluminação publicado pelo salão" },
  { id: "camadas", title: "Liso & corte em camadas", category: "Cabelos", copy: "Fios alinhados com leveza, brilho e pontas com movimento. Resultado publicado pelo salão.", cta: "Solicitar esse cuidado", img: "/images/corte-camadas.webp", pros: [], source: post("DeDe0ZlIBns"), alt: "Cliente com cabelo liso e corte em camadas feito no Espaço Nanna Oliveira" },
  { id: "corte", title: "Corte feminino", category: "Cabelos", copy: "Um novo comprimento para renovar o visual. Do longo ao médio, com caimento e personalidade.", cta: "Solicitar corte", img: "/images/corte-medio.webp", pros: [], source: post("DdumZ3soACr"), alt: "Nanna apresentando a transformação de corte longo para médio de uma cliente" },
  { id: "make", title: "Maquiagem glam", category: "Maquiagem", copy: "Produção sofisticada para os seus momentos especiais, realçando a sua beleza.", cta: "Solicitar maquiagem", img: "/images/maquiagem.webp", pros: [], source: post("DdWv3xBFHUm"), alt: "Maquiagem glam da Thaís para uma festa de casamento" },
  { id: "ondas", title: "Ondas & produção", category: "Cabelos", copy: "Ondas feitas no babyliss para completar a produção. Movimento e elegância para a ocasião.", cta: "Solicitar produção", img: "/images/ondas.webp", pros: [], source: post("DdWv3xBFHUm"), alt: "Produção da Thaís com ondas no babyliss e maquiagem no salão" },
  { id: "sobrancelhas", title: "Design de sobrancelhas", category: "Sobrancelhas", copy: "Um dos cuidados oferecidos pelo Espaço Nanna Oliveira.", cta: "Solicitar design", img: "/images/sobrancelhas.webp", pros: [], source: SALON.instagram },
  { id: "manicure", title: "Manicure", category: "Unhas", copy: "Cuidado com as mãos e unhas. Consulte as opções disponíveis com o salão.", cta: "Solicitar manicure", img: "/images/manicure.png", pros: [], source: SALON.instagram },
  { id: "pedicure", title: "Pedicure", category: "Unhas", copy: "Cuidado com os pés e unhas. Solicite o seu horário pelo WhatsApp.", cta: "Solicitar pedicure", img: "/images/pedicure.webp", pros: [], source: SALON.instagram },
];
export const CATEGORIES: ("Todos" | Category)[] = ["Todos", "Cabelos", "Maquiagem", "Sobrancelhas", "Unhas"];
export const MARQUEE_ITEMS = ["CABELOS", "SOBRANCELHAS", "MANICURE", "PEDICURE", "MAQUIAGEM"];
export const PERIODS = ["Manhã", "Tarde", "Fim da tarde"];
export const NO_PREF = "Sem preferência";

export function fmtDate(d: string) {
  if (!d) return "A combinar";
  const [y, m, dd] = d.split("-");
  return `${dd}/${m}/${y}`;
}

export function todayLocal(now = new Date()) {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${p(now.getMonth() + 1)}-${p(now.getDate())}`;
}

export function buildWhatsAppUrl(o: { service: string; pro: string; date: string; period: string; notes: string }) {
  const lines = [
    `Olá, ${SALON.name}! Gostaria de solicitar um horário:`,
    ``,
    `• Serviço: ${o.service}`,
    `• Profissional: ${o.pro || NO_PREF}`,
    `• Data preferida: ${fmtDate(o.date)}`,
    `• Período preferido: ${o.period || "A combinar"}`,
    ...(o.notes.trim() ? [`• Observação: ${o.notes.trim()}`] : []),
    ``,
    `Aguardo a confirmação da disponibilidade.`,
  ];
  return `https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}
