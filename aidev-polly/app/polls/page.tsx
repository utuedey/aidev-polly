import { PollCard } from "@/components/polls/poll-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// This would normally come from a database
const getMockPolls = () => [
  {
    id: "1",
    title: "What's your favorite programming language?",
    options: [
      { id: "1", text: "JavaScript", votes: 15 },
      { id: "2", text: "Python", votes: 12 },
      { id: "3", text: "Java", votes: 8 },
      { id: "4", text: "C#", votes: 7 },
    ],
    createdBy: "user1",
    createdAt: new Date(),
    isPublic: true,
  },
  {
    id: "2",
    title: "Which frontend framework do you prefer?",
    description: "For building modern web applications",
    options: [
      { id: "1", text: "React", votes: 25 },
      { id: "2", text: "Vue", votes: 18 },
      { id: "3", text: "Angular", votes: 12 },
      { id: "4", text: "Svelte", votes: 8 },
    ],
    createdBy: "user2",
    createdAt: new Date(Date.now() - 86400000), // 1 day ago
    isPublic: true,
  },
];

export default function PollsPage() {
  const polls = getMockPolls();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Browse Polls</h2>
        <Link href="/create-poll" passHref>
          <Button>Create Poll</Button>
        </Link>
      </div>

      <div>
        {polls.map((poll) => (
          <PollCard key={poll.id} poll={poll} />
        ))}
      </div>
    </div>
  );
}
