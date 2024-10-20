import React, { FC } from "react";
import Cleave from "cleave.js/react";

export interface IMaskProps {
  inputRef: string;
  handleTypeChange?: any;
}

export const TelMask: FC<IMaskProps> = ({ inputRef, ...rest }) => {
  return (
    <Cleave
      ref={inputRef}
      options={{
        phone: true,
        phoneRegionCode: "US",
        delimiter: "-",
      }}
      {...rest}
    />
  );
};

export const CreditCardMask: FC<IMaskProps> = ({
  inputRef,
  handleTypeChange,
  ...rest
}) => {
  return (
    <Cleave
      ref={inputRef}
      options={{
        creditCard: true,
        onCreditCardTypeChanged: handleTypeChange,
      }}
      {...rest}
    />
  );
};

export const MMYYMask: FC<IMaskProps> = ({
  inputRef,
  handleTypeChange,
  ...rest
}) => {
  return (
    <Cleave
      ref={inputRef}
      options={{
        date: true,
        datePattern: ["m", "y"],
      }}
      {...rest}
    />
  );
};

export const CurrencyMask: FC<IMaskProps> = ({
  inputRef,
  handleTypeChange,
  ...rest
}) => (
  <Cleave
    ref={inputRef}
    options={{
      numeral: true,
      numeralThousandsGroupStyle: "thousand",
    }}
    {...rest}
  />
);
