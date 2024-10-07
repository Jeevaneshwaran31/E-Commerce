import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Icons, IconType } from "../components/Icons";
import { HOME } from "../constants/constants";

function Payment() {
  const navigate = useNavigate();
  return (
    <div className="relative top-20 flex justify-center">
      <div className="w-[670px] flex flex-col items-center">
        <Icons type={IconType.CircleCheckIcon} />
        <p className="text-5xl font-bold">Payment successful</p>
        <p className="text-2xl text-gray-500 text-center mt-3">
          Your order has been confirmed and is being processed. Thank you for shopping with us!
        </p>
        <Button onClick={() => navigate(`${HOME}`)} className="rounded-lg mt-3" name="Back to home"></Button>
      </div>
    </div>
  );
}

export default Payment;
