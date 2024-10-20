import React, {
  Children,
  CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";
import rootStyles from "./RootStyles.module.css";
import classNames from "classnames";
import standardStyles from "./StandardStyles.module.css";
import filledStyles from "./FilledStyles.module.css";
import outlinedStyles from "./OutlinedStyles.module.css";

interface InputProps {
  readOnly?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  style?: CSSProperties;
}

interface InputLabelProps {
  shrink?: boolean;
}

interface inputProps {
  style?: CSSProperties;
}

interface FormHelperTextProps {
  style?: CSSProperties;
}

interface SelectProps {}

export interface TextFieldProps {
  id?: string;
  name?: string;
  label?: string;
  variant?: "standard" | "filled" | "outlined";
  required?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  type?: React.InputHTMLAttributes<unknown>["type"];
  autoComplete?: string;
  InputProps?: InputProps;
  InputLabelProps?: InputLabelProps;
  helperText?: string;
  error?: boolean;
  multiline?: boolean;
  onChange?: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement
  >;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onMouseDown?: (event: React.MouseEvent<Element, MouseEvent>) => void;
  value?: string | number | readonly string[];
  placeholder?: string;
  rows?: number;
  style?: CSSProperties;
  className?: string;
  margin?: "none" | "dense" | "normal";
  fullWidth?: boolean;
  select?: boolean;
  children?: React.ReactNode;
  inputProps?: inputProps;
  FormHelperTextProps?: FormHelperTextProps;
  SelectProps?: SelectProps;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  let {
    id,
    name,
    label,
    variant = "standard",
    defaultValue = "",
    disabled = false,
    required = false,
    type = "text",
    autoComplete,
    InputProps = {}, //~!Why? if I don't set Input props default value as {} it is causing error
    InputLabelProps = {},
    helperText = "",
    error,
    multiline,
    value,
    onChange,
    onFocus,
    onBlur,
    placeholder = "",
    rows = 1,
    style,
    className = "",
    margin = "none",
    fullWidth = false,
    select = false,
    children,
    inputProps = {},
    FormHelperTextProps = {},
    SelectProps = {},
  } = props;

  console.log("my props : ", props);

  const variantStylesMap = {
    standard: standardStyles,
    filled: filledStyles,
    outlined: outlinedStyles,
  };

  const variantStyles = variantStylesMap[variant];

  //for select
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleSelect = (selectedValue) => {
    onChange(selectedValue);
    setOpen(false);
  };

  //for input
  const [inputValue, setInputValue] = useState(defaultValue);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);

    if (onChange) onChange(e);
  };

  const handleFocus = (e) => {
    setIsInputFocused(true);

    if (onFocus) onFocus(e);
  };

  const handleBlur = (e) => {
    setIsInputFocused(false);

    if (onBlur) onBlur(e);
  };

  //for textarea
  const visibleTextareaRef = useRef(null);
  const hiddenTextareaRef = useRef(null);

  const autoSize = () => {
    const hiddenTextarea = hiddenTextareaRef.current;
    const visibleTextarea = visibleTextareaRef.current;

    if (hiddenTextarea && visibleTextarea && !rows) {
      hiddenTextarea.value = visibleTextarea.value;
      hiddenTextarea.style.width = getComputedStyle(visibleTextarea).width;
      const newHeight = hiddenTextarea.scrollHeight;
      visibleTextarea.style.height = `${newHeight}px`;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      autoSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    autoSize();
  }, [inputValue]);

  label = required ? label + " *" : label;
  InputLabelProps.shrink =
    InputLabelProps.shrink ||
    !!InputProps.startAdornment ||
    !!inputValue ||
    !!value ||
    isInputFocused;

  // if (label === "Password") {
  //   console.log("InputLabelProps.shrink: ", InputLabelProps.shrink);
  //   console.log("InputProps.startAdornment: ", !!InputProps.startAdornment);
  //   console.log("InputProps.endAdornment: ", !!InputProps.endAdornment);
  //   console.log("inputValue: ", !!inputValue);
  //   console.log("value: ", !!value);
  //   console.log("isInputFocused: ", isInputFocused);
  // }

  return (
    <>
      {/* Div1 */}
      <div
        style={style}
        className={classNames([
          rootStyles["div1"],
          {
            [rootStyles[`div1-margin-${margin}`]]: margin,
            [rootStyles["div1-full-width"]]: fullWidth,
          },
          className,
        ])}
      >
        {/* Label */}
        {label && (
          <label
            className={classNames(rootStyles.label, variantStyles.label, {
              [variantStyles["label-shrink"]]: InputLabelProps?.shrink,
              [variantStyles["label-shrink-margin-dense"]]:
                InputLabelProps?.shrink &&
                margin == "dense" &&
                variant == "filled",
              [variantStyles[`label-margin-${margin}`]]:
                !InputLabelProps?.shrink,
              [rootStyles["label-focus"]]: isInputFocused && !error,
              [rootStyles["label-error"]]: error,
            })}
            data-shrink="false"
            htmlFor={id}
            id={`${id}-label`}
          >
            {label}
          </label>
        )}
        {/* Div2 */}
        <div
          className={classNames(
            rootStyles.div2,
            variantStyles["div2-underline"],
            {
              [variantStyles["div2"]]: !(variant === "standard" && !label),
              [rootStyles["div2-full-width"]]: fullWidth,
              [variantStyles["div2-focus"]]: isInputFocused && !error,
              [rootStyles["div2-disabled"]]: disabled,
              [variantStyles["div2-disabled"]]: disabled,
              [variantStyles["div2-hover"]]:
                !disabled && !isInputFocused && !error,
              [variantStyles["div2-error"]]: error,
              [variantStyles["div2-multiline"]]: !!multiline,
              [variantStyles["div2-startAdornment"]]:
                !!InputProps.startAdornment,
            }
          )}
          style={InputProps.style}
        >
          {select ? (
            <>
              <div
                className="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiInputBase-input MuiInput-input"
                tabIndex={0}
                role="button"
                aria-haspopup="listbox"
                aria-labelledby="standard-select-currency-label standard-select-currency"
                id="standard-select-currency"
                onClick={handleToggle}
                onKeyDown={(e) => e.key === "Enter" && handleToggle()}
              >
                <select
                  className={classNames(rootStyles.select)}
                  value={value}
                  onChange={onChange}
                >
                  {children}
                </select>
              </div>
              <input
                aria-hidden="true"
                tabIndex={-1}
                className="MuiSelect-nativeInput"
                aria-describedby="standard-select-currency-helper-text"
                value="EUR"
              />
              <svg
                className="MuiSvgIcon-root MuiSelect-icon"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
            </>
          ) : (
            <>
              {InputProps.startAdornment}

              {!multiline ? (
                <>
                  {/*Input*/}
                  <input
                    aria-invalid="false"
                    autoComplete={autoComplete}
                    id={id}
                    name={name}
                    type={type}
                    className={classNames(
                      rootStyles.input,
                      variantStyles.input,
                      {
                        [rootStyles["input-focus"]]: isInputFocused,
                        [variantStyles[`input-margin-${margin}`]]: margin,
                      }
                    )}
                    value={value ?? inputValue}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required={required}
                    disabled={disabled}
                    readOnly={InputProps.readOnly}
                    placeholder={placeholder}
                    style={inputProps.style}
                  />
                </>
              ) : (
                <>
                  <textarea
                    aria-invalid="false"
                    id={id}
                    name={name}
                    ref={visibleTextareaRef}
                    rows={rows}
                    value={value ?? inputValue}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={classNames(rootStyles.textarea, {
                      [rootStyles["textarea-focus"]]: isInputFocused,
                    })}
                    style={inputProps.style}
                    placeholder={placeholder}
                  />
                  <textarea
                    ref={hiddenTextareaRef}
                    className={classNames(rootStyles["hidden-textarea"])}
                    readOnly
                    tabIndex={-1}
                    aria-hidden="true"
                  />
                </>
              )}

              {InputProps.endAdornment}
            </>
          )}
          {variant === "outlined" && (
            <fieldset
              aria-hidden="true"
              className={classNames(variantStyles.fieldset, {
                [variantStyles["fieldset-focus"]]: isInputFocused,
                [variantStyles["fieldset-error"]]: error,
              })}
            >
              <legend
                className={classNames(variantStyles.legend, {
                  [variantStyles["legend-value-focus"]]:
                    isInputFocused || !!inputValue,
                })}
              >
                <span>{label}</span>
              </legend>
            </fieldset>
          )}
        </div>

        {/*helperText*/}
        {!!helperText && (
          <p
            className={classNames(
              rootStyles["helper-text"],
              variantStyles["helper-text"],
              {
                [rootStyles["helper-text-error"]]: error,
                [rootStyles[`helper-text-margin-${margin}`]]: margin,
              }
            )}
            style={FormHelperTextProps.style}
            id={`${id}-helper-text`}
          >
            {helperText}
          </p>
        )}
      </div>
    </>
  );
};

export default TextField;
