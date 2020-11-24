import React from "react";
import { Helmet } from "react-helmet";

export default function SEO({ title, description }) {
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={title}>
      <meta name="description" content={description} />
    </Helmet>
  );
}
