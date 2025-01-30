import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <Link to="/" className="inline-block mb-8">
        <ArrowLeft className="w-8 h-8 icon-link" />
      </Link>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl text-center mb-8 animate-fade-up">
          Pegue seu café e aperte o play no video
        </h1>
        
        <div className="aspect-video w-full bg-gray-900 rounded-lg animate-scale-up">
          {/* Add your video embed code here */}
          <div className="flex items-center justify-center h-full text-gray-400">
            Conteúdo do vídeo virá aqui
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;