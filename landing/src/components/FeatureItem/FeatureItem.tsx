import { component$ } from "@builder.io/qwik";

interface Props {
  /** Title of the feature */
  title: string;
  /** Description of the feature */
  description: string;
}

/** Component to display each feature of the app */
export const FeatureItem = component$(({ title, description }: Props) => {
  return (
    <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
      <div className="flex">
        <div className="grow ml-4 px-10">
          <p className="font-bold mb-1">{title}</p>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
});
