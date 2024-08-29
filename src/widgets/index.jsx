import React from "react";
import { CiCalendar } from "react-icons/ci";

import Button from "../components/sharedcomponents/Button";
import Typography from "../components/sharedcomponents/Typography";
import Colors from "../components/sharedcomponents/Colors";
import Table from "../components/Table";
import StaticData from "../config/config.json";
import InputField from "../components/sharedcomponents/InputFeild";
// Formik
import { Formik, Form } from "formik";
import * as Yup from "yup";

const Widgets = () => {
  //initial values
  const initialValues = {
    exampleOne: "",
    selectOne: "",
  };
  //validation
  const validationSchema = Yup.object().shape({
    exampleOne: Yup.string().required("Required"),
    selectOne: Yup.string().required("Required"),
  });
  // onSubmit
  const onSubmit = async (values) => {
    console.log(values);
    window.alert(JSON.stringify(values));
  };
  return (
    <div className="p-5">
      <h1 className="text-center">Widgets</h1>
      <hr />
      <h1 className="mb-5">
        <u>1 - Buttons</u>
      </h1>
      <div className="d-flex gap-5">
        <div>
          <p className="fs-5">Large Btn without Icon</p>
          <Button type="button" classes="my-3">
            Large Button
          </Button>
        </div>
        <div>
          <p className="fs-5">Large Btn With Icon</p>
          <Button type="button" startIcon={<CiCalendar />}>
            Large btn
          </Button>
        </div>
        <div>
          <p className="fs-5">Medium Btn With Icon</p>
          <Button type="button" size="md" startIcon={<CiCalendar />}>
            Medium btn
          </Button>
        </div>
        <div>
          <p className="fs-5">Medium Btn Without Icon</p>
          <Button type="button" size="md">
            Medium btn
          </Button>
        </div>
      </div>
      <hr />

      {/* Typography Start */}
      <h1 className="mb-5">
        <u>2 - Typography</u>
      </h1>
      <div>
        <Typography fw="bold" color="txt_primary">
          Heading One - 40PX
        </Typography>
      </div>

      <div>
        <Typography fw="semibold"  color="txt_primary">
          Heading Two - 24PX
        </Typography>
      </div>
      <div>
        <Typography fw="bold" variant="h5" color="txt_primary">
          Heading Three - 18PX
        </Typography>
      </div>
      <div>
        <Typography variant="h5" color="txt_primary">
          (Body One 18px) Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Modi soluta mollitia nihil itaque possimus, eligendi illo
          distinctio, excepturi, quo quidem illum nam consequuntur! Eius, quo.
          Quis eveniet, in suscipit, saepe omnis corporis ipsam vel quod sunt
          eaque quas. Inventore quisquam repellendus doloremque, tenetur dolores
          eveniet voluptate placeat? Amet qui, odit quisquam ratione dolore
          quasi quidem, quas dolorem autem debitis consequatur?
        </Typography>
      </div>
      <div>
        <Typography variant="h6" color="txt_primary">
          (Body One 16px) Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Modi soluta mollitia nihil itaque possimus, eligendi illo
          distinctio, excepturi, quo quidem illum nam consequuntur! Eius, quo.
          Quis eveniet, in suscipit, saepe omnis corporis ipsam vel quod sunt
          eaque quas. Inventore quisquam repellendus doloremque, tenetur dolores
          eveniet voluptate placeat? Amet qui, odit quisquam ratione dolore
          quasi quidem, quas dolorem autem debitis consequatur?
        </Typography>
      </div>
      <hr />

      {/* Colors */}

      <h1 className="mb-5">
        <u>3 - Colors Utils</u>
      </h1>
      <div>
        <Colors bg="#3CA3DC">
          Color = (.primary) , BG-Color = (.bg_primary)
        </Colors>
        <Colors bg="#434343">Text Color = (.txt_primary)</Colors>
      </div>
      <hr />

      {/* Table Start */}
      <h1 className="mb-5">
        <u>4 - Table</u>
      </h1>
      <Table theading={StaticData.testTableHead} minWidth='1000px'>
        <tr>
          <td>Group 1</td>
          <td>10</td>
          <td>Online</td>
          <td>
            <u>Edit Device</u>
          </td>
        </tr>
        <tr>
          <td>Group 1</td>
          <td>10</td>
          <td>Online</td>
          <td>
            <u>Edit Device</u>
          </td>
        </tr>
        <tr>
          <td>Group 1</td>
          <td>10</td>
          <td>Online</td>
          <td>
            <u>Edit Device</u>
          </td>
        </tr>
      </Table>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <div className="row">
              <div className="col-4">
                <InputField
                  label="Large Input"
                  name="exampleOne"
                  formik={formik}
                  type="password"
                />
              </div>
              <div className="col-4">
                <InputField
                  label="Meduim Input"
                  name="exampleOne"
                  formik={formik}
                />
              </div>
              <div className="col-4">
                <InputField
                  label="Small input"
                  name="exampleOne"
                  formik={formik}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Widgets;
