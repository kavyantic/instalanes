import BlogCard from "../components/Hero/Blog/BlogCard";
import Brand from "../components/Brands";
import HeroSection from "../components/HeroSection";
import Slider from "../components/Slider";
import Testimonial from "../components/Testimonial";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Brand />
      <Slider />
      <WhyChoose />
      <BlogCard />
      <Testimonial />
    </div>
  );
}
