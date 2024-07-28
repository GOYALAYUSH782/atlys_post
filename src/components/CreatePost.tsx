import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CreatePostType = {
  className?: string;

  /** Style props */
  divTop?: CSSProperties["top"];
};

const CreatePost: FunctionComponent<CreatePostType> = ({
  className = "",
  divTop,
}) => {
  const createPostStyle: CSSProperties = useMemo(() => {
    return {
      top: divTop,
    };
  }, [divTop]);

  return (
    <div
      className={`w-full !m-[0] absolute top-[6px] right-[-4px] left-[0px] rounded bg-gray-200 box-border flex flex-col items-start justify-start py-6 px-[18px] gap-[14px] text-left text-lg text-silver font-inter border-[2px] border-solid border-darkslategray ${className}`}
      style={createPostStyle}
    >
      <div className="w-[704px] h-[223px] relative rounded bg-gray-200 box-border hidden max-w-full border-[2px] border-solid border-darkslategray" />
      <div className="relative font-medium inline-block min-w-[101px] z-[1]">
        Create post
      </div>
      <div className="self-stretch rounded-lg bg-gray-300 flex flex-row items-start justify-start py-[15px] px-4 box-border gap-[16px] max-w-full z-[1] text-black mq450:flex-wrap">
        <div className="h-[78px] w-[660px] relative rounded-lg bg-gray-300 hidden max-w-full" />
        <div className="h-12 w-12 relative">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gray-200 w-full h-full z-[1]" />
          <div className="absolute top-[15px] left-[15px] font-medium inline-block min-w-[21px] z-[2]">
            💬
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0 text-base text-gray-100">
          <div className="relative leading-[100%] z-[1]">
            How are you feeling today?
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-1 text-base text-white">
        <div className="rounded bg-dodgerblue-100 flex flex-row items-start justify-start py-3 px-[43px] z-[1]">
          <div className="h-[43px] w-[120px] relative rounded bg-dodgerblue-100 hidden" />
          <div className="relative inline-block min-w-[34px] z-[1]">Post</div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
