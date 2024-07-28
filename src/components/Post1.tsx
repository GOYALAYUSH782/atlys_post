import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Post1Type = {
  className?: string;

  /** Style props */
  commentCountBottom?: CSSProperties["bottom"];
};

const Post1: FunctionComponent<Post1Type> = ({
  className = "",
  commentCountBottom,
}) => {
  const postStyle: CSSProperties = useMemo(() => {
    return {
      bottom: commentCountBottom,
    };
  }, [commentCountBottom]);

  return (
    <div
      className={`w-full !m-[0] absolute right-[-4px] bottom-[11px] left-[0px] rounded bg-gray-200 box-border flex flex-col items-start justify-start pt-6 px-5 pb-[23px] gap-[12px] text-left text-base text-silver font-inter border-[2px] border-solid border-darkslategray ${className}`}
      style={postStyle}
    >
      <div className="w-[704px] h-[254px] relative rounded bg-gray-200 box-border hidden max-w-full border-[2px] border-solid border-darkslategray" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full">
          <img
            className="h-11 w-11 relative rounded-[50%] object-cover min-h-[44px] z-[1]"
            loading="lazy"
            alt=""
            src="/ellipse-2@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[367px] max-w-full mq1425:min-w-full">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative inline-block min-w-[110px] z-[1]">
                Theresa Webb
              </div>
              <div className="relative text-sm font-medium text-gray-100 inline-block min-w-[70px] z-[1]">
                5mins ago
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <img
              className="w-5 h-5 relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/dots-horizontal@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-gray-300 flex flex-row items-start justify-start pt-[15px] px-4 pb-[19px] box-border gap-[16px] max-w-full z-[1] text-lg text-black lg:flex-wrap">
          <div className="h-[107px] w-[660px] relative rounded-lg bg-gray-300 hidden max-w-full" />
          <div className="h-12 w-12 relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gray-200 w-full h-full z-[2]" />
            <div className="absolute top-[15px] left-[15px] font-medium inline-block min-w-[21px] z-[3]">
              👋
            </div>
          </div>
          <div className="w-[551px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full text-base text-gray-100">
            <div className="self-stretch relative leading-[150%] z-[2]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-0.5 text-sm text-gray-100">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img
            className="h-5 w-5 relative object-cover min-h-[20px] z-[1]"
            loading="lazy"
            alt=""
            src="/chat-bubble@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative font-medium inline-block min-w-[92px] z-[1]">
              24 comments
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post1;
