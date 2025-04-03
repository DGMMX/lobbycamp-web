import NavBar from "@/components/nav-bar";

export default function CategoriesPage() {
    return(
        <>
        <NavBar active="categorias" />

        <main className="flex  justify-center items-center">
            <div className="bg-yellow-500 min-w-2/3 m-6 p-6 rounded">
                <h2 className="text-lg font-bold">Categorias</h2>
            </div>
        </main>
        </>
    )
}