import { toast } from "react-toastify";

const useToast = (msg, status = null) => {

    if(!status) {
        toast.success(msg, {})
    } else if(status === "error") {
        toast.error(msg, {})
    }
}

export default useToast;