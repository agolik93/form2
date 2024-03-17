// @ts-nocheck
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import CountryList from "./Components/CountryList";

import { useContext, useState } from "react";
import Input from "./Components/Input";
import Saved from "./Components/Saved";

import ToggleButton from "./Components/ToggleButton";
import ThemeContext from "./Context";

const schema = z.object({
  email: z.string().email({ message: "Molimo unesite valjanu email adresu." }),
  name: z.string().min(3, { message: "Molimo unesite Vase ime." }),
  address: z.string().min(5, { message: "Molimo undesite valjanu adresu." }),
  payment: z
    .string()
    .nullable()
    .refine((value) => value !== null && value !== "", {
      message: "Odaberite nacin placanja",
    }),
  terms: z.boolean().refine((value) => value === true, {
    message: "Morate prihvatiti uvjete narudzbe.",
  }),
});

type FormFields = z.infer<typeof schema>;

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const [saved, setSaved] = useState<FormFields | null>(null);

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    setSaved(data);
    reset();
  };

  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="h-dvh flex flex-col justify-center items-center my-20">
      <ToggleButton />
      <div
        className={`flex flex-col justify-center h-min-3/4 max-h-full w-auto items-center border-2 border-black p-20 rounded-lg ${
          darkMode ? "bg-gray-700 text-white" : "bg-slate-300 text-black"
        }`}
      >
        <h1 className={`text-3xl font-bold ${darkMode ? "text-white" : ""}`}>
          Placanje:
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
          <Input
            errors={errors}
            register={register}
            id="email"
            placeholder="Unesite Vasu email adresu..."
            headline="Kontakt:"
          />

          <Input
            errors={errors}
            register={register}
            id="name"
            placeholder="Unesite Vase ime..."
            headline="Ime:"
          />

          <CountryList />

          <Input
            errors={errors}
            register={register}
            id="address"
            placeholder="Unesite Vasu adresu..."
            headline="Adresa:"
          />

          <div className="mb-5">
            <h3 className="text-xl font-bold mb-3">Nacin placanja: </h3>

            <div className="flex items-center mb-4">
              <input
                {...register("payment")}
                type="radio"
                id="kartica"
                value="kartica"
                className="w-4 h-4"
              />

              <label
                htmlFor="kartica"
                className="block ms-2  text-sm font-medium "
              >
                Karticno
              </label>
            </div>

            <div className="flex items-center ">
              <input
                {...register("payment")}
                type="radio"
                id="pouzece"
                value="pouzece"
                className="w-4 h-4"
              />
              <label
                htmlFor="pouzece"
                className="block ms-2  text-sm font-medium  "
              >
                Pouzece
              </label>
            </div>
            {errors.payment && (
              <div className="text-red-500">{errors.payment.message}</div>
            )}
          </div>

          <div className="mb-5">
            <input {...register("terms")} type="checkbox" />
            <label htmlFor="terms" className="mb-2 ms-2 text-sm font-medium ">
              Prihvacam uvjete narudzbe
            </label>

            {errors.terms && (
              <div className="text-red-500">{errors.terms.message}</div>
            )}
          </div>

          <button
            type="submit"
            className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-700 hover:bg-blue-800 "
          >
            Naruci
          </button>
        </form>
        {saved && <Saved saved={saved} />}
      </div>
    </div>
  );
};

export default App;
