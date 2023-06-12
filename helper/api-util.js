export async function getAllEvents() {
  const response = await fetch(
    "https://xx-net-271306-default-rtdb.firebaseio.com/event.json"
  );
  const data = await response.json();
  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
}
