export default function TextAreaInput({ onChange, value }) {
  return (
    <textarea
      className="input_box"
      placeholder="Paste the main body of the article here..."
      value={value}
      onChange={onChange}
    />
  );
}
