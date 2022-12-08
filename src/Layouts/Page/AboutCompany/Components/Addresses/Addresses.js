import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex flex-column justify-content-between p-4 gap-2 mt-4 border rounded-3'>
            <div>
                <div className='title'>Адреса заведений</div>
                <div className='d-inline-flex flex-column gap-3'>
                    <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                    <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>                
                </div>
            </div>            
            <PrimaryButton>Добавить филиал</PrimaryButton>
        </div>
    );
}

export default Addresses;