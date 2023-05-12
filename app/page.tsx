import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero";
import { Container } from "../components/container";
import { Button, IconWrapper } from "@/components/button";
import { ChevronIcon } from "@/components/icons/chevron";
import { HeroImage } from "@/components/icons/hero-image";
import { Skills } from "./skills";

export default function Homepage() {
  return (
    <>
      <div className="overflow-hidden">
        <Container className="overflow-hidden pt-[6.4rem]">
          <Hero>
            <Button
              className="animate-fade-in opacity-0 translate-y-[-1rem]"
              href="/"
              variant="secondary"
              size="small"
            >
              Lorem ipsum dolor sit amet
              <IconWrapper>→</IconWrapper>
            </Button>
            <HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
              John Aries Saique
            </HeroTitle>
            <HeroSubtitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]">
              I am a self-taught frontend developer who is
              <br className="hidden md:block" /> passionate about creating
              beautiful website and learning new skills.
            </HeroSubtitle>
            <Button
              className="animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]"
              href="/"
              variant="primary"
              size="large"
            >
              Click me{" "}
              <IconWrapper>
                <ChevronIcon />
              </IconWrapper>
            </Button>
            <HeroImage />
          </Hero>
        </Container>
      </div>
      <Container>
        <Skills />
      </Container>
    </>
  );
}
