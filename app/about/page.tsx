import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../api/auth/auth";

export default async function About() {
  const session = await getServerSession(NEXT_AUTH)
    return (
      <div>
        <div>
        This is a about page
        </div>
        <div>
          {JSON.stringify(session)}
        </div>
      </div>
    );
  }