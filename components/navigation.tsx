import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/solid";

export const Navigation = () => {
  return (
    <div className={"flex flex-row space-x-16"}>
      <div>
        <button>
          <ArrowCircleLeftIcon className="h-10 w-10 text-black-500" />
        </button>
      </div>
      <div>Episode X</div>
      <div>
        <button>
          <ArrowCircleRightIcon className="h-10 w-10 text-black-500" />
        </button>
      </div>
    </div>
  );
};
