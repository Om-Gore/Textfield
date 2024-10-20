import {
  TextField,
  InputAdornment,
  makeStyles,
  IconButton,
  MenuItem,
} from "@material-ui/core";
import classNames from "classnames";
import MyTextField from "./components/TailwindTextField/TextField/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React, { useEffect } from "react";
import { clsx } from "clsx";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import tempStyle from "./tempStyle.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

export default () => {
  const classes = useStyles();

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const [value, setValue] = React.useState("EUR");

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
    name: "om",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    // Save scroll position on unmount
    const handleBeforeUnload = () => {
      localStorage.setItem("scrollPosition", window.scrollY);
    };

    // Restore scroll position on mount
    const restoreScrollPosition = () => {
      const scrollPosition = localStorage.getItem("scrollPosition");
      if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
      }
    };

    restoreScrollPosition();

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={`${tempStyle["styled-container"]}`}>
          <TextField id="standard-basic" label="Standard" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Hello World"
          />
          <TextField
            disabled
            id="standard-disabled"
            label="Disabled"
            defaultValue="Hello World"
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            id="standard-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField id="standard-search" label="Search field" type="search" />
          <TextField
            id="standard-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
          <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
          />{" "}
          <TextField
            disabled
            id="filled-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
          <TextField
            id="filled-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
          />
          <TextField
            id="filled-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="filled"
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            variant="outlined"
          />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="outlined"
          />
          <TextField
            error
            id="standard-error"
            label="Error"
            defaultValue="Hello World"
          />
          <TextField
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
          <TextField
            error
            id="filled-error"
            label="Error"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            error
            id="filled-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="filled"
          />
          <TextField
            error
            id="outlined-error"
            label="Error"
            defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="outlined"
          />
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={value}
            onChange={handleValueChange}
          />
          <TextField
            id="standard-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
          />
          <TextField
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
          />
          <TextField
            id="filled-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={value}
            onChange={handleValueChange}
            variant="filled"
          />
          <TextField
            id="filled-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="filled"
          />
          <TextField
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="filled"
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={value}
            onChange={handleValueChange}
            variant="outlined"
          />
          <TextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="outlined"
          />
          <TextField
            className={classes.margin}
            id="input-with-icon-textfield"
            label="TextField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="With normal TextField"
            id="standard-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              ),
            }}
          />
          <TextField
            id="standard-adornment-weight"
            variant="standard"
            InputProps={{
              endAdornment: (
                <InputAdornment position="startM">Kg</InputAdornment>
              ),
            }}
            helperText="standard-weight-helper-text"
          />
          <TextField
            id="standard-adornment-password"
            label="Password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="standard-adornment-amount"
            value={values.amount}
            label="Amount"
            onChange={handleChange("amount")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="With normal TextField"
            id="standard-start-adornment"
            variant="filled"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              ),
            }}
          />
          <TextField
            id="standard-adornment-weight"
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="startM">Kg</InputAdornment>
              ),
            }}
            helperText="standard-weight-helper-text"
          />
          <TextField
            id="standard-adornment-password"
            label="Password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="standard-adornment-amount"
            value={values.amount}
            label="Amount"
            onChange={handleChange("amount")}
            variant="filled"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="With normal TextField"
            id="standard-start-adornment"
            variant="outlined"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              ),
            }}
          />
          <TextField
            id="standard-adornment-weight"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="startM">Kg</InputAdornment>
              ),
            }}
            helperText="standard-weight-helper-text"
          />
          <TextField
            id="standard-adornment-password"
            label="Password"
            variant="outlined"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="standard-adornment-amount"
            value={values.amount}
            label="Amount"
            variant="outlined"
            onChange={handleChange("amount")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            id="standard-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="None"
            id="margin-none"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
          />
          <TextField
            label="Dense"
            id="margin-dense"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="dense"
          />
          <TextField
            label="Normal"
            id="margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
          />
          <TextField
            id="filled-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            label="None"
            id="filled-margin-none"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            variant="filled"
          />
          <TextField
            label="Dense"
            id="filled-margin-dense"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="dense"
            variant="filled"
          />
          <TextField
            label="Normal"
            id="filled-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
            variant="filled"
          />
          <TextField
            id="outlined-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            label="None"
            id="outlined-margin-none"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            variant="outlined"
          />
          <TextField
            label="Dense"
            id="outlined-margin-dense"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="dense"
            variant="outlined"
          />
          <TextField
            label="Normal"
            id="outlined-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="standard-name"
            label="Name"
            value={values.name}
            onChange={handleChange("name")}
          />
          <TextField
            id="standard-uncontrolled"
            label="Uncontrolled"
            defaultValue="foo"
          />
          <TextField
            id="filled-name"
            label="Name"
            value={values.name}
            onChange={handleChange("name")}
            variant="filled"
          />
          <TextField
            id="filled-uncontrolled"
            label="Uncontrolled"
            defaultValue="foo"
            variant="filled"
          />
          <TextField
            id="outlined-name"
            label="Name"
            value={values.name}
            onChange={handleChange("name")}
            variant="outlined"
          />
          <TextField
            id="outlined-uncontrolled"
            label="Uncontrolled"
            defaultValue="foo"
            variant="outlined"
          />
          <TextField
            id="standard-select-currency"
            select
            label="Select"
            value={value}
            onChange={handleValueChange}
            helperText="Please select your currency"
            dropdowntype={true}
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
        {/*
        
        



















//~*                                                                                                                   






        
        
        */}
        <div className={`${tempStyle["styled-container"]}`}>
          <MyTextField
            id="standard-basic"
            label="Standard"
            variant="standard"
          />
          <MyTextField id="filled-basic" label="Filled" variant="filled" />
          <MyTextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          <MyTextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Hello World"
          />
          <MyTextField
            disabled={true}
            id="standard-disabled"
            label="Disabled"
            defaultValue="Hello World"
          />
          <MyTextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <MyTextField
            id="standard-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
          <MyTextField
            id="standard-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <MyTextField
            id="standard-search"
            label="Search field"
            type="search"
          />
          <MyTextField
            id="standard-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
          <MyTextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
          />{" "}
          <MyTextField
            disabled
            id="filled-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="filled"
          />
          <MyTextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
          <MyTextField
            id="filled-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          />
          <MyTextField
            id="filled-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <MyTextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
          />
          <MyTextField
            id="filled-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="filled"
          />
          <MyTextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            variant="outlined"
          />
          <MyTextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="outlined"
          />
          <MyTextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <MyTextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <MyTextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <MyTextField
            id="outlined-search"
            label="Search field"
            type="search"
            variant="outlined"
          />
          <MyTextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="outlined"
          />
          <MyTextField
            error
            id="standard-error"
            label="Error"
            defaultValue="Hello World"
          />
          <MyTextField
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
          <MyTextField
            error
            id="filled-error"
            label="Error"
            defaultValue="Hello World"
            variant="filled"
          />
          <MyTextField
            error
            id="filled-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="filled"
          />
          <MyTextField
            error
            id="outlined-error"
            label="Error"
            defaultValue="Hello World"
            variant="outlined"
          />
          <MyTextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="outlined"
          />
          <MyTextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={value}
            onChange={handleValueChange}
          />
          <MyTextField
            id="standard-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
          />
          <MyTextField
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
          />
          <MyTextField
            id="filled-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={value}
            onChange={handleValueChange}
            variant="filled"
          />
          <MyTextField
            id="filled-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="filled"
          />
          <MyTextField
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="filled"
          />
          <MyTextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={value}
            onChange={handleValueChange}
            variant="outlined"
          />
          <MyTextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="outlined"
          />
          <MyTextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="outlined"
          />
          <MyTextField
            className={classes.margin}
            id="input-with-icon-textfield"
            label="TextField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <MyTextField
            label="With normal TextField"
            id="standard-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              ),
            }}
          />
          <MyTextField
            id="standard-adornment-weight"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              ),
            }}
            helperText="standard-weight-helper-text"
          />
          <MyTextField
            id="standard-adornment-password"
            label="Password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <MyTextField
            id="standard-adornment-amount"
            value={values.amount}
            label="Amount"
            onChange={handleChange("amount")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <MyTextField
            variant="filled"
            label="With normal TextField"
            id="standard-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              ),
            }}
          />
          <MyTextField
            id="standard-adornment-weight"
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              ),
            }}
            helperText="standard-weight-helper-text"
          />
          <MyTextField
            id="standard-adornment-password"
            label="Password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <MyTextField
            id="standard-adornment-amount"
            value={values.amount}
            label="Amount"
            onChange={handleChange("amount")}
            variant="filled"
            InputProps={{
              style: {
                paddingLeft: 0,
              },
              startAdornment: (
                <InputAdornment
                  position="start"
                  style={{
                    marginTop: "16px",
                  }}
                >
                  $
                </InputAdornment>
              ),
            }}
          />
          <MyTextField
            variant="outlined"
            label="With normal TextField"
            id="standard-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              ),
            }}
          />
          <MyTextField
            id="standard-adornment-weight"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              ),
            }}
            helperText="standard-weight-helper-text"
          />
          <MyTextField
            id="standard-adornment-password"
            label="Password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <MyTextField
            id="standard-adornment-amount"
            value={values.amount}
            label="Amount"
            onChange={handleChange("amount")}
            variant="outlined"
            InputProps={{
              style: {
                paddingLeft: 0,
              },
              startAdornment: (
                <InputAdornment
                  position="start"
                  style={{
                    marginTop: "16px",
                  }}
                >
                  $
                </InputAdornment>
              ),
            }}
          />
          <MyTextField
            id="standard-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <MyTextField
            label="None"
            id="margin-none"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
          />
          <MyTextField
            label="Dense"
            id="margin-dense"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="dense"
          />
          <MyTextField
            label="Normal"
            id="margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
          />
          <MyTextField
            id="filled-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <MyTextField
            label="None"
            id="filled-margin-none"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            variant="filled"
          />
          <MyTextField
            label="Dense"
            id="filled-margin-dense"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="dense"
            variant="filled"
          />
          <MyTextField
            label="Normal"
            id="filled-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
            variant="filled"
          />
          <MyTextField
            id="outlined-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <MyTextField
            label="None"
            id="outlined-margin-none"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            variant="outlined"
          />
          <MyTextField
            label="Dense"
            id="outlined-margin-dense"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="dense"
            variant="outlined"
          />
          <MyTextField
            label="Normal"
            id="outlined-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
            variant="outlined"
          />
          <MyTextField
            id="standard-name"
            label="Name"
            value={values.name}
            onChange={handleChange("name")}
          />
          <MyTextField
            id="standard-uncontrolled"
            label="Uncontrolled"
            defaultValue="foo"
          />
          <MyTextField
            id="filled-name"
            label="Name"
            value={values.name}
            onChange={handleChange("name")}
            variant="filled"
          />
          <MyTextField
            id="filled-uncontrolled"
            label="Uncontrolled"
            defaultValue="foo"
            variant="filled"
          />
          <MyTextField
            id="outlined-name"
            label="Name"
            value={values.name}
            onChange={handleChange("name")}
            variant="outlined"
          />
          <MyTextField
            id="outlined-uncontrolled"
            label="Uncontrolled"
            defaultValue="foo"
            variant="outlined"
          />
          <MyTextField
            id="standard-select-currency"
            select
            label="Select"
            value={value}
            onChange={handleValueChange}
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </MyTextField>
        </div>
      </div>
    </>
  );
};
