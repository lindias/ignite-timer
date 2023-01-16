import { differenceInSeconds } from "date-fns";
import { useContext, useEffect } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    amountSecondsPassed,
    markCycleAsFinished,
    setSecondsPassed,
  } = useContext(CyclesContext);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  useEffect(() => {
    let interval: number;
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate)
        );

        if (secondsDifference >= totalSeconds) {
          markCycleAsFinished();
          setSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setSecondsPassed(secondsDifference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, totalSeconds, activeCycleId]);

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - ${activeCycle.task}`;
    } else {
      document.title = "Ignite Timer";
    }
  }, [minutes, seconds, activeCycle, markCycleAsFinished]);

  return (
    <div className="font-mono text-[10rem] leading-[8rem] flex gap-4">
      <span className="bg-gray-700 px-4 py-8 rounded-lg">{minutes[0]}</span>
      <span className="bg-gray-700 px-4 py-8 rounded-lg">{minutes[1]}</span>
      <span className="bg-transparent text-green-500 py-8 overflow-hidden">
        :
      </span>
      <span className="bg-gray-700 px-4 py-8 rounded-lg">{seconds[0]}</span>
      <span className="bg-gray-700 px-4 py-8 rounded-lg">{seconds[1]}</span>
    </div>
  );
}
