import { getFeaturedEvents } from "../helper/api-util";
import EventList from "../components/events/event-list";
import Head from "next/head";
function HomePage({ featuredEvents }) {
  return (
    <div>
      <Head>
        <title>首页</title>
        <meta name="describe" content="hello" />
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
}
export default HomePage;

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: { featuredEvents },
    revalidate: 1800,
  };
};
