import "dotenv/config";
import "module-alias/register";
import validateEnv from "@/utils/ValidateEnv";
import App from "./app";
import HealthController from "@/resources/healthCheck/heath.controller";
import UserLogin from "@/resources/AIRDROP/Login/user_login/controllers/userLogin.controller";
import AdminLogin from "@/resources/AIRDROP/Login/admin_login/controllers/admin_login.controller";
import userAirdropRoutes from "@/resources/AIRDROP/Users/routes/user.route";
import coinMarketRoutes from "./resources/coinmarket/routes/coinmarket.routes";
import AdminLoginLms from "@/resources/LMS/Login/Admin/admin.controller";
import quizAdminRoutes from "./resources/LMS/Admin/routes/quiz.routes";
import courseAdminRoutes from "./resources/LMS/Admin/routes/course.routes";
import chapterAdminRoutes from "./resources/LMS/Admin/routes/chapter.routes";
import airdropAdminRoutes from "./resources/AIRDROP/Admin/routes/airdrop.routes";
import challengesAdminRoutes from "./resources/AIRDROP/Admin/routes/challenges.routes";
import taskAdminRoutes from "./resources/AIRDROP/Admin/routes/task.routes";
import articleAdminRoutes from "./resources/ARTICLES/Admin/Routes/articleadmin.routes";
import articleTokensRoutes from "./resources/ARTICLES/Admin/Routes/tokens.routes";
import articleHOW3Routes from "./resources/ARTICLES/Admin/Routes/humansofweb3.routes";
import articleCategoryRoutes from "./resources/ARTICLES/Admin/Routes/category.routes";
import userLmsRoutes from "@/resources/LMS/USER/routes/userRoute";
import userArticleRoutes from "./resources/ARTICLES/USER/route/userRoute";
import adminLoginArticleRoutes from "./resources/ARTICLES/ADMIN_LOGIN/Routes/adminLogin.routes";
import userLoginRoutes from "./resources/AIRDROP/Login/user_login/routes/userLogin.routes";
import adminLoginAirdropRoutes from "./resources/AIRDROP/Login/admin_login/routes/adminLogin.route";
import articleblogRoutes from "./resources/ARTICLES/Admin/Routes/blogs.routes";
import articlerecapRoutes from "./resources/ARTICLES/Admin/Routes/recaps.routes";
import userAnalyticRoutes from "./resources/Analytics/Admin/Routes/userAnalytics.routes";
import newsSellingRoutes from "./resources/ARTICLES/SellingApi/routes/news.routes";
import userSocialMediaRoutes from "@/resources/SocialMediaVerification/USER/routes/userRoute";
validateEnv();
const app = new App(
  [
    new HealthController(),
    new userLoginRoutes(),
    new adminLoginArticleRoutes(),
    new userAirdropRoutes(),
    new AdminLoginLms(),
    new courseAdminRoutes(),
    new chapterAdminRoutes(),
    new quizAdminRoutes(),
    new airdropAdminRoutes(),
    new challengesAdminRoutes(),
    new taskAdminRoutes(),
    new userLmsRoutes(),
    new articleAdminRoutes(),
    new articleCategoryRoutes(),
    new articleHOW3Routes(),
    new articleTokensRoutes(),
    new userArticleRoutes(),
    new adminLoginAirdropRoutes(),
    new articleblogRoutes(),
    new articlerecapRoutes(),
    new coinMarketRoutes(),
    new userAnalyticRoutes(),
    new newsSellingRoutes(),
    new userSocialMediaRoutes(),
  ],
  Number(process.env.PORT)
);

app.listen();
