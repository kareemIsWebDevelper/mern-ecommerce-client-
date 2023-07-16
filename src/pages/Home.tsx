import {lazy, Suspense, useContext, useEffect, useState} from "react";
import AppNav from "../components/AppNav";
import { ProductShow } from "../components/ProductShow";
import { BestOffer } from "../components/BestOffer";
import { Loading } from "../utils/Loading";
import { AppFooter } from "../components/AppFooter";
import { AppContext } from "../context/AppContext";
import {CategoryInterface} from "../lib/types";
import {getCategories} from "../lib/api/category";
const CategoryCard = lazy(() => import("../components/cards/CategoryCard"));

export default function Home() {
  const { isBlur } = useContext(AppContext);
    const [categories, setCategories] = useState<CategoryInterface[]>([]);
    const [hidden, setHidden] = useState<boolean>(true);

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getCategories();
            setCategories(data)
            setHidden(false);
        };
        void fetchCategories();
    }, []);

  return (
    <div className="relative w-full h-screen">
      <header>
        <AppNav />
      </header>
      <main className={`${!isBlur ? "" : "blur-sm"} mt-12`}>
        <Suspense fallback={<Loading />}>
          <ProductShow />
          <h1 className="header bold my-12 -mb-4">Best Deals</h1>
          <section
            className="flexStart py-4 pl-2 flex-nowrap gap-6 w-full overflow-x-scroll h-fit mt-6"
          >
            <BestOffer />
          </section>
          <CategoryCard categories={categories}/>
        </Suspense>
      </main>
      <footer className={`${
          hidden ? 'fixed bottom-0 left-0 w-full' : ''
      }`}>
        <AppFooter />
      </footer>
    </div>
  );
}
