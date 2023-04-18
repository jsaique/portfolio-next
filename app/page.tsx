import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero";
import { Container } from "../components/container";
import { Button, IconWrapper } from "@/components/button";
import { ChevronIcon } from "@/components/icons/chevron";

export default function Homepage() {
  return (
    <Container className="pt-[6.4rem]">
      <Hero>
        <Button
          className="animate-fade-in"
          href="/"
          variant="secondary"
          size="small"
        >
          Lorem ipsum dolor sit amet
          <IconWrapper>→</IconWrapper>
        </Button>
        <HeroTitle className="animate-fade-in">John Aries Saique</HeroTitle>
        <HeroSubtitle className="animate-fade-in">
          I am a self-taught frontend developer who is
          <br className="hidden md:block" /> passionate about creating beautiful
          website and learning new skills.
        </HeroSubtitle>
        <Button
          className="animate-fade-in"
          href="/"
          variant="primary"
          size="large"
        >
          Click me{" "}
          <IconWrapper>
            <ChevronIcon />
          </IconWrapper>
        </Button>
        <img className="mt-[12.8rem]" src="/img/code.jpg" alt="" />
        Photo by
        <a href="https://unsplash.com/@mitchel3uo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Mitchell Luo
        </a>
        on
        <a href="https://unsplash.com/photos/FWoq_ldWlNQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </Hero>
    </Container>
  );
}
