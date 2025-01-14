import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const SignOutButton = () =>{
    const navigate = useNavigate();
    const {showToast} = useAppContext();
    const queryClient = useQueryClient();

    const mutation = useMutation(apiClient.signOut, {
        onSuccess: async () => {
            await queryClient.invalidateQueries("validateToken");
            showToast({message:"Signed Out", type:"SUCCESS"});
            navigate("/");
        },
        onError: (e: Error) => {
            showToast({message: e.message, type:"ERROR"});
        }
    });

    const handleClick = () => {
        mutation.mutate();
    }
    return (
        <button onClick={handleClick} className="text-blue-600 px-3 font-bold bg-white hover:bg-gray-100">Sign Out</button>
    );
};

export default SignOutButton;