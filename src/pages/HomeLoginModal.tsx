import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import Post from "../components/Post";

const HomeLoginModal: FunctionComponent = () => {
  return (
    <div className="w-full h-screen relative bg-gray-400 overflow-hidden flex flex-col items-start justify-start pt-[69px] px-[370px] pb-0 box-border gap-[40px] leading-[normal] tracking-[normal] text-left text-9xl text-silver font-inter mq450:pl-5 mq450:pr-5 mq450:box-border mq825:gap-[20px] mq825:pl-[185px] mq825:pr-[185px] mq825:box-border">
      <div className="w-[580px] flex flex-col items-start justify-start gap-[12px] max-w-full">
        <a className="[text-decoration:none] relative font-medium text-[inherit] mq450:text-3xl">
          Hello Jane
        </a>
        <div className="self-stretch relative text-base leading-[150%] text-gray-100">
          How are you doing today? Would you like to share something with the
          community 🤗
        </div>
      </div>
      <section className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(8px)] bg-gray-500 z-[4]" />
      <div className="self-stretch h-[697px] flex flex-col items-start justify-start pt-0 px-0 pb-[212px] box-border gap-[16px] max-w-full mq450:h-auto mq450:pb-[90px] mq450:box-border mq825:pb-[138px] mq825:box-border">
        <FrameComponent />
        <Post />
      </div>
    </div>
  );
};

export default HomeLoginModal;
