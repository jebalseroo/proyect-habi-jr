import ButtonStyle from "./Buutons.styles";

export interface IButtons {
  label: string;
  actionOnClick?: () => void;
}
const Buttons = ({ label, actionOnClick }: IButtons) => {
  return (
    <ButtonStyle>
      <div>
        <button className='button-64' role='button' onClick={actionOnClick}>
          <span className='text'>{label}</span>
        </button>
      </div>
    </ButtonStyle>
  );
};

export default Buttons;
