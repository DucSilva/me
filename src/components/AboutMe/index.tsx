import Profile from "@Components/Profile";

const About = ({ user }) => (
  <Profile
    name={user?.attributes?.Me}
    userName={user?.attributes?.Me}
    description={user?.attributes?.Description}
    avatarUrl={user?.attributes?.ava}
    file={user?.attributes?.cv}
  />
);

export default About;
