import React, { Component } from "react";
import { Button, Tooltip } from "antd";
import { EnvironmentOutlined } from '@ant-design/icons';
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
    console.log(values);
    return (
      <div>
        <>
          {/* {!singleAddress && (
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
                  longitude: ""
                })
              }
            >
              +
            </Button>
          )} */}
        </>

        {values &&
          values.address.map((address, index) => (
            <div>
              {/* <StyledLabel style={{ marginTop: "0.75em" }}>Location</StyledLabel> */}
              <div key={index} style={{ display: "flex", width: "100%", marginTop: "0.94em" }}>
                <EnvironmentOutlined
                  // type="environment"
                  style={{
                    marginTop: "0.68em",
                    fontSize: "1.12em",
                    marginRight: "0.68em",
                  }}
                />
                <Field
                  name={`address[${index}]`}
                  // label="Location"
                  component={FormikPlacesAutoComplete}
                  isColumn
                  options={{}}
                  style={{ height: "2em", marginTop: "0px" }}
                />
                {/* <FormikPlacesAutoComplete /> */}
                &nbsp;
                <div style={{ marginTop: "0.31em" }}>
                  {!singleAddress && (
                    <Button
                      type="primary"
                      htmlType="button"
                      ghost
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
                      <i class="fas fa-plus"></i>
                    </Button>
                  )}
                </div>
                &nbsp;
                <div style={{ marginTop: "0.31em" }}>
                  {!singleAddress && (
                    <Button
                      ghost
                      type="primary"
                      htmlType="button"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      <i class="fas fa-minus"></i>
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
                <Spacer style={{ margin: 0 }} />
                <p
                  style={{
                    fontWeight: "bold",
                    marginBottom: "0px",
                    fontStyle: "italic",
                    color: "#1890ff",
                    margin: 0,
                  }}
                >
                  Address input is only allowed using Location feature
                </p>
                <Spacer style={{ marginBottom: "0.94em" }} />
                <Field
                  name={`address.${index}.address1`}
                  label="Address 1"
                  isColumn
                  component={InputComponent}
                  width={"100%"}
                  inlineLabel
                  style={{ flexBasis: "80%", height: "2em", marginTop: "0px" }}
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
                  style={{ flexBasis: "80%", height: "2em", marginTop: "0px" }}
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
                          flexBasis: "80%",
                          height: "2em",
                          marginTop: "0px",

                        }}
                      />
                    </Tooltip>
                  </div>
                  <div style={{ width: "47%" }}>
                    <Tooltip title="Use Location feature for easy search ">
                      <Field
                        name={`address.${index}.postalCode`}
                        label="Zip code"
                        disabled
                        component={InputComponent}
                        isColumn
                        width={"100%"}
                        inlineLabel
                        style={{
                          flexBasis: "80%",
                          height: "2em",
                          marginTop: "0px",

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
                        name={`address.${index}.state`}
                        label="State/Province"
                        component={InputComponent}
                        disabled
                        width={"100%"}
                        isColumn
                        inlineLabel
                        style={{
                          flexBasis: "80%",
                          height: "2em",
                          marginTop: "0px",

                        }}
                      />
                    </Tooltip>
                  </div>

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
                          flexBasis: "80%",
                          height: "2em",
                          marginTop: "0px",

                        }}
                      />
                    </Tooltip>
                  </div>
                </FlexContainer>

                <Spacer />
              </span>
            </div>
          ))}
      </div>
    );
  }
}

export default AddressFieldArray;
