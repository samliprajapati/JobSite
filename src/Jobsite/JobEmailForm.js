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

class JobEmailForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
    }

    render() {
        const {} = this.props;
        return (
            <>
              <Formik
                initialValues={{
                  emailId: "",
                 
                }}
                validationSchema={CandidateSchema}
                onSubmit={(values, { resetForm }) => {
                  // console.log(values,this.props.responseData&&this.props.responseData.phoneNumbers.length  ?  this.props.responseData.phoneNumbers[0] : "",);
      
                //   addCandidate(
                    // {
                    //   ...values,
                     
                    // },
      
                    // () => this.handleReset(resetForm)
                //   );
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
              <Spacer style={{ marginTop: "2em" }} />
              <MainWrapper style={{ width: "50%", margin: "auto", padding: "1em" }}
              >
                <FlexContainer >
                    <div style={{ width: "100%" }}>
                      <FastField
                        isRequired
                        type="email"
                        name="emailId"
                        label="Email"
                        className="field"
                        isColumn
                        width={"100%"}
                        component={InputComponent}
                        inlineLabel
                      />
                    </div>
                  </FlexContainer>
                  </MainWrapper>
              <Spacer style={{margin:"1%"}}/>
              <FlexContainer justifyContent="center">
                <Button
                  type="primary"
                  htmlType="submit"
                  // icon={<PoweroffOutlined />}
                //   Loading={addingCandidate}
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
const mapStateToProps = ({ auth, job }) => ({
  });
  
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
      {
        
      },
      dispatch
    );
  
  export default connect(mapStateToProps, mapDispatchToProps)(JobEmailForm);
  