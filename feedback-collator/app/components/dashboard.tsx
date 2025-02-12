"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import type { Feedback } from "../actions/feedback"

interface DashboardProps {
  initialFeedback: Feedback[]
}

export function Dashboard({ initialFeedback }: DashboardProps) {
  const [query, setQuery] = useState("")
  const [feedback] = useState(initialFeedback)

  const filteredFeedback = feedback.filter((item) => item.message.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="space-y-6 max-w-2xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800">Messages</h2>
      <div className="mb-6">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search messages..."
          className="border-brand-purple focus:ring-brand-purple"
        />
      </div>
      <div className="space-y-4">
        {filteredFeedback.map((item) => (
          <Card key={item.id} className="border-brand-purple/20">
            <CardContent className="pt-6">
              <p className="text-gray-700">{item.message}</p>
              <p className="text-sm text-gray-500 mt-2">Submitted on: {item.createdAt.toLocaleDateString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

