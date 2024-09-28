const jwt = require("jsonwebtoken");
const UserRepository = require("../repositories/user.repository");

const authentication = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"]
    console.log(req.cookies, "ini cookies");
    const token = req.cookies.accessToken || authHeader?.split(" ")[1];
    if (token == null) throw {name : "Unauthenticated"};
    const { id } = jwt.verify(token, process.env.ACCESS_TOKEN_SECREt);

    const user = await UserRepository.findById(id);
    if (user === null) {
        throw {name: "Unauthenticated"}
      };
      req.user = {
        id: user.id,
        email: user.email,
    }
    next();
  } catch (error) {
    next(error)
  }
};

const authorization = async (req, res, next) => {
  try {
        const {role} = req.loggedUser;

        if(role === "admin") {
            // Allowed to execute
            next();
        } else {
            throw {name: "Unauthorized"}
        }
  } catch (error) {
    next(error);
  }
}

module.exports = {authentication, authorization};
