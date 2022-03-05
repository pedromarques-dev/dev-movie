import { Section } from "./styles";

interface IInput {
  type: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const Input = (props: IInput) => {
  return (
    <Section>
      <input {...props} />
    </Section>
  );
};
