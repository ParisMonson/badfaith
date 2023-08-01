import Head from "next/head";
import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import TextAreaInput from "../components/TextAreaInput";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [result, setResult] = useState();
  const [listItems] = useState(["Item 1", "Item 2", "Item 3"]);

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
  const titles = ["Item 1", "Item 2", "Item 3"];

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

      <Header />
      <Sidebar listItems={titles} />
      <main className={"main_container"}>
        <div className={"main_input_section"}>
          <h1 className={"text-xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"}>Evaluate Document</h1>
          <form className={"flex flex-col items-center m-3"} onSubmit={handleSubmit}>
            <TextAreaInput value={textAreaValue} onChange={handleChange} />
            <div className="m-3">
              <SubmitButton onClick={handleClick}>Submit</SubmitButton>
            </div>
          </form>

        </div>

        <div className={""}>{result}</div>
      </main>
    </div>
  );
}
