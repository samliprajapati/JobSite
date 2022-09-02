import React, { Component } from "react";
import { FileOutlined, PlusOutlined } from "@ant-design/icons";
import { ApplicationWrapper, FlexContainer } from "../Layout";

import { Title, SubTitle } from "./";

class NoData extends Component {
  render() {
    return (
      <>
        <ApplicationWrapper>
          <FlexContainer
            justifyContent="center"
            alignItems="center"
            style={{ margin: "0px auto", height: "80vh" }}
          >
            <FlexContainer
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              alignSelf="center"
            >
              <FileOutlined theme="filled" style={{ fontSize: "50px" }} />
              {/* <FlexContainer
                flexWrap="nowrap"
                alignItems="center"
                justifyContent="content"
                display="content"
                alignSelf="center"
              >
                
              </FlexContainer> */}
              <Title style={{ textAlign: "center" }}>
                Welcome to the {this.props.content || "Data"} tab.
              </Title>
              <SubTitle
                style={{
                  textAlign: "center",
                  color: "#1890ff",
                  cursor: "pointer",
                }}
                onClick={this.props.onClick || undefined}
              >
                Let us help you get started, click <PlusOutlined /> Create{" "}
                {this.props.content || "Data"}
              </SubTitle>
            </FlexContainer>
          </FlexContainer>
        </ApplicationWrapper>
      </>
    );
  }
}
//       <>
//         <BundleLoader />
//         {content === "ViewPort" ? (
//           <>
//             <ApplicationWrapper>
//               <FlexContainer
//                 justifyContent="center"
//                 alignItems="center"
//                 style={{ margin: "0px auto", height: "80vh" }}
//               >
//                 <FlexContainer
//                   flexDirection="column"
//                   justifyContent="center"
//                   alignItems="center"
//                   alignSelf="center"
//                 >
//                   <Icon
//                     type="file"
//                     theme="filled"
//                     style={{ fontSize: "50px" }}
//                   />
//                   <FlexContainer
//                     flexWrap="nowrap"
//                     alignItems="center"
//                     justifyContent="center"
//                     alignSelf="center"
//                   >
//                     <Title style={{ textAlign: "center" }}>
//                       Welcome to the {this.props.content || "Data"} tab.
//                     </Title>
//                   </FlexContainer>
//                   <SubTitle
//                     style={{
//                       textAlign: "center",
//                       color: "#1890ff",
//                       cursor: "pointer"
//                     }}
//                   // onClick={this.props.onClick || undefined}
//                   >
//                     Let us help you get started, select user from top left.
//                   </SubTitle>
//                 </FlexContainer>
//               </FlexContainer>
//             </ApplicationWrapper>
//           </>
//         ) : (
//             <>
//               <ApplicationWrapper>
//                 <FlexContainer
//                   justifyContent="center"
//                   alignItems="center"
//                   style={{ margin: "0px auto", height: "80vh" }}
//                 >
//                   <FlexContainer
//                     flexDirection="column"
//                     justifyContent="center"
//                     alignItems="center"
//                     alignSelf="center"
//                   >
//                     <Icon
//                       type="file"
//                       theme="filled"
//                       style={{ fontSize: "50px" }}
//                     />
//                     <FlexContainer
//                       flexWrap="nowrap"
//                       alignItems="center"
//                       justifyContent="center"
//                       alignSelf="center"
//                     >
//                       <Title style={{ textAlign: "center" }}>
//                         Welcome to the {this.props.content || "Data"} tab.
//                     </Title>
//                     </FlexContainer>
//                     <SubTitle
//                       style={{
//                         textAlign: "center",
//                         color: "#1890ff",
//                         cursor: "pointer"
//                       }}
//                       onClick={this.props.onClick || undefined}
//                     >
//                       Let us help you get started, click <Icon type="plus" />{" "}
//                       Create {this.props.content || "Data"}
//                     </SubTitle>
//                   </FlexContainer>
//                 </FlexContainer>
//               </ApplicationWrapper>
//             </>
//           )}
//       </>
//     );
//   }
// }

export default NoData;
