import React from "react";
import { Helmet } from "react-helmet";

export default function SEO({ title, description }) {
  return (
    <Helmet htmlAttributes={{ lang: "fr" }} title={title}>
      <meta name="description" content={description} />
    </Helmet>
  );
}
