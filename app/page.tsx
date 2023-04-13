import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero";
import { Container } from "../components/container";

export default function Homepage() {
  return (
    <Container className="">
      <Hero>
        <HeroTitle>John Aries Saique</HeroTitle>
        <HeroSubtitle>
          I am a self-taught frontend developer who is <br />
          passionate about solving problems and learning new skills.
        </HeroSubtitle>
      </Hero>
      <img src="/img/code.jpg" alt="" />
      Photo by
      <a href="https://unsplash.com/@mitchel3uo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Mitchell Luo
      </a>
      on
      <a href="https://unsplash.com/photos/FWoq_ldWlNQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Unsplash
      </a>
    </Container>
  );
}
