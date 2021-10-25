import Home from "../pages/index";

export const HomeDefault = () => (
  <Home name={"Episode x"} images={["http://placekitten.com/g/800/570"]} />
);

export default {
  title: "Home",
  component: Home,
};
