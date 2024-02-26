
export default function Home() {


  return (
   <section id="landing__page">

  <video className="video" src={require("../style/videos/video.mp4")} autoPlay muted loop/>

  <div className="landing__page--greeting--container fade-in">
    <h1 className="landing__page--title ">
      The Stars Are Humanity's Birthright
    </h1>
   <p className="landing__page--para">
    With the world's most brilliant minds helping develop the latest in interstellar technology along with the brave men and women to use them, we take to the stars. Join us today and help colonize our Solar System, Galaxy and Universe!
   </p>
  </div>

   </section>
  );
}
