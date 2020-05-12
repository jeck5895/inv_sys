/**
 * Interceptors
 * https://dev.to/teroauralinna/global-http-request-and-response-handling-with-the-axios-interceptor-30ae
 */
// import authService from "@/services/auth.service";
import Cookies from "js-cookie";
import { store } from "../store/";

const requestHandler = request => {
    const accessToken = Cookies.get("_a.token");
    if (accessToken) {
        request.headers["Accept"] = "application/json";
        request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    request.headers["Accept"] = `application/json`;
    return request;
};

const errorRequestHandler = error => {
    Promise.reject(error);
};

const responseHandler = response => {
    return response;
}

const errorResponseHandler = error => {
    if (error.response.status === 401) {
        toastr.error("Your session has expired. You will be redirected to login");
        setTimeout(() => {
            store.dispatch("AuthModule/LOGOUT").then(() => {
                window.location =
                    window.location.protocol +
                    "//" +
                    window.location.host +
                    "/login";
            });

        }, 2500)
    } else {
        return Promise.reject(error);
    }
}

export { requestHandler, errorRequestHandler, responseHandler, errorResponseHandler };
