import { Button, Space } from "antd";
import FormProps from "../interfaces/FormProps";

export const Report: React.FC<{ formValues: FormProps | undefined }> = ({
  formValues,
}) => {
  let data: FormProps = {
    name: "",
    idCard: "",
    docDate: "",
    duration: [],
    amount: 0,
    place: "",
  };
  data = Object.assign({}, formValues);
  return (
    <div>
      <Space
        style={{
          paddingTop: "5%",
          textAlign: "center",
          margin: " auto",
          display: "block",
        }}
      >
        <div
          style={{
            maxWidth: "377.49px",
            width: "90%",
            height: "90%",
            border: "0px solid",
            padding: 20,
            borderRadius: 15,
            background: "white",
            margin: "auto",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2> Report </h2>
          <table style={{ textAlign: "left", margin: "auto" }} cellPadding={7}>
            <tbody>
              <tr>
                <td className="label">Name</td>
                <td>:</td>
                <td>{data.name}</td>
              </tr>
              <tr>
                <td className="label">ID Card Number</td>
                <td>:</td>
                <td>{data.idCard}</td>
              </tr>
              <tr>
                <td className="label">Document Date</td>
                <td>:</td>
                <td>{data.docDate}</td>
              </tr>
              <tr>
                <td className="label">Duration</td>
                <td>:</td>
                <td>{`${data.duration[0]} to ${data.duration[1]}`}</td>
              </tr>
              <tr>
                <td className="label">Amount</td>
                <td>:</td>
                <td>{data.amount}</td>
              </tr>
              <tr>
                <td className="label">Place</td>
                <td>:</td>
                <td>{data.place}</td>
              </tr>
            </tbody>
          </table>

          <div style={{ padding: 20 }}>
            <Button type="primary" href="/">
              Back
            </Button>
          </div>
        </div>
      </Space>
    </div>
  );
};
