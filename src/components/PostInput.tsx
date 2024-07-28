import { FunctionComponent, useCallback } from "react";
import CreatePost from "./CreatePost";
import Post1 from "./Post1";
import { useNavigate } from "react-router-dom";

export type PostInputType = {
  className?: string;
};

const PostInput: FunctionComponent<PostInputType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCloseButtonIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/home-login-modal");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-0 pr-[114px] pl-[119px] box-border relative shrink-0 max-w-full text-left text-lg text-silver font-inter mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[59px] mq825:pr-[57px] mq825:box-border ${className}`}
    >
      <CreatePost />
      <Post1 />
      <form className="m-0 self-stretch rounded-lg bg-gray-200 box-border flex flex-col items-start justify-start pt-4 pb-10 pr-4 pl-6 gap-[10px] max-w-full z-[5] border-[2px] border-solid border-darkgray mq825:pt-5 mq825:pb-[26px] mq825:box-border">
        <div className="w-[467px] h-[510px] relative rounded-lg bg-gray-200 box-border hidden max-w-full border-[2px] border-solid border-darkgray" />
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full mq450:gap-[20px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[52px] min-w-[226px] max-w-full mq450:flex-wrap mq450:gap-[26px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[171px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
                  <div className="relative text-sm tracking-[0.03em] font-medium font-inter text-dimgray text-center inline-block min-w-[60px] whitespace-nowrap z-[1]">
                    SIGN UP
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
                  <div className="relative text-lg font-semibold font-inter text-white text-center z-[1]">
                    Create an account to continue
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

        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-full mq450:gap-[20px]">
          <div className="w-[415px] h-[76px] flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[10px] max-w-full">
            <div className="relative text-sm font-medium font-inter text-silver text-left inline-block min-w-[69px] z-[1]">
              Email
            </div>
            <div className="self-stretch h-[46px] rounded box-border flex flex-row items-start justify-start p-3 max-w-full z-[1] border-[1.5px] border-solid border-darkslategray">
              <input
                className="w-[123px] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[19px] relative text-gray-100 text-left inline-block p-0"
                placeholder="Enter your email"
                type="email"
              />
              <div className="h-[46px] w-[418px] relative rounded box-border hidden max-w-full border-[1.5px] border-solid border-darkslategray" />
            </div>
          </div>
          <div className="w-[415px] h-[76px] flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[10px] max-w-full">
            <div className="relative text-sm font-medium font-inter text-silver text-left inline-block min-w-[69px] z-[1]">
              Username
            </div>
            <div className="self-stretch h-[46px] rounded box-border flex flex-row items-start justify-start p-3 max-w-full z-[1] border-[1.5px] border-solid border-darkslategray">
              <input
                className="w-[222px] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[19px] relative text-gray-100 text-left inline-block p-0"
                placeholder="Choose a preferred username"
                type="password"
              />
              <div className="h-[46px] w-[418px] relative rounded box-border hidden max-w-full border-[1.5px] border-solid border-darkslategray" />
            </div>
          </div>
          <div className="w-[415px] h-20 flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[10px] max-w-full">
            <div className="relative text-sm font-medium font-inter text-silver text-left inline-block min-w-[66px] z-[1]">
              Password
            </div>
            <div className="self-stretch h-[46px] rounded box-border flex flex-row items-start justify-between pt-3 pb-[11px] pr-[13px] pl-3 max-w-full gap-[20px] z-[1] border-[1.5px] border-solid border-darkslategray">
              <input
                className="w-[222px] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[19px] relative text-gray-100 text-left inline-block p-0"
                placeholder="Choose a strong password"
                type="password"
              />
              <div className="h-[46px] w-[418px] relative rounded box-border hidden max-w-full border-[1.5px] border-solid border-darkslategray" />
              <img
                className="h-5 w-5 relative object-contain z-[2]"
                alt=""
                src="/eye@2x.png"
              />
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] py-3 pr-5 pl-[21px] bg-dodgerblue-100 w-[415px] rounded flex flex-row items-start justify-center box-border max-w-full z-[1] hover:bg-dodgerblue-200"
            onClick={onCloseButtonIconClick}
          >
            <div className="h-[43px] w-[415px] relative rounded bg-dodgerblue-100 hidden max-w-full" />
            <a className="[text-decoration:none] relative text-base font-medium font-inter text-white text-left inline-block min-w-[70px] z-[1]">
              Continue
            </a>
          </button>
          <div
            className="relative text-sm font-medium font-inter text-left cursor-pointer z-[1]"
            onClick={onAlreadyHaveAnClick}
          >
            <span className="text-gray-100">{`Already have an account? `}</span>
            <span className="text-silver">Login →</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostInput;
