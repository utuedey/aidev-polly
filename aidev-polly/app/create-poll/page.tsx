"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { PollForm } from "@/components/polls/poll-form";
import { ProtectedRoute } from "@/components/auth/protected-route";

export default function CreatePollPage() {
  return (
    <ProtectedRoute>
      <Card className="max-w-2xl mx-auto mt-10">
        <CardHeader>
          <h2 className="text-xl font-bold">Create a New Poll</h2>
        </CardHeader>
        <CardContent>
          <PollForm />
        </CardContent>
      </Card>
    </ProtectedRoute>
  );
}
