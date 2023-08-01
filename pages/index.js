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
    <div className="body">
      <Head>
        <title>Badfaith</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={"main_container"}>
        <div className={"main_input_section"}>
          <h3 className={"text-xl"}>Evaluate Document</h3>
          <form className={"flex flex-col"} onSubmit={onSubmit}>
            <textarea
              type="text"
              name="animal"
              placeholder="Paste your text here..."
              value={animalInput}
              onChange={(e) => setAnimalInput(e.target.value)}
              className={"input_box"}
            />
            <input className={"submit_btn"} type="submit" value="Analyse" />
          </form>
          <div className={""}>{result}</div>
        </div>
      </main>
    </div>
  );
}
