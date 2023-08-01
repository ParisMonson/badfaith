import { useState } from 'react';

export default function TextAreaInput({ onChange, value }) {
  return (
    <textarea
      className="input_box"
      value={value}
      onChange={onChange}
    />
  );
};
