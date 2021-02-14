import React from "react";
import axios from "axios";
import {
  useQuery,
  // useQueryClient
} from "react-query";
import { ReactTable } from "./ReactTable";

// const queryClient = useQueryClient();

export const ReactTableContainer = () => {
  const { isLoading, error, data } = useQuery("fetchAllPeople", () =>
    axios("https://my.api.mockaroo.com/my_saved_schema.json?key=b89539e0"),
  );

  return (
    <div>
      {error && <div>Something went wrong ...</div>}

      {isLoading ? <div>Загружаем данные о пользователях ...</div> : <ReactTable data={data.data} />}
    </div>
  );
};
