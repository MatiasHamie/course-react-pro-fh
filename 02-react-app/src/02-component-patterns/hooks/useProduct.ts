import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  initialValues?: InitialValues;
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState(initialValues?.count ?? value);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  useEffect(() => {
    if (!isMounted.current) return;

    setCounter(initialValues?.count ?? value);
  }, [value, initialValues]);

  const reset = () => {
    setCounter(initialValues?.count ?? value);
  };

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    const maxCount = initialValues?.maxCount ?? 0;

    if (newValue > maxCount) return;

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.count && initialValues?.maxCount === counter,
    increaseBy,
    reset,
  };
};
