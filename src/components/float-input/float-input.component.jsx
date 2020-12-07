import {
  InputWrap,
  InputComp,
  TextareaComp,
  FloatLabel,
} from './float-input.styles';

const FloatInput = ({ label, type = 'input', ...others }) => (
  <InputWrap>
    {type === 'input' ? (
      <InputComp {...others} type="text" placeholder=" " />
    ) : (
      <TextareaComp {...others} rows="4" placeholder=" " />
    )}
    <FloatLabel>{label}</FloatLabel>
  </InputWrap>
);

export default FloatInput;
