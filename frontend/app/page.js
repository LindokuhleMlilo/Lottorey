import Image from "next/image";
import LotteryPotCard from "./components/LotteryPotCard";
import ActionButtons from "./components/ActionButtons";

export default function Home() {
  return (
    <>
      <div className="mb-6">
        <LotteryPotCard />
      </div>

      <div className="bg-white shadow rounded-lg p-6 space-y-4 mb-6">
        <ActionButtons />
      </div>

      <div className="bg-white shadow rounded-lg p-6 w-1/2 mt-6">
        <Image src="/old-man.png" width={400} height={400} alt="Old Man" />
      </div>
    </>
  );
}