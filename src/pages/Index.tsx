import { Link } from "react-router-dom";
import { Video, BookOpen, Building } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-2xl md:text-3xl text-center animate-fade-up">
            Hypnos
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
          {/* Video Section */}
          <Link to="/video" className="content-section group">
            <Video className="w-16 h-16 md:w-24 md:h-24 icon-link text-white" />
            <p className="text-lg md:text-xl text-center">
              O segredo que você procura está aqui
            </p>
          </Link>

          {/* Book Section */}
          <a
            href="https://drive.google.com/file/d/1eE8sCHp5W_M2tUgpkP4_LMAYJCbDq5ng/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="content-section group"
          >
            <BookOpen className="w-16 h-16 md:w-24 md:h-24 icon-link text-white" />
            <p className="text-lg md:text-xl text-center">
              Livro gratuito de Copywriting
            </p>
          </a>

          {/* Company Section */}
          <Link to="/company" className="content-section group">
            <Building className="w-16 h-16 md:w-24 md:h-24 icon-link text-white" />
            <p className="text-lg md:text-xl text-center">
              Conheça a gente e os nossos resultados
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;