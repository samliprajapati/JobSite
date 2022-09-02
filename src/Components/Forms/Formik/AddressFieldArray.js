import React, { Component } from "react";
import { Button, Icon, Tooltip } from "antd";
import { Field } from "formik";
import { FlexContainer } from "../../UI/Layout";
import { Spacer, StyledLabel } from "../../UI/Elements";
import FormikPlacesAutoComplete from "./FormikPlacesAutoComplete";
import { InputComponent } from "../Formik/InputComponent";
import { SelectComponent } from "../Formik/SelectComponent";
class AddressFieldArray extends Component {
  render() {
    console.log(this.props);
    const { arrayHelpers, values, singleAddress } = this.props;
    console.log(singleAddress);
    return (
      <div>
        {values &&
          values.address.map((address, index) => (
            <div>
              <StyledLabel style={{ marginTop: "0.75em" }}>Location</StyledLabel>
              <div key={index} 
              //style={{ display: "flex" }}
              >
                <Field
                  name={`address[${index}]`}
                  // label="Location"
                  component={FormikPlacesAutoComplete}
                  isColumn
                  options={{}}
                  style={{ height: "1.8125em", 
                  // marginTop: "0.25em" 
                }}
                />
                {/* <FormikPlacesAutoComplete /> */}
                <div style={{ marginTop: "0.4375em" }}>
                  {!singleAddress && (
                    <Button
                      type="primary"
                      htmlType="button"
                      onClick={() =>
                        arrayHelpers.push({
                          addressType: "",
                          address1: "",
                          address2: "",
                          town: "",
                          street: "",
                          city: "",
                          state: "",
                          postalCode: "",
                          country: "",
                          latitude: "",
                          longitude: "",
                        })
                      }
                    >
                      +
                    </Button>
                  )}
                </div>
              
                <div style={{ marginTop: "0.4375em" }}>
                  {!singleAddress && (
                    <Button
                      type="primary"
                      htmlType="button"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      -
                    </Button>
                  )}
                </div>
              </div>
              {/* {!singleAddress && (
                <Button
                  type="primary"
                  htmlType="button"
                  onClick={() => arrayHelpers.remove(index)}
                >
                  -
                </Button>
              )} */}
              <span>
                {/* <Field
                                name={`address[${index}].addressType`}
                                label='Type'
                                component={SelectComponent}
                                options={['Office', 'Communication', 'Headquarters', 'Registered']}
                                inlineLabel
                                style={{ flexBasis: '80%' }}
                            /> */}
                <Spacer style={{ marginTop: "1.25em" }} />
                <p>Address input is only allowed using Location feature</p>
                <Spacer style={{ marginTop: "1.25em" }} />
                <Field
                  name={`address.${index}.address1`}
                  label="Address 1"
                  isColumn
                  component={InputComponent}
                  width={"100%"}
                  inlineLabel
                  style={{  height: "1.8125em",
                  //  marginTop: "0.25em"
                 }}
                />
                <Spacer />
                {/* <Field name={`address.${index}.address2`}
                                label='Address2'
                                component={InputComponent}
                            /> */}
                <Field
                  name={`address.${index}.street`}
                  label="Street"
                  component={InputComponent}
                  width={"100%"}
                  isColumn
                  inlineLabel
                  style={{  height: "1.8125em", 
                  // marginTop: "0.25em" 
                }}
                />
                <Spacer />
                <FlexContainer justifyContent="space-between">
                  <div style={{ width: "47%" }}>
                    <Tooltip title="Use Location feature for easy search ">
                      <Field
                        name={`address.${index}.city`}
                        label="City"
                        component={InputComponent}
                        disabled
                        width={"100%"}
                        isColumn
                        inlineLabel
                         style={{
                          height: "1.8125em",
                               }}
                      />
                    </Tooltip>
                  </div>
                  <div style={{ width: "47%" }}>
                    <Tooltip title="Use Location feature for easy search ">
                      <Field
                        name={`address.${index}.state`}
                        label="State/Province"
                        component={InputComponent}
                        disabled
                        width={"100%"}
                        isColumn
                        inlineLabel
                        style={{
                            height: "1.8125em",
                              }}
                      />
                    </Tooltip>
                  </div>
                </FlexContainer>
                <Spacer />
                <FlexContainer justifyContent="space-between">
                  <div style={{ width: "47%" }}>
                    <Tooltip title="Use Location feature for easy search ">
                      <Field
                        name={`address.${index}.country`}
                        label="Country"
                        disabled
                        component={InputComponent}
                        isColumn
                        width={"100%"}
                        inlineLabel
                        style={{
                               height: "1.8125em",
                               }}
                      />
                    </Tooltip>
                  </div>

                  <div style={{ width: "47%" }}>
                    <Tooltip title="Use Location feature for easy search ">
                      <Field
                        name={`address.${index}.postalCode`}
                        label="Pin code"
                        disabled
                        component={InputComponent}
                        isColumn
                        width={"100%"}
                        inlineLabel
                        style={{
                              height: "1.8125em",
                              }}
                      />
                    </Tooltip>
                  </div>
                </FlexContainer>
              </span>
            </div>
          ))}
      </div>
    );
  }
}

export default AddressFieldArray;
