import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import store from "..";
import { setAuth } from "../authSlice";
import { setAuthLoading } from "../uiSlice";
var isInitial = true;
var baseUrl = "https://staging.devicecure.in";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: async (headers, { getState }) => {
      const token = localStorage.getItem("token");
      if (isInitial && token ) {
        isInitial = false;
        store.dispatch(setAuthLoading(true));
        const res = await fetch(`${baseUrl}/me`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data) {
          console.log("users info recieved : ", data);
          store.dispatch(setAuth({ ...data.data, access_token: token }));
        }
        store.dispatch(setAuthLoading(false));
      }
      const storageToken = localStorage.getItem("token");
      if (getState().auth.token || token) {
        headers.set("authorization", `Bearer ${token || storageToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ firebaseIdToken }) => ({
        url: "/auth/signin",
        method: "POST",
        body: { firebaseIdToken },
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "/auth/signup",
        method: "POST",
        body: credentials,
      }),
    }),
    getRepairData: builder.query({ query: () => "/data/repair" }),
    getAddress:builder.query({query:()=>"/address"})
  }),
});

export const { useLoginMutation, useRegisterMutation,useGetRepairDataQuery , useGetAddressQuery} = api;

export default api;
