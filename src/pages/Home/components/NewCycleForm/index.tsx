import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();
  return (
    <div className="w-full flex items-center justify-center gap-2 text-gray-100 text-[1.125rem] leading-[1.60rem] flex-wrap">
      <label htmlFor="task">Vou trabalhar em</label>
      <input
        type="text"
        id="task"
        list="tasklist-suggestions"
        placeholder="Dê um nome para o seu projeto"
        className="bg-transparent placeholder:text-gray-500 h-10 border-b-2 border-gray-500 text-lg font-bold px-2 flex-1 text-gray-500 focus:border-green-500 focus:ring-0"
        disabled={!!activeCycle}
        {...register("task")}
      />
      <datalist id="tasklist-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
      </datalist>
      <label htmlFor="minutesAmount">durante</label>
      <input
        type="number"
        id="minutesAmount"
        placeholder="00"
        className="bg-transparent placeholder:text-gray-500 h-10 border-b-2 border-gray-500 text-lg font-bold px-2 w-16 text-gray-500 focus:border-green-500 focus:ring-0"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </div>
  );
}
