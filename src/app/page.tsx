import { getSession } from "@auth0/nextjs-auth0"
import { redirect } from "next/navigation"

export default async function Home() {
  const session = await getSession()
  if(session?.user) {
    redirect('/dashboard')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-9xl">JimmyTime</h1>
      <div className="flex flex-col items-center justify-center">
        <a href='/api/auth/login'>Login</a>
        <p className="text-2xl">By Collin Rijock</p>
      </div>
    </main>
  )
}
