import { getFeedback } from "../actions/feedback"
import { Dashboard } from "../components/dashboard"

export default async function DashboardPage() {
  const initialFeedback = await getFeedback()

  return (
    <div className="container mx-auto py-10">
      <Dashboard initialFeedback={initialFeedback} />
    </div>
  )
}

