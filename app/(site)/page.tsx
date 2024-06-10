import { sleep } from "@/lib/utils";

export default async function Home() {
  console.log("before HomePage sleep...");
  await sleep(4000);
  console.log("after HomePage sleep...");
  return <div>HomePage</div>;
}
