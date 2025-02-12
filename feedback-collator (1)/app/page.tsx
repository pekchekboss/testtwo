import { FeedbackForm } from "./components/feedback-form"

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
        Dear Manager, I wish to tell you...
      </h1>
      <FeedbackForm />
    </div>
  )
}

