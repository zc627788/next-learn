import { useRouter } from "next/router";
function SelectClientProjectPage() {
    const router = useRouter()
    console.log(router)
    return (
      <div>
        <h1>select something  SelectClientProjectPage</h1>
      </div>
    );
  }
  export default SelectClientProjectPage;
  