import Head from "next/head";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useTheme } from "@mui/material/styles";
import SubmitButton from "../components/SubmitButton";
import TextAreaInput from "../components/TextAreaInput";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Report from "../components/Report";
import { Main } from "../components/Main";
import { LandingPageBanner } from "../components/LandingPageBanner";
import { useReports } from "../components/useReports";

export default function Home() {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [awaitingResult, setAwaitingResult] = useState(false);
  const { user, isLoading, error } = useUser();
  const [report, setReport] = useState();
  const [headerOpen, setHeaderOpen] = useState(false);
  const theme = useTheme();
  const [titleValue, setTitleValue] = useState("");

  const reportHistory = useReports();

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
        body: JSON.stringify({
          articleTitle: titleValue,
          article: textAreaValue,
          userEmail,
        }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setReport(data.result);
      setTextAreaValue("");
      setTitleValue("");
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
  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };

  const handleChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <div className="body">
      <Head>
        <title>Badfaith</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <Header open={headerOpen} setOpen={setHeaderOpen} />

      <LandingPageBanner />

      <div className="main_content">
        <Sidebar
          open={headerOpen}
          setOpen={setHeaderOpen}
          listItems={reportHistory}
          setReport={setReport}
        />
        <Main open={open} theme={theme}>
          <div className={"main_input_section"}>
            <h1
              className={
                "text-2xl font-extrabold  tracking-tight dark:text-zinc-200"
              }
            >
              Evaluate Article
            </h1>
            <form
              className={"flex flex-col items-center m-3"}
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Title"
                className="mb-2 h-10 w-96 bg-gray-300 rounded-md text-black"
                value={titleValue}
                onChange={handleTitleChange}
              />
              <TextAreaInput value={textAreaValue} onChange={handleChange} />
              <div className="m-3">
                <SubmitButton onClick={handleClick}>
                  {awaitingResult ? <div className="spinner" /> : "Analyse"}
                </SubmitButton>
              </div>
            </form>

            {report && <Report report={report} />}
          </div>
        </Main>
      </div>

      <Footer />
    </div>
  );
}
