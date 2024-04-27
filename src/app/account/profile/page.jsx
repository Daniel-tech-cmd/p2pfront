import Name from "@/app/components/Name";
import { notFound } from "next/navigation";
import Sidenav from "@/app/components/Sidenav";
import styles from "../../styles/invest.module.css";
import Prof from "@/app/components/Prof";
import { cookies } from "next/headers";

async function getdatabyId(user) {
  const res = await fetch(`${process.env.URL}/api/user/oneuser/${user?._id}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.token}`,
    },
  });
  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();

  return data;
}
const Profile = async () => {
  const cookiestore = cookies();
  const userjson = cookiestore.get("user");

  const user = JSON.parse(userjson?.value);

  const data = getdatabyId(user);
  const [dat] = await Promise.all([data]);

  return (
    <>
      <section className={styles.sec}>
        <div>
          {" "}
          <Sidenav />
        </div>
        <div className={styles.seconddiv} style={{ minHeight: "100vh" }}>
          <Name section={"Profile"} />
          <div
            id="admin"
            className={styles.deposec}
            style={{ padding: "15px" }}
          >
            <Prof data={dat} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
