import SecondaryButton from "../../../../Components/SecondaryButton";
function Heading() {
    return (
        <div className='d-flex flex-row justify-content-between heading--mt'>
            <h1 className='large-title'>Данные о компании</h1>
            <SecondaryButton>Закрыть запись</SecondaryButton>
        </div>
    );
}

export default Heading;