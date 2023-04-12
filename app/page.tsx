import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero";
import { Container } from "../components/container";

export default function Homepage() {
  return (
    <div>
      <header>
        <Container>header</Container>
      </header>
      <main>
        <Container>
          <Hero>
            <HeroTitle>John Aries Saique</HeroTitle>
            <HeroSubtitle>
              I am a self-taught frontend developer who is passionate about
              <br />
              solving problems and learning new skills.
            </HeroSubtitle>
          </Hero>
          <img src="/img/code.jpg" alt="" />
        </Container>
      </main>
      <footer>
        <Container>footer</Container>
      </footer>
    </div>
  );
}
