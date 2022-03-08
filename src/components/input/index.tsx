import { IInput } from "../../interfaces";
import { Section } from "./styles";

export const Input = (props: IInput) => {
  return (
    <Section>
      <input {...props} />
    </Section>
  );
};
