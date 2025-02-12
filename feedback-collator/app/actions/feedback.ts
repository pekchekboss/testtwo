"use server"

import { revalidatePath } from "next/cache"
import { db } from "../lib/firebase"
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore"

export type Feedback = {
  id: string
  message: string
  createdAt: Date
}

export async function submitFeedback(formData: FormData) {
  const message = formData.get("message") as string

  if (!message) {
    return { error: "Message is required" }
  }

  try {
    const docRef = await addDoc(collection(db, "feedback"), {
      message,
      createdAt: new Date(),
    })

    revalidatePath("/dashboard")
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error("Error adding document: ", error)
    return { error: "Failed to submit feedback" }
  }
}

export async function getFeedback(): Promise<Feedback[]> {
  try {
    const q = query(collection(db, "feedback"), orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt.toDate(),
    })) as Feedback[]
  } catch (error) {
    console.error("Error getting documents: ", error)
    return []
  }
}

