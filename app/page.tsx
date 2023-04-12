import { Container } from "../components/container";

export default function Homepage() {
  return (
    <div>
      <header>
        <Container>header</Container>
      </header>
      <main>
        <Container>Hero page</Container>
      </main>
      <footer>
        <Container>footer</Container>
      </footer>
    </div>
  );
}
