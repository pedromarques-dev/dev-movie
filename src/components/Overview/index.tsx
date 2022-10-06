import * as React from "react";
import { Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

interface IProps {
  overview: string;
}

export const Overview: React.FC<IProps> = observer((props: IProps) => {
  const { overview } = props;

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
      {overview}
    </Text>
  );
});

