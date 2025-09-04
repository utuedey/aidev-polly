import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Poll } from "@/lib/types";
import Link from "next/link";

interface PollCardProps {
  poll: Poll;
}

export function PollCard({ poll }: PollCardProps) {
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardHeader>
        <h3 className="text-lg font-semibold">{poll.title}</h3>
        <p className="text-sm text-gray-500">
          Created {poll.createdAt.toLocaleDateString()}
        </p>
      </CardHeader>
      <CardContent>
        {poll.description && <p className="mb-4">{poll.description}</p>}
        <div className="text-sm text-gray-500 mb-4">
          {poll.options.length} options · {poll.options.reduce((sum, option) => sum + option.votes, 0)} votes
        </div>
        <Link href={`/polls/${poll.id}`} passHref>
          <Button variant="outline" className="w-full">
            View Poll
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}