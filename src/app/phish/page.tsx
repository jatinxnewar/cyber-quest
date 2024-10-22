"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle } from "lucide-react";

const emailSamples = [
  {
    subject: "Your account needs verification",
    content:
      "Dear user, we've noticed some suspicious activity on your account. Please click the link below to verify your identity.",
    isPhishing: true,
  },
  {
    subject: "Your order has been shipped",
    content:
      "Thank you for your purchase! Your order #12345 has been shipped and will arrive in 3-5 business days.",
    isPhishing: false,
  },
  {
    subject: "Urgent: Wire transfer needed",
    content:
      "I'm stuck in a foreign country and need you to wire me $1000 immediately. I'll pay you back when I return.",
    isPhishing: true,
  },
  {
    subject: "Your subscription is expiring soon",
    content:
      "Your premium subscription will expire in 7 days. Log in to your account to renew and continue enjoying our services.",
    isPhishing: false,
  },
];

export default function PhishingGame() {
  const [currentEmail, setCurrentEmail] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = (answer: boolean) => {
    const correct = answer === emailSamples[currentEmail].isPhishing;
    setIsCorrect(correct);
    setShowResult(true);
    if (correct) setScore(score + 1);
  };

  const nextEmail = () => {
    if (currentEmail < emailSamples.length - 1) {
      setCurrentEmail(currentEmail + 1);
      setShowResult(false);
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-400">
          Phishing Detection Game
        </h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-blue-400">
              {emailSamples[currentEmail].subject}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-300">
              {emailSamples[currentEmail].content}
            </p>
            {!showResult ? (
              <div className="flex justify-center space-x-4">
                <Button
                  onClick={() => handleAnswer(true)}
                  className="bg-red-500 text-white hover:bg-red-600"
                >
                  Phishing
                </Button>
                <Button
                  onClick={() => handleAnswer(false)}
                  className="bg-green-500 text-white hover:bg-green-600"
                >
                  Legitimate
                </Button>
              </div>
            ) : (
              <div className="text-center">
                {isCorrect ? (
                  <div className="flex items-center justify-center text-green-400">
                    <CheckCircle className="mr-2" />
                    Correct!
                  </div>
                ) : (
                  <div className="flex items-center justify-center text-red-400">
                    <AlertCircle className="mr-2" />
                    Incorrect. This email is{" "}
                    {emailSamples[currentEmail].isPhishing
                      ? "a phishing attempt"
                      : "legitimate"}
                    .
                  </div>
                )}
                {currentEmail < emailSamples.length - 1 && (
                  <Button
                    onClick={nextEmail}
                    className="mt-4 bg-blue-500 text-white hover:bg-blue-600"
                  >
                    Next Email
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
        <p className="text-center mt-4 text-xl font-bold text-blue-400">
          Score: {score} / {currentEmail + 1}
        </p>
      </div>
    </section>
  );
}
