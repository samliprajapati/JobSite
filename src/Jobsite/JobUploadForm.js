import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Select, Icon, Tag, Switch, Checkbox } from "antd";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
// import { FormattedMessage } from "react-intl";
import * as Yup from "yup";
import { Spacer } from "../Components/UI/Elements";
import { ShowOrCollapse } from "../Components/Common";
import SearchSelect from "../Components/Forms/Formik/SearchSelect";
import AddressFieldArray from "../Components/Forms/Formik/AddressFieldArray";
import { InputComponent } from "../Components/Forms/Formik/InputComponent";
import { SelectComponent } from "../Components/Forms/Formik/SelectComponent";
// import { addCandidate } from "../CandidateAction";
import Upload from "../Components/Forms/Formik/Upload";
import { StyledLabel } from "../Components/UI/Elements";
import { FlexContainer } from "../Components/UI/Layout";
import { TextareaComponent } from "../Components/Forms/Formik/TextareaComponent";
import { DatePicker } from "../Components/Forms/Formik/DatePicker";
import moment from "moment";
// import SkillsLoadMore from "./CandidateTable/SkillsLoadMore";
const { Option } = Select;
/**
 * yup validation scheme for creating a contact
 */
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const CandidateSchema = Yup.object().shape({
  // contactOwner: Yup.string().required("Please Select contact owner"),
  emailId: Yup.string()
    .email("Enter a valid Email")
    .required("Input needed!"),
  firstName: Yup.string().required("Input needed!"),
});

class JobUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      option: "Mobile",
      option1: "Mobile",
      option2: "Work",
      currentOption: "",
      candidate: false,
      availability: true,
      billing: false,
      whiteblue: true,
      checked: true,
      whatsapp:false,
    };
  }
  handleCandidate = (checked) => {
    this.setState({ candidate: checked });
  };
  handleAvailability = (checked) => {
    this.setState({ availability: checked });
  };
  handleWhatsApp = (checked) => {
    this.setState({ whatsapp: checked });
  };
  handlebilling = (checked) => {
    this.setState({ billing: checked });
  };
  handleWhiteBlue = (checked) => {
    this.setState({ whiteblue: checked });
  };
  handleReset = (resetForm) => {
    const { callback } = this.props;
    callback && callback();
    resetForm();
  };
  handleClick = (option) => {
    ////debugger;
    this.setState({
      currentOption: option,
    });
    console.log(this.state.option);
    console.log(this.state.currentOption);
  };
  handleFieldClik() {
    this.setState({
      disabled: !this.state.disabled,
      visible: !this.state.visible,
    });
  }

  handleChange = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  onChange = (value) => {
    console.log(value);
    this.setState({
      option: value,
    });
  };
  onChange1 = (value) => {
    console.log(value);
    this.setState({
      option1: value,
    });
  };
  onChange2 = (value) => {
    ////debugger;
    console.log(value);
    this.setState({
      option2: value,
    });
  };

 

  componentDidMount() {
    // const { getLibrarys,organizationId,} = this.props;
    // console.log();
    // getLibrarys(organizationId);
    // this.props.getSectors();
    // this.props.getDepartments();
  }

  render() {
    const {
      // user: { userId, firstName, lastName,department },
      addCandidate,
      addingCandidate,
      availableDate,
    } = this.props;

    
   

    return (
      <>
        <Formik
          initialValues={{
          //   sectorId: "",
          //   roleTypeId: "",
          //   workpreference:"",
          //   partnerId: "",
          //   sectorName: "",
          //   partnerName: "",
          //   sectorDescription: "",
          //   currentCtc: "",
          //   salutation: "",
          //   firstName: "",
          //   middleName: "",
          //   lastName: "",
          //   noticeDetail: "",
          //   definationId:[],
          //   countryDialCode: this.props.user.countryDialCode,
          //   phoneNumber: "",
          //   // mobileNumber: "", phoneNumbers
          //   mobileNumber: this.props.responseData&&this.props.responseData.phoneNumbers.length  ?  this.props.responseData.phoneNumbers[0] : "",
          //   countryDialCode1: this.props.user.countryDialCode,
          //   emailId: this.props.responseData ? this.props.responseData.emails.length && this.props.responseData.emails[0] : "",
          //   documentId: this.props.resumeForm.length && this.props.resumeForm ? this.props.resumeForm.length && this.props.resumeForm : "",
          //   // emailId:"", 
          //   // designation: "",
          //    linkedin: this.props.responseData&&this.props.responseData.hasOwnProperty("linkedInProfile") ? this.props.responseData.linkedInProfile: "",
          //   designationTypeId: "",
          //   departmentId:"",
          //   countryDialCode1:"",
          //   phoneNumber:"",
          //   notes: "",
          //   country: this.props.user.country,
          //   availableDate: availableDate || moment(),
          //   benifit: "",
          //   tag_with_company: "",
          //   billing: 0,
          //   noticeDetail: "",
          //   currency: this.props.user.currency,
          //   userId: this.props.userId,
          //   active: this.state.availability ? "true" : "false",
          //   worktype: this.state.billing ? "Permanent" : "Contract",
          //   whatsapp: this.state.whatsapp ? "Different" : "Same",
          //   category: this.state.checked ? "Both" : this.state.whiteblue ? "White" : "Blue",
          //   // startDate: moment(),
          //   dateOfBirth: moment(),
          //   gender: "",
          //   nationality: this.props.user.countryName,
          //   idProof: "",
          //   idNumber: "",
          //   CostType: "",
          //   address: [
          //     {
          //       addressType: "",
          //       address1: "",
          //       address2: "",
          //       town: "",
          //       street: "",
          //       city: "",
          //       postalCode: "",
          //       country: this.props.user.countryName,
          //       latitude: "",
          //       skills:[],
          //       longitude: "",
          //     },
          //   ],
          // 
        }}
          validationSchema={CandidateSchema}
          onSubmit={(values, { resetForm }) => {
            // console.log(values,this.props.responseData&&this.props.responseData.phoneNumbers.length  ?  this.props.responseData.phoneNumbers[0] : "",);

          
            // addCandidate(
            //   {
            //     ...values,
            //     // skills: this.props.responseData ? this.props.responseData.skills : [],
            //     skills:this.props.responseData ? this.props.responseData.skills.concat(values.skills):values.skills||[],
            //     mobileNumber:values.mobileNumber,
            //     linkedin: values.linkedin,
            //     //linkedin: this.props.responseData ? this.props.responseData.linkedInProfile.length && this.props.responseData.linkedInProfile:"",
            //     // emailId:this.props.responseData ? this.props.responseData.emails : "",


            //     active: this.state.availability ? "true" : "false",
            //     worktype: this.state.billing ? "Permanent" : "Contract",
            //     whatsapp: this.state.whatsapp ? "Different" : "Same",
            //     // category: this.state.whiteblue ?"White" : "Blue",
            //     category: this.state.checked ? "Both" : this.state.whiteblue ? "White" : "Blue",
            //     // availableDate: moment(values.availableDate).format(
            //     //   "YYYY-MM-DD"
            //     availableDate: moment(values.availableDate).toISOString(),
            //     // availableDate: `${newavailableDate}T00:00:00Z`,

            //   },
            //   this.props.userId,
            //   () => this.handleReset(resetForm)
            // );
          }}
        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            setFieldValue,
            setFieldTouched,
          }) => (
            <Form>
              <div style={{ display: "flex", justifyContent: "space-between",height: "70vh", overflow:"scroll",paddingRight: "0.6em" }}>
                <div
                  style={{
                    height: "100%",
                    width: "45%",
                   
                  }}
                >
                  <FlexContainer flexWrap="no-wrap">
                    <FastField name="imageId" component={Upload} />
                    <div>
                      <FlexContainer justifyContent="space-between">
                        <div style={{ width: "35%" }}>
                          <FastField
                            name="salutation"
                            type="text"
                            label="Salutation"
                            // label={
                            //   <FormattedMessage
                            //     id="app.salutation"
                            //     defaultMessage="Salutation"
                            //   />
                            // }
                            options={["Mr.", "Ms.", "None"]}
                            component={SelectComponent}
                            inlineLabel
                            className="field"
                            isColumn
                          />
                        </div>
                        <div style={{ width: "63%" }}>
                          <FastField
                            isRequired
                            name="firstName"
                            label="First Name"
                            // label={
                            //   <FormattedMessage
                            //     id="app.firstName"
                            //     defaultMessage="First Name"
                            //   />
                            // }
                            type="text"
                            width={"100%"}
                            isColumn
                            component={InputComponent}
                            inlineLabel
                          />
                        </div>
                      </FlexContainer>
                            <Spacer />
                      <FlexContainer justifyContent="space-between">
                        <div style={{ width: "40%" }}>
                          <FastField
                            name="middleName"
                            label="Middle Name"
                            // label={
                            //   <FormattedMessage
                            //     id="app.middleName"
                            //     defaultMessage="Middle"
                            //   />
                            // }
                            type="text"
                            width={"100%"}
                            isColumn
                            component={InputComponent}
                            inlineLabel
                          />
                        </div>
                        <div style={{ width: "55%" }}>
                          <FastField
                            name="lastName"
                            label="Last Name"
                            // label={
                            //   <FormattedMessage
                            //     id="app.lastName"
                            //     defaultMessage="Last Name"
                            //   />
                            // }
                            type="text"
                            width={"100%"}
                            isColumn
                            component={InputComponent}
                            inlineLabel
                          />
                        </div>
                      </FlexContainer>
                    </div>
                  </FlexContainer>                  
                  <FlexContainer justifyContent="space-between">
                    <div style={{ width: "100%" }}>
                      <FastField
                        isRequired
                        type="email"
                        name="emailId"
                        label="Email"
                        // label={
                        //   <FormattedMessage
                        //     id="app.emailId"
                        //     defaultMessage="Email"
                        //   />
                        // }
                        className="field"
                        isColumn
                        width={"100%"}
                        component={InputComponent}
                        inlineLabel
                      />
                    </div>
                  </FlexContainer>
                  <Spacer/>
                  <FlexContainer justifyContent="space-between">
                    <div style={{ width: "100%" }}>
                      <FastField
                        // isRequired
                        // type="email"
                        name="workpreference"
                        label="Work Preference"
                        // label={
                        //   <FormattedMessage
                        //     id="app.emailId"
                        //     defaultMessage="Work Preference"
                        //   />
                        // }
                        className="field"
                        isColumn
                        width={"100%"}
                        component={SelectComponent}
                        options={[
                          "Remote",
                          "Hybrid",
                          "Office"
                        ]}
                        inlineLabel
                      />
                    </div>
                  </FlexContainer>
                  <Spacer/>
                  <FlexContainer justifyContent="space-between">
                    <div style={{ width: "29%" }}>
                      <FastField
                        name="countryDialCode"
                        isColumnWithoutNoCreate
                        label="Mobile #"
                        // label={
                        //   <FormattedMessage
                        //     id="app.countryDialCode"
                        //     defaultMessage="Mobile #"
                        //   />
                        // }
                        isColumn
                        // margintop={"0em"}
                        selectType="dialCode"
                        style={{
                          flexBasis: "80%",
                         // marginTop: "0px",
                        }}
                        component={InputComponent}
                        // component={SearchSelect}
                        // defaultValue={{
                        //   value: this.props.user.countryDialCode,
                        // }}
                        // value={values.countryDialCode}
                        inlineLabel
                      />
                    </div>
                    <div style={{ width: "40%", }}>
                      <FastField
                        type="text"
                        name="mobileNumber"
                        //placeholder="Mobile #"
                        // label={
                        //   <FormattedMessage
                        //     id="app.mobileNo"
                        //     defaultMessage="Mobile #"
                        //   />
                        // }
                        component={InputComponent}
                        inlineLabel
                        width={"100%"}
                        style={{ flexBasis: "30%" }}
                        isColumn
                      />
                    </div>
                    <div
                      style={{
                        width: "22%",
                        fontWeight: "bold",
                       // marginTop: "2px",
                      }}
                    >
                      WhatsApp
                      <Switch
                        style={{                      
                        marginLeft: "0.3125em"
                       }}
                         onChange={this.handleWhatsApp}
                        checked={this.state.whatsapp}
                        checkedChildren="Different"
                        unCheckedChildren="Same"
                      />
                    </div>
                  </FlexContainer>
                  <Spacer />
                  <FlexContainer justifyContent="space-between">
                      <div style={{ width: "47%" }}>
                        {" "}
                         {this.state.whatsapp && ( 
                          <Field
                            name="countryDialCode1"
                            isColumnWithoutNoCreate
                            selectType="dialCode"
                            label="Phone #"

                            // label={
                            //   <FormattedMessage
                            //     id="app.#phone"
                            //     defaultMessage="Phone #"
                            //   />
                            // }
                            
                            // disabled={!this.state.availability}
                            // component={SearchSelect}
                            component={InputComponent}
                            isColumn
                            style={{
                              flexBasis: "80%",
                             // marginTop: "0px",
                            }}
                            // width={"100%"}
                            // value={values.availableDate}
                            inlineLabel                            
                           
                          />
                         )} 
                      </div>
                      <div style={{ width: "47%" }}>
                      {this.state.whatsapp && ( 
                        <FastField
                          name="phoneNumber"
                          //label="Email"
                          // label={
                          //   <FormattedMessage
                          //     id="app.experience"
                          //     defaultMessage="Experience (Years)"
                          //   />
                          // }
                          // className="field"
                          isColumn
                          width={"100%"}
                          style={{ flexBasis: "30%" }}
                          component={InputComponent}
                          inlineLabel
                        />
                      )}
                         
                      </div>
                         
                      </FlexContainer>
                  <Spacer />
                  <FlexContainer justifyContent="space-between">
                    <div style={{ width: "47%" }}>
                      <FastField
                        name="idProof"
                        label="Mobile #"
                        // label={
                        //   <FormattedMessage
                        //     id="app.idproof"
                        //     defaultMessage="ID Proof"
                        //   />
                        // }
                        isColumn
                        // margintop={"0em"}
                        options={[
                          "PassPort",
                          "ID Card",
                        ]}

                        component={SelectComponent}
                        // defaultValue={{
                        //   value: this.props.user.countryDialCode,
                        // }}
                        // value={values.countryDialCode}
                        inlineLabel
                      />
                    </div>
                    <div style={{ width: "47%" }}>
                      <FastField
                        type="idNumber"
                        name="idNumber"
                        label="ID Number"
                        // label={
                        //   <FormattedMessage
                        //     id="app.idNumber"
                        //     defaultMessage="ID Number"
                        //   />
                        // }
                        component={InputComponent}
                        inlineLabel
                        width={"100%"}
                        isColumn
                      />
                    </div>
                  </FlexContainer>
                  <Spacer />
                  <FlexContainer justifyContent="space-between">
                    <div style={{ width: "47%" }}>
                      <FastField
                        // name="department"
                        name="sectorId"
                        // isColumnWithoutNoCreate
                        // selectType="sectorName"
                        label="Sector"
                        
                      
                        // options={[
                        //   " Accountancy",
                        //   " Aviation",
                        //   " Banking",
                        //   "Car industry ",
                        //   "Clothing ",
                        //   " Construction ",
                        //   " Content generation/management ",
                        //   " Daycare ",
                        //   "Design",
                        //   "Digital marketing",
                        //   " Distributor ",
                        //   " Finance ",
                        //   "Furniture ",
                        //   " Gaming ",
                        //   "Health services ",
                        //   "HR & Business operations ",
                        //   "Immigration and payrolling ",
                        //   "IT services",
                        //   "Painting ",
                        //   " Real-estate ",
                        //   " Recruitment",
                        //   "Telecommunications ",
                        //   " Transport services ",
                        //   "Web development ",
                        // ]}
                        // onChange={() => {
                        //   this.handleFieldClik();
                        // }}
                        isColumn
                        // component={SearchSelect}
                        component={SelectComponent}
                        options={[
                             " Accountancy",
                            " Aviation"]}
                        // options={Array.isArray(sectorOption) ? sectorOption : []}
                       

                      />
                    </div>
                    <div style={{ width: "47%" }}>
                      <FastField
                        name="departmentId"
                        // selectType="departmentName"
                        label="Department"
                      
                        // isColumnWithoutNoCreate
                        // selectType="designationType"
                        options={[
                          " Accountancy",
                         " Aviation"]}
                        isColumn

                         component={SelectComponent}
                        // options={
                        //   Array.isArray(this.getdepartmentOptions("sectorId", values.sectorId))
                        //     ? this.getdepartmentOptions("sectorId", values.sectorId)
                        //     : []
                        // }
                        value={values.departmentId}
                        filterOption={{
                          filterType: "sector",
                          filterValue: values.sectorId,
                        }}
                        // disabled={!values.sectorId}
                        // value={values.designationTypeId}
                        inlineLabel
                      />
                    </div>
                  </FlexContainer>
                  <Spacer />
                  <FlexContainer justifyContent="space-between">
                    <div style={{ width: "47%" }}>
                      <FastField
                        name="nationality"
                        isColumnWithoutNoCreate
                        label="Nationality"
                        // label={
                        //   <FormattedMessage
                        //     id="app.nationality"
                        //     defaultMessage="Nationality"
                        //   />
                        // }
                        isColumn
                        // margintop={"0em"}
                        selectType="country"
                        // component={SearchSelect}
                        component={InputComponent}
                        // defaultValue={{
                        //   value: this.props.user.countryName,
                        // }}
                        // value={values.countryName}
                        inlineLabel
                      />
                    </div>
                    <div style={{ width: "47%" }}>
                      <FastField
                        name="roleTypeId"
                        selectType="roleType"
                        label="Role"
                        // label={
                        //   <FormattedMessage
                        //     id="app.role"
                        //     defaultMessage="Role"
                        //   />
                        // }
                        isColumnWithoutNoCreate
                        // selectType="designationType"
                        // options={[
                        //   "Board",
                        //   "CXO",
                        //   "Director",
                        //   "Unit Head",
                        //   "Mid Level",
                        //   "Junior",
                        // ]}
                        isColumn
                        component={InputComponent}
                        // component={SearchSelect}
                        // value={values.designationTypeId}
                        inlineLabel
                      />
                    </div>
                  </FlexContainer>               
                  <Spacer />                     
                  {/* <FlexContainer justifyContent="space-between">
                      <div style={{ width: "47%" }}>
                        <FastField
                          name="countryDialCode1"
                          selectType="dialCode"
                          //label="Phone No #"
                          label={<FormattedMessage
                            id="app.countryDialCode1"
                            defaultMessage="Phone No"
                          />}
                          isColumn
                          margintop={"0em"}
                          component={SearchSelect}
                          defaultValue={{
                            value: this.props.user.countryDialCode,
                          }}
                          value={values.countryDialCode1}
                          inlineLabel
                          style={{ flexBasis: "80%" }}
                        />
                      </div>
                      <div style={{ width: "47%" }}>
                        <FastField
                          type="text"
                          name="phoneNumber"
                          // placeholder="Phone #"
                          label={<FormattedMessage
                            id="app.phoneNumber"
                            defaultMessage="Phone #"
                          />}
                          isColumn
                          component={InputComponent}
                          inlineLabel
                          width={"100%"}
                          style={{
                            flexBasis: "80%",
                            height: "2.0625em",
                            marginTop: "0em",
                          }}
                        />
                      </div>
                    </FlexContainer> */}                

                  
                  
                  <FlexContainer justifyContent="space-between">
                  <div style={{ width: "47%" }}>
                      <FastField
                        name="partnerId"
                        isColumnWithoutNoCreate
                        label="Vendor"
                        // label={
                        //   <FormattedMessage
                        //     id="app.vendor"
                        //     defaultMessage="Vendor"
                        //   />
                        // }
                        isColumn
                        // margintop={"0em"}
                        selectType="partnerListName"
                        // component={SearchSelect}
                        component={InputComponent}
                        // defaultValue={{
                        //   value: "Chin",
                        // }}
                        // defaultValue={{
                        //   value: this.props.user.countryName,
                        // }}
                        // value={values.countryName}
                        inlineLabel
                      />
                    </div>
                    <div style={{ width: "47%" }}>
                      <FastField
                        name="designationTypeId"
                        label="Designation"
                        // label={
                        //   <FormattedMessage
                        //     id="app.designation"
                        //     defaultMessage="Designation"
                        //   />
                        // }
                        isColumnWithoutNoCreate
                        selectType="designationType"
                        // options={[
                        //   "Board",
                        //   "CXO",
                        //   "Director",
                        //   "Unit Head",
                        //   "Mid Level",
                        //   "Junior",
                        // ]}
                        isColumn
                        // component={SelectComponent}
                        // component={SearchSelect}
                        component={InputComponent}
                        // value={values.designationTypeId}
                        inlineLabel
                      />
                    </div>
                  </FlexContainer>
                  <Spacer />
                  <FlexContainer justifyContent="space-between">
                  <div style={{ width: "47%" }}>
                      <>
                        <Field
                          name="tag_with_company"
                          // selectType="customerList"
                          label="Tag Company"
                          // label={
                          //   <FormattedMessage
                          //     id="company"
                          //     defaultMessage="Company"
                          //   />
                          // }
                          component={InputComponent}
                          isColumn
                          // value={values.customerId}
                          // defaultValue={{ label: firstName, value: documentId }}
                          inlineLabel
                          width={"100%"}
                        />
                      </>
                    </div>
                    <div style={{ width: "45%" }}>
                      <FastField
                        type="text"
                        name="linkedin"
                        label="Linkedin "
                        // label={
                        //   <FormattedMessage
                        //     id="app.linkedin"
                        //     defaultMessage="Linkedin"
                        //   />
                        // }
                        isColumn
                        width={"100%"}
                        //value={ this.props.responseData.hasOwnProperty("linkedInProfile") ? this.props.responseData.linkedInProfile: ""}
                        component={InputComponent}
                        inlineLabel
                      />
                    </div>
                  </FlexContainer>                
                  <Spacer />
                  <FlexContainer justifyContent="space-between">
                    <div style={{ width: "47%" }}>
                      <Field
                        name="dateOfBirth"
                        label="Date of Birth"
                        // label={
                        //   <FormattedMessage
                        //     id="app.dateOfBirth"
                        //     defaultMessage="Date of Birth"
                        //   />
                        // }
                        isColumn
                        component={DatePicker}
                        value={values.dateOfBirth}
                      // defaultValue={moment("2020-01-01")}
                      />
                    </div>
                    {/* <div style={{ width: "47%" }}>
                      <FastField
                        name="gender"
                        //label="Mobile #"
                        label={
                          <FormattedMessage
                            id="app.gender"
                            defaultMessage="Gender"
                          />
                        }
                        isColumn
                        margintop={"0em"}
                        // selectType="dialCode"
                        component={SearchSelect}
                        // defaultValue={{
                        //   value: this.props.user.countryDialCode,
                        // }}
                        // value={values.countryDialCode}
                        inlineLabel
                        style={{ flexBasis: "80%" }}
                      />
                    </div> */}

                    <div style={{ width: "47%" }}>
                      <FastField
                        name="gender"
                        type="text"
                        label="Gender"
                        // label={
                        //   <FormattedMessage
                        //     id="app.gender"
                        //     defaultMessage="Gender"
                        //   />
                        // }
                        options={["Male", "Female", "Others"]}
                        component={SelectComponent}
                        inlineLabel
                        className="field"
                        isColumn
                      />
                    </div>
                  </FlexContainer> 
                </div>
                &nbsp;
                <div
                  style={{
                    height: "70%",
                    width: "45%",
                  }}
                >
                  {/* {this.props.responseData && (
                    <>
                      <StyledLabel>Skill set</StyledLabel>
                      <SkillsLoadMore
                        skillList={this.props.responseData.skills}
                      />
                    </>
                  )} */}
                  <Spacer />
                  {/* {this.state.candidate && ( */}

                  <>
                    <Spacer style={{ marginTop: "1.25em" }} />
                    
                    <FlexContainer justifyContent="space-between">
                      


<FlexContainer justifyContent="space-between">

                       <Field
                    name="skills"
                    //  selectType="contactList"
                    // isColumnWithoutNoCreate
                    label="Skills"
                  
                  mode
                    placeholder="Select"
                    width={"100%"}
                   component={SelectComponent}
                   options={[
                    " Accountancy",
                   " Aviation"]}
                    // options={Array.isArray(libraryOption) ? libraryOption : []}
                     
                  />
{/* <Switch  
  checked={this.state.whiteblue}
  onChange={this.handleWhiteBlue}
  disabled={this.state.checked}
  checkedChildren="White"
  unCheckedChildren="Blue"
/> */}
{/* <Checkbox
  checked={this.state.checked}
  onChange={() => this.handleChange()}
  style={{ marginLeft: "auto" }}
>Both
                    </Checkbox> */}
                    </FlexContainer>
                    </FlexContainer>
                    <Spacer style={{ marginTop: "1em" }} />
                    <FlexContainer >
                    <FlexContainer justifyContent="space-between">
                      
<StyledLabel >Requirement Type</StyledLabel>
</FlexContainer>
<FlexContainer justifyContent="space-between">
<Switch  
  checked={this.state.whiteblue}
  onChange={this.handleWhiteBlue}
  disabled={this.state.checked}
  checkedChildren="White"
  unCheckedChildren="Blue"
/>
<Checkbox
  checked={this.state.checked}
  onChange={() => this.handleChange()}
  style={{ marginLeft: "auto" }}
>Both
                    </Checkbox>
                    </FlexContainer>
                    </FlexContainer>
                    <Spacer style={{ marginTop: "1em" }} />
                    <FlexContainer justifyContent="space-between">
                    <div style={{ width: "47%" }}>
                    <FlexContainer justifyContent="space-between">
                      <StyledLabel >Active</StyledLabel>                     
                      <Switch                                              
                        checked={this.state.availability}
                        onChange={this.handleAvailability}
                        // disabled={this.state.availability}
                        checkedChildren="Yes"
                        unCheckedChildren="No"
                      />
                      </FlexContainer>
                      </div>
                     
                      <div style={{ width: "47%" }}>
                      <FlexContainer justifyContent="space-between">
                      <StyledLabel>Type</StyledLabel>
                      <Switch                                           
                        checked={this.state.billing}
                        onChange={this.handlebilling}
                        checkedChildren="Permanent"
                        unCheckedChildren="Contract"
                      />
                      </FlexContainer>
                      </div>
                    </FlexContainer>
                    <Spacer style={{ marginTop: "1em" }} />
                    <FlexContainer justifyContent="space-between">
                      <div style={{ width: "47%" }}>
                        {" "}
                        {this.state.availability && (
                          <Field
                            name="availableDate"
                            label="Available from"

                            // label={
                            //   <FormattedMessage
                            //     id="app.availableDate"
                            //     defaultMessage="Available from"
                            //   />
                            // }
                            // disabled={!this.state.availability}
                            component={DatePicker}
                            isColumn
                            width={"100%"}
                            value={values.availableDate}
                            inlineLabel                            
                            disabledDate={(currentDate) => {
                              if (values.availableDate) {
                                if (
                                  moment(currentDate).isBefore(
                                    moment(values.availableDate)
                                  )
                                ) {
                                  return true;
                                } else {
                                  return false;
                                }
                              }
                            }}
                          />
                        )}
                      </div>
                      <div style={{ width: "47%" }}>
                        <FastField
                          name="experience"
                          label="Experience"
                          // label={
                          //   <FormattedMessage
                          //     id="app.experience"
                          //     defaultMessage="Experience (Years)"
                          //   />
                          // }
                          // className="field"
                          isColumn
                          width={"100%"}
                          component={InputComponent}
                          inlineLabel
                        />
                      </div>
                      </FlexContainer>
                      <Spacer style={{marginTop:"1.25em"}}/>
                      <FlexContainer justifyContent="space-between">
                      <div style={{ width: "47%" }}>
                        <Field
                          name="billing"
                          label={this.state.billing ? "Expectation" : "Billing"}

                          // label={ 
                          //   <FormattedMessage
                          //     id="app.billing"
                          //     defaultMessage="Billing/Hr"
                          //   />
                          // }

                          width={"100%"}
                          isColumn
                          component={InputComponent}                          
                        />
                      </div>
                      <div style={{ width: "47%" }}>
                        <FastField
                          name="CostType"
                          label="Cost Type"
                          // label={
                          //   <FormattedMessage
                          //     id="app.cost"
                          //     defaultMessage="Cost Type"
                          //   />
                          // }
                          // className="field"
                          isColumn
                          width={"100%"}
                          component={SelectComponent}
                          options={["Hourly", "Weekly", "Monthly", "Monthly Salary", "Annual Salary"]}
                          inlineLabel
                        />

                      </div>
                          </FlexContainer>
                    
                  </>
                  <Spacer />
                  <FlexContainer justifyContent="space-between">
                    <div style={{ width: "47%" }}>
                      <FastField
                        // isRequired
                        // type="text"
                        name="currentSalary"
                        label="Current Salary"
                        // label={
                        //   <FormattedMessage
                        //     id="app.currentsalary"
                        //     defaultMessage="Current Salary"
                        //   />
                        // }
                        // className="field"
                        isColumn
                        width={"100%"}
                        component={InputComponent}
                        inlineLabel
                      />
                    </div>

                    <div style={{ width: "47%" }}>
                      <Field
                        name="currency"
                        isColumnWithoutNoCreate
                        placeholder="Currency"
                        // defaultValue={{
                        //   value: this.props.user.currency,
                        // }}
                        label="
                         Currency"
                       

                        isColumn
                        selectType="currencyName"
                        isRequired
                        // component={SearchSelect}
                        component={InputComponent}
                      />
                    </div>
                  </FlexContainer>
                  <Spacer />
                  <FlexContainer justifyContent="space-between">
                    <div style={{ width: "47%" }}>
                      <Field
                        name="benifit"
                        label="Benefits"

                        // label={
                        //   <FormattedMessage
                        //     id="benifit"
                        //     defaultMessage="Benefits"
                        //   />
                        // }
                        component={InputComponent}
                        isColumn
                        width="100%"
                      />

                    </div>                    
                    <div style={{ width: "47%" }}>
                      <FastField
                        name="noticePeriod"
                        label="Notice"
                        // label={
                        //   <FormattedMessage
                        //     id="app.notice"
                        //     defaultMessage="Notice (months)"
                        //   />
                        // }
                        // className="field"
                        isColumn
                        width={"100%"}
                        options={["1","2","3","4","5","6","7","8"]}
                        component={SelectComponent}
                        inlineLabel
                      />
                    </div>
                    </FlexContainer>
                    <Spacer />
                    <FlexContainer >
                      <div style={{ width: "100%" }}>
                        <Field
                          name="noticeDetail"
                          label="Description"
                          // label={
                          //   <FormattedMessage
                          //     id="app.noticeperiodinfo"
                          //     defaultMessage="Notice Period Info"
                          //   />
                          // }
                          isRequired
                          isColumn
                         
                          
                          component={TextareaComponent}
                        />
                      </div>
                    

                  </FlexContainer>
                  {/* )} */}
                  <Spacer style={{ marginTop: "1.56em" }} />
                  <Field
                    name="address[0].address1"
                    label="Address"
                    // label={
                    //   <FormattedMessage
                    //     id="app.address[0].address1"
                    //     defaultMessage="Address"
                    //   />
                    // }
                    component={InputComponent}
                    isColumn
                    width="100%"
                  />
                  <Spacer />
                  <Field
                    name="address[0].street"
                    label="Street"

                    // label={
                    //   <FormattedMessage
                    //     id="app.street"
                    //     defaultMessage="Street"
                    //   />
                    // }
                    component={InputComponent}
                    isColumn
                    width="100%"
                  />
                  <Spacer />
                  <FlexContainer justifyContent="space-between">
                    <div style={{ width: "47%" }}>
                      <Field
                        name="address[0].city"
                        //label="City"
                        // label={
                        //   <FormattedMessage
                        //     id="app.ddress[0].city"
                        //     defaultMessage="City"
                        //   />
                        // }
                        component={InputComponent}
                        isColumn
                        width="100%"
                      />
                    </div>
                    <div style={{ width: "47%" }}>
                      <Field
                        // name="address[0].country"
                        name="country"
                        isColumnWithoutNoCreate
                        label="Country"

                        // label={
                        //   <FormattedMessage
                        //     id="app.country"
                        //     defaultMessage="Country"
                        //   />
                        // }
                        component={InputComponent}
                        // component={SearchSelect}
                        // defaultValue={{
                        //   value: this.props.user.countryName,
                        // }}
                        // value={values.countryName}
                        selectType="country"
                        inlineLabel
                        // style={{ flexBasis: "80%" }}
                        isColumn
                        width="100%"
                      />
                    </div>
                  </FlexContainer>
                  <Spacer />
                  <FlexContainer justifyContent="space-between">
                    <div style={{ width: "47%" }}>
                      <Field
                        name="address[0].state"
                        label="State"

                        // label={
                        //   <FormattedMessage
                        //     id="app.address[0].State"
                        //     defaultMessage="State"
                        //   />
                        // }
                        component={InputComponent}
                        isColumn
                        width="100%"
                      />
                    </div>
                    <div style={{ width: "47%" }}>
                      <Field
                        name="address[0].postalCode"
                        label="Zip Code"

                        // label={
                        //   <FormattedMessage
                        //     id="app.address[0].postalCode"
                        //     defaultMessage="Pin Code"
                        //   />
                        // }
                        component={InputComponent}
                        isColumn
                        width="100%"
                      />
                    </div>
                  </FlexContainer>                
                 
                </div>
              </div>

              <Spacer style={{ marginTop: "1.25em" }} />


              <FlexContainer justifyContent="flex-end">
                <Button
                  type="primary"
                  htmlType="submit"
                  // icon={<PoweroffOutlined />}
                  Loading={addingCandidate}
                >
                  {/* <FormattedMessage id="app.create" defaultMessage="Create" /> */}
                                      
                    Create
                </Button>
              </FlexContainer>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

const mapStateToProps = ({ auth, candidate,departments,sector, librarys,team, opportunity }) => ({
  // token: auth.token,
  // opportunityId: opportunity.opportunity.opportunityId,
  // contact: contact.contact,
  // addingCandidate: candidate.addingCandidate,
  // resumeForm: candidate.resumeForm,
  // sectors: sector.sectors,
  // organizationId: auth.userDetails.organizationId,
  // addingCandidateError: candidate.addingCandidateError,
  // fetchingcontacts: contact.fetchingcontacts,
  // fetchingcontactsError: contact.fetchingcontactsError,
  // contacts: contact.contacts,
  // users: team.users,
  // user: auth.userDetails,
  // userId: auth.userDetails.userId,
  //  department: auth.userDetails && auth.userDetails.department,
  // partnerLogin: auth.userDetails && auth.userDetails.partnerLogin,
  // creatorName: opportunity.opportunity.creatorName,
  // creatorId: opportunity.opportunity.creatorId,
  // accountName:
  //   opportunity.opportunity &&
  //   opportunity.opportunity.metaData &&
  //   opportunity.opportunity.metaData.account &&
  //   opportunity.opportunity.metaData.account.accountName,
  // accountIdTag:
  //   opportunity.opportunity &&
  //   opportunity.opportunity.metaData &&
  //   opportunity.opportunity.metaData.account &&
  //   opportunity.opportunity.metaData.account.accountId,
  // currencies: auth.currencies,
  // librarys: librarys.librarys,
  // departments: departments.departments,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      // getContacts,
      // addCandidate,
      // getLibrarys,
      // getSectors,
      // getDepartments
      // getAllPartnerListByUserId,
      // getContactById,
      // addLinkContactByOpportunityId,
      // getCurrency,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(JobUploadForm);



