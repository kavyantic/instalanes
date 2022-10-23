import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import store from "..";
import { setAuth } from "../authSlice";
import { setAuthLoading } from "../uiSlice";
var isInitial = true;
var baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: async (headers, { getState }) => {
      console.log("headers initalized in rtk");
      const id = localStorage.getItem("id");
      const token = localStorage.getItem("token");
      if (isInitial && token && id) {
        isInitial = false;
        store.dispatch(setAuthLoading(true));
        console.log(process.env);
        const res = await fetch(`${baseUrl}/api/users/${id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data && data.data) {
          console.log("users info recieved : ", data);
          store.dispatch(setAuth({ ...data.data, access_token: token }));
        }
        store.dispatch(setAuthLoading(false));


      }
      // const storageToken = localStorage.getItem("token");
      if (getState().auth.token || token) {
        headers.set("authorization", `Bearer ${token || storageToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({firebaseIdToken}) => ({
        url: "/api/v1/auth/signin",
        method: "POST",
        body: {firebaseIdToken},
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "api/v1/auth/signup",
        method: "POST",
        body: {  role: "user", ...credentials },
      }),
    }),
    createRepairOrder: builder.mutation({
      query: (credentials) => ({
        url: "api/repairing-orders",
        method: "POST",
        body: credentials,
      }),
    }),
    getUser: builder.query({
      query: () => {
        const id = localStorage.getItem("id");
        const token = localStorage.getItem("token");
        return {
          url: `/api/users/${id}`,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getRepairData: builder.query({ query: () => "api/repair-booking-data" }),
    getAddress: builder.query({ query: () => "/api/Address" }),
    addAddress: builder.mutation({
      query: (address) => ({
        url: "api/Address",
        method: "POST",
        body: address,
      }),
    }),
    getScreenProtectionPlan: builder.query({
      query: () => "api/screen-protection-plans",
    }),
    placeScreenProtectionOrder: builder.mutation({
      query: (order) => ({
        url: "api/screen-protection-orders",
        method: "POST",
        body: order,
      }),
    }),
    verifyScreenProtectionOrder: builder.mutation({
      query: (verify) => ({
        url: "api/screen-protection-orders/verify-signature",
        method: "POST",
        body: verify,
      }),
    }),
    getMyRepairOrders: builder.query({
      query: () => "api/v2/repairing-orders",
    }),
    getMyProtectionOrders: builder.query({
      query: () => "api/screen-protection-orders",
    }),
    getProtectionOrderById: builder.query({
      query: (id) => `api/screen-protection-orders/${id}`,
    }),
  }),
});

export const {
  useGetMyRepairOrdersQuery,
  useGetMyProtectionOrdersQuery,
  useLoginMutation,
  useRegisterMutation,
  useGetRepairDataQuery,
  useGetAddressQuery,
  useAddAddressMutation,
  useGetUserQuery,
  useCreateRepairOrderMutation,
  useGetScreenProtectionPlanQuery,
  usePlaceScreenProtectionOrderMutation,
  useVerifyScreenProtectionOrderMutation,
  useGetProtectionOrderByIdQuery,
} = api;

export const { verifyScreenProtectionOrder } = api.endpoints;
export default api;
