import "../globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const FAQ = () => {
  return (
    <>
      <Head>
        <title>Cambrafest - FAQ</title>
      </Head>
      <div>
        <Navbar />
        <main className="grid grid-cols-1 gap-1 h-[81vh] pt-4 px-6 overflow-y-auto no-scrollbar">
          <h2 className="text-center text-4xl font-bold text-[#FDFAFA]">
            QUESTÕES FREQUENTES
          </h2>
          <div className="py-4">
            <h4 className="text-center text-2xl font-semibold text-[#EF8F1E]">
              QUANDO
            </h4>
            <p className="text-center text-[#FDFAFA] py-2">
              O evento irá ocorrer nos dias 11 e 12 de agosto de 2023. Horário
              de abertura: 19h30. Horário limite de acesso ao evento: 3h.
            </p>
          </div>
          <div className="py-4">
            <h4 className="text-center text-2xl font-semibold text-[#EF8F1E]">
              ONDE
            </h4>
            <p className="text-center text-[#FDFAFA] py-2">
              O CambraFest é realizado em Vale de Cambra, uma cidade portuguesa
              localizada na sub-região da Área Metropolitana do Porto,
              pertencendo à região do Norte e ao distrito de Aveiro. Este evento
              imperdível acontece no Complexo Desportivo das Dairas,
              proporcionando um ambiente perfeito para desfrutar de música,
              entretenimento e diversão.
            </p>
          </div>
          <div className="py-4">
            <h4 className="text-center text-2xl font-semibold text-[#EF8F1E]">
              COMO CHEGAR
            </h4>
            <p className="text-center text-[#FDFAFA] py-2">
              Se desejas obter informações precisas sobre as coordenadas exatas
              do evento, convido-te a consultar o seguinte link: 👉{" "}
              <span className="text-[#039B7D] font-semibold text-lg">
                <a href="https://bit.ly/44jFiAh">Recinto</a>
              </span>
            </p>
          </div>
          <div className="py-4">
            <h4 className="text-center text-2xl font-semibold text-[#EF8F1E]">
              ONDE É POSSÍVEL COMPRAR BILHETES PARA O CambraFest?
            </h4>
            <p className="text-center text-[#FDFAFA] py-2">
              Podes adquirir o teu bilhete na bilheteira online BOL! Compra
              agora mesmo através deste link 👉{" "}
              <span className="text-[#039B7D] font-semibold text-lg">
                <a href="https://bit.ly/3DetseC">Bilheteira BOL</a>
              </span>
              . Não percas esta oportunidade e assegura já o teu lugar no
              CambraFest.
            </p>
          </div>
          <div className="py-4">
            <h4 className="text-center text-2xl font-semibold text-[#EF8F1E]">
              É NECESSÁRIO COLOCAR UMA PULSEIRA?
            </h4>
            <p className="text-center text-[#FDFAFA] py-2">
              O acesso ao recinto é exclusivamente permitido através da
              utilização de pulseira. Para tal, é necessário validar o bilhete e
              colocar a pulseira na entrada. Esta medida aplica-se tanto aos
              passes gerais como aos bilhetes diários. A pulseira é pessoal e
              intransmissível, não sendo permitido guardá-la para posterior
              colocação.
            </p>
          </div>
          <div className="py-4">
            <h4 className="text-center text-2xl font-semibold text-[#EF8F1E]">
              CRIANÇAS COM MENOS DE 12 ANOS PODEM ENTRAR?
            </h4>
            <p className="text-center text-[#FDFAFA] py-2">
              As crianças até aos 12 anos inclusive poderão entrar de forma
              gratuita sempre que acompanhados pelos pais ou tutores.
            </p>
          </div>
          <div className="py-4">
            <h4 className="text-center text-2xl font-semibold text-[#EF8F1E]">
              A PARTIR DE QUE IDADE SE PAGA BILHETE?
            </h4>
            <p className="text-center text-[#FDFAFA] py-2">
              As crianças entre os 13 e os 15 anos poderão entrar no festival
              pagando o valor integral do bilhete e também deverão ir
              acompanhados pelos pais ou tutores.
            </p>
          </div>
          <div className="py-4">
            <h4 className="text-center text-2xl font-semibold text-[#EF8F1E]">
              ONDE DORMIR
            </h4>
            <p className="text-center text-[#FDFAFA] py-2">
              Se vens de longe e não sabes onde ficar, não há problema, temos a
              solução perfeita para ti. Boa música e a natureza são sempre uma
              boa combinação quando queremos descomprimir entre amigos ou em
              família. Mesmo ao lado do recinto, existe uma área especialmente
              reservada para acampar. Para obteres mais informações acerca da
              localização, convido-te a aceder ao seguinte link: 👉{" "}
              <span className="text-[#039B7D] font-semibold text-lg">
                <a href="https://bit.ly/3JVmZZP">Campismo</a>
              </span>
            </p>
            <p className="text-center text-[#FDFAFA] py-2">
              Para assegurar que tenhas contigo tudo o que é essencial para o
              acampamento, aqui tens uma lista do que temos e do que não temos
              disponível.
            </p>
            <p className="text-[#FDFAFA] font-bold text-lg pt-2 px-6">
              Disponível
            </p>
            <ul className="list-disc text-[#FDFAFA] py-2 px-10">
              <li>Água quente</li>
              <li>Balneários</li>
              <li>WC</li>
              <li>Local para Acampar Gratuitamente</li>
              <li>Café/Snack-Bar</li>
              <li>Tenda e Saco</li>
              <li>Café/Snack-Bar</li>
              <li>Café/Snack-Bar</li>
            </ul>
            <p className="text-[#FDFAFA] font-bold text-lg pt-2 px-6">
              Não Disponível
            </p>
            <ul className="list-disc text-[#FDFAFA] py-2 px-10">
              <li>Tendas e Sacos-cama</li>
              <li>Repelente para mosquitos</li>
              <li>Artigos de Higiene Pessoal</li>
            </ul>
          </div>
          <div className="py-4">
            <h4 className="text-center text-2xl font-semibold text-[#EF8F1E]">
              POSSO LEVAR UMA CARAVANA PARA O CAMPISMO?
            </h4>
            <p className="text-center text-[#FDFAFA] py-2">
              Há uma área destinada a caravanas próxima do recinto, mas é
              importante destacar que o espaço é limitado. Para mais informações
              👉{" "}
              <span className="text-[#039B7D] font-semibold text-lg">
                <a href="https://bit.ly/3NQ3tzc">Caravanas</a>
              </span>
              .
            </p>
          </div>
          <div className="py-4">
            <h4 className="text-center text-2xl font-semibold text-[#EF8F1E]">
              É POSSÍVEL ENTRAR COM COMIDA E/OU BEBIDA?
            </h4>
            <p className="text-center text-[#FDFAFA] py-2">
              Está expressamente proibida a entrada no recinto com qualquer tipo
              de bem alimentar ou bebida, seja de plástico ou vidro.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FAQ;
