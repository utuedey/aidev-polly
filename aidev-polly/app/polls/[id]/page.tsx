import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// This would normally come from a database
const getMockPoll = (id: string) => ({
  id,
  title: "Sample Poll",
  description: "This is a sample poll for demonstration purposes.",
  options: [
    { id: "1", text: "Option 1", votes: 5 },
    { id: "2", text: "Option 2", votes: 3 },
    { id: "3", text: "Option 3", votes: 8 },
  ],
  createdBy: "user1",
  createdAt: new Date(),
  isPublic: true,
});

export default function PollDetailPage({ params }: { params: { id: string } }) {
  const poll = getMockPoll(params.id);
  const totalVotes = poll.options.reduce((sum, option) => sum + option.votes, 0);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold">{poll.title}</h2>
          <p className="text-sm text-gray-500">
            Created {poll.createdAt.toLocaleDateString()}
          </p>
        </CardHeader>
        <CardContent>
          {poll.description && <p className="mb-6">{poll.description}</p>}
          
          <div className="space-y-4">
            {poll.options.map((option) => {
              const percentage = totalVotes > 0 
                ? Math.round((option.votes / totalVotes) * 100) 
                : 0;
              
              return (
                <div key={option.id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>{option.text}</span>
                    <span className="text-sm text-gray-500">
                      {option.votes} votes ({percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-6 space-y-4">
            <Button className="w-full">Vote</Button>
            <Button variant="outline" className="w-full">Share Poll</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}