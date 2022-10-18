import { zodResolver } from "@hookform/resolvers/zod";
import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1),
  minutesAmount: zod.number().min(5).max(60),
});

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  function handleCreateNewCycle(data: newCycleFormData) {
    console.log(data);
    reset();
  }

  const taskInput = watch("task");
  const isSubmitEnabled = !taskInput;

  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(handleCreateNewCycle)}
        className="flex flex-col items-center gap-14"
      >
        <div className="w-full flex items-center justify-center gap-2 text-gray-100 text-[1.125rem] leading-[1.60rem] flex-wrap">
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            type="text"
            id="task"
            list="tasklist-suggestions"
            placeholder="Dê um nome para o seu projeto"
            className="bg-transparent placeholder:text-gray-500 h-10 border-b-2 border-gray-500 text-lg font-bold px-2 flex-1 text-gray-500 focus:border-green-500 focus:ring-0"
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
            {...register("minutesAmount", { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </div>

        <div className="font-mono text-[10rem] leading-[8rem] flex gap-4">
          <span className="bg-gray-700 px-4 py-8 rounded-lg">0</span>
          <span className="bg-gray-700 px-4 py-8 rounded-lg">0</span>
          <span className="bg-transparent text-green-500 py-8 overflow-hidden">
            :
          </span>
          <span className="bg-gray-700 px-4 py-8 rounded-lg">0</span>
          <span className="bg-gray-700 px-4 py-8 rounded-lg">0</span>
        </div>
        <button
          disabled={isSubmitEnabled}
          type="submit"
          className="flex items-center justify-center gap-2 bg-green-500 text-gray-100 w-full py-5 rounded-lg enabled:hover:bg-green-700 disabled:opacity-70 disabled:cursor-not-allowed text-base"
        >
          <Play size={24} />
          Começar
        </button>
      </form>
    </main>
  );
}
