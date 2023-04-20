import { AiOutlineCopy } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

export default function MeetInfo({ mId, pass, text, rcText }) {
  const handleMeetCopy = () => {
    navigator.clipboard.writeText(mId);

    toast.success("Meeting ID copied to clipboard!", {
      duration: 2000,
      id: mId,
    });
  };
  const handlePassCopy = () => {
    navigator.clipboard.writeText(pass);
    toast.success("Meeting Password copied to clipboard!", {
      duration: 2000,
      id: pass,
    });
  };
  const handlelinkCopy = () => {
    navigator.clipboard.writeText(text);
    toast.success("Meeting Link copied to clipboard!", {
      duration: 2000,
      id: text,
    });
  };
  const handlerclinkCopy = () => {
    navigator.clipboard.writeText(rcText);
    toast.success("Meeting Link copied to clipboard!", {
      duration: 2000,
      id: text,
    });
  };

  return (
    <div>
      <div className="mt-4">
        <Toaster />
      </div>
      <div class="relative mb-4 flex flex-wrap items-stretch justify-center">
        <input
          type="text"
          class="w-[80%] md:w-[40%]  rounded-l border border-solid border-neutral-300 bg-gray-300 px-3 py-[0.25rem] text-black font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:font-bold focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
          value={text}
          readOnly
          onClick={() => {
            window.open(
              text,
              "_blank" // <- This is what makes it open in a new window.
            );
          }}
        />
        <button
          class="z-[2] inline-block rounded-r bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normalb bg-gray-200 focus:z-[3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          type="button"
          onClick={handlelinkCopy}
        >
          <AiOutlineCopy size={18} />
        </button>
      </div>
      <div class="relative mb-4 flex flex-wrap items-stretch justify-center">
        <input
          type="text"
          class="w-[80%] md:w-[40%] rounded-l border border-solid border-neutral-300 bg-gray-300 px-3 py-[0.25rem] text-black font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:font-bold focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
          value={rcText}
          readOnly
        />
        <button
          class="z-[2] inline-block rounded-r bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normalb bg-gray-200 focus:z-[3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          type="button"
          onClick={handlerclinkCopy}
        >
          <AiOutlineCopy size={18} />
        </button>
      </div>
      <div class="relative mb-4 flex flex-wrap items-stretch justify-center">
        <input
          type="text"
          class="w-[80%] md:w-[40%] rounded-l border border-solid border-neutral-300 bg-gray-300 px-3 py-[0.25rem] text-black font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:font-bold focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
          value={mId}
          readOnly
        />
        <button
          class="z-[2] inline-block rounded-r bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normalb bg-gray-200 focus:z-[3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          type="button"
          onClick={handleMeetCopy}
        >
          <AiOutlineCopy size={18} />
        </button>
      </div>
      <div class="relative mb-4 flex flex-wrap items-stretch justify-center">
        <input
          type="text"
          class="w-[80%] md:w-[40%] rounded-l border border-solid border-neutral-300 bg-gray-300 px-3 py-[0.25rem] text-black font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:font-bold focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
          value={pass}
          readOnly
        />
        <button
          class="z-[2] inline-block rounded-r bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normalb bg-gray-200 focus:z-[3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          type="button"
          onClick={handlePassCopy}
        >
          <AiOutlineCopy size={18} />
        </button>
      </div>
    </div>
  );
}
