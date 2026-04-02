export const Profile = ({ name, age, city, goal }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Goal: {goal}</p>
    </div>
  );
};
