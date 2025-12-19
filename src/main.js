import { Actor } from 'apify';

await Actor.main(async () => {
  const input = await Actor.getInput();
  console.log("Actor started with input:", input);

  await Actor.pushData({ message: "Hello from my Actor!" });
});
