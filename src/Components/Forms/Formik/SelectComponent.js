import React from "react";
import { get } from "lodash";
import { FlexContainer } from "../../UI/Layout";
import { SelectInput, ValidationError, StyledLabel } from "../../UI/Elements";
const Option = SelectInput.Option;
export const SelectComponent = ({
  field,
  options,
  mode,
  label,
  placeholder,
  isRequired,
  isShadow,
  isColumn,
  defaultValue,

  noLabel,
  width,
  inlineLabel,
  form: { touched, errors, setFieldTouched, setFieldValue },
  ...props
}) => {
  function handleChange(value) {
    console.log(`selected ${value}`);
    setFieldValue(field.name, value);
  }

  function handleBlur() {
    console.log("blur");
    setFieldTouched(field.name, true);
  }

  function handleFocus() {
    console.log("focus");
  }
  // if (
  //   setFieldValue === "Jan" ||
  //   setFieldValue === "April" ||
  //   setFieldValue === "July" ||
  //   (setFieldValue === "Oct" && setFieldValue === "1")
  // )
  if (isColumn) {
    return (
      <>
        {!noLabel && (
          <StyledLabel style={{ flexBasis: "20%" }}>{label}</StyledLabel>
        )}
        <SelectInput
          style={{ height: "29px" }}
          {...field}
          {...props}
          width={width}
          isShadow={isShadow}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder || "Select"}
          defaultValue={defaultValue}
          isRequired={isRequired}
        >
          {options.map((option, i) => {
            if (typeof option === "string") {
              return (
                <Option key={i} value={option}>
                  {option}
                </Option>
              );
            } else {
              return (
                <Option key={i} value={option.value}>
                  {option.label}
                </Option>
              );
            }
          })}
        </SelectInput>

        {get(touched, field.name) && get(errors, field.name) && (
          <ValidationError>{get(errors, field.name)}</ValidationError>
        )}
      </>
    );
  }
  if (mode) {
    return (
      <>
        {!noLabel && (
          <StyledLabel style={{ flexBasis: "20%" }}>{label}</StyledLabel>
        )}
        <SelectInput
          style={{ height: "1.8125em" }}
          {...field}
          {...props}
          width={width}
          isShadow={isShadow}
          onChange={handleChange}
          onBlur={handleBlur}
          mode="multiple"
          placeholder={placeholder || "Select"}
          defaultValue={defaultValue}
          isRequired={isRequired}
        >
          {options.map((option, i) => {
            if (typeof option === "string") {
              return (
                <Option key={i} value={option}>
                  {option}
                </Option>
              );
            } else {
              return (
                <Option key={i} value={option.value}>
                  {option.label}
                </Option>
              );
            }
          })}
        </SelectInput>

        {get(touched, field.name) && get(errors, field.name) && (
          <ValidationError>{get(errors, field.name)}</ValidationError>
        )}
      </>
    );
  }
  return (
    <>
      <FlexContainer>
        <FlexContainer alignItems="center" flexWrap={inlineLabel && "nowrap"}>
          {!noLabel && (
            <StyledLabel style={{ flexBasis: "20%" }}>{label}</StyledLabel>
          )}
          <SelectInput
            style={{ height: "1.8125em" }}
            {...field}
            {...props}
            width={width}
            isShadow={isShadow}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder || "Select"}
            defaultValue={defaultValue}
            isRequired={isRequired}
          >
            {options.map((option, i) => {
              if (typeof option === "string") {
                return (
                  <Option key={i} value={option}>
                    {option}
                  </Option>
                );
              } else {
                return (
                  <Option key={i} value={option.value}>
                    {option.label}
                  </Option>
                );
              }
            })}
          </SelectInput>
        </FlexContainer>
      </FlexContainer>
      {get(touched, field.name) && get(errors, field.name) && (
        <ValidationError>{get(errors, field.name)}</ValidationError>
      )}
    </>
  );
};
