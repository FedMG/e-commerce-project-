import { Layout } from "../components/layout";

export default function Home() {
  return <h1 className="text-3xl font-bold">Home</h1>;
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout title='Name - Home'>{page}</Layout>;
};
