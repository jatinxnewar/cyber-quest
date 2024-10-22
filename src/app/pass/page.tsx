"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"

export default function PasswordStrengthGame() {
  const [password, setPassword] = useState("")
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState<string[]>([])

  const evaluatePassword = (pass: string) => {
    let newScore = 0
    let newFeedback: string[] = []

    // Length check
    if (pass.length >= 8) {
      newScore += 20
      newFeedback.push("Good length")
    } else {
      newFeedback.push("Password should be at least 8 characters long")
    }

    // Uppercase check
    if (/[A-Z]/.test(pass)) {
      newScore += 20
      newFeedback.push("Contains uppercase letter")
    } else {
      newFeedback.push("Add an uppercase letter")
    }

    // Lowercase check
    if (/[a-z]/.test(pass)) {
      newScore += 20
      newFeedback.push("Contains lowercase letter")
    } else {
      newFeedback.push("Add a lowercase letter")
    }

    // Number check
    if (/\d/.test(pass)) {
      newScore += 20
      newFeedback.push("Contains number")
    } else {
      newFeedback.push("Add a number")
    }

    // Special character check (including @)
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+/.test(pass)) {
      newScore += 20
      newFeedback.push("Contains special character")
    } else {
      newFeedback.push("Add a special character (e.g., @, #, $, %)")
    }

    setScore(newScore)
    setFeedback(newFeedback)
  }

  useEffect(() => {
    try {
      evaluatePassword(password)
    } catch (error) {
      console.error("Error evaluating password:", error)
      setScore(0)
      setFeedback(["An error occurred. Please try a different password."])
    }
  }, [password])

  const getScoreColor = () => {
    if (score < 40) return "bg-red-500"
    if (score < 80) return "bg-yellow-500"
    return "bg-green-500"
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <Card className="w-full max-w-md bg-gray-800 text-gray-100 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-400">Password Strength Game</CardTitle>
          <CardDescription className="text-gray-400">Enter a password to see how strong it is!</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 bg-gray-700 text-gray-100 border-gray-600 focus:border-blue-500 focus:ring-blue-500"
          />
          <div className="mb-4">
            <Progress 
              value={score} 
              indicatorColor={getScoreColor()} 
              backgroundColor="bg-gray-700"
              className="w-full h-2" 
            />
            <p className="text-sm mt-2 text-gray-300">
              Password Strength: {score}%
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-400">Password Criteria:</h3>
            <ul>
              {feedback.map((item, index) => (
                <li key={index} className="flex items-center text-sm mb-1">
                  {item.startsWith("Add") || item.startsWith("Password should") || item.startsWith("An error occurred") ? (
                    <XCircle className="w-4 h-4 mr-2 text-red-400" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-400" />
                  )}
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}