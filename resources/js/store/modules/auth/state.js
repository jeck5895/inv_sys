import Cookies from "js-cookie";

export default {
    auth: {
        loggedIn: Cookies.get("_a.loggedIn") === undefined ? false : true,
        user:
            Cookies.get("_a.user") === undefined
                ? {
                      name: "",
                      email: ""
                  }
                : Cookies.getJSON("_a.user")
    }
};
