import Card from "./components/cards";
import Hero from "./components/hero";
import HeroSection from "./components/heroSection";
import ScrollBar from "./components/scrollbar/ScrollBar";
import SearchCard from "./components/searchCard";
import StorySection from "./components/storySection";
import { CardsData } from "./data/cards";

export default function Home() {
  return (
    <div>
      <Hero />
      <SearchCard />
      <Card data={CardsData} />
      <ScrollBar />
      <StorySection />
      <HeroSection />
    </div>
  );
}
