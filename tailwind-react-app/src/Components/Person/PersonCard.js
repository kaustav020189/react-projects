import Card from "../UI/Card";
import profileImage from "./../../assets/profile.jpeg";
import Button from "../UI/Button";

const PersonCard = (props) => {
  return (
    <Card>
      <img
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={profileImage}
        alt="Thor's Face"
      />
      <div className="text-center space-y-2 sm:text-left mb-4">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">
            {props.person.name}
          </p>
          <p className="text-slate-500 font-medium">{props.person.job}</p>
        </div>
        <Button
          buttonStyle="red"
          buttonType="button"
          buttonTitle="Remove"
        ></Button>
      </div>
    </Card>
  );
};

export default PersonCard;
