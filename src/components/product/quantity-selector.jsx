import { Button, InputNumber } from "antd";

const QuantitySelector = ({ quantity, setQuantity }) => {
  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="quantity-selector">
      <InputNumber
        min={1}
        max={15}
        defaultValue={1}
        value={quantity}
        controls={false}
        readOnly
        size="middle"
        className="w-[110px]"
        onChange={handleQuantityChange}
        addonBefore={
          <Button type="text" size="small" onClick={handleDecrement}>
            -
          </Button>
        }
        addonAfter={
          <Button type="text" size="small" onClick={handleIncrement}>
            +
          </Button>
        }
      />
    </div>
  );
};
export default QuantitySelector;
