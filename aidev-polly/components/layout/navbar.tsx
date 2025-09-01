import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  // This would normally check if user is authenticated
  const isAuthenticated = false;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl text-blue-600">
              Polly
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/polls" passHref>
              <Button variant="ghost">Browse Polls</Button>
            </Link>
            <Link href="/create-poll" passHref>
              <Button variant="ghost">Create Poll</Button>
            </Link>
            {isAuthenticated ? (
              <Button variant="outline">Sign Out</Button>
            ) : (
              <Link href="/auth" passHref>
                <Button>Sign In</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}