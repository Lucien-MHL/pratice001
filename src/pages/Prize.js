import React, { useState } from "react";

const Prize = () => {
  const [prizeNum, setPrizeNum] = useState([1, 2, 3, 4, 4, 4, 5, 5, 5, 5]);
  const [getPrize, setGetPrize] = useState();
  const [record, setRecord] = useState([]);

  function printNowPrizeNum(arr) {
    let randomNum = Math.floor(Math.random() * arr.length);
    setGetPrize(arr[randomNum]);
    setRecord([...record, arr[randomNum]]);
    arr.splice(randomNum, 1);
    setPrizeNum(arr);
  }

  return (
    <div>
      <ul>
        目前獎項:
        <li className="ms-4">
          一獎: {prizeNum.filter((item) => item == 1).length}個
        </li>
        <li className="ms-4">
          二獎: {prizeNum.filter((item) => item == 2).length}個
        </li>
        <li className="ms-4">
          三獎: {prizeNum.filter((item) => item == 3).length}個
        </li>
        <li className="ms-4">
          四獎: {prizeNum.filter((item) => item == 4).length}個
        </li>
        <li className="ms-4">
          五獎: {prizeNum.filter((item) => item == 5).length}個
        </li>
      </ul>
      {prizeNum.length !== 0 ? (
        <button
          className="btn btn-primary ms-5"
          onClick={() => printNowPrizeNum(prizeNum)}
        >
          抽獎
        </button>
      ) : (
        <h3 className="ms-3">獎品已抽完</h3>
      )}
      {getPrize && <h4 className="ms-3 mt-3">恭喜抽中 {getPrize} 獎</h4>}

      <div className="ms-5 mt-3">
        <h5>抽獎紀錄:</h5>
        {record.map((msg) => (
          <p>{msg}獎</p>
        ))}
      </div>
    </div>
  );
};

export default Prize;
