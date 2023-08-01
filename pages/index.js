import Head from "next/head";
import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import TextAreaInput from "../components/TextAreaInput";

export default function Home() {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ article: textAreaValue }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setTextAreaValue("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  function handleClick() {
    console.log("Click")
  }

  const handleChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
    setTextAreaValue('');
  };

  return (
    <div className="body">
      <Head>
        <title>Badfaith</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <header className="header">
        <h1>Badfaith</h1>
      </header>

      <main className={"main_container"}>
        <div className={"main_input_section"}>
          <h1 className={"text-xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"}>Evaluate Document</h1>
          <form className={"flex flex-col"} onSubmit={handleSubmit}>
            <TextAreaInput value={textAreaValue} onChange={handleChange} />
            <SubmitButton onClick={handleClick}>Click me</SubmitButton>

          </form>

        </div>

        <div className={""}>{result}</div>
      </main>
    </div>
  );
}
