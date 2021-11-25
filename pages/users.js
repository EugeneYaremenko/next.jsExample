// utils
import { fetchUsers } from "../utils/fetchUsers";
// components
import User from "../components/User";

const Users = ({ users }) => {
  return (
    <section className="pt-5 pb-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-10">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Here are our heroes</h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record
              maximum.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          {users.map(({ id, image, name, prof }) => (
            <User key={id} id={id} image={image} name={name} prof={prof} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Users;

export async function getStaticProps(context) {
  const users = fetchUsers();

  return {
    props: { users },
  };
}
