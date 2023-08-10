import Head from "next/head";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import SubmitButton from "../components/SubmitButton";
import TextAreaInput from "../components/TextAreaInput";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Report from "../components/Report";

export default function Home() {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [result, setResult] = useState();
  const [awaitingResult, setAwaitingResult] = useState(false);
  const [reportHistory, setReportHistory] = useState([]);
  const { user, isLoading, error } = useUser();
  // useEffect(() => {
  //   if (!isLoading && user) {
  //     getReports();
  //   }
  // }, [isLoading, user]);

  async function getReports() {
    try {
      const response = await fetch("/api/reports", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setReportHistory(data);
    } catch (err) {
      console.log("Error: ", err);
    }
  }
  getReports();

  async function handleSubmit(event) {
    event.preventDefault();
    setAwaitingResult(true);

    const userEmail = !isLoading && user ? user.email : "";

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ article: textAreaValue, userEmail }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setTextAreaValue("");
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setAwaitingResult(false);
    }
  }

  function handleClick() {
    console.log("Click");
  }

  const handleChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <div className="body">
      <Head>
        <title>Badfaith</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <Header />

      <div className="main_content">
        <Sidebar listItems={reportHistory} />

        <main className={"main_container"}>
          <div className={"main_input_section"}>
            {/* <AppNameLogo /> */}
            <h1
              className={
                "text-xl font-extrabold  tracking-tight dark:text-zinc-200"
              }
            >
              Evaluate Document
            </h1>
            <form
              className={"flex flex-col items-center m-3"}
              onSubmit={handleSubmit}
            >
              <TextAreaInput value={textAreaValue} onChange={handleChange} />
              <div className="m-3">
                <SubmitButton onClick={handleClick}>
                  {awaitingResult ? <div className="spinner" /> : "Analyse"}
                </SubmitButton>
              </div>
            </form>

            {result && <Report report={result} />}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
