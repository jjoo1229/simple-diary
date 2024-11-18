import "./HistoryView.css";
import PropTypes from "prop-types";

function HistoryView({ setView }) {
  const answers = JSON.parse(localStorage.getItem("diary") || "{}");
  // Object.keys(answers);
  // Object.values(answers);

  // Object.keys(answers).map((key) => {
  //   const value = answers[key];
  //   key, value;
  //   return (
  //     <div>
  //       {key}:{value}
  //     </div>
  //   );
  // });

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          className="back-btn"
          onClick={() => {
            // MainView 화면으로 전환
            setView("main");
          }}
        >
          &lt;
        </button>
        <h4>다이어리 기록</h4>
      </div>
      {Object.entries(answers).map(([key, value]) => {
        return (
          <div className="diary-item">
            <div className="diary-date">{key}일</div>
            <div>{value}</div>
          </div>
        );
      })}
    </>
  );
}

HistoryView.propTypes = {
  setView: PropTypes.string.isRequired,
};

export default HistoryView;
