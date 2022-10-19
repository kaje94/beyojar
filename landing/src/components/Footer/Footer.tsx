import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer className="bg-gray-800  w-full">
      <div className="pt-2">
        <div className="flex justify-between pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl">
          <div className="mt-2">© 2022 Copyright: Beyojar</div>
          <div className="mt-2">Terms & Conditions</div>
        </div>
      </div>
    </footer>
  );
});
