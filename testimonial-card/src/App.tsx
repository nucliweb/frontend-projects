import { Card } from "./Card";
import profileImage from "./assets/profile-thumbnail.png";

const PROFILE = {
  avatar: profileImage,
  description:
    "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  instagram: "@sarahdole",
  name: "Sarah Dole",
};

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen">
      <Card
        avatar={PROFILE.avatar}
        name={PROFILE.name}
        instagram={PROFILE.instagram}
        description={PROFILE.description}
      />
    </div>
  );
}

export default App;
