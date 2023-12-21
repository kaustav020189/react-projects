import "./App.css";
import * as S from "./components/styled/ClockHands";
import useTime from "./custom-hooks/useTime";

function App() {
  const time = useTime();

  return (
    <div className="App">
      <h3>Analog Clock Using React + Styled Components</h3>
      <S.Clock>
        <S.HourHand rotation={time.hours} />
        <S.MinuteHand rotation={time.minutes} />
        <S.SecondHand rotation={time.seconds} />
      </S.Clock>
    </div>
  );
}

export default App;
