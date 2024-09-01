import React, { useState } from "react";
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

import Accordion from "react-bootstrap/Accordion";
import Pagination from "../components/sharedcomponents/Pagination";
import RowsPerPage from "../components/sharedcomponents/RowsPerPage";
import TopNav from "../components/TopNav";
import SearchBar from "../components/sharedcomponents/SearchBar";
import SideNav from "../components/SideNav";

const Widgets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const totalItems = 32;
  const itemsPerPage = 6;
  const options = [6, 7, 8, 9, 10];

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
  };
  //initial values
  const initialValues = {
    exampleOne: "",
  };
  //validation
  const validationSchema = Yup.object().shape({
    exampleOne: Yup.string().required("Required"),
  });
  // onSubmit
  const onSubmit = async (values) => {
    console.log(values);
    window.alert(JSON.stringify(values));
  };
  return (
    <>
      <div className="p-5">
        <h1 className="text-center fw-bold primary">Components</h1>
        <hr />
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Buttons</Accordion.Header>
            <Accordion.Body>
              <div className="d-flex gap-5">
                <div>
                  <p>Large Btn without Icon</p>
                  <Button type="button" classes="my-3">
                    Large Button
                  </Button>
                </div>
                <div>
                  <p>Large Btn With Icon</p>
                  <Button type="button" startIcon={<CiCalendar />}>
                    Large btn
                  </Button>
                </div>
                <div>
                  <p>Medium Btn With Icon</p>
                  <Button type="button" size="md" startIcon={<CiCalendar />}>
                    Medium btn
                  </Button>
                </div>
                <div>
                  <p>Medium Btn Without Icon</p>
                  <Button type="button" size="md">
                    Medium btn
                  </Button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Typography</Accordion.Header>
            <Accordion.Body>
              <div>
                <Typography
                  fw="bold"
                  variant="typography-xl"
                  color="txt-primary"
                >
                  Heading One - 40PX
                </Typography>
              </div>
              <div>
                <Typography
                  fw="bold"
                  variant="typography-lg"
                  color="txt-primary"
                >
                  Heading Two - 34PX
                </Typography>
              </div>
              <div>
                <Typography
                  fw="semibold"
                  color="txt_primary"
                  variant="typography-md"
                >
                  Heading Three - 26PX
                </Typography>
              </div>
              <div>
                <Typography
                  fw="bold"
                  variant="typography-sm"
                  color="txt_primary"
                >
                  Heading Four - 16PX
                </Typography>
              </div>
              <div>
                <Typography
                  fw="bold"
                  variant="typography-xs"
                  color="txt_primary"
                >
                  Heading Five - 14PX
                </Typography>
              </div>
              <div>
                <Typography
                  fw="bold"
                  variant="typography-xxs"
                  color="txt_primary"
                >
                  Heading Six - 12PX
                </Typography>
              </div>
              <div>
                <Typography variant="typography-p1" color="txt_primary">
                  (Body One 16px) Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Modi soluta mollitia nihil itaque possimus,
                  eligendi illo distinctio, excepturi, quo quidem illum nam
                  consequuntur! Eius, quo. Quis eveniet, in suscipit, saepe
                  omnis corporis ipsam vel quod sunt eaque quas. Inventore
                  quisquam repellendus doloremque, tenetur dolores eveniet
                  voluptate placeat? Amet qui, odit quisquam ratione dolore
                  quasi quidem, quas dolorem autem debitis consequatur?
                </Typography>
              </div>
              <div>
                <Typography variant="typography-p2" color="txt_primary">
                  (Body Two 14px) Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Modi soluta mollitia nihil itaque possimus,
                  eligendi illo distinctio, excepturi, quo quidem illum nam
                  consequuntur! Eius, quo. Quis eveniet, in suscipit, saepe
                  omnis corporis ipsam vel quod sunt eaque quas. Inventore
                  quisquam repellendus doloremque, tenetur dolores eveniet
                  voluptate placeat? Amet qui, odit quisquam ratione dolore
                  quasi quidem, quas dolorem autem debitis consequatur?
                </Typography>
              </div>
              <div>
                <Typography variant="typography-p3" color="txt_primary">
                  (Body Three 12px) Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Modi soluta mollitia nihil itaque possimus,
                  eligendi illo distinctio, excepturi, quo quidem illum nam
                  consequuntur! Eius, quo. Quis eveniet, in suscipit, saepe
                  omnis corporis ipsam vel quod sunt eaque quas. Inventore
                  quisquam repellendus doloremque, tenetur dolores eveniet
                  voluptate placeat? Amet qui, odit quisquam ratione dolore
                  quasi quidem, quas dolorem autem debitis consequatur?
                </Typography>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Colors Utils</Accordion.Header>
            <Accordion.Body>
              <div>
                <Colors bg="#3CA3DC">
                  Color = (.primary) , BG-Color = (.bg_primary)
                </Colors>
                <Colors bg="#434343">Text Color = (.txt_primary)</Colors>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Table</Accordion.Header>
            <Accordion.Body>
              <Table theading={StaticData.testTableHead} minWidth="1000px">
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
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Input Feilds</Accordion.Header>
            <Accordion.Body>
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
                          label="Normal"
                          name="exampleOne"
                          variant="normal"
                          formik={formik}
                        />
                      </div>
                      <div className="col-4">
                        <h6>Search Bar</h6>
                     <SearchBar placeholder="Search" borderRadius="30px"/>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Pagiation</Accordion.Header>
            <Accordion.Body>
              <Pagination
                currentPage={currentPage}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Rows Per Page</Accordion.Header>
            <Accordion.Body>
              <RowsPerPage
                rowsPerPage={rowsPerPage}
                options={options}
                onRowsPerPageChange={handleRowsPerPageChange}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7" className="w-100">
            <Accordion.Header>Top Nav</Accordion.Header>
            <Accordion.Body>
              <TopNav
                // kioskName="Sephona"
              />
            </Accordion.Body>
          </Accordion.Item>
        
        </Accordion>

    
      </div>
    </>
  );
};

export default Widgets;
