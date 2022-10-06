import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyledReactSelect, StyledLabel } from "../../UI/Elements";

import { get, uniqBy } from "lodash";

import { getCountries, getTimeZone } from "../../../Containers/Auth/AuthAction";

class EditSearchSelect extends Component {
  componentDidMount() {
    const {
      selectType,

      getCountries,

      getTimeZone,
    } = this.props;

    if (selectType === "country" || "currency" || "dialCode") {
      getCountries();
    }
    if (selectType === "timeZone") {
      getTimeZone();
    }
  }
  handleChange = (option, name, handleSelectChange) => {
    if (this.props.isMulti) {
      const arr = [];
      option.map((item) => {
        arr.push(item.value);
      });
      handleSelectChange(name, arr);
    } else {
      handleSelectChange(name, option.value);
      // if (fillAnother) {
      //     setFieldValue(fillAnother, option.countryCurrencyCode)
      // }
    }
  };

  // handleBlur = (option, name) => {
  //     // this is going to call setFieldTouched and manually update touched.topcis
  //     console.log(option)
  //     this.props.handleSelectBlur(name, option.value);
  // };

  render() {
    // console.log(this.props)
    const {
      users,
      contacts,
      accounts,
      opportunities,
      sources,
      stages,
      countries,
      selectType,
      defaultValue,
      placeholder,
      menuPlacement,
      label,
      isRequired,
      name,
      value,
      handleSelectChange,
      handleSelectBlur,
      timeZone,
      width,

      ...rest
    } = this.props;
    let options = null;
    // const customOption = null;
    if (selectType === "contact") {
      options = contacts.map((item, i) => ({
        value: item.contactId,
        label: item.firstName,
        color: "#FF8B00",
      }));

      // const customOption = ({ label, value }) => <h3>{`${label}---${value}`}</h3>
    }
    if (selectType === "account") {
      options = accounts.map((item, i) => ({
        value: item.accountId,
        label: item.accountName,
        color: "#FF8B00",
      }));

      // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
    }
    if (selectType === "user") {
      options = users.map((item, i) => ({
        value: item.userId,
        label: item.firstName,
        color: "#FF8B00",
      }));

      // const customOption = ({ label, value }) => <h3>{`${label}-----${value}`}</h3>
    }
    if (selectType === "opportunity") {
      options = opportunities.map((item, i) => ({
        value: item.opportunityId,
        label: item.opportunityName,
        color: "#FF8B00",
      }));

      // const customOption = ({ label, value }) => <h3>{`${label}-----${value}`}</h3>
    }
    if (selectType === "stage") {
      options = stages.map((item, i) => ({
        value: item.stageId,
        label: item.stageName,
        color: "#FF8B00",
      }));

      // const customOption = ({ label, value }) => <h3>{`${label}---${value}`}</h3>
    }
    if (selectType === "source") {
      options = sources.map((item, i) => ({
        value: item.leadSourceId,
        label: item.sourceName,
        color: "#FF8B00",
      }));

      // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
    }
    if (selectType === "country") {
      options = countries.map((item, i) => ({
        value: item.countryAlpha3Code,
        label: item.countryName,
        flag: item.countryFlag,
        countryDialCode: item.countryDialCode,
        countryCurrencyCode: item.countryCurrencyCode,
        color: "#FF8B00",
      }));

      // const customOption = ({ label, value }) => <h3>{`${label}-----${value}`}</h3>
    }
    if (selectType === "currency") {
      options = countries.map((item, i) => ({
        value: item.countryCurrencyCode,
        label: item.countryCurrencyCode,
        flag: item.countryFlag,
      }));
      // options.filter((item, i) => options.indexOf())
      options = uniqBy(options, "value").filter((opt) => {
        console.log(opt);
        if (
          opt.value === "EUR" ||
          opt.value === "INR" ||
          opt.value === "USD" ||
          opt.value === "AUD" ||
          opt.value === "CAD" ||
          opt.value === "SGD" ||
          opt.value === "BDT" ||
          opt.value === "GBP"
        ) {
          return opt;
        }
      });
      // const customOption = ({ label, value }) => <h3>{`${label}-----${value}`}</h3>
    }
    if (selectType === "timeZone") {
      options = timeZone.map((item, i) => ({
        label: `${item.zone_name}`,
        value: `${item.zone_name}`,
      }));
      // options.filter((item, i) => options.indexOf())
      options = uniqBy(options, "value");
      // const customOption = ({ label, value }) => <h3>{`${label}-----${value}`}</h3>
    }
    if (selectType === "dialCode") {
      options = countries.map((item, i) => ({
        label: `+${item.countryDialCode}`,
        value: `+${item.countryDialCode}`,
      }));
      // options.filter((item, i) => options.indexOf())
      options = uniqBy(options, "value");
      // const customOption = ({ label, value }) => <h3>{`${label}-----${value}`}</h3>
    }
    return (
      // <FlexContainer>
      //   <FlexContainer alignItems="center">
      //     <StyledLabel style={{ flexBasis: "20%" }}>{label}</StyledLabel>
      <StyledReactSelect
        classNamePrefix="sales"
        width={width}
        menuPlacement={menuPlacement}
        label={placeholder}
        isRequired={isRequired}
        placeholder={placeholder}
        options={options}
        name={name}
        // height="6.25em"
        isMulti={this.props.isMulti || false}
        {...rest}
        onChange={(option) =>
          this.handleChange(option, name, handleSelectChange)
        }
        defaultValue={defaultValue}
        value={options ? options.find((option) => option.value === value) : ""}
      // onBlur={(option) => this.handleBlur(option, name)}
      />
      //   </FlexContainer>
      // </FlexContainer>
    );
  }
}
const mapStateToProps = ({
  auth,
  task,
  team,
  contact,
  account,
  opportunity,
}) => ({
  userId: auth.userDetails.userId,
  users: auth.users,
  countries: auth.countries,
  timeZone: auth.timeZone,
  fetchingTimeZone: auth.fetchingTimeZone,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getCountries,

      getTimeZone,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(EditSearchSelect);
