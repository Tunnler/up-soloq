export type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  
  export const calculateTimeLeft = () => {
    const targetDate = new Date('2024-08-12T20:00:00-05:00'); // Hora de Perú (GMT-5)
    const difference = targetDate.getTime() - new Date().getTime();
  
    let timeLeft: TimeLeft = {} as TimeLeft;
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
  
    return timeLeft;
  };
  
  