import Dashboard from "../pages/dashboard";
import AboutPage from "../pages/about";
import ExperiencePage from "../pages/experience";
import ContactPage from "../pages/contact";
import { route } from "../common/constants";

const routes = [
  { path: "/", component: Dashboard },
  { path: route.about, component: AboutPage },
  { path: route.contact, component: ContactPage },
  { path: route.experience, component: ExperiencePage }
];

export default routes;
