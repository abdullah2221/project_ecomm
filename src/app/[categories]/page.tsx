import CategoryPage from "./CategoryPage";


const Categories = ({ params }: { params: { categories: string } }) => {

  // console.log(params);

  return (
    <>
    <CategoryPage params={params} />
    
    </>
  );
};

export default Categories;
