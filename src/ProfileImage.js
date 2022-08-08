import testimage from "./images/testimage.png";

export default function ProfileImage() {
  return (
    <>
      <div className="col" style={{ textAlign: "right" }}>
        <img src={testimage} className="pfp-image-sizing image-sizing" />
      </div>
    </>
  );
}
