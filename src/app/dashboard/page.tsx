import NavBar from "@/components/nav-bar";

export default function DashboardPage() {
    return(
        <>
        <NavBar active="dashboard"/>
        <main className="flex  justify-center items-center">
            <div className="bg-yellow-500 81% min-w-2/3 m-6 p-6 rounded ">
                <h2 className="text-lg font-bold">Dashpord</h2>
            </div>
        </main>
        </>
    )
}