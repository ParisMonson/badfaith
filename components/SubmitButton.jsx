export default function SubmitButton({ onClick, children, width, height }) {
  return (
    <button
      className='submit_btn w-40'
      onClick={onClick}
    >
      {children}
    </button >
  );
};


