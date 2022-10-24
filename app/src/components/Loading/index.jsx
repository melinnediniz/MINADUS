import { ImSpinner9 as SpinnerIcon } from "react-icons/im";
import "./styles.css";
export const Loading = () => {
    return (
        <div className="loading">
            <div className="spinner">
                <SpinnerIcon size={24} />
            </div>
        </div>
    );
};
