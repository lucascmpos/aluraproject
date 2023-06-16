import Link from "next/link";
import Title from "../src/components/Title";

const HomePage: React.FC = () => {
  return (
    <div>
      <Title as="h1">Alura Cases - Home</Title>
      <Link href="/faq" passHref>
        Ir para a FAQ
      </Link>
    </div>
  );
};

export default HomePage;
