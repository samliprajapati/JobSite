// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { StyledCreatable, StyledLabel } from "../../UI/Elements";
// import { FlexContainer } from "../../UI/Layout";
// import { functions, get, uniqBy } from "lodash";
// import ValidationError from "../../UI/Elements/ValidationError";
// import {getDesignations} from "../../../Jobsite/JobAction";
// // // import { candidateReducer } from "../../../Containers/Candidate/CandidateReducer";
// // // import { getTasks } from "../../../Containers/Settings/Task/TaskAction";
// // // import { getExpenses } from "../../../Containers/Settings/Expense/ExpenseAction";
// // // import { getEvents } from "../../../Containers/Settings/Event/EventAction";
// // // import { getDepartments } from "../../../Containers/Settings/Department/DepartmentAction";
// // // import { getEducations } from "../../../Containers/Settings/Educations/EducationAction";
// // // import { getRoles } from "../../../Containers/Settings/Category/Role/RoleAction"
// class SearchSelect extends Component {
//   componentDidMount() {
//     // const id = "PRIN8195435358122020" = this.props;
//     const {
//       getSectors,
//       getRoles,
//       getDesignations,
//     } = this.props;




// //     // if (selectType === "department") {
// //     //   getDepartment();
// //     // }

// //     // if (selectType === "sectorName") {
// //     //   getSectors();
// //     // }

// //     // if (selectType === "roleType") {
// //     //   getRoles(organizationId);
// //     // }

//     if (selectType === "designationType") {
//       getDesignations();
//     }

//   }
//   handleChange = (
//     option,
//     field,
//     setFieldValue,
//     fillAnother,
//     setFieldTouched
//   ) => {
//     this.props.changeCallback && this.props.changeCallback(option);
//     if (this.props.selectType === "product") {
//       console.log(fillAnother, option);
//       console.log(setFieldValue);
//       this.props.changeCallback(option);
//       console.log(fillAnother[0], option.category);
//       // setTimeout(() => {
//       //     setFieldValue(fillAnother[0], option.category)
//       //     setFieldValue(fillAnother[1], option.baseCost)
//       //     setFieldValue(fillAnother[2], option.currency)
//       //     setFieldValue(fillAnother[3], option.subCategory)
//       // }, 1)
//       // setFieldTouched(fillAnother[0], true)
//     }
//     if (this.props.isMulti) {
//       const arr = [];
//       option.map((item) => {
//         arr.push(item.value);
//       });
//       setFieldValue(field.name, arr);
//     } else {
//       setFieldValue(field.name, option.value);
//       if (Array.isArray(fillAnother)) {
//         setFieldValue(fillAnother[0], option.latitude);
//         setFieldValue(fillAnother[1], option.longitude);
//       } else {
//         setFieldValue(fillAnother, option.countryCurrencyCode);
//       }
//     }
//   };

//   handleBlur = () => {
//     // this is going to call setFieldTouched and manually update touched.topcis
//     this.props.onBlur(this.props.name, true);
//   };
//   handleCreate = (option) => {
//   };

//   setDefaultValue = (options) => {
//     const { defaultValue } = this.props;
//     if (defaultValue) {
//       if (Array.isArray(defaultValue)) {
//         console.log("array default value", defaultValue);
//         return defaultValue;
//       } else {
//         console.log(defaultValue);
//         if (!defaultValue.hasOwnProperty("label")) {
//           const newDefaultValue =
//             options && options.find((l) => l.value === defaultValue.value);
//           return newDefaultValue;
//         } else {
//           console.log("default value", defaultValue);
//           return [defaultValue];
//         }
//       }
//     } else {
//       return [];
//     }
//   };
//   render() {
// //     // console.log(this.props)
//     const {
// //       sectors,

//       designations,
// //       roles,


    
//       timeZone,
//       level,
//       deliveryUsers,
//       delivery,
//       stages,
//       isColumn,
//       process,
//       countries,
//       currencies,
//       products,
//       selectType,
//       defaultValue,
//       placeholder,
//       width,
//       isShadow,
//       Left,
//       margintop,
//       label,
//       menuPlacement,
//       isRequired,
//       isDisabled,
//       fillAnother,
//       accountId,
//       leadsAccounts,
//       filterOption,
//       notLinked,
//       noLabel,
//       inlineLabel,
//       allProcessStages,
//       tasks,
//       expenses,
//       events,
//       form: { touched, errors, setFieldValue, setFieldTouched },
//       field,
//       ...rest
//     } = this.props;

//     let options = null;

// //     // if (selectType === "contactListFilter") {
// //     //   if (notLinked) {
// //     //     options = contactByUserId
// //     //       .filter((contact) => {
// //     //         if (!contact.customerId) {
// //     //           console.log("inside >>>>>>>", notLinked);
// //     //           return contact;
// //     //         }
// //     //       })
// //     //       .sort((a, b) => (a.firstName < b.firstName ? -1 : 1))
// //     //       .map((item, i) => ({
// //     //         value: item.contactId,
// //     //         label: `${item.firstName || ""} ${item.middleName ||
// //     //           ""} ${item.lastName || ""}`,
// //     //         color: "#FF8B00",
// //     //       }));
// //     //   } else {
// //     //     if (filterOption && filterOption.filterType === "account") {
// //     //       console.log(filterOption.filterValue)
// //     //       options = contactByUserId
// //     //         .filter((contact) => {
// //     //           debugger;
// //     //           if (
// //     //             !filterOption.filterValue ||
// //     //             !filterOption.filterValue.length
// //     //           ) {
// //     //             return contact;
// //     //           } else if (
// //     //             Array.isArray(filterOption.filterValue) &&
// //     //             contact.customerId === filterOption.filterValue[0]
// //     //           ) {
// //     //             console.log(filterOption);
// //     //             return contact;
// //     //           } else if (contact.customerId === filterOption.filterValue) {
// //     //             console.log(filterOption);
// //     //             return contact;
// //     //           }
// //     //         })
// //     //         .sort((a, b) => (a.firstName < b.firstName ? -1 : 1))
// //     //         .map((item, i) => ({
// //     //           value: item.contactId,
// //     //           label: `${item.firstName || ""} ${item.middleName ||
// //     //             ""} ${item.lastName || ""}`,
// //     //           color: "#FF8B00",
// //     //         }));
// //     //     } else {
// //     //       console.log("##################   account is not selected");
// //     //       options = contactByUserId
// //     //         .sort((a, b) => (a.firstName < b.firstName ? -1 : 1))
// //     //         .map((item, i) => ({
// //     //           value: item.contactId,
// //     //           label: `${item.firstName || ""} ${item.middleName ||
// //     //             ""} ${item.lastName || ""}`,
// //     //           color: "#FF8B00",
// //     //         }));
// //     //     }
// //     //   }
// //     //   // const customOption = ({ label, value }) => <h3>{`${label}---${value}`}</h3>
// //     // }
// //     // if (selectType === "leadsaccount") {
// //     //   options = leadsAccounts
// //     //     .sort((a, b) => (a.accountName < b.accountName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.leadsId,
// //     //       label: item.accountName,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
// //     // }
// //     // if (selectType === "account") {
// //     //   options = accounts
// //     //     .sort((a, b) => (a.accountName < b.accountName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.accountId,
// //     //       label: item.accountName,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
// //     // }
// //     // if (selectType === "departments") {
// //     //   options = departments
// //     //     .sort((a, b) => (a.department_name < b.department_name ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.department,
// //     //       label: item.department,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
// //     // }
// //     // if (selectType === "department") {
// //     //   options = department
// //     //     .sort((a, b) => (a.department_name < b.department_name ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.department_name,
// //     //       label: item.department_name,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
// //     // }
// //     // if (selectType === "user") {
// //     //   options = allUsersListByOrganizationId
// //     //     .sort((a, b) => (a.firstName < b.firstName ? -1 : 1))
// //     //     .filter((a) => a.emailValidationInd)
// //     //     .map((item, i) => ({
// //     //       value: item.userId,
// //     //       label: `${item.firstName || ""} ${item.middleName ||
// //     //         ""} ${item.lastName || ""}`,
// //     //       color: "#FF8B00",
// //     //     }));
// //     // }
// //     // if (selectType === "salesuser") {
// //     //   console.log(this.props.onlySalesUsers);
// //     //   debugger;
// //     //   options = this.props.onlySalesUsers
// //     //     // .sort((a, b) => (a.firstName < b.firstName ? -1 : 1))
// //     //     // .filter((a) => a.emailValidationInd)
// //     //     .map((item, i) => ({
// //     //       value: item.userId,
// //     //       label: item.firstName,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}-----${value}`}</h3>
// //     // }
// //     // if (selectType === "opportunity") {
// //     //   if (notLinked) {
// //     //     options = opportunities
// //     //       .filter((opportunity) => {
// //     //         if (!opportunity.accountId) {
// //     //           console.log("inside >>>>>>>", notLinked);
// //     //           return opportunity;
// //     //         }
// //     //       })
// //     //       .sort((a, b) => (a.firstName < b.firstName ? -1 : 1))
// //     //       .map((item, i) => ({
// //     //         value: item.opportunityId,
// //     //         label: `${item.opportunityName || ""}`,
// //     //         color: "#FF8B00",
// //     //       }));
// //     //   } else {
// //     //     if (filterOption && filterOption.filterType == "account") {
// //     //       options = opportunities
// //     //         .filter((opportunity) => {
// //     //           if (!filterOption.filterValue.length) {
// //     //             console.log(
// //     //               "*************************************************"
// //     //             );
// //     //             return opportunity;
// //     //           }
// //     //           // else if (Array.isArray(filterOption.filterValue) && contact.accountId === filterOption.filterValue[0]) {
// //     //           //     console.log(filterOption)
// //     //           //     return contact
// //     //           // }
// //     //           else if (
// //     //             Array.isArray(filterOption.filterValue) &&
// //     //             opportunity.accountId === filterOption.filterValue[0]
// //     //           ) {
// //     //             console.log(
// //     //               "##################################################"
// //     //             );
// //     //             return opportunity;
// //     //           }
// //     //         })
// //     //         .sort((a, b) => (a.opportunityName < b.opportunityName ? -1 : 1))
// //     //         .map((item, i) => ({
// //     //           value: item.opportunityId,
// //     //           label: item.opportunityName,
// //     //           color: "#FF8B00",
// //     //         }));
// //     //     } else {
// //     //       options = opportunities
// //     //         .sort((a, b) => (a.opportunityName < b.opportunityName ? -1 : 1))
// //     //         .map((item, i) => ({
// //     //           value: item.opportunityId,
// //     //           label: item.opportunityName,
// //     //           color: "#FF8B00",
// //     //         }));
// //     //     }
// //     //   }
// //     //   // const customOption = ({ label, value }) => <h3>{`${label}-----${value}`}</h3>
// //     // }
// //     // if (selectType === "stages") {
// //     //   if (notLinked) {
// //     //     options = allProcessStages
// //     //       .filter((allProcessStages) => {
// //     //         if (!allProcessStages.processId) {
// //     //           console.log("inside >>>>>>>", notLinked);
// //     //           return allProcessStages;
// //     //         }
// //     //       })
// //     //       .sort((a, b) => (a.stageName < b.stageName ? -1 : 1))
// //     //       .map((item, i) => ({
// //     //         value: item.processId,
// //     //         label: `${item.stageName || ""}`,
// //     //         color: "#FF8B00",
// //     //       }));
// //     //   } else {
// //     //     if (filterOption && filterOption.filterType === "process") {
// //     //       options = allProcessStages
// //     //         .filter((allProcessStages) => {
// //     //           if (
// //     //             !filterOption.filterValue ||
// //     //             !filterOption.filterValue.length
// //     //           ) {
// //     //             return allProcessStages;
// //     //           } else if (
// //     //             Array.isArray(filterOption.filterValue) &&
// //     //             allProcessStages.processId === filterOption.filterValue[0]
// //     //           ) {
// //     //             console.log(filterOption);
// //     //             return allProcessStages;
// //     //           } else if (
// //     //             allProcessStages.processId === filterOption.filterValue
// //     //           ) {
// //     //             console.log(filterOption);
// //     //             return allProcessStages;
// //     //           }
// //     //         })
// //     //         .sort((a, b) => (a.stageName < b.stageName ? -1 : 1))
// //     //         .map((item, i) => ({
// //     //           value: item.processId,
// //     //           label: `${item.stageName || ""} `,
// //     //           color: "#FF8B00",
// //     //         }));
// //     //     } else {
// //     //       console.log("##################   process is not selected");
// //     //       options = allProcessStages
// //     //         .sort((a, b) => (a.stageName < b.stageName ? -1 : 1))
// //     //         .map((item, i) => ({
// //     //           value: item.processId,
// //     //           label: `${item.stageName || ""} `,
// //     //           color: "#FF8B00",
// //     //         }));
// //     //     }
// //     //   }
// //     //   const customOption = ({ label, value }) => (
// //     //     <h3>{`${label}---${value}`}</h3>
// //     //   );
// //     // }
// //     // if (selectType === "stage") {
// //     //   options = processStages
// //     //     .sort((a, b) => (a.stageName < b.stageName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.stageId,
// //     //       label: item.stageName,
// //     //       color: "#FF8B00"
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}---${value}`}</h3>
// //     // }

// //     // if (selectType === "process") {
// //     //   options = process
// //     //     .sort((a, b) => (a.processName < b.processName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.processId,
// //     //       label: item.processName,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}---${value}`}</h3>
// //     // }

// //     // if (selectType === "source") {
// //     //   options = sources
// //     //     .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.leadSourceId,
// //     //       label: item.sourceName,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
// //     // }
// //     // if (selectType === "country") {
// //     //   debugger;
// //     //   options = countries.map((item, i) => ({
// //     //     value: item.countryAlpha3Code,
// //     //     label: item.countryName,
// //     //     flag: item.countryFlag,
// //     //     countryDialCode: item.countryDialCode,
// //     //     countryCurrencyCode: item.countryCurrencyCode,
// //     //     latitude: Number(item.latitude),
// //     //     longitude: Number(item.longitude),
// //     //     color: "#FF8B00",
// //     //   }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}-----${value}`}</h3>
// //     // }
// //     // if (selectType === "currencyName") {
// //     //   debugger;
// //     //   options = currencies

// //     //     .map((item, i) => ({
// //     //       value: item.currencyName,
// //     //       label: item.currencyName,
// //     //       color: "#FF8B00",
// //     //     }));
// //     // }


// //     // if (selectType === "dialCode") {
// //     //   options = countries.map((item, i) => ({
// //     //     label: `+${item.countryDialCode}`,
// //     //     value: `+${item.countryDialCode}`,
// //     //   }));
// //     //   // options.filter((item, i) => options.indexOf())
// //     //   options = uniqBy(options, "value");
// //     //   // const customOption = ({ label, value }) => <h3>{`${label}-----${value}`}</h3>
// //     // }
// //     // if (selectType === "timeZone") {
// //     //   options = timeZone.map((item, i) => ({
// //     //     label: `${item.zone_name}`,
// //     //     value: `${item.zone_name}`,
// //     //   }));
// //     //   // options.filter((item, i) => options.indexOf())
// //     //   options = uniqBy(options, "value");
// //     //   // const customOption = ({ label, value }) => <h3>{`${label}-----${value}`}</h3>
// //     // }
// //     // if (selectType === "level") {
// //     //   options = level.map((item, i) => ({
// //     //     label: `${item.level}`,
// //     //     value: `${item.level}`,
// //     //   }));
// //     //   // options.filter((item, i) => options.indexOf())
// //     //   options = uniqBy(options, "value");
// //     //   // const customOption = ({ label, value }) => <h3>{`${label}-----${value}`}</h3>
// //     // }

// //     // if (selectType === "deliveryUsers") {
// //     //   options = deliveryUsers.map((item, i) => ({
// //     //     label: `${item.firstName}`,
// //     //     value: `${item.userId}`,
// //     //   }));
// //     //   // options.filter((item, i) => options.indexOf())
// //     //   options = uniqBy(options, "value");
// //     //   // const customOption = ({ label, value }) => <h3>{`${label}-----${value}`}</h3>
// //     // }

// //     // if (selectType === "documentTypeName") {
// //     //   options = documents
// //     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.documentTypeId,
// //     //       label: item.documentTypeName,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
// //     // }
// //     // if (selectType === "sectorName") {
// //     //   debugger;
// //     //   options = sectors
// //     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.sectorId,
// //     //       label: item.sectorName,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
// //     // }
// //     // if (selectType === "designationType") {
// //     //   debugger;
// //     //   options = designations
// //     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.designationTypeId,
// //     //       label: item.designationType,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
// //     // }
// //     // if (selectType === "roleType") {
// //     //   debugger;
// //     //   options = roles
// //     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.roleTypeId,
// //     //       label: item.roleType,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
// //     // }

// //     // if (selectType === "educationType") {
// //     //   debugger;
// //     //   options = educations
// //     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.educationTypeId,
// //     //       label: item.educationType,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
// //     // }

// //     // if (selectType === "contactList") {
// //     //   options = contactByUserId
// //     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.contactId,
// //     //       label: `${item.firstName || ""} ${item.middleName ||
// //     //         ""} ${item.lastName || ""}`,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
// //     // }
// //     // if (selectType === "contactOpportunityList") {
// //     //   options = contactByCustomerId
// //     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.contactId,
// //     //       label: `${item.firstName || ""} ${item.middleName ||
// //     //         ""} ${item.lastName || ""}`,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
// //     // }

// //     // if (selectType === "customerList") {
// //     //   options = customerByUserId
// //     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.customerId,
// //     //       label: item.name,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
// //     // }

// //     // if (selectType === "employee") {
// //     //   options = employees
// //     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.employeeId,
// //     //       label: item.fullName,
// //     //       // `${item.firstName || ""} ${item.middleName ||
// //     //       //   ""} ${item.lastName || ""}`,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
// //     // }

// //     // if (selectType === "partnerList") {
// //     //   options = partnerByUserId
// //     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.partnerId,
// //     //       label: item.partnerName,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
// //     // }
// //     // if (selectType === "partnerListName") {
// //     //   options = allpartnerByUserId
// //     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.partnerId,
// //     //       label: item.partnerName,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
// //     // }

// //     // if (selectType === "candidateList") {
// //     //   options = allcandidatesByUserId
// //     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.candidateId,
// //     //       label: item.fullName,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
// //     // }

// //     // if (selectType === "name") {
// //     //   options = allcustomersByUserId
// //     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.customerId,
// //     //       label: item.name,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
// //     // }

// //     // if (selectType === "product") {
// //     //   options = products.map((item, i) => ({
// //     //     label: item.productName,
// //     //     value: item.productId,
// //     //     maxDiscount: item.maxDiscount,
// //     //     baseCost: item.baseCost,
// //     //     category: item.category,
// //     //     currency: item.currency,
// //     //     description: item.description,
// //     //     subCategory: item.subCategory,
// //     //   }));
// //     // }
// //     // if (selectType === "taskType") {
// //     //   debugger;
// //     //   options = tasks
// //     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.taskTypeId,
// //     //       label: item.taskType,
// //     //       color: "#FF8B00",
// //     //     }));
// //     // }

// //     // if (selectType === "expenseType") {
// //     //   debugger;
// //     //   options = tasks
// //     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.expenseTypeId,
// //     //       label: item.expenseType,
// //     //       color: "#FF8B00",
// //     //     }));
// //     // }
// //     // if (selectType === "functionType") {
// //     //   debugger;
// //     //   options = functions
// //     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.functionTypeId,
// //     //       label: item.functionType,
// //     //       color: "#FF8B00",
// //     //     }));
// //     // }

// //     // if (selectType === "eventType") {
// //     //   debugger;
// //     //   options = events
// //     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.eventTypeId,
// //     //       label: item.eventType,
// //     //       color: "#FF8B00",
// //     //     }));
// //     // }

// //     // if (selectType === "departmentName") {
// //     //   debugger;
// //     //   options = departments
// //     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
// //     //     .map((item, i) => ({
// //     //       value: item.departmentId,
// //     //       label: item.departmentName,
// //     //       color: "#FF8B00",
// //     //     }));

// //     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
// //     // }
// //     if (isColumnWithoutNoCreate) {
// //       // The searchselect without create component will work on calling ( isColumnWithoutNoCreate)
// //       return (
// //         <>
// //           {!noLabel && (
// //             <StyledLabel style={{ flexBasis: "20%" }}>{label}</StyledLabel>
// //           )}
// //           <StyledCreatable
// //             classNamePrefix="sales"
// //             label={placeholder}
// //             formatCreateLabel={() => undefined}
// //             isRequired={isRequired}
// //             placeholder={placeholder}
// //             options={options}
// //             menuPlacement={menuPlacement}
// //             width={width}
// //             isShadow={isShadow}
// //             Left={Left}
// //             margintop={margintop}
// //             name={field.name}
// //             isMulti={this.props.isMulti || false}
// //             {...field}
// //             {...rest}
// //             onChange={(option) =>
// //               this.handleChange(
// //                 option,
// //                 field,
// //                 setFieldValue,
// //                 fillAnother,
// //                 setFieldTouched
// //               )
// //             }
// //             isCreatable={false}
// //             onCreateOption={this.handleCreate}
// //             defaultValue={this.setDefaultValue(options)}
// //             isDisabled={isDisabled}
// //             // isLoading={
// //             //   fetchingAllUserByOraganizationId ||
// //             //   fetchingOnlySalesUsers ||
// //             //   fetchingContacts ||
// //             //   fetchingAccounts ||
// //             //   fetchingOpportunities ||
// //             //   fetchingStages ||
// //             //   fetchingSources ||
// //             //   fetchingCountries 
// //             //   // ||
// //             //   // fetchingCurrencies
// //             // }
// //             // defaultValue={defaultValue ? [{
// //             //     value: defaultValue.value,
// //             //     label: options.find(option => {
// //             //         console.log('000000000000000000000000000000000')
// //             //         console.log(option)
// //             //         console.log(defaultValue)
// //             //         if (option.value === defaultValue.value) {
// //             //             console.log(option.label)
// //             //             return option.label
// //             //         }else{
// //             //             return 'asdads'
// //             //         }

// //             //     })
// //             // }] : ''}
// //             // defaultValue={defaultValue ? Array.isArray(defaultValue) && defaultValue.find(option => option.value === field.value) : ''}
// //             value={
// //               options
// //                 ? options.find((option) => option.value === field.value)
// //                 : ""
// //             }
// //             onBlur={() => setFieldTouched(field.name, true)}
// //           />

// //           {/* <AddUserModal addUserModal={this.props.addUserModal} handleUserModal={this.props.handleUserModal}/> */}

// //           {get(touched, field.name) && get(errors, field.name) && (
// //             <ValidationError>{get(errors, field.name)}</ValidationError>
// //           )}
// //         </>
// //       );
// //     }

// //     return (
// //       <>
// //         <FlexContainer>
// //           <FlexContainer alignItems="center" flexWrap={inlineLabel && "nowrap"}>
// //             {!noLabel && (
// //               <StyledLabel style={{ flexBasis: "20%" }}>{label}</StyledLabel>
// //             )}
// //             <StyledCreatable
// //               classNamePrefix="sales"
// //               label={placeholder}
// //               isRequired={isRequired}
// //               menuPlacement={menuPlacement} // menuPlacement={"top"}
// //               placeholder={placeholder}
// //               options={options}
// //               isShadow={isShadow}
// //               width={width}
// //               Left={Left}
// //               margintop={margintop}
// //               name={field.name}
// //               isMulti={this.props.isMulti || false}
// //               {...field}
// //               {...rest}
// //               onChange={(option) =>
// //                 this.handleChange(
// //                   option,
// //                   field,
// //                   setFieldValue,
// //                   fillAnother,
// //                   setFieldTouched
// //                 )
// //               }
// //               isCreatable={false}
// //               onCreateOption={this.handleCreate}
// //               defaultValue={this.setDefaultValue(options)}
// //               isDisabled={isDisabled}
// //               // isLoading={
// //               //   fetchingAllUserByOraganizationId ||
// //               //   fetchingContacts ||
// //               //   fetchingOnlySalesUsers ||
// //               //   fetchingAccounts ||
// //               //   fetchingOpportunities ||
// //               //   fetchingStages ||
// //               //   fetchingSources ||
// //               //   fetchingCountries
// //               //   // fetchingCurrencies
// //               // }
// //               // defaultValue={defaultValue ? [{
// //               //     value: defaultValue.value,
// //               //     label: options.find(option => {
// //               //         console.log('000000000000000000000000000000000')
// //               //         console.log(option)
// //               //         console.log(defaultValue)
// //               //         if (option.value === defaultValue.value) {
// //               //             console.log(option.label)
// //               //             return option.label
// //               //         }else{
// //               //             return 'asdads'
// //               //         }

// //               //     })
// //               // }] : ''}
// //               // defaultValue={defaultValue ? Array.isArray(defaultValue) && defaultValue.find(option => option.value === field.value) : ''}
// //               value={
// //                 options
// //                   ? options.find((option) => option.value === field.value)
// //                   : ""
// //               }
// //               onBlur={() => setFieldTouched(field.name, true)}
// //             />
// //           </FlexContainer>
// //         </FlexContainer>
// //         {/* <AddUserModal addUserModal={this.props.addUserModal} handleUserModal={this.props.handleUserModal}/> */}

// //         {get(touched, field.name) && get(errors, field.name) && (
// //           <ValidationError>{get(errors, field.name)}</ValidationError>
// //         )}
// //       </>
// //     );
// //   }
// // }


// // const mapStateToProps = ({ auth, call, document, role, functions, contact, customer, employee, partner, sector, candidate, designations, education, tasks, expenses, events, departments }) => ({
// //   // countries: auth.countries,
// //   // currencies: auth.currencies,
// //   // fetchingCountries: auth.fetchingCountries,
// //   // fetchingCurrencies: auth.fetchingCurrencies,
// //   // userId: auth.userDetails.userId,
// //   // designations: designations.designations,
// //   // educations: education.educations,
// //   // organizationId: auth.userDetails.organizationId,
// //   // allUsersListByOrganizationId: call.allUsersListByOrganizationId,
// //   // fetchingAllUserByOraganizationId: call.fetchingAllUserByOraganizationId,
// //   // timeZone: auth.timeZone,
// //   // documents: document.documents,
// //   // sectors: sector.sectors,
// //   // roles: role.roles,
// //   // contactByUserId: contact.contactByUserId,
// //   // customerByUserId: customer.customerByUserId,
// //   // partnerByUserId: partner.partnerByUserId,
// //   // customerId: customer.customer.customerId,
// //   // contactByCustomerId: customer.contactByCustomerId,
// //   // employees: employee.employees,
// //   // allpartnerByUserId: partner.allpartnerByUserId,
// //   // allcandidatesByUserId: candidate.allcandidatesByUserId,
// //   // candidateByUserId: candidate.candidateByUserId,
// //   // tasks: tasks.tasks,
// //   // expenses: expenses.expenses,
// //   // events: events.events,
// //   // functions: functions.functions,
// //   // departments: departments.departments,
// //   // allcustomersByUserId: customer.allcustomersByUserId
// // });

// // const mapDispatchToProps = (dispatch) =>
// //   bindActionCreators(
// //     {
// //       // getContactListByUserId,
// //       // getContactListByCustomerId,
// //       // getAllCandidateListByUserId,
// //       // getAllCustomerListByUserId,
// //       // getCustomerListByUserId,
// //       // getPartnerListByUserId,
// //       // getAllPartnerListByUserId,
// //       // getAccounts,
// //       // getLeadsAccounts,
// //      // getAllUsersByOrganizationId,
// //       // getOnlySalesUser,
// //       // getOpportunities,
// //       // getCountries,
// //       // getCurrency,
// //       // getSources,
// //       // getStages,
// //       // getProducts,
// //       // getDeliveryUser,
// //       // getTimeZone,
// //       // handleUserModal,
// //       // handleContactModal,
// //       // handleAccountModal,
// //       // handleOpportunityModal,
// //       // getProcess,
// //       // getProcessStages,
// //       // getAllProcessStages,
// //       // getDepartments,
// //       // getDepartment,
// //       // getDocuments,
// //       // getEmployeelist,
// //       // getSectors,
// //       // getRoles,
// //       // getDesignations,
// //       // getTasks,
// //       // getExpenses,
// //       // getEvents,
// //       // getEducations,
// //       // getFunctions
// //     },
// //     dispatch
// //   );
// // export default connect(mapStateToProps, mapDispatchToProps)(SearchSelect);
