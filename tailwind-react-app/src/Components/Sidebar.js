import { useEffect, useRef, useState } from "react";
import Button from "./UI/Button";

const Sidebar = () => {
  const [counter, setCounter] = useState(0);

  const prevCounterVal = useRef(0);

  useEffect(() => {
    /**
     * This effect was created to store the current updated value of counter,
     * so that it can be used in the next render to do a comparison with the then current value of counter (and check if the counter increased or decreased)
     * SO HOW DOES IT WORK ?
     * 1. Initially both the counter and the ref (prevCounterVal.current) are zero after the first render (page load)
     * 2. Now when I click the increase or decrease button, the useState method setCounter() runs and updates the value of counter.
     * 3. Since value of counter changes, this useEffect will run, because counter is set as a dependency.
     * 4. However, at this point, the useEffect has still not run (because useEffect runs after rendering).
     * 5. So, WHEN THE component JSX re-renders (because state was updated), THE VALUE OF counter is now 1, BUT THE VALUE OF the ref is still 0
     * 6. Which means we now have a past and present value to compare.
     * 7. The comparison is done during rendering, and the appropriate output is shown in the below JSX (<p> tag showing counter value decreased or increased)
     * 8. Finally, after the rendering, useEffect runs and updates the value of the ref. Both counter and the ref are now = 1.
     */
    // console.log(prevCounterVal.current);
    // console.log(counter);
    prevCounterVal.current = counter;
  }, [counter]);

  return (
    <div className="w-1/3 p-3 h-full bg-slate-50">
      <Button
        buttonStyle="green"
        buttonType="button"
        buttonTitle="Increment"
        onClick={() => {
          setCounter((prevCounter) => prevCounter + 1); // prevState++ doesn't work, because prevState is being determined automatically by React and is immutable
        }}
      ></Button>
      <span className="p-2"></span>
      <Button
        buttonStyle="red"
        buttonType="button"
        buttonTitle="Decrement"
        onClick={() => {
          setCounter((prevCounter) => prevCounter - 1);
        }}
      ></Button>
      <div className="w-full my-3 p-3 pb-0 h-40 bg-sky-100">
        <p className="text-5xl mb-5">{counter}</p>
        {counter > 0 && (
          <p className="text-xl">
            The counter value{" "}
            {prevCounterVal.current > counter ? "decreased" : "increased"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
