import { set } from "mongoose";
import ReportHistoryList from "./ReportHistoryList";

export default function Sidebar({
  listItems,
  setReport,
  title = "Report History",
}) {
  return (
    <div className={"sidebar text-center border"}>
      <h1 className={"text-xl underline"}>{title}</h1>
      <ReportHistoryList reportHistory={listItems} setReport={setReport} />
    </div>
  );
}
