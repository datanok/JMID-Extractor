export default function ProgressBar({ progressPercentage }) {
  return (
    <>
      <div class="flex justify-between mb-1">
        <span class="text-base font-medium text-[#eebbc3]  ">Converting..</span>
        <span class="text-sm font-medium text-[#eebbc3]  ">
          {progressPercentage} %
        </span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5">
        <div
          class="bg-[#eebbc3] h-2.5 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </>
  );
}
