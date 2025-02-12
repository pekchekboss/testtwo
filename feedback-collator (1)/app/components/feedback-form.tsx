"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { submitFeedback } from "../actions/feedback"
import { toast } from "@/components/ui/use-toast"

export function FeedbackForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  async function onSubmit(formData: FormData) {
    setIsSubmitting(true)
    const result = await submitFeedback(formData)
    setIsSubmitting(false)
    if (result.success) {
      toast({
        title: "Feedback submitted",
        description: "Your message has been sent successfully.",
      })
      router.push("/dashboard")
    } else {
      toast({
        title: "Error",
        description: result.error || "Failed to submit feedback. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <form action={onSubmit} className="space-y-6 max-w-md mx-auto">
      <Textarea
        id="message"
        name="message"
        required
        className="h-32 border-brand-purple focus:ring-brand-purple"
        placeholder="Type your message here..."
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-brand hover:opacity-90 transition-opacity"
      >
        {isSubmitting ? "Sending..." : "Saying my piece"}
      </Button>
    </form>
  )
}

