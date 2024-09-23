"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle + " - REPLITECH - IT Services & Technology Next js Template";
  }, []);
};

export default SEO;