import { useRouter } from "next/router";

function blogPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <h1>the page is blogPage</h1>
    </>
  );
}
export default blogPage