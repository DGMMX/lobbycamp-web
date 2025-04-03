import CategoryItem from "@/components/category-item";
import NavBar from "@/components/nav-bar";

export default function TransactionsPage() {
    return(
        <>
        <NavBar active="movimentações"/>

        <main className="flex  justify-center items-center">
            <div className="bg-yellow-500 min-w-2/3 m-6 p-6 rounded">
                <h2 className="text-lg font-bold">movimentações</h2>

                <CategoryItem />

            </div>
        </main>
        </>
    )
}