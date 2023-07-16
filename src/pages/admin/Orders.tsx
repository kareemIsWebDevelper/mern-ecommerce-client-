import AdminNav from "../../components/AdminNav.tsx";
import { edit, remove } from "../../assets/index.ts";

export default function Categories() {
    return (
      <>
        <AdminNav />
        <button className={styles.newBtn}>All Orders</button>
        <section className={styles.categoryCard}>
          <div className={styles.categoryCardBody}>
            <div className={styles.categoryCardHeader}>Electronics Order</div>
            <div className="flexCenter gap-2">
              {myButton.map((btn) => (
                <img
                  key={btn.id}
                  src={btn.imageUrl}
                  alt={btn.alt}
                  className={btn.style}
                />
              ))}
            </div>
          </div>
        </section>
      </>
    );
}

const myButton = [
    {id: 1, imageUrl: edit, alt: 'Edit', style: 'w-10, h-10 cursor-pointer' },
    {id: 2, imageUrl: remove, alt: 'Remove', style: 'w-10, h-10 cursor-pointer' }
];


const styles = {
    newBtn: 'bg-teal-400 text-white font-bold h-10 px-2 absolute top-2 right-2',
    categoryCard: "grid justify-center content-evenly gap-3 my-6",
    categoryCardBody: "flexBetween gap-8 bg-white shadow-lg border p-3",
    categoryCardHeader: "text-2xl font-bold",
    formGroup: 'mb-4'
}

