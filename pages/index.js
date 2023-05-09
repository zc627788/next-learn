import Link from "next/link";
function HomePage() {
  return (
    <>
      <ul>
        <li>
          <Link href="/portfolio" >portfolio</Link>
        </li>
        <li>
          <Link href="/clients" >clients</Link>
        </li>
   
      </ul>
    </>
  );
}
export default HomePage;
