import Name from "@/app/components/Name";
// import Dashboardnav from "@/app/components/Dashboardnav";
import styles from "../../styles/invest.module.css";
import { notFound } from "next/navigation";
import AdminComp from "@/app/components/AdminComp";
import Sidenav from "../../components/Sidenav";
import { cookies } from "next/headers";

async function getdata(user) {
  const res = await fetch(`${process.env.URL}/api/transact/all`, {
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

async function getdatabyId(id) {
  const res = await fetch(`${process.env.URL}/api/user/oneuser/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();

  return data;
}

const Trades = async () => {
  const cookiestore = cookies();
  const userjson = cookiestore.get("user");

  const user = JSON.parse(userjson?.value);
  const data = getdatabyId(user._id);
  const [dat] = await Promise.all([data]);
  //
  const datas = getdata(user);
  const datium = await Promise.all([datas]);
  return (
    <>
      <section className={styles.sec}>
        <div>
          {" "}
          <Sidenav />
        </div>
        <div className={styles.seconddiv}>
          <Name section={"Admin"} />
          <div
            id="admin"
            className={styles.containerFluid}
            style={{ padding: "15px" }}
          >
            <AdminComp
              data={datium}
              data2={dat}
              sec={"Trades"}
              link={"edit/trade"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Trades;
