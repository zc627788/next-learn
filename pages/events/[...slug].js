import { getFilteredEvents } from "../../helper/api-util";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/result-title";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";
function FilteredEventsPage(props) {
  if (props.hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  if (props.notData) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  const date = new Date(props.year, props.month - 1);
  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={props.filterData} />
    </div>
  );
}
export default FilteredEventsPage;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const [year, month] = params.slug;
  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2023 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return {
      props: { hasError: true },
    };
  }
  const filterData = await getFilteredEvents({ year, month });
  if (!filterData || filterData.length === 0) {
    return {
      props: { notData: true },
    };
  }

  return {
    props: { filterData: filterData, year: year, month: month },
  };
};
