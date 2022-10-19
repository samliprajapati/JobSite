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
import {AddEmail} from "./JobAction";
class JobEmailForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
    }
    handleReset = (resetForm) => {
      const { callback } = this.props;
      callback && callback();
      resetForm();
    };
    render() {
        const {} = this.props;
        return (
            <>
              <Formik
                initialValues={{
                  emailId: "",
                 
                }}
                // validationSchema={CandidateSchema}
                onSubmit={(values, { resetForm }) => {
                  // console.log(values,this.props.responseData&&this.props.responseData.phoneNumbers.length  ?  this.props.responseData.phoneNumbers[0] : "",);
      
                  this.props.AddEmail(
                    {
                      ...values,
                     
                    },
      
                    () => this.handleReset(resetForm)
                  );
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
              <Spacer />
              
                <FlexContainer >
                    <div style={{ width: "45%" }}>
                      <FastField
                        type="email"
                        name="emailId"
                        label="Email"  
                        isColumn
                        width={"100%"}
                        component={InputComponent}
                        inlineLabel
                      />
                    </div>
                   
                  </FlexContainer>
             
              <Spacer style={{margin:"1%"}}/>
              <FlexContainer justifyContent="flex-end">
              <Button
                  type="primary"
                  htmlType="submit"
                  // icon={<PoweroffOutlined />}
                  Loading={this.props.addingEmail}
                >
                  Submit
                </Button>
                    </FlexContainer>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}
const mapStateToProps = ({ auth, job }) => ({
  addingEmail:job.addingEmail
  });
  
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
      {
        AddEmail
      },
      dispatch
    );
  
  export default connect(mapStateToProps, mapDispatchToProps)(JobEmailForm);
  