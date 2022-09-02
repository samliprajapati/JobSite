import React from "react";

import { FlexContainer } from "../UI/Layout";

import { EditOutlined, EnvironmentOutlined } from "@ant-design/icons";
// import EditAddressField from "../Forms/Edit/EditAddressField";
// import AddAddressField from "../Forms/Edit/AddAddressField";
// import DistributorOverDetailView from "../../Containers/Distributor/Child/DistributorDetail/DistributorCards/DistributorOverDetailView";
import { Tooltip } from "antd";
export default class AddressComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      isAdd: false,
    };
  }
  toggleEdit = () =>
    this.setState({
      isEditing: !this.state.isEditing,
      isAdd: false,
    });
  toggleAdd = () =>
    this.setState({
      isAdd: !this.state.isAdd,
      isEditing: false,
    });
  render() {
    const { editable, addAddress, components } = this.props;
    console.log(components);
    return (
      <>
        <div style={{ width: "100%", height: "100%" }}>
          {editable && (
            <FlexContainer justifyContent="flex-end">
              <Tooltip title="edit">
                <EditOutlined
                  // tooltipTitle="Edit"
                  // iconType="edit"
                  onClick={this.toggleEdit}
                  style={{}}
                  size="16px"
                />
              </Tooltip>
              &nbsp;
              {addAddress && (
                <Tooltip title="Add Address">
                  <EnvironmentOutlined
                    // tooltipTitle="Add Address"
                    // iconType="environment"
                    onClick={this.toggleAdd}
                    style={{}}
                    size="16px"
                  />
                </Tooltip>
              )}
            </FlexContainer>
          )}
          {this.state.isEditing ? (
            <FlexContainer flexDirection="column" style={{ width: "100%" }}>
              {/* <EditAddressField
                components={components}
                toggleEdit={this.toggleEdit}
                {...rest}
              /> */}
            </FlexContainer>
          ) : this.state.isAdd ? (
            <FlexContainer flexDirection="column" style={{ width: "100%" }}>
              {/* <AddAddressField
                components={components}
                toggleAdd={this.toggleAdd}
                {...rest}
              /> */}
            </FlexContainer>
          ) : (
            // <DistributorOverDetailView />
            <StaticAddressField components={components} />
          )}

          {/* {this.state.isEditing && !this.state.isAdd && (
            <FlexContainer flexDirection="column" style={{ width: "100%" }}>
              <EditAddressField
                components={components}
                toggleEdit={this.toggleEdit}
                {...rest}
              />
            </FlexContainer>
          )}
          {this.state.isAdd && !this.state.isEditing && (
            <FlexContainer flexDirection="column" style={{ width: "100%" }}>
              <AddAddressField
                components={components}
                toggleAdd={this.toggleAdd}
                {...rest}
              />
            </FlexContainer>
          )}
          {!this.state.isAdd && !this.state.isEditing && (
            <StaticAddressField components={components} />
          )}
          {this.state.isEditing ? (
            <FlexContainer flexDirection="column" style={{ width: "100%" }}>
              <EditAddressField
                components={components}
                toggleEdit={this.toggleEdit}
                {...rest}
              />
            </FlexContainer>
          ) : (
            <StaticAddressField components={components} />
          )} */}
        </div>
      </>
    );
  }
}
/**
 * sho static address with label and value
 */
function StaticAddressField({
  components: {
    address1,
    address2,
    street,
    town,
    city,
    state,
    country,
    pinCode,
    latitude,
    longitude,
    Won,
    Lost,
    actualFunnel,
  },
}) {
  return (
    <div>
      <div style={{ fontSize: 12 }}>
        {/* {(address1 && address1) || ""}
        {(address2 && address2) || ""} */}
        {/* <div>
                    {street && street || ''}
                    {town && town || ''}
                    {city && city || ''}&nbsp;
                    {state && state || ''}&nbsp;
                </div> */}
        <div>
          {(address1 && address1) || ""}&nbsp;
          {(address2 && address2) || ""}&nbsp;
          {(street && street) || ""}
          <div>
            {(!city && town && town) || ""}&nbsp;
            {(city && city) || ""}
            {(state && state) || ""}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          {(country && country) || ""}&nbsp;
          {(pinCode && pinCode) || ""}&nbsp;
        </div>
      </div>

      {/* {/ {pinCode && pinCode || '' } /} */}
      {/* {actualFunnel && (
        <FlexContainer flexWrap="nowrap" alignItems="center" style={{}}>
          <SubTitle
            style={{
              flexBasis: "40%",
              fontWeight: 400,
              margin: 0,
              color: "#444",
            }}
          >
            Win/Loss{" "}
          </SubTitle>{" "}
          <SubTitle style={{ margin: "0.3rem" }}>
            {" "}
            {actualFunnel && actualFunnel.toFixed(2)}
          </SubTitle>
        </FlexContainer>
      )} */}
    </div>
    // <FlexContainer flexDirection='column' style={{ width: '100%' }}>
    //     {address1 && <FlexContainer flexWrap='nowrap' alignItems='center' style={{ width: '100%' }}><SubTitle style={{ flexBasis: '40%', fontWeight: 600, margin: 0, color: '#444' }}>Address1 </SubTitle> <SubTitle style={{ margin: '0.3rem' }}> {`${address1 || ''} `} </SubTitle></FlexContainer>}
    //     {address2 && <FlexContainer flexWrap='nowrap' alignItems='center' style={{ width: '100%' }}><SubTitle style={{ flexBasis: '40%', fontWeight: 600, margin: 0, color: '#444' }}>Address2 </SubTitle> <SubTitle style={{ margin: '0.3rem' }}> {`${address2 || ''} `} </SubTitle></FlexContainer>}
    //     {street && <FlexContainer flexWrap='nowrap' alignItems='center' style={{ width: '100%' }}><SubTitle style={{ flexBasis: '40%', fontWeight: 600, margin: 0, color: '#444' }}>Street </SubTitle> <SubTitle style={{ margin: '0.3rem' }}> {`${street || ''} `} </SubTitle></FlexContainer>}
    //     {town && <FlexContainer flexWrap='nowrap' alignItems='center' style={{ width: '100%' }}><SubTitle style={{ flexBasis: '40%', fontWeight: 600, margin: 0, color: '#444' }}>Town </SubTitle> <SubTitle style={{ margin: '0.3rem' }}> {`${town || ''} `} </SubTitle></FlexContainer>}
    //     {city && <FlexContainer flexWrap='nowrap' alignItems='center' style={{ width: '100%' }}><SubTitle style={{ flexBasis: '40%', fontWeight: 600, margin: 0, color: '#444' }}>City </SubTitle> <SubTitle style={{ margin: '0.3rem' }}> {`${city || ''} `} </SubTitle></FlexContainer>}
    //     {state && <FlexContainer flexWrap='nowrap' alignItems='center' style={{ width: '100%' }}><SubTitle style={{ flexBasis: '40%', fontWeight: 600, margin: 0, color: '#444' }}>State </SubTitle> <SubTitle style={{ margin: '0.3rem' }}> {`${state || ''} `} </SubTitle></FlexContainer>}
    //     {country && <FlexContainer flexWrap='nowrap' alignItems='center' style={{ width: '100%' }}><SubTitle style={{ flexBasis: '40%', fontWeight: 600, margin: 0, color: '#444' }}>Country </SubTitle> <SubTitle style={{ margin: '0.3rem' }}> {`${country || ''} `} </SubTitle></FlexContainer>}
    // </FlexContainer>
  );
}
