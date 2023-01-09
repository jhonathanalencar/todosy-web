import { json, redirect } from "react-router-dom";
import { AxiosError } from "axios";

import { api } from "../libs/axios";
import { ListType } from "../shared/types";

export function Home() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-4 p-2 md:p-4 flex flex-col gap-4 rounded bg-neutral-900 drop-shadow">
        <aside className="w-full p-4 rounded bg-neutral-700">
          <div>
            <div>Shopping</div>
          </div>
        </aside>
        <div className="w-full p-4 rounded bg-neutral-700">todos</div>
      </div>
    </div>
  );
}

export async function getListsQuery() {
  try {
    const { data } = await api.get<ListType[]>("/lists");

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
      if (error.response?.status === 401) {
        return redirect("/account/login");
      } else {
        throw json(error);
      }
    }
  }
}
