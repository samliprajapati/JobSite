import React from "react";
import Avatar from "antd/lib/avatar";
import { ProgressiveImage } from "../../Utils";
import { base_url } from "../../../Config/Auth";
import ProfilePreview from "../../../images/ProfilePreview.png";
const MultiAvatar = ({
  imageId,
  imageURL,
  primaryTitle,
  imgWidth,
  imgHeight,
  smallAvatar,
  imgRadius,
  imgPaddingTop,
  // bgcolor,
  minAvatarWidth,
}) => {
  const size = smallAvatar && !imageId && !imageURL ? "small" : "large";
  // const fontSize = size === "large" ? 18 : 12;
  const color = size === "large" ? "#fff" : "#fff";
  // const backgroundColor = size === "large" ? "#337df4" : "#337df4";
  const backgroundColor = size === "large" ? "#337df4" : "#337df4";
  const borderWidth = size === "large" ? "0.0625em" : "0.0625em";
  const borderColor = size === "large" ? "#337df4" : "#337df4";
  const borderStyle = size === "large" ? "solid" : "solid";
  console.log(imageId)
  return (
    <>
      {imageId ? (
        imageId ? (
          <div>
            <ProgressiveImage
              preview={ProfilePreview}
              image={`${base_url}/image/${imageId}`}
              width={imgWidth || "10em"}
              height={imgHeight || "10em"}
              // paddingTop={imgPaddingTop || 0}
              // borderRadius={imgRadius}
            />
          </div>
        ) : (
          <ProgressiveImage
            preview={ProfilePreview}
            image={imageURL}
            width={imgWidth || "10em"}
            height={imgHeight || "10em"}
            // paddingTop={imgPaddingTop || 0}
            // borderRadius={imgRadius}
            // borderRadius={'50%'}
          />
        )
      ) : (
        <Avatar
          size={size || "large"}
          style={{
            color,
            // backgroundColor: bgcolor ? "red" : backgroundColor,
            backgroundColor,
            // fontSize,
            borderWidth,
            borderColor,
            borderStyle,
            minWidth: minAvatarWidth,
          }}
        >
          {primaryTitle && primaryTitle.split("")[0].toUpperCase()}
        </Avatar>
      )}
    </>
  );
};

export default MultiAvatar;
