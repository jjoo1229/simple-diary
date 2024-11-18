import "./MainView.css";
import PropTypes from "prop-types";

function MainView({ setView }) {
  return (
    <>
      <div className="header">
        <div>(오늘 날짜)</div>
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
      <div className="question">(질문)</div>
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
