import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout
      seo={{
        title: "Página não encontrada - Parâmetro Moda Corporativa",
        description: "A página que você está procurando não foi encontrada.",
      }}
    >
      <section className="flex min-h-[60vh] items-center justify-center section-padding">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="mb-4 text-6xl md:text-8xl font-bold text-accent">404</h1>
          <h2 className="mb-4 text-2xl md:text-3xl font-sans font-bold text-foreground">
            Página não encontrada
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Voltar para o início
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
