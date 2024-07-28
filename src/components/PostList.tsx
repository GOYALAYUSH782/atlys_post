import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Post2 from "./Post2";

export type PostListType = {
  className?: string;
};

const PostList: FunctionComponent<PostListType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCreatePostContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`self-stretch h-[697px] flex flex-col items-start justify-start pt-0 px-0 pb-52 box-border gap-[16px] max-w-full text-left text-lg text-silver font-inter mq450:h-auto mq450:pb-[88px] mq450:box-border mq1050:pb-[135px] mq1050:box-border ${className}`}
    >
      <div
        className="self-stretch rounded-lg bg-gray-200 box-border flex flex-col items-start justify-start py-6 px-[18px] gap-[16px] shrink-0 max-w-full cursor-pointer border-[2px] border-solid border-darkslategray"
        onClick={onCreatePostContainerClick}
      >
        <div className="w-[704px] h-[227px] relative rounded-lg bg-gray-200 box-border hidden max-w-full border-[2px] border-solid border-darkslategray" />
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
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-1">
          <button className="cursor-pointer [border:none] py-3 px-[38px] bg-dodgerblue-100 rounded flex flex-row items-start justify-start z-[1] hover:bg-dodgerblue-200">
            <div className="h-[43px] w-[111px] relative rounded bg-dodgerblue-100 hidden" />
            <div className="relative text-base font-medium font-inter text-white text-left inline-block min-w-[35px] z-[1]">
              Post
            </div>
          </button>
        </div>
      </div>
      <Post2
        userAvatar="/ellipse-2@2x.png"
        theresaWebb="Theresa Webb"
        minsAgo="5mins ago"
        prop="👋"
      />
      <Post2
        userAvatar="/ellipse-2-1@2x.png"
        theresaWebb="Marvin McKinney"
        minsAgo="8mins ago • Edited"
        prop="😞"
      />
    </div>
  );
};

export default PostList;
