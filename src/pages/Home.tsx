import { FunctionComponent } from "react";
import PostList from "../components/PostList";

const Home: FunctionComponent = () => {
  return (
    <div className="w-full h-screen relative bg-gray-400 overflow-hidden flex flex-col items-start justify-start pt-[69px] px-[370px] pb-0 box-border gap-[40px] leading-[normal] tracking-[normal] text-left text-9xl text-silver font-inter mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[20px] mq750:pl-[185px] mq750:pr-[185px] mq750:box-border">
      <div className="w-[580px] flex flex-col items-start justify-start gap-[12px] max-w-full">
        <a className="[text-decoration:none] relative font-medium text-[inherit] mq450:text-3xl">
          Hello Jane
        </a>
        <div className="self-stretch relative text-base leading-[150%] text-gray-100">
          How are you doing today? Would you like to share something with the
          community 🤗
        </div>
      </div>
      <PostList />
    </div>
  );
};

export default Home;
