import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ValidationHelper {
// validation on value length 
  isEmpety(value) {
    if(value.length===0){
        return true
    }
    else{
        return false
    }
  }
// success massage 
  successMessage(message) {
    toast.success(message);
  }
// error massage 
  errorMessage(err) {
    toast.error(err);
  }
}

// Create an instance of ValidationHelper
const validationHelper = new ValidationHelper();

// Export the instance methods
export const { isEmpety, successMessage, errorMessage } = validationHelper;
