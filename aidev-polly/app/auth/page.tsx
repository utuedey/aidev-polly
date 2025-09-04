import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { AuthForm } from "@/components/auth/auth-form";

export default function AuthPage() {
  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <h2 className="text-xl font-bold">User Authentication</h2>
      </CardHeader>
      <CardContent>
        <AuthForm />
      </CardContent>
    </Card>
  );
}
