/**
 * Interceptors
 * https://dev.to/teroauralinna/global-http-request-and-response-handling-with-the-axios-interceptor-30ae
 */
// import authService from "@/services/auth.service";
import Cookies from "js-cookie";
const accessToken = Cookies.get("_a.token");

const requestHandler = request => {

    if (accessToken) {
        request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    request.headers["Accept"] = `application/json`;
    return request;
};

const errorHandler = error => {
    Promise.reject(error);
};

export { requestHandler, errorHandler };
