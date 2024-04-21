// "use client";
import Image from "next/image";
import Nav from "../../../components/Nav";
import Link from "next/link";
import styles from "../../../styles/verify2.module.css";

async function getdatabyId(id, token) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/user/${id}/verify/${token}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    return;
  }

  const data = await res.json();

  return data;
}

const Track = async ({ params }) => {
  const id = params.id;
  const token = params.token;
  const data = getdatabyId(id, token);
  const [dat] = await Promise.all([data]);

  return (
    <>
      <Nav />
      {dat && (
        <div className={styles.cont}>
          <div>
            <Image src="/verified.svg" width={70} height={70} alt="" />
            <p>Email verification successful.</p>
            <p>
              <Link href={`/user/login`} className="bluebtn">
                login
                <span>
                  <Image src="/arrow.svg" width={12} height={12} alt="arrow" />
                </span>
              </Link>
            </p>
          </div>
        </div>
      )}
      {!dat && (
        <div className={styles.cont}>
          <div>
            <Image src="/failed.svg" width={70} height={70} alt="" />
            <p>Verification link has expired! Try signing up again.</p>
            <p>
              <Link href={`/user/signup`} className="bluebtn">
                sign up
                <span>
                  <Image src="/arrow.svg" width={12} height={12} alt="arrow" />
                </span>
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Track;
