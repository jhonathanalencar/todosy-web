import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AxiosError } from "axios";

import { api } from "../libs/axios";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginFormInputs = z.infer<typeof loginFormSchema>;

const inputGroupStyles = "flex flex-col gap-1 w-full";
const labelStyles = "text-lg text-neutral-200 font-semibold";
const inputStyles =
  "h-12 px-4 rounded bg-neutral-900 text-neutral-100 placeholder:text-neutral-400 font-semibold text-base outline-none focus:outline-primary-400";

export function LoginForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const origin = location.state;
  const from = origin?.from?.pathname ?? "/account";

  const errorMessageRef = useRef<HTMLParagraphElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setFocus,
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
    mode: "onSubmit",
  });

  useEffect(() => {
    setFocus("email");
  }, []);

  async function handleLogin(data: LoginFormInputs) {
    try {
      setErrorMessage("");

      const response = await api.post("/auth", data);

      console.log(response);
      reset();
      navigate(from, { replace: true });
    } catch (error) {
      if (error instanceof AxiosError) {
        if (!error.response) {
          setErrorMessage("No Server Response");
        } else {
          setErrorMessage(error.response.data?.error);
        }
      } else {
        setErrorMessage("Login Failed");
      }

      errorMessageRef.current?.focus();
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col justify-center w-full gap-4 max-w-xl p-4 rounded drop-shadow-sm bg-neutral-600"
    >
      <div>
        <h1 className="text-3xl font-bold text-neutral-100">Sign Up</h1>
        <p className="text-base font-medium text-neutral-300">
          Don&apos;t have an account yet?{" "}
          <Link
            to="/account/register"
            className="underline text-primary-300 hover:text-primary-400 transition duration-300 rounded focus:text-primary-400"
          >
            Sign Up
          </Link>
        </p>
      </div>

      {errorMessage.length > 0 && (
        <p
          ref={errorMessageRef}
          aria-live="assertive"
          className="text-red-500 font-bold text-lg"
        >
          {errorMessage}
        </p>
      )}

      <div className={inputGroupStyles}>
        <label className={labelStyles} htmlFor="email">
          Email
        </label>
        <input
          className={inputStyles}
          id="email"
          type="email"
          autoComplete="off"
          placeholder="jennie@email.com"
          required
          aria-invalid={errors.email ? true : false}
          aria-describedby="emailnote"
          disabled={isSubmitting}
          {...register("email")}
        />
        {errors.email && (
          <p id="emailnote" className="text-red-500 font-semibold text-base">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className={inputGroupStyles}>
        <label className={labelStyles} htmlFor="password">
          Password
        </label>
        <input
          className={inputStyles}
          id="password"
          type="password"
          placeholder="******"
          required
          aria-invalid={errors.password ? true : false}
          aria-describedby="passwordnote"
          disabled={isSubmitting}
          {...register("password")}
        />
        {errors.password && (
          <p id="passwordnote" className="text-red-500 font-semibold text-base">
            {errors.password.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-14 mt-6 text-lg uppercase font-bold text-neutral-200 bg-secondary-500 hover:bg-secondary-600 rounded transition duration-300 outline-none focus:outline-primary-400 focus:bg-secondary-600"
      >
        Sign In
      </button>
    </form>
  );
}
