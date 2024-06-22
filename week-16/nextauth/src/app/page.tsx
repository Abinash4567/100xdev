import { Button } from "@/components/ui/button";

export default function Home() {
  return (
  <div className="bg-blue-500 h-lvh flex flex-col items-center justify-center">
    <div className="text-6xl text-white font-semibold">NextAuth</div>
    <div className="text-white font-bold drop-shadow-sm">Simple Authentication service</div>
    <Button variant="secondary" size="lg">Sign in</Button>
  </div>);
}
