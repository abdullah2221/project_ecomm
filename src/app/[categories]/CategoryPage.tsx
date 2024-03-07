"use client";
import Wrapper from "@/components/Wrapper";
// import { products } from "@/components/bstSellingProducts";
import Card from "@/components/Card";
import { useAppSelector } from "../store/hooks";
const CategoryPage = ({ params }: { params: { categories: string } }) => {
  const product = useAppSelector((state) => state.products);

  const products = product.filter((val) => val.category == params.categories);

  return (
    <>
      <Wrapper>
        <div className="mt-[50px] my-[100px]">
          {/* heading */}

          <div className="text-center mb-10">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight capitalize lg:text-5xl text-myBlackHead mb-4">
              {params.categories}
            </h1>
            <div className="flex mt-2 justify-center">
              <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
            </div>
          </div>

          {/* categories /products */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5 ">
            {products.map((item: any, index) => {
              return (
                <>
                  <Card
                    key={index}
                    alt={item.title}
                    desc={item.description}
                    title={item.title}
                    price={item.price}
                    url={item.image[0]}
                    catergory={item.category}
                    slug={item.slug}
                    disc={item.discount}
                  />
                </>
              );
            })}

            {/* <Card/>
<Card/> */}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default CategoryPage;
