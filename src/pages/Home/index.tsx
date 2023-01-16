import { zodResolver } from "@hookform/resolvers/zod";
import { HandPalm, Play } from "phosphor-react";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { CyclesContext } from "../../contexts/CyclesContext";
import { Countdown } from "./components/Countdown";
import { NewCycleForm } from "./components/NewCycleForm";

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1),
  minutesAmount: z.number().min(1).max(60),
});

type newCycleFormData = z.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext);
  const newCycleForm = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: newCycleFormData) {
    createNewCycle(data);
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
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <button
            type="button"
            onClick={interruptCurrentCycle}
            className="flex items-center justify-center gap-2 bg-red-500 text-gray-100 w-full py-5 rounded-lg enabled:hover:bg-red-700 disabled:opacity-70 disabled:cursor-not-allowed text-base"
          >
            <HandPalm size={24} />
            Interromper
          </button>
        ) : (
          <button
            disabled={isSubmitEnabled}
            type="submit"
            className="flex items-center justify-center gap-2 bg-green-500 text-gray-100 w-full py-5 rounded-lg enabled:hover:bg-green-700 disabled:opacity-70 disabled:cursor-not-allowed text-base"
          >
            <Play size={24} />
            Começar
          </button>
        )}
      </form>
    </main>
  );
}
