import Layout from "../../components/Layout/Layout";

export default function ({ userId }) {
  return <div>user id is: {userId}</div>;
}

export async function getServerSideProps({ params }) {
  const userId = params.id;

  return {
    props: { userId },
  };
}
