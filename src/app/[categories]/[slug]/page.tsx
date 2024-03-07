
import SlugPage from "./SlugPage";
const Page = ({ params }: { params: {slug: string } }) => {





  return (
    <>
    <SlugPage params={params}/>

    </>
  );
};

export default Page;
