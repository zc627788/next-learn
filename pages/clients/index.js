import Link from "next/link";
function ClientsPage() {
  const routerList = [
    {
      id: "max",
      name: "MaxSomeThing",
    },
    {
      id: "maue",
      name: "ManuelSomeThing",
    },
  ];
  // const content = routerList.map((list) => (
  //   <li key={list.id}>
  //     <Link href={`/clients/${list.id}`}>{list.name}</Link>
  //   </li>
  // ));
  // href的另一种形式
  const content = routerList.map((list) => (
    <li key={list.id}>
      <Link
        href={{
          pathname: "/clients/[id]",
          query:{id: list.id} ,
        }}
      >
        {list.name}
      </Link>
    </li>
  ));

  return (
    <div>
      <h1>The page is ClientsPage</h1>
      <ul>{content}</ul>
    </div>
  );
}
export default ClientsPage;
