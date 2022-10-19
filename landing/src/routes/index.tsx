import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { DownloadButton } from "~/components/DownloadButton";
import { FeatureItem } from "~/components/FeatureItem";
import { Footer } from "~/components/Footer";
import { Github } from "~/components/icons/Github";

export default component$(() => {
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-gray-50">
        {/* <!-- Hero --> */}
        <section className="flex flex-wrap items-center px-4 mx-auto w-full container pb-4 ">
          {/* <!-- Column-1 --> */}
          <div className="px-3 w-full lg:w-2/5">
            <div className="mx-auto mb-8 text-center lg:mx-0 lg:text-left">
              <h1 className="mb-4 text-5xl font-bold text-left lg:text-5xl  text-teal-800 leading-relaxeds">
                Beyojar
              </h1>
              <h2 className="mb-4 text-2xl text-left lg:text-3xl">
                An <span className="font-bold">open source</span> notes taking
                app to organize your life better
              </h2>
            </div>

            <div className=" items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <DownloadButton
                title="Download on the"
                subtitle="App Store"
                iconName="AppStore"
              />
              <DownloadButton
                title="Download on"
                subtitle="Google Play"
                iconName="GooglePlay"
              />
            </div>
          </div>

          {/* <!-- Column-2 --> */}
          <div className="px-3 mb-12 w-full lg:mb-0 lg:w-3/5">
            <div className="flex justify-center items-center">
              <img src="./productshot.png" alt="beyojar-product-shot" />
            </div>
          </div>
        </section>

        {/* <!-- Parallax Background --> */}
        <section
          className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center flex justify-center items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=880&q=80)",
          }}
        >
          <div className="flex items-center mt-20 mb-10 ">
            <h1 className="text-slate-900 text-5xl font-sans font-semibold drop-shadow-lg">
              Github
            </h1>
            <span className="h-full flex items-center ml-5 w-10">
              <Github />
            </span>
          </div>

          <span className="text-center font-bold my-20 text-slate-800">
            <a href="https://unsplash.com/photos/8Pm_A-OHJGg" target="_blank">
              <h2 className="text-2xl duration-300  hover:text-slate-500 drop-shadow-2xl">
                Source code
              </h2>
            </a>

            <hr className="my-4 border-slate-600" />

            <a href="https://unsplash.com/photos/8Pm_A-OHJGg" target="_blank">
              <h2 className="text-2xl duration-300 hover:text-slate-500 drop-shadow-2xl">
                Feature request
              </h2>
            </a>

            <hr className="my-4 border-slate-600" />

            <a href="https://unsplash.com/photos/8Pm_A-OHJGg" target="_blank">
              <h2 className="text-2xl duration-300 hover:text-slate-500 drop-shadow-2xl">
                Report bug
              </h2>
            </a>
          </span>
        </section>
      </main>

      {/* <!-- Section: Design Block --> */}
      <section className="mb-8 text-gray-800 container my-24  px-6 lg:px-32  mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-4/12 mb-6 md:mb-0 px-3">
            <h2 className="text-3xl font-bold mb-6">
              Why is it so<u className="text-teal-600"> great?</u>
            </h2>

            <p className="text-gray-500 mb-12">
              Beyojar has a number of features that makes it an awesome app to
              keep track of your notes
            </p>
          </div>

          <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 mb-6 mb-md-0 px-3">
            <div className="flex flex-wrap">
              <FeatureItem
                title="Open source"
                description="Absolute transparency in how the app works and encourages collaboration to continuously improve the app"
              />
              <FeatureItem
                title="Simple"
                description="A simple and familiar user interface to get you going in no time"
              />
              <FeatureItem
                title="Reliable"
                description="Tested for robustness to ensure that the the app is fully reliably"
              />
              <FeatureItem
                title="Privacy"
                description="Data persisted locally to ensure that your data fully secure"
              />
              <FeatureItem
                title="Light & Dark Themes"
                description="Support for for light and dark themes based on your preference"
              />
              <FeatureItem
                title="Keep your notes organized"
                description="Assign labels and colors in order to organize your notes better"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Beyojar",
};
