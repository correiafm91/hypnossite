import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
    const script = document.createElement('script');
    script.async = true;
    script.id = 'respondi_src';
    script.src = 'https://embed.respondi.app/embed.js';
    document.body.appendChild(script);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-12 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-white [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] animate-fade-up">
          O SEGREDO QUE VOCÊ PROCURA ESTÁ AQUI!
        </h1>
        
        <div className="max-w-4xl mx-auto aspect-video mb-8 animate-scale-up">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/go0aOyHOvjI"
            title="YouTube video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Company Section */}
      <section className="py-12 px-4 bg-[#232323]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-end">
            <img
              src="/og-image.png"
              alt="Hypnos Logo"
              className="w-64 h-64 object-contain"
            />
          </div>
          <div className="space-y-6 text-left">
            <h2 className="text-3xl md:text-4xl font-bebas leading-tight">
              HYPNOS – A Copywriting que Transforma Palavras em Dinheiro
            </h2>
            <div className="space-y-4 font-poppins text-gray-300">
              <p>
                Toda compra começa na mente. Antes do clique, do pedido ou do pagamento, existe um pensamento, uma emoção, um impulso. A Hypnos domina essa arte.
              </p>
              <p>
                Não escrevemos textos bonitos. Criamos mensagens hipnóticas, que capturam atenção, quebram objeções e conduzem o público até a única conclusão possível: comprar de você.
              </p>
              <p>
                Nosso diferencial? Não vendemos textos soltos. Entregamos um sistema completo de persuasão.
              </p>
              <p>
                No nosso pacote estratégico, você recebe landing pages que convertem, anúncios que vendem, VSLs que prendem atenção, e-mails que engajam e até a bio perfeita para magnetizar seguidores certos. Mas não paramos por aí. Ensinamos você a usar cada peça no momento certo, garantindo que seu negócio continue escalando mesmo depois da entrega.
              </p>
              <p>
                E enquanto você aplica, nós monitoramos. Ajustamos, otimizamos e refinamos até sua copy atingir o nível máximo de conversão.
              </p>
              <p>
                Se sua comunicação não está imprimindo dinheiro, ela está te custando caro. A Hypnos resolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8 px-4 bg-zinc-900">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-white [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] animate-fade-up">
          ANTES DE MOSTRARMOS O BOTÃO DE "NEGÓCIO FECHADO", QUEREMOS TE APRESENTAR MAIS COISAS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
          <img
            src="https://i.postimg.cc/sfLVKtjq/Screenshot-20250202-124834.jpg"
            alt="Documento 1"
            width="400"
            height="300"
            loading="lazy"
            className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://i.postimg.cc/tgD1g23b/Screenshot-20250202-124829.jpg"
            alt="Documento 2"
            width="400"
            height="300"
            loading="lazy"
            className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://i.postimg.cc/wMYcXwGr/Screenshot-20250202-124818.jpg"
            alt="Documento 3"
            width="400"
            height="300"
            loading="lazy"
            className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <p className="text-xl text-center max-w-3xl mx-auto mb-8">
          Com esses 3 textos que criamos, fazemos mais de 400 mil reais para o bolso desses clientes
        </p>
      </section>

      {/* Process Section */}
      <section className="py-8 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-white [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] animate-fade-up">
          DA PESQUISA AOS LUCROS! COMO FUNCIONA A NOSSA ENTREGA
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            "A gente faz um estudo do seu produto ou serviço",
            "Pesquisa de mercado",
            "Rascunhos de textos",
            "Finalização dos textos e revisão",
            "Aprovação do cliente",
            "Entrega final do documento com os textos",
            "Treinamentos"
          ].map((step, index) => (
            <div key={index} className="flex items-center space-x-4 bg-[#FF3F00] bg-opacity-10 p-6 rounded-lg animate-fade-up border-l-4 border-[#FF3F00]">
              <div className="w-12 h-12 bg-[#FF3F00] rounded-full flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>
              <p className="text-lg">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-8 px-4 bg-zinc-900">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-white [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] animate-fade-up">
          O QUE EU VOU COBRAR DE VOCÊ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-black p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Pagamento Único</h3>
            <p className="text-4xl font-bold text-[#FF3F00] mb-8">R$ 1.350</p>
            <p className="text-lg mb-4">Entrega completa dos textos</p>
          </div>
          
          <div className="bg-black p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Plano Mensal</h3>
            <p className="text-4xl font-bold text-[#FF3F00] mb-8">R$ 675</p>
            <p className="text-lg mb-4">Inclui acompanhamento e 5 consultorias mensais</p>
            <p className="text-sm text-gray-400">Este plano não é obrigatório</p>
          </div>
        </div>

        <Button 
          onClick={handleShowForm}
          className="bg-[#FF3F00] hover:bg-[#FF3F00]/90 text-white font-bold py-4 px-8 rounded-lg text-xl mx-auto block mt-8 shadow-lg h-auto whitespace-normal"
        >
          Fechar negócio
        </Button>
      </section>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50 animate-fade-up">
          <div className="w-full max-w-2xl bg-zinc-900 rounded-lg p-8">
            <div
              data-respondi-container=""
              data-respondi-mode="regular"
              data-respondi-src="https://form.respondi.app/kPZ73POt"
              data-respondi-width="100%"
              data-respondi-height="600px"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;