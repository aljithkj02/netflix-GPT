
export const validateData = ({ name, email, password, isSignUp }) => {
    const isNameValid = isSignUp && name;
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(isSignUp && !isNameValid) return "User must enter a name!"
    if(!isEmailValid) return "Email ID is not valid!";
    if(!isPasswordValid) return "Password is not valid!";
    return null;
}