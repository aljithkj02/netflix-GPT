import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "./firebase";


export const signupUser = async ({name, email, password}) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateUserProfile(name);
        return {
            status: true,
            user
        }
    } catch (error) {
        const errorCode = error.code;
        // const errorMessage = error.message;
        return {
            status: false,
            message: errorCode
        }
    }
}

export const signinUser = async ({ email, password }) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return {
            status: true,
            user
        }
    } catch (error) {
        const errorCode = error.code;
        // const errorMessage = error.message;
        return {
            status: false,
            message: errorCode
        }
    }
}

export const signoutUser = async () => {
    try {
        const res = signOut(auth);
        return res;
    } catch (error) {
        console.log(error.code);
    }
}

export const updateUserProfile = async (name) => {
    try {
        await updateProfile(auth.currentUser, {
            displayName: name
        });
    } catch (error) {
        console.log(error.code)
    }
}