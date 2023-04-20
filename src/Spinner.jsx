import { Oval } from "react-loader-spinner";
export default function Spinner() {
  return (
    <div className="mx-auto">
      <Oval
        height={80}
        width={80}
        color="#eebbc3"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#c28f97"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </div>
  );
}
