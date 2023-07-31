import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setAnimalInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div className={"bg-gray-900 text-white min-h-screen"}>
      <Head>
        <title>Badfaith</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={""}>
        <img src="/dog.png" className={""} />
        <h3 className={"text-xl"}>Evaluate Document</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter an animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
        <div className={""}>{result}</div>
      </main>
    </div>
  );
}
