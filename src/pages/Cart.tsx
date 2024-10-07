import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Icons, IconType } from "../components/Icons";
import Table from "../components/Table";
import { PAYMENT, PRODUCTS } from "../constants/constants";

function Cart() {
  const navigate = useNavigate();
  const contextType = useContext(CartContext);
  const { cart, emptyCart } = contextType;
  const totalAmount = useMemo(() => {
    let total = 0;
    cart.map((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }, [cart]);

  const tax = (totalAmount: number) => {
    if (totalAmount === 0) {
      return 0;
    } else {
      return 22.7;
    }
  };

  return (
    <div className="bg-gray-100 h-screen py-8 relative top-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <Button
            onClick={() => navigate(PRODUCTS)}
            varient="Secondary"
            name="Go Back"
          ></Button>
        </div>
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Icons type={IconType.EmptyCartIcon} />
            <p className="text-gray-600 text-lg font-semibold mb-4">
              Your shopping cart is empty.
            </p>
            <Button
              onClick={() => navigate(PRODUCTS)}
              className="rounded-md shadow-md"
              name="Let's go shopping"
            ></Button>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <Table
                  title={["Product", "Price", "Quantity", "Total"]}
                ></Table>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>Rs.{totalAmount}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>Rs.{tax(totalAmount)}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">
                    Rs.{totalAmount + tax(totalAmount)}
                  </span>
                </div>
                <Button
                  onClick={() => {
                    emptyCart();
                    navigate(PAYMENT);
                  }}
                  className="rounded-lg mt-4 w-full"
                  name="Payment"
                ></Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
