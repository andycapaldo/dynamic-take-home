import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useEffect } from "react"; 
import { useNavigate } from "react-router-dom";

const Redirect = (props) => {
    const { user } = useDynamicContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/');
        }  
    }, [user, navigate]);

    return (
        props.children
    );
}

export default Redirect;