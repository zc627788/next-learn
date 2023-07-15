import { getEventById, getFeaturedEvents } from "../../helper/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import Head from "next/head";

function EventDetailPage({ selectEvent }) {
  return (
    <>
      <Head>
        <title>{selectEvent.title}</title>
        <meta name="describe" content="hello" />
      </Head>
      <EventSummary title={selectEvent.title} />
      <EventLogistics
        date={selectEvent.date}
        address={selectEvent.location}
        image={selectEvent.image}
        imageAlt={selectEvent.title}
      />

      <EventContent>
        <p>{selectEvent.description}</p>
      </EventContent>
    </>
  );
}

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: { selectEvent: event },
    revalidate: 30,
  };
};
export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const path = events.map((item) => ({
    params: {
      eventId: item.id,
    },
  }));
  return {
    paths: path,
    //已经确保path有了所有的可预渲染路径,设计为false时,没有对应的fallback将跳转404
    //设计为true时,如果不在path时,还是会请求getStaticProps获取数据,但是不是服务端渲染 看得到loading
    //设计为'blocking'时,如果不在path时,还是会请求getStaticProps获取数据,都是服务端渲染 看不到loading
    fallback: "blocking",
  };
};
export default EventDetailPage;
