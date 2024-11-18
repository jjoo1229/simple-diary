import "./MainView.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function MainView({ setView }) {
  const [questions, setQuestions] = useState();
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 0월부터 시작하므로 +1해준다
  const date = now.getDate();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/hackurity01/simple-diary/main/src/questions.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuestions(data);
      });
  }, []);

  if (!questions) {
    return null;
  }

  return (
    <>
      <div className="header">
        <div>
          {year}년 {month}월 {date}일
        </div>
        <div>
          <button
            className="history-btn"
            onClick={() => {
              // HistoryView 화면으로 전환
              setView("history");
            }}
          >
            기록 보기
          </button>
        </div>
      </div>
      <div className="question">{questions[date]}</div>
      <div className="content">
        <textarea
          onChange={() => {
            console.log("onChange");
          }}
        />
      </div>
    </>
  );
}

MainView.propTypes = {
  setView: PropTypes.string.isRequired,
};

export default MainView;
