import { useEffect, useState } from "react";
import { calculateTimeLeft } from "../../utils/utils";

export const Counter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
<div className="flex gap-4 mb-4 tracking-widest">
  <div className="flex flex-col items-center justify-center w-24">
    <span className="tracking-widest text-5xl font-extrabold text-gray-700 dark:text-gray-50 md:text-2.5xl">
      {String(timeLeft.days).padStart(2, '0')}
    </span>
    <span className="w-full mt-1 text-xs font-semibold text-center uppercase text-gray-700 dark:text-gray-50">
      Días
    </span>
  </div>
  <span className="text-4xl font-bold text-gray-700 dark:text-gray-50">:</span>
  <div className="flex flex-col items-center justify-center w-24">
    <span className="tracking-widest text-5xl font-extrabold text-gray-700 dark:text-gray-50 md:text-2.5xl">
      {String(timeLeft.hours).padStart(2, '0')}
    </span>
    <span className="w-full mt-1 text-xs font-semibold text-center uppercase text-gray-700 dark:text-gray-50">
      Horas
    </span>
  </div>
  <span className="text-4xl font-bold text-gray-700 dark:text-gray-50">:</span>
  <div className="flex flex-col items-center justify-center w-24">
    <span className="tracking-widest text-5xl font-extrabold text-gray-700 dark:text-gray-50 md:text-2.5xl">
      {String(timeLeft.minutes).padStart(2, '0')}
    </span>
    <span className="w-full mt-1 text-xs font-semibold text-center uppercase text-gray-700 dark:text-gray-50">
      Minutos
    </span>
  </div>
  <span className="text-4xl font-bold text-gray-700 dark:text-gray-50">:</span>
  <div className="flex flex-col items-center justify-center w-24">
    <span className="tracking-widest text-5xl font-extrabold text-gray-700 dark:text-gray-50 md:text-2.5xl">
      {String(timeLeft.seconds).padStart(2, '0')}
    </span>
    <span className="w-full mt-1 text-xs font-semibold text-center uppercase text-gray-700 dark:text-gray-50">
      Segundos
    </span>
  </div>
</div>


  );
};
