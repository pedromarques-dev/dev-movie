import { Text } from "@chakra-ui/react";
import * as React from "react";
import { observer } from "mobx-react-lite";

interface IProps {
  overview: string;
}

const Overview: React.FC<IProps> = (props: IProps) => {
  return (
    <Text
      w={{
        md: "100%",
        lg: "85%",
      }}
      ml={{
        base: "0",
        md: "10px",
      }}
      fontSize="20px"
      textAlign={{
        base: "center",
        md: "justify",
      }}
      p={{
        base: "10px",
        md: "10px 15px 0 0",
      }}
    >
      {props.overview}
    </Text>
  );
};

export default observer(Overview);
