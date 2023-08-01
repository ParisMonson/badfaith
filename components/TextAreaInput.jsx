import { useState } from 'react';

export default function TextAreaInput({ onChange, value }) {
  return (
    <textarea
      className="resize-none w-full h-24 text-black"
      value={value}
      onChange={onChange}
    />
  );
};
