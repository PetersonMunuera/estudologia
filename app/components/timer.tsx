import Image from "next/image";
import clockIcon from "@/app/icons/clock.svg";

interface TimerProps {
  secondsPassed: number
}

export function Timer({ secondsPassed }: TimerProps) {
  const hoursAmount = Math.floor(secondsPassed / 3600)
  const minutesAmount = Math.floor(secondsPassed / 60)
  const secondsAmount = secondsPassed % 60

  const hours = String(hoursAmount).padStart(2, '0')
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  return (
    <div className="flex gap-2 py-2 px-5 border border-gray-500 rounded-[10px] ml-auto">
      <Image src={clockIcon} alt="Relógio" />
      <div className="flex flex-wrap text-sm leading-normal content-center">
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}
