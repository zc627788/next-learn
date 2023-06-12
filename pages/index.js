import { getFeaturedEvents } from "../helper/api-util";
import EventList from "../components/events/event-list";
function HomePage({featuredEvents}) {
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
export default HomePage;

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {featuredEvents},
  };
};
