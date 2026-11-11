import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { site } from "@/lib/site";
import { getLang } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

const Home = () => {
  const t = getDictionary(getLang());
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
          
            <span className="inline-flex items-center gap-2 text-sm text-accent border border-accent/40 rounded-full px-4 py-1 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              {t.site.availability}
            </span>
            <span className="block text-xl">{t.site.role}</span>
            <h1 className="h1 mb-6">
              {t.home.hello} <br /> <span className="text-accent">{site.name}</span>
            </h1>
            <p className="max-w-[540px] mb-9 text-white/80">{t.home.intro}</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href={site.cvPath} download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>{t.home.downloadCv}</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base
                  hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
