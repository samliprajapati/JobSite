import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Select, Icon, Tag, Switch, Checkbox, message } from "antd";
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
import {AddEmail,handleCandidateApplyModal} from "./JobAction";
import CandidateJobApplyModal from "./CandidateJobApplyModal";
class JobEmailForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
    }

    handleCallBack =(data)=>{   
      if(data.candidateInd === false){
      this.props.handleCandidateApplyModal(true)
      }        
         }
         
 
    render() {
        const {
          emailData,
          addCandidateApply,
          // handleCandidateApplyModal
        } = this.props;      
        return (
            <>
              <Formik
                initialValues={{
                  emailId: "",
                  opportunityId:this.props.setEditingCard.opportunityId,
                  recruitmentId:this.props.setEditingCard.recruitmentId

                }}
                // validationSchema={CandidateSchema}
                onSubmit={(values, { resetForm }) => {
                  // console.log(values,this.props.responseData&&this.props.responseData.phoneNumbers.length  ?  this.props.responseData.phoneNumbers[0] : "",);
      
                  this.props.AddEmail(
                    {
                      ...values,  
                      opportunityId:this.props.setEditingCard.opportunityId,  
                      recruitmentId:this.props.setEditingCard.recruitmentId
                    },
      this.handleCallBack
                    // () => this.handleReset(resetForm)
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
        <CandidateJobApplyModal
        addCandidateApply={addCandidateApply}
        handleCandidateApplyModal={this.props.handleCandidateApplyModal}
        />
      </>
    );
  }
}
const mapStateToProps = ({ auth, job }) => ({
  addingEmail:job.addingEmail,
  emailData:job.emailData,
  addCandidateApply:job.addCandidateApply,
  jobData:job.jobData,
  // opportunityId:job.jobData.opportunityId,
  // recruitmentId:job.jobData.recruitmentId,
  setEditingCard:job.setEditingCard,

  });
  
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
      {
        AddEmail,
        handleCandidateApplyModal
      },
      dispatch
    );
  
  export default connect(mapStateToProps, mapDispatchToProps)(JobEmailForm);
  