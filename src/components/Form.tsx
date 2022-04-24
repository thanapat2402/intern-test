import React, {
  Dispatch,
  SetStateAction,
  // useState
} from "react";
import FormProps from "../interfaces/FormProps";
import { useNavigate } from "react-router-dom";
import { Button, DatePicker, Form, Input, Space } from "antd";

interface Props {
  formValues: FormProps | undefined;
  setFormValues: Dispatch<SetStateAction<FormProps | undefined>>;
}

const { RangePicker } = DatePicker;
export const MyForm: React.FC<Props> = ({ formValues, setFormValues }) => {
  const navigate = useNavigate();
  // const [duration, setDuration] = useState<string[]>([]);
  // const [name, setName] = useState("");
  // const [idCard, setIdCard] = useState("");
  // const [docDate, setDocDate] = useState("");
  // const [amount, setAmount] = useState<number>();
  // const [place, setPlace] = useState("");
  const onFinish = (fieldValues: any) => {
    const rangeValue = fieldValues["duration"];
    //setDuration(fieldValues.duration);
    const values = {
      ...fieldValues,
      name: fieldValues["name"],
      idCard: fieldValues["idCard"],
      docDate: fieldValues["docDate"].format("DD-MMM-YYYY"),
      amount: fieldValues["amount"],
      place: fieldValues["place"],
      duration: [
        rangeValue[0].format("DD-MMM-YYYY"),
        rangeValue[1].format("DD-MMM-YYYY"),
      ],
    };
    //setDuration(values["duration"]);
    //console.log(values);
    setFormValues(values);
    // setFormValues(values);
    console.log(formValues);
    navigate("/info");
  };

  return (
    <div>
      <Space
        style={{
          marginTop: "10px",
          textAlign: "center",
          margin: "12px auto",
        }}
      >
        <Form
          onFinish={onFinish}
          layout="vertical"
          labelCol={{ span: 15 }}
          wrapperCol={{ span: 0 }}
          initialValues={{ remember: true }}
          style={{
            width: "90%",
            height: "90%",
            border: "0px solid",
            padding: "20px 50px",
            borderRadius: 15,
            background: "white",
            margin: "auto",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            top: "100%",
          }}
        >
          <h2> Form</h2>
          <Form.Item
            label="Name"
            name={"name"}
            rules={[
              { required: true, message: "Name is required" },
              {
                pattern: new RegExp(/^[a-zA-Z\s]*$/),
                message:
                  "Special alphabet and number character are not allowed",
              },
            ]}
            style={{ width: "100%" }}
          >
            <Input placeholder="Name Surname" />
          </Form.Item>
          <Form.Item
            label="ID Card Number"
            name={"idCard"}
            rules={[
              { required: true, message: "ID Card Number is required" },
              {
                pattern: new RegExp(/^[0-9]*$/),
                message: "Only Numeric Allowed",
              },
              {
                min: 13,
                message: "ID Card Number must be 13 characters",
              },
            ]}
          >
            <Input placeholder="ID Card Number" maxLength={13} />
          </Form.Item>

          <Form.Item
            label="Document Date"
            name={"docDate"}
            rules={[{ required: true, message: "Document Date is required" }]}
          >
            <DatePicker format={"DD-MMM-YYYY"} style={{ display: "flex" }} />
          </Form.Item>

          <Form.Item
            label="Duration"
            name={"duration"}
            rules={[{ required: true, message: "Duration is required" }]}
          >
            <RangePicker format={"DD-MMM-YYYY"} style={{ display: "flex" }} />
          </Form.Item>

          <Form.Item
            label="Amount"
            name={"amount"}
            rules={[{ required: true, message: "Amount is required" }]}
          >
            <Input type={"number"} placeholder="Amount" min={0} />
          </Form.Item>

          <Form.Item
            label="Place"
            name={"place"}
            rules={[{ required: true, message: "Place is required" }]}
          >
            <Input.TextArea allowClear />
          </Form.Item>

          <Form.Item colon={false}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </div>
  );
};
