import ProfileImage from "./ProfileImage";
import IntroText from "./IntroText";
import IntroButtons from "./IntroButtons";

export default function Home() {
  return (
    <>
      <div className="mb-10 d-flex justify-content-around page-size-no-scroll">
        <div className="container">
          <div className="h-100 row">
            <div className="col-6 align-self-center">
              <ProfileImage />
            </div>

            <div className="col-6 align-self-center">
              <IntroText />
              <IntroButtons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
