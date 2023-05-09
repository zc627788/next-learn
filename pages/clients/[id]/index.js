import { useRouter } from "next/router";
function clientProjectPage() {
  const router = useRouter();

  const handlerPush = () => {
    // router.push('/clients/max/project')
    // 另一种形式
    router.push({
      pathname: "/clients/[id]/[[clientprojectid]]",
      query: { id: "max", clientprojectid: "project" },
    });
  };
  return (
    <div>
      <h1>The id clientProjectPage</h1>
      <button onClick={handlerPush}>jump SelectClientProjectPage</button>
    </div>
  );
}
export default clientProjectPage;
