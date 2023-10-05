export default function Report({ report }) {
  return (
    <div>
      <div
        className={
          "text-white font-extrabold text-5xl tracking-tight underline mb-4"
        }
      >
        Badfaith Report
      </div>
      <div className="result_area flex flex-col items-center text-center border border-gray-300 p-4 shadow-lg">
        <p className={"report"}>{report}</p>
      </div>
    </div>
  );
}
