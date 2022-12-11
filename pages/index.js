import BlogCard from "../components/homeComponent/Blog/BlogCard";
import Brand from "../components/homeComponent/Brands";
import HeroSection from "../components/homeComponent/HeroSection";
import Slider from "../components/Slider";
import Testimonial from "../components/homeComponent/Testimonial";
import WhyChoose from "../components/homeComponent/WhyChoose";
import Layout from "../components/Layout";
import Backdrop from "../components/UI/Backdrop";
import SeoSection from "../components/homeComponent/Seo";



export default function Home({options}) {
  return (
    <div>

      <HeroSection options={options}/>
      <Brand />
      <Slider />
      <WhyChoose />
      <BlogCard />
      <Testimonial />
      {/* <SeoSection /> */}
    </div>
  );
}


Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}


export async function getStaticProps() {
  const res = await fetch('https://api.devicecure.in/data/repair')
  const options = await res.json()
  return {
    props: {
      options,
    },
  }
}
