import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Select, Icon, Tag, Switch, Checkbox } from "antd";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { MainWrapper, Spacer } from "../Components/UI/Elements";
import { ShowOrCollapse } from "../Components/Common";
import SearchSelect from "../Components/Forms/Formik/SearchSelect";
import AddressFieldArray from "../Components/Forms/Formik/AddressFieldArray";
import { InputComponent } from "../Components/Forms/Formik/InputComponent";
import { SelectComponent } from "../Components/Forms/Formik/SelectComponent";
import Upload from "../Components/Forms/Formik/Upload";
import { StyledLabel } from "../Components/UI/Elements";
import { FlexContainer } from "../Components/UI/Layout";
import { TextareaComponent } from "../Components/Forms/Formik/TextareaComponent";
import { DatePicker } from "../Components/Forms/Formik/DatePicker";
import moment from "moment";
import { addPartner, getSectors } from "./JobAction";

const { Option } = Select;
/**
 * yup validation scheme for creating a contact
 */
const PartnerSchema = Yup.object().shape({
  // contactOwner: Yup.string().required("Please Select contact owner"),
  email: Yup.string().email("Enter a valid Email").required("Input needed!"),
  partnerName: Yup.string().required("Input needed!"),
});

class JobVendorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documentStatus: false,
    };
  }
  handleDocumentStatus = (checked) => {
    this.setState({ documentStatus: checked });
  };
  handleReset = (resetForm) => {
    const { callback } = this.props;
    callback && callback();
    resetForm();
  };

  componentDidMount() {
    this.props.getSectors();
  }
  render() {
    const {
      accounts,
      user,
      // user: { userId, firstName },
      isEditing,
      prefillAccount,
      addingPartner,
      addPartner,
      clearbit,
      setClearbitData,
    } = this.props;

    const sectorOption = this.props.sectors.map((item) => {
      return {
        label: item.sectorName || "",
        value: item.sectorId,
      };
    });

    return (
      <>
        <Formik
          // enableReinitialize
          initialValues={{
            sectorId: "",
            partnerName: "",
            sectorDescription: "",
            url: "",
            countryDialCode: "",
            email: "",
            phoneNo: "",
            // userId: this.props.userId,
            notes: "",
            taxRegistrationNumber: "",
            country: "",
            businessRegistrationNumber: "",
            bankName: "",
            // country: "",
            accountNumber: "",
            status: this.state.documentStatus ? "true" : "false",
            address: [
              {
                address1: "",
                address2: "",
                street: "",
                city: "",
                state: "",
                postalCode: "",
                // country: "",
                country: "",
              },
            ],
          }}
          validationSchema={PartnerSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            addPartner(
              {
                ...values,
                status: this.state.documentStatus ? "true" : "false",
              },
              //   this.props.userId,
              () => this.handleReset(resetForm)
            );
          }}
        >
          {({
            errors,
            touched,
            isSubmitting,
            setFieldValue,
            setFieldTouched,
            values,
            ...rest
          }) => (
            <Form>
              <Spacer />
              <Spacer style={{ marginTop: "2em" }} />
              <MainWrapper
                style={{ width: "50%", margin: "auto", padding: "1em" }}
              >
                <Spacer />
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ width: "49%" }}>
                    {/* Left */}
                    <h2><b>About Your Company</b></h2>
                    <div>
                      <Field
                        isRequired
                        name="partnerName"
                        type="text"
                        label="Company Name"
                        isColumn
                        width={"100%"}
                        component={InputComponent}
                        inlineLabel
                      />
                      <FlexContainer>
                        <div style={{ width: "100%" }}>
                          <FastField
                            isRequired
                            type="email"
                            name="email"
                            label="Email"
                            className="field"
                            isColumn
                            width={"100%"}
                            component={InputComponent}
                            inlineLabel
                          />
                        </div>
                      </FlexContainer>
                      <Spacer />
                      <FlexContainer>
                        <div style={{ width: "100%" }}>
                          <FastField
                            isRequired
                            name="url"
                            type="text"
                            label="URL"
                            className="field"
                            isColumn
                            width={"100%"}
                            component={InputComponent}
                            inlineLabel
                          />
                        </div>
                      </FlexContainer>
                      <Spacer />
                      <Spacer />
                      <FlexContainer>
                        <div style={{ width: "100%" }}>
                          <FastField
                            name="sectorId"
                            label="Sector"
                            isColumn
                            width={"100%"}
                            component={SelectComponent}
                            // options={[" Accountancy"," Aviation"]}
                            options={
                              Array.isArray(sectorOption) ? sectorOption : []
                            }
                          />
                        </div>
                      </FlexContainer>
                      <Spacer />
                      <FlexContainer justifyContent="space-between">
                        <div style={{ width: "27%" }}>
                          <FastField
                            name="countryDialCode"
                            isColumnWithoutNoCreate
                            selectType="dialCode"
                            label="Phone#"
                            width={"100%"}
                            isColumn
                            component={SearchSelect}
                          />
                        </div>
                        <div style={{ width: "70%" }}>
                          <FastField
                            type="text"
                            name="phoneNo"
                            isColumn
                            component={InputComponent}
                            inlineLabel
                            width={"100%"}
                          />
                        </div>
                      </FlexContainer>
                    </div>
               
                    <div>
                      <FlexContainer>
                        <div style={{ width: "100%" }}>
                          <Field
                            name="notes"
                            label="Notes"
                            isRequired
                            isColumn
                            component={TextareaComponent}
                          />
                        </div>
                      </FlexContainer>
                      <Spacer style={{ marginTop: "1.5em" }} />
                      <h2><b>About You</b></h2>
                      <FlexContainer justifyContent="space-between">
                        <div style={{ width: "40%" }}>
                          <FastField
                            name="firstName"
                            isColumnWithoutNoCreate 
                            label="First Name"
                            width={"100%"}
                            isColumn
                            component={InputComponent}
                          />
                        </div>
                        <div style={{ width: "40%" }}>
                          <FastField
                            name="lastName"
                            isColumn
                            label="LastName"
                            component={InputComponent}
                            inlineLabel
                            width={"100%"}
                          />
                        </div>
                      </FlexContainer>
                          <Spacer/>
                      
                    </div>
                    
                  </div>
                  <div style={{ width: "49%" }}>
                    <Spacer />
                    <FlexContainer justifyContent="space-between">
                        <div style={{ width: "27%" }}>
                          <FastField
                            name="countryDialCode"
                            isColumnWithoutNoCreate
                            selectType="dialCode"
                            label="Mobile#"
                            width={"100%"}
                            isColumn
                            component={SearchSelect}
                          />
                        </div>
                        <div style={{ width: "70%" }}>
                          <FastField
                            type="text"
                            name="phoneNo"
                            isColumn
                            component={InputComponent}
                            inlineLabel
                            width={"100%"}
                          />
                        </div>
                      </FlexContainer>
                      <Spacer/>
                      <FlexContainer>
                        <div style={{ width: "100%" }}>
                          <FastField
                            isRequired
                            type="email"
                            name="email"
                            label="Email"
                            className="field"
                            isColumn
                            width={"100%"}
                            component={InputComponent}
                            inlineLabel
                          />
                        </div>
                      </FlexContainer>
                      <Spacer/>
                    <FieldArray
                      name="address"
                      render={(arrayHelpers) => (
                        <AddressFieldArray
                          singleAddress
                          arrayHelpers={arrayHelpers}
                          values={values}
                        />
                      )}
                    />
                    <Spacer />
                    <FlexContainer justifyContent="space-between">
                      <div style={{ width: "47%" }}>
                        <Field
                          name="taxRegistrationNumber"
                          type="text"
                          label="Tax Reg#"
                          isColumn
                          width={"100%"}
                          component={InputComponent}
                          inlineLabel
                        />
                      </div>
                      <div style={{ width: "47%" }}>
                        <Field
                          name="businessRegistrationNumber"
                          type="text"
                          label="Business Reg#"
                          isColumn
                          width={"100%"}
                          component={InputComponent}
                          inlineLabel
                        />
                      </div>
                    </FlexContainer>
                    <Spacer />
                    <FlexContainer justifyContent="space-between">
                      <div style={{ width: "47%" }}>
                        <Field
                          name="bankName"
                          type="text"
                          label="Bank Name"
                          isColumn
                          width={"100%"}
                          component={InputComponent}
                          inlineLabel
                        />
                      </div>
                      <div style={{ width: "47%" }}>
                        <Field
                          name="accountNumber"
                          type="text"
                          label="Account #"
                          isColumn
                          width={"100%"}
                          component={InputComponent}
                          inlineLabel
                        />
                      </div>
                    </FlexContainer>
                    <Spacer style={{ marginTop: "1.5625em" }} />
                    {/* <StyledLabel>Status</StyledLabel>
                    &nbsp;&nbsp;
                    <Switch
                      checked={this.state.documentStatus}
                      onChange={this.handleDocumentStatus}
                      checkedChildren="Approved"
                      unCheckedChildren="Not Approved"
                    /> */}
                  </div>
                </div>
              </MainWrapper>
              <Spacer style={{ margin: "1%" }} />
              <FlexContainer justifyContent="center">
                <Button
                  type="primary"
                  htmlType="submit"
                  // icon={<PoweroffOutlined />}
                  Loading={addingPartner}
                >
                  Apply
                </Button>
              </FlexContainer>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

const mapStateToProps = ({ job }) => ({
  addingCandidate: job.addingCandidate,
  sectors: job.sectors,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addPartner,
      getSectors,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(JobVendorForm);
