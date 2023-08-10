export default function Report({ report }) {
  return (
    <div className="result_area flex flex-col items-center text-center">
      <div
        className={"text-white font-extrabold text-xl tracking-tight underline"}
      >
        {report === "" && Result}
      </div>
      <p className={"report"}>{report}</p>
    </div>
  );
}
