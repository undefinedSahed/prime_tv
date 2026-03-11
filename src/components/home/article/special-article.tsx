import React from "react";

export default function SpecialArticle() {
  return (
    <section className="relative p-3 rounded-md h-full bg-[url('/images/bg-pattern.svg')] bg-cover bg-center bg-no-repeat z-10">
      <div className="absolute inset-0 w-full h-full opacity-60 bg-primary rounded-md -z-10"></div>
    </section>
  );
}
