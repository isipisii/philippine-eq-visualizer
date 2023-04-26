import { BarLoader } from "react-spinners";

const Load = ({ loading }) => {

  return (
    <div className="bg-[#272829] h-[100vh] w-[100vw] flex items-center justify-center">
      <BarLoader
        color="white"
        loading={loading}
        size={40}
        data-testid="loader"
      />
    </div>
  );
};

export default Load;
