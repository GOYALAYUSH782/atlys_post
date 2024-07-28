import { FunctionComponent, useCallback } from "react";
import CreatePost from "./CreatePost";
import Post1 from "./Post1";
import { useNavigate } from "react-router-dom";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onCloseButtonIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onNotRegisteredYetClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-[37px] pb-7 pr-[114px] pl-[119px] box-border relative shrink-0 max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pt-6 mq825:pb-5 mq825:pr-[57px] mq825:pl-[59px] mq825:box-border ${className}`}
    >
      <CreatePost divTop="0px" />
      <Post1 commentCountBottom="-4px" />
      <form className="m-0 self-stretch rounded-lg bg-gray-200 box-border flex flex-col items-start justify-start pt-7 pb-10 pr-4 pl-6 gap-[10px] max-w-full z-[5] border-[2px] border-solid border-darkgray mq450:pt-5 mq450:pb-[26px] mq450:box-border">
        <div className="w-[467px] h-[424px] relative rounded-lg bg-gray-200 box-border hidden max-w-full border-[2px] border-solid border-darkgray" />
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full mq450:gap-[20px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[52px] min-w-[226px] max-w-full mq450:flex-wrap mq450:gap-[26px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[171px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
                  <div className="relative text-sm tracking-[0.03em] font-medium font-inter text-dimgray text-center inline-block min-w-[60px] whitespace-nowrap z-[1]">
                    Welcome back
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
                  <div className="relative text-lg font-semibold font-inter text-white text-center z-[1]">
                    Login to your account
                  </div>
                </div>
              </div>
            </div>
            <img
              className="h-8 w-8 relative object-contain cursor-pointer z-[1]"
              loading="lazy"
              alt=""
              src="/close-button@2x.png"
              onClick={onCloseButtonIconClick}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-between gap-[20px] mq825:flex-wrap">
          <div className="w-[415px] h-[76px] flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[10px] max-w-full">
            <div className="relative text-sm font-medium font-inter text-silver text-left inline-block min-w-[69px] z-[1]">
              Email or Username
            </div>
            <div className="self-stretch h-[46px] rounded box-border flex flex-row items-start justify-start p-3 max-w-full z-[1] border-[1.5px] border-solid border-darkslategray">
              <input
                className="w-[123px] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[19px] relative text-gray-100 text-left inline-block p-0"
                placeholder="Enter your email or username"
                type="text"
              />
              <div className="h-[46px] w-[418px] relative rounded box-border hidden max-w-full border-[1.5px] border-solid border-darkslategray" />
            </div>
          </div>
          <div className="w-[415px] flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="self-stretch h-[70px] flex flex-col items-start justify-start gap-[10px] max-w-full mq450:h-auto">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <div className="relative text-sm font-medium font-inter text-silver text-left inline-block min-w-[66px] z-[1]">
                  Password
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="relative text-xs font-medium font-inter text-silver text-right inline-block min-w-[103px] z-[1]">
                    Forgot password?
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[46px] rounded box-border flex flex-row items-start justify-between pt-3 px-3 pb-[11px] max-w-full gap-[20px] z-[1] border-[1.5px] border-solid border-darkslategray">
                <input
                  className="w-[156px] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[19px] relative text-gray-100 text-left inline-block p-0"
                  placeholder="Enter your password"
                  type="text"
                />
                <div className="h-[46px] w-[418px] relative rounded box-border hidden max-w-full border-[1.5px] border-solid border-darkslategray" />
                <img
                  className="h-5 w-5 relative object-contain z-[2]"
                  alt=""
                  src="/eye1@2x.png"
                />
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] py-3 px-5 bg-dodgerblue-100 self-stretch rounded flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[1] hover:bg-dodgerblue-200"
              onClick={onCloseButtonIconClick}
            >
              <div className="h-[43px] w-[415px] relative rounded bg-dodgerblue-100 hidden max-w-full" />
              <div className="relative text-base font-medium font-inter text-white text-left inline-block min-w-[79px] z-[1]">
                Login now
              </div>
            </button>
          </div>
          <div
            className="relative text-sm font-medium font-inter text-left cursor-pointer z-[1]"
            onClick={onNotRegisteredYetClick}
          >
            <span className="text-gray-100">{`Not registered yet? `}</span>
            <span className="text-silver">Register →</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FrameComponent;
