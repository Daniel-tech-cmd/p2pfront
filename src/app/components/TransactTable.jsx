import Image from "next/image";
import { formatDistanceToNow } from "date-fns";

const TransactTable = ({ data }) => {
  const formattedDate = (date) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <div style={{ overflow: "auto", maxHeight: "400px" }} className="tabc">
        <table className="table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Initiated</th>
              <th>Text</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data
              ?.slice()
              .reverse()
              .map((tran) => (
                <tr key={tran._id}>
                  <td data-label="Type">
                    <div className="text-end text-lg-start">
                      <span></span>
                      <br />
                      <small style={{ textTransform: "capitalize" }}>
                        {tran.type}
                      </small>
                    </div>
                  </td>

                  <td data-label="Initiated">
                    <div className="text-end text-lg-start fw-normal">
                      <span>{formatDate(tran.date)}</span>
                      <br />
                      <small>{formattedDate(tran.date)}</small>
                    </div>
                  </td>
                  <td data-label="Text">
                    <div className="text-end text-lg-start fw-normal">
                      {tran.text}
                      <br />
                      <span title="Text" style={{ fontSize: "10px" }}>
                        {tran.text} USD
                      </span>
                    </div>
                  </td>
                  <td className="text-center" data-label="Status">
                    <div className="text-end text-lg-start">
                      <span className={`badge  ${tran.status}`}>
                        {tran.status}
                      </span>{" "}
                    </div>
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
