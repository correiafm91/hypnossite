import { useState } from "react";
import { Hand } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Company = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Logo and Title */}
        <div className="flex flex-col items-center space-y-6 animate-fade-up">
          <img
            src="/lovable-uploads/78c8de24-13be-484b-be57-a6a9a6b86afc.png"
            alt="Hypnos Logo"
            className="w-32 h-32"
          />
          <h1 className="text-3xl font-bold text-center">
            HYPNOS – Textos que Transforma Palavras em Dinheiro
          </h1>
        </div>

        {/* Company Description */}
        <Card className="bg-black border-gray-800 animate-fade-up">
          <CardContent className="p-6 space-y-4 text-lg">
            <p>Toda compra começa na mente. Antes do clique, do pedido ou do pagamento, existe um pensamento, uma emoção, um impulso. A Hypnos domina essa arte.</p>
            <p>Não escrevemos textos bonitos. Criamos mensagens hipnóticas, que capturam atenção, quebram objeções e conduzem o público até a única conclusão possível: comprar de você.</p>
            <p>Nosso diferencial? Não vendemos textos soltos. Entregamos um sistema completo de persuasão.</p>
            <p>No nosso pacote estratégico, você recebe landing pages que convertem, anúncios que vendem, VSLs que prendem atenção, e-mails que engajam e até a bio perfeita para magnetizar seguidores certos. Mas não paramos por aí. Ensinamos você a usar cada peça no momento certo, garantindo que seu negócio continue escalando mesmo depois da entrega.</p>
            <p>E enquanto você aplica, nós monitoramos. Ajustamos, otimizamos e refinamos até sua copy atingir o nível máximo de conversão.</p>
            <p>Se sua comunicação não está imprimindo dinheiro, ela está te custando caro. A Hypnos resolve.</p>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="space-y-8 animate-fade-up">
          <h2 className="text-2xl font-bold text-center">Resultados surreais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Graph Image */}
            <div className="relative group cursor-pointer transition-all duration-300"
                 onClick={() => setSelectedImage("/lovable-uploads/db3682d6-0a51-435e-9694-613bd26703d8.png")}>
              <img
                src="/lovable-uploads/db3682d6-0a51-435e-9694-613bd26703d8.png"
                alt="Performance Graph"
                className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <Hand className="absolute bottom-4 right-4 w-8 h-8 text-white animate-bounce" />
            </div>

            {/* Documents Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "/lovable-uploads/bdad797e-39a6-450e-8406-828d428094c7.png",
                "/lovable-uploads/7dc06793-3e7e-431a-a95f-5fc3954724aa.png",
                "/lovable-uploads/13983ebc-a0e7-4335-aa39-7f0753334c4a.png"
              ].map((img, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`Document ${index + 1}`}
                    className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <Hand className="absolute bottom-2 right-2 w-6 h-6 text-white animate-bounce" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fade-up"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] rounded-lg animate-scale-up"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Company;