import React from "react";
import Layout from "../components/Layout";
import BlogSection from "../components/homeComponent/Blog/BlogSection";
export default function BlogShow() {
  return <BlogSection />;
}

BlogShow.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
