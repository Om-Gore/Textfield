import React, { FC, useState } from "react";
import { useUID } from "react-uid";
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core";
import MyTextField, { TextFieldProps } from "./TextField/TextField";
import RHDropdownIcon from "../RHDropdownIcon/index";
import CreditCardIcon from "../RHCreditCardIcon/index";
import { TelMask, CreditCardMask, MMYYMask, CurrencyMask } from "./Masks";
import merge from "lodash/merge";
import classNames from "classnames";

/**************************************************************************/

const useInputBaseStyles = makeStyles((theme) => ({
  root: {
    "&$disabled": {
      backgroundColor: theme.palette.common.white,
      color: "inherit",
    },
  },
  disabled: {
    color: "inherit",
    backgroundColor: theme.palette.common.white,
  },
}));

const useLabelStyles = makeStyles((theme) => ({
  root: {
    "&$disabled": {
      opacity: 0.75,
    },
  },
  outlined: {},
  shrink: {},
  disabled: {
    opacity: 0.75,
  },
}));

const useSelectStyles = makeStyles((theme) => ({
  root: {
    fontSize: 13,
    "&$disabled": {
      opacity: 0.75,
    },
  },
  disabled: {
    opacity: 0.75,
  },
}));

/**************************************************************************/

export type TailwindTextFieldProps = TextFieldProps & {
  maskType?: string;
  dropdowntype?: boolean;
  placeholder?: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    focusVisibleStyle: {
      marginTop: 6,
      marginBottom: 0,
      "&.keyboard-focused .MuiOutlinedInput-notchedOutline": {
        border: "2px solid #1976d2 !important",
      },
    },
  })
);

export const TailwindTextField: FC<TailwindTextFieldProps> = ({
  children,
  maskType,
  inputProps,
  rows,
  //@ts-ignore
  errorMessages: _errorMessages,
  ...rest
}) => {
  const [creditCardType, setCreditCardType] = React.useState("");
  const uid = useUID();
  const inputRef = React.useRef<string>(null);
  const theme = useTheme();
  const labelClasses = useLabelStyles();
  const selectClasses = useSelectStyles();
  const inputBaseClasses = useInputBaseStyles();
  const classes = useStyles();
  const [isKeyboardFocused, setIsKeyboardFocused] = useState(false);
  const isMouseDown = React.useRef(false);

  const InputProps: { [key: string]: any } = {
    tel: {
      inputComponent: TelMask,
      inputProps: { ...inputProps, inputRef },
    },
    creditCard: {
      inputComponent: CreditCardMask,
      inputProps: {
        ...inputProps,
        inputRef,
        handleTypeChange: (type: string) => {
          setCreditCardType(type);
        },
      },
      startAdornment: creditCardType ? (
        <CreditCardIcon type={creditCardType} />
      ) : null,
    },
    MMYY: {
      inputComponent: MMYYMask,
      inputProps: { ...inputProps, inputRef },
    },
    currency: {
      inputComponent: CurrencyMask,
      inputProps: {
        ...inputProps,
        inputRef,
      },
    },
  };

  const props = {
    ...rest,
    FormHelperTextProps: {
      style: { marginLeft: 0 },
      ...rest?.FormHelperTextProps,
    },
    InputLabelProps: {
      shrink: !!rest.placeholder || (rest.value ?? "") !== "",
      ...rest.InputLabelProps,
    },
    inputProps: {
      ...inputProps,
    },
    InputProps: {
      ...rest.InputProps,
      ...InputProps[maskType ?? ""],
    },
    SelectProps: {
      native: true,
      IconComponent: RHDropdownIcon,
      ...rest.SelectProps,
    },
  };

  const mergedProps = merge(
    {
      variant: "outlined",
      margin: "normal",
      select: true,
      InputLabelProps: {
        classes: {
          root: labelClasses.root,
          outlined: labelClasses.outlined,
          shrink: labelClasses.shrink,
          disabled: labelClasses.disabled,
        },
      },
      InputProps: {
        classes: {
          root: inputBaseClasses.root,
          disabled: inputBaseClasses.disabled,
        },
      },
      SelectProps: {
        IconComponent: RHDropdownIcon,
        native: true,
        classes: {
          root: selectClasses.root,
          disabled: selectClasses.disabled,
        },
      },
    },
    props
  );

  return (
    <MyTextField
      inputRef={inputRef}
      id={rest.id ? rest.id : uid}
      rows={rows}
      {...(props?.dropdowntype ? mergedProps : props)}
      // This fixes run-time Error/Warning in development
      dropdowntype={props?.dropdowntype ? `${props?.dropdowntype}` : null}
      InputProps={{
        ...props.InputProps,
        className: `${props.InputProps?.className || ""} bg-[rgba(0,0,0,0)]`,
      }}
      inputProps={{
        ...props.inputProps,
        style: {
          backgroundColor: "inherit",
          ...props.inputProps.style,
        },
      }}
      className={classNames([
        props?.className,
        `${classes.focusVisibleStyle} ${
          isKeyboardFocused ? "keyboard-focused" : ""
        }`,
      ])}
      onBlur={(event) => {
        if (rest.onBlur) {
          rest.onBlur(event);
        }
        setIsKeyboardFocused(false);
        isMouseDown.current = false;
      }}
      onFocus={(event) => {
        if (rest.onFocus) {
          rest.onFocus(event);
        }
        setIsKeyboardFocused(!isMouseDown.current && (rest?.select ?? false));
      }}
      onKeyDown={(event) => {
        if (rest.onKeyDown) {
          rest.onKeyDown(event);
        }
        setIsKeyboardFocused(false);
      }}
      onMouseDown={(event) => {
        if (rest.onMouseDown) {
          rest.onMouseDown(event);
        }
        isMouseDown.current = true;
      }}
    >
      {children}
    </MyTextField>
  );
};

TailwindTextField.defaultProps = {
  variant: "outlined",
  margin: "normal",
};

// export { default as RHFormTextField } from "./RHFormTextField";
