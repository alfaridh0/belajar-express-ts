import BaseRoutes from "./BaseRouter";
import validate from "../middlewares/AuthValidator";
import { auth } from "../middlewares/AuthMiddleware";

// Controllers
import AuthController from "../controllers/AuthController";

class UserRoutes extends BaseRoutes {
    
    public routes(): void {
        this.router.post("/register",validate, AuthController.register);
        this.router.post("/login", validate, AuthController.login);
        this.router.get("/profile", auth, AuthController.profile);
    }
}

export default new UserRoutes().router;