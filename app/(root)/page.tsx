import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  const { userId } = await auth();

  if (!userId) {
    return <div className="text-white">Sign in to view this page</div>;
  }

  const user = await currentUser();

  return (
    <div className="text-white">Welcome, {user?.firstName ?? "Guest"}!</div>
  );
}
