import React, { useState } from "react";

const Sum = () => {
  const [input, setInput] = useState(31415926);

  function inputHandler(e) {
    setInput(e.target.value);
  }

  function numberSum(num) {
    let result = 0;
    if (num % 2 == 0) {
      result = -num / 2;
    } else {
      result = num - Math.floor(num / 2);
    }
    return result;
  }

  return (
    <div className="container">
      <h1 className="my-5 text-center">加總公式為 1-2+3-4+5-6+.....+ / - N</h1>
      <input
        className="form-control my-5 mx-auto w-75"
        type="text"
        placeholder="輸入任意一正整數"
        onChange={inputHandler}
        value={input}
      />
      <h3 className="text-center">加總結果: {numberSum(input)}</h3>
    </div>
  );
};

export default Sum;
