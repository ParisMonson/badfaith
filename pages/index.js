import Head from "next/head";
import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import TextAreaInput from "../components/TextAreaInput";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [listItems] = useState(["Item 1", "Item 2", "Item 3"]);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
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
    <div className="body flex flex-col h-screen">
      <Head>
        <title>Badfaith</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <Header />


      <div className="flex-grow flex flex-row overflow-hidden">
        <Sidebar listItems={titles} />




        <main className={"main_container"}>
          <div className={"main_input_section"}>
            <h1 className={"text-xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"}>Evaluate Document</h1>
            <form className={"flex flex-col items-center m-3"} onSubmit={handleSubmit}>
              <TextAreaInput value={textAreaValue} onChange={handleChange} />
              <div className="m-3">
                <SubmitButton onClick={handleClick}>
                  {isLoading ? <div className="spinner" /> : 'Submit'}
                </SubmitButton>
              </div>
            </form>



            {result ?
              <div className="result_area flex flex-col items-center text-center">
                <div className={"text-white font-extrabold text-xl tracking-tight "}>Result</div>
                <p className={"text-white whitespace-pre-line"}>{result}</p>
              </div>
              :
              null
            }


          </div>


        </main>
      </div>

    </div>
  );
}
