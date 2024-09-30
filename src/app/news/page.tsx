import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';
import DemoFeatured from '../../../public/news/demo/featured.jpg';
import WarehouseFeatured from '../../../public/news/transforming_warehouse/skyhigh.png';
import CTA from '@/components/CTA';
import NewsArticle from './NewsArticle';

export default function News() {
  return (
    <>
      <div className="mb-12 tablet:mb-16 laptop:mb-20">
        <Navigation />
      </div>
      <section className="mb-16 laptop:mb-20">
        <Container>
          <div className="mb-10 laptop:mb-[60px]">
            <span
              className="text-standard-4 text-[12px] tablet:text-sm font-medium uppercase tracking-widest"
              style={ibm_mono.style}
            >
              All news
            </span>
            <h1 className="font-light text-white text-[40px] leading-none laptop:max-w-[560px] mt-3 tracking-tight">
              Urbx News
            </h1>
          </div>

          <NewsArticle
            imageSrc={DemoFeatured}
            imageAlt="Demo"
            date="September 2024"
            title="Demo"
            description="In September 2024, URBX hosted its inaugural DEMO, presenting the latest advancements in robotic technology. This event showcased the unique features and benefits of their innovations within the automated warehouse sector."
            link="/news/demo"
          />

          <NewsArticle
            imageSrc={WarehouseFeatured}
            imageAlt="Warehouse"
            date="URBX Revolutionizes Warehousing with Inspiration from Otis"
            title="Warehouse"
            description="This week, we invite you to explore a pivotal moment in architectural history: the invention of the elevator by Elisha Graves Otis. This groundbreaking innovation not only revolutionized building design but also offers intriguing parallels to the modern landscape of warehouse operations."
            link="/news/transforming_warehouse"
          />

        </Container>
      </section>
      <CTA
        title={
          <>
            Want to become a <br />
            <span className="font-semibold">Partners?</span>
          </>
        }
        ctaVariant="primary"
        cta={{
          text: 'Contact Us',
          href: '/contact-us',
        }}
      />
      <Footer />
    </>
  );
}
