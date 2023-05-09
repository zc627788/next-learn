import { useRouter } from "next/router";
function ProjectPortFolioPage() {
    const router = useRouter()

    console.log(router.query)
    console.log(router.pathname)


  return (
    <>
      <h1>[projectid]</h1>
    </>
  );
}

export default ProjectPortFolioPage;
