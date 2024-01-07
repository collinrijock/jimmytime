import { getSession } from "@auth0/nextjs-auth0"
import { useEffect, useState } from "react"
import Activity from "../../../components/Activity"

export default async function Home() {
    const session = await getSession()
    const [activities, setActivities] = useState([])

    async function getActivities() {
        await fetch('/api/activities')
            .then(async (res) => setActivities(await res.json()))
            .then(data => console.log(data))
    }

    useEffect(() => {
        async function fetchData() {
            try {
                await getActivities();
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <nav className="flex items-center w-full">
                <h3>JimmyTime</h3>
                <p className="ml-auto">{session?.user.email}</p>
                <a className="ml-2" href="/api/auth/logout">Logout</a>
            </nav>
            <div className="flex flex-col">
                {activities.map(activity => (
                    <Activity id={activity?.id} />
                ))}
            </div>
        </main>
    )
}
