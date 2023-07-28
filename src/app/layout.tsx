export const metadata = {
  title: "Cambrafest - Are You Ready?",
  description: "O CambraFest é realizado em Vale de Cambra, uma cidade portuguesa localizada na sub-região da Área Metropolitana do Porto, pertencendo à região do Norte e ao distrito de Aveiro. Este evento imperdível acontece no Complexo Desportivo das Dairas, proporcionando um ambiente perfeito para desfrutar de música, entretenimento e diversão.",
  author: "Cambrafest",
  keywords: "Vale de Cambra, CambraFest, Festival em Vale de Cambra, Evento de música em Portugal, Entretenimento e diversão em Vale de Cambra, Evento cultural no distrito de Aveiro, Festival de verão na região do Norte, Programação do CambraFest, Bilhetes para o CambraFest, Música ao vivo em Vale de Cambra, Como chegar ao CambraFest",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
