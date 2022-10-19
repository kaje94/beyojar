import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div className="text-9xl">terms-and-conditions</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Beyojar: Terms & Conditions",
};
