import { useEffect, useState } from "react";
import { calculateTimeLeft } from "../../utils/utils";

export const Counter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
<div className="flex gap-2 mb-4 tracking-widest justify-center">
  <div className="flex flex-col items-center justify-center w-16 sm:w-24">
    <span className="tracking-widest text-3xl sm:text-5xl font-extrabold text-gray-700 dark:text-gray-50">
      {String(timeLeft.days).padStart(2, '0')}
    </span>
    <span className="w-full mt-1 text-[10px] sm:text-xs font-semibold text-center uppercase text-gray-700 dark:text-gray-50">
      Días
    </span>
  </div>
  <span className="text-3xl sm:text-4xl font-bold text-gray-700 dark:text-gray-50">:</span>
  <div className="flex flex-col items-center justify-center w-16 sm:w-24">
    <span className="tracking-widest text-3xl sm:text-5xl font-extrabold text-gray-700 dark:text-gray-50">
      {String(timeLeft.hours).padStart(2, '0')}
    </span>
    <span className="w-full mt-1 text-[10px] sm:text-xs font-semibold text-center uppercase text-gray-700 dark:text-gray-50">
      Horas
    </span>
  </div>
  <span className="text-3xl sm:text-4xl font-bold text-gray-700 dark:text-gray-50">:</span>
  <div className="flex flex-col items-center justify-center w-16 sm:w-24">
    <span className="tracking-widest text-3xl sm:text-5xl font-extrabold text-gray-700 dark:text-gray-50">
      {String(timeLeft.minutes).padStart(2, '0')}
    </span>
    <span className="w-full mt-1 text-[10px] sm:text-xs font-semibold text-center uppercase text-gray-700 dark:text-gray-50">
      Minutos
    </span>
  </div>
  <span className="text-3xl sm:text-4xl font-bold text-gray-700 dark:text-gray-50">:</span>
  <div className="flex flex-col items-center justify-center w-16 sm:w-24">
    <span className="tracking-widest text-3xl sm:text-5xl font-extrabold text-gray-700 dark:text-gray-50">
      {String(timeLeft.seconds).padStart(2, '0')}
    </span>
    <span className="w-full mt-1 text-[10px] sm:text-xs font-semibold text-center uppercase text-gray-700 dark:text-gray-50">
      Segundos
    </span>
  </div>
</div>



  );
};
