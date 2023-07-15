import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../helper/api-util";
import EventSearch from "../../components/events/event-search";
import { useRouter } from "next/router";
import Head from "next/head";

function AllEventsPage(props) {
  const router = useRouter();
  const { events } = props;
  const onSearch = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };
  return (
    <>
      <Head>
        <title>事件页</title>
        <meta name="describe" content="hello" />
      </Head>
      <EventSearch onSearch={onSearch} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;

export const getStaticProps = async (context) => {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
};
