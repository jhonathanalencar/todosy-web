import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AxiosError } from "axios";

import { api } from "../libs/axios";

const signUpFormSchema = z
  .object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.string().email(),
    password: z.string().min(6),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  });

type SignUpFormInputs = z.infer<typeof signUpFormSchema>;

const inputGroupStyles = "flex flex-col gap-1 w-full";
const labelStyles = "text-lg text-neutral-200 font-semibold";
const inputStyles =
  "h-12 px-4 rounded bg-neutral-900 text-neutral-100 placeholder:text-neutral-400 font-semibold text-base outline-none focus:outline-primary-400";

export function SignUpForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormInputs>({
    resolver: zodResolver(signUpFormSchema),
    mode: "onSubmit",
  });

  async function handleSignUp(data: SignUpFormInputs) {
    try {
      setErrorMessage("");

      await api.post("/users", data);

      reset();
      navigate("/account/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        setErrorMessage(error.response?.data?.error);
      } else {
        setErrorMessage("Something went wrong. Please try later.");
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSignUp)}
      className="flex flex-col justify-center w-full gap-4 max-w-2xl p-4 rounded drop-shadow-sm bg-neutral-600"
    >
      <div>
        <h1 className="text-3xl font-bold text-neutral-100">Sign Up</h1>
        <p className="text-base font-medium text-neutral-300">
          Already have an account?{" "}
          <Link
            to="/account/login"
            className="underline text-primary-300 hover:text-primary-400 transition duration-300 rounded focus:text-primary-400"
          >
            Sign In
          </Link>
        </p>
      </div>

      {errorMessage.length > 0 && (
        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
      )}
      <div className={inputGroupStyles}>
        <label htmlFor="name" className={labelStyles}>
          Name
        </label>
        <input
          className={inputStyles}
          id="name"
          type="text"
          placeholder="Jennie"
          autoComplete="off"
          required
          disabled={isSubmitting}
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 font-semibold text-base">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className={inputGroupStyles}>
        <label htmlFor="email" className={labelStyles}>
          Email
        </label>
        <input
          className={inputStyles}
          id="email"
          type="email"
          placeholder="jeenie@email.com"
          autoComplete="off"
          required
          disabled={isSubmitting}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 font-semibold text-base">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className={inputGroupStyles}>
        <label htmlFor="password" className={labelStyles}>
          Password
        </label>
        <input
          className={inputStyles}
          id="password"
          type="password"
          placeholder="******"
          required
          disabled={isSubmitting}
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 font-semibold text-base">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className={inputGroupStyles}>
        <label htmlFor="confirmPassword" className={labelStyles}>
          Confirm Password
        </label>
        <input
          className={inputStyles}
          id="confirmPassword"
          type="password"
          placeholder="******"
          required
          disabled={isSubmitting}
          {...register("passwordConfirmation")}
        />
        {errors.passwordConfirmation && (
          <p className="text-red-500 font-semibold text-base">
            {errors.passwordConfirmation.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-14 mt-6 text-lg uppercase font-bold text-neutral-200 bg-secondary-500 hover:bg-secondary-600 rounded transition duration-300 outline-none focus:outline-primary-400 focus:bg-secondary-600"
      >
        Sign Up
      </button>
    </form>
  );
}
