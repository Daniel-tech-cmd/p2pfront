import Link from "next/link";

const TransactTable = ({ data }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <h2 style={{ color: "#fff", fontWeight: "500" }}>Trade History</h2>
      <div style={{ overflow: "auto", maxHeight: "400px" }} className="tabc">
        <table className="table">
          <thead>
            <tr>
              <th>Pair</th>
              <th>Initiated</th>
              <th>Buyer</th>
              <th>#ID </th>
            </tr>
          </thead>
          <tbody>
            {data
              ?.slice()
              .reverse()
              .map((tran) => (
                <tr key={`${tran?._id}${tran?.id}`}>
                  <td data-label="Type">
                    <Link href={`/account/trade?id=${tran?._id}`}>
                      <div className="text-end text-lg-start">
                        <p
                          style={{
                            textTransform: "capitalize",
                            color: "#fff",
                            fontWeight: "bold",
                          }}
                        >
                          {tran?.assettobuy?.name}/{tran?.assettosell?.name}
                        </p>
                      </div>
                    </Link>
                  </td>

                  <td data-label="Initiated">
                    <Link href={`/account/trade?id=${tran?.id}`}>
                      <div className="text-end text-lg-start fw-normal">
                        <span>{formatDate(tran?.createdAt)}</span>
                      </div>
                    </Link>
                  </td>

                  <td data-label="Initiated">
                    <Link href={`/account/trade?id=${tran?.id}`}>
                      <div className="text-end text-lg-start fw-normal">
                        <span>
                          {tran?.buyer == "" ? "pending" : tran?.buyer}
                        </span>
                      </div>
                    </Link>
                  </td>

                  <td data-label="Text">
                    <Link href={`/account/trade?id=${tran?.id}`}>
                      <div className="text-end text-lg-start fw-normal">
                        <span title="Text" style={{ fontSize: "10px" }}>
                          {tran?.id}
                        </span>
                      </div>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactTable;
