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
      <div className="mb-5">
        <h1 className="text-center fw-bold primary my-5">Kiosk Components</h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Buttons</Accordion.Header>
            <Accordion.Body>
              <div className="d-flex gap-5 mb-4">
                <div>
                  <small>Large Btn without Icon</small>
                  <Button type="button">Large Button</Button>
                </div>
                <div>
                  <small>Large Btn With Icon</small>
                  <Button type="button" startIcon={<CiCalendar />}>
                    Large btn
                  </Button>
                </div>

                <div>
                  <small>Medium Btn With Icon</small>
                  <Button type="button" size="md" startIcon={<CiCalendar />}>
                    Medium btn
                  </Button>
                </div>
                <div>
                  <small>Medium Btn Without Icon</small>
                  <Button type="button" size="md">
                    Medium btn
                  </Button>
                </div>
              </div>
              <div className="d-flex gap-5">
                <div>
                  <small>Large Btn Outline</small>
                  <Button type="button" variant="outline">
                    Previous
                  </Button>
                </div>
                <div>
                  <small>Medium Btn Outline</small>
                  <Button type="button" variant="outline" size="md">
                    Previous
                  </Button>
                </div>
              </div>
              <div class="my-5">
                <h1 class="mb-4">Button Component Documentation</h1>

                <p>
                  The <code>Button</code> component is a reusable UI element
                  that allows developers to create buttons with various styles,
                  sizes, and icons. Below is a quick guide to the available
                  props:
                </p>

                <table class="table table-bordered">
                  <thead class="table-light">
                    <tr>
                      <th>Prop</th>
                      <th>Type</th>
                      <th>Default</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>children</code>
                      </td>
                      <td>ReactNode</td>
                      <td>-</td>
                      <td>
                        Content inside the button, usually text or elements like
                        icons.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>type</code>
                      </td>
                      <td>string</td>
                      <td>
                        <code>"button"</code>
                      </td>
                      <td>
                        Defines the button type (<code>"button"</code>,{" "}
                        <code>"submit"</code>, <code>"reset"</code>).
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>size</code>
                      </td>
                      <td>string</td>
                      <td>
                        <code>"lg"</code>
                      </td>
                      <td>
                        Adjusts the button size. Available options might include{" "}
                        <code>"sm"</code>, <code>"md"</code>, and{" "}
                        <code>"lg"</code>.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>variant</code>
                      </td>
                      <td>string</td>
                      <td>
                        <code>"fill"</code>
                      </td>
                      <td>
                        Sets the button style variant. Options might include{" "}
                        <code>"fill"</code>, <code>"outline"</code>, etc.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>btn</code>
                      </td>
                      <td>string</td>
                      <td>
                        <code>"primary"</code>
                      </td>
                      <td>
                        Specifies the button's color scheme. Examples:{" "}
                        <code>"primary"</code>, <code>"secondary"</code>,{" "}
                        <code>"danger"</code>.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>startIcon</code>
                      </td>
                      <td>ReactNode</td>
                      <td>-</td>
                      <td>
                        Adds an icon at the start of the button. Example usage:{" "}
                        <code>
                          &lt;Button startIcon=&lt;YourIcon /&gt; /&gt;
                        </code>
                        .
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>align</code>
                      </td>
                      <td>string</td>
                      <td>
                        <code>"me-auto"</code>
                      </td>
                      <td>
                        Controls the alignment of the button content within a
                        flex container. Typically used for adjusting layout in
                        flexbox-based designs.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>onClick</code>
                      </td>
                      <td>function</td>
                      <td>-</td>
                      <td>Event handler for the button click event.</td>
                    </tr>
                    <tr>
                      <td>
                        <code>classes</code>
                      </td>
                      <td>string</td>
                      <td>-</td>
                      <td>
                        Additional custom CSS classes for further styling.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>title</code>
                      </td>
                      <td>string</td>
                      <td>-</td>
                      <td>Adds a tooltip text that appears on hover.</td>
                    </tr>
                    <tr>
                      <td>
                        <code>disabled</code>
                      </td>
                      <td>boolean</td>
                      <td>
                        <code>false</code>
                      </td>
                      <td>
                        Disables the button if set to <code>true</code>.
                        Disabled buttons also have a strikethrough effect.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>styles</code>
                      </td>
                      <td>object</td>
                      <td>-</td>
                      <td>Inline styles to apply directly to the button.</td>
                    </tr>
                  </tbody>
                </table>

                <p class="mt-4">
                  This documentation should help developers quickly understand
                  how to use and customize the <code>Button</code> component in
                  their projects.
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Typography</Accordion.Header>
            <Accordion.Body>
              <div>
                <Typography
                  fw="bold"
                  variant="heading-xl"
                  color="txt-primary"
                >
                  Heading One - 40PX
                </Typography>
              </div>
              <div>
                <Typography
                  fw="bold"
                  variant="heading-lg"
                  color="txt-primary"
                >
                  Heading Two - 34PX
                </Typography>
              </div>
              <div>
                <Typography
                  fw="semibold"
                  color="txt_primary"
                  variant="heading-md"
                >
                  Heading Three - 26PX
                </Typography>
              </div>
              <div>
                <Typography
                  fw="bold"
                  variant="heading-sm"
                  color="txt_primary"
                >
                  Heading Four - 16PX
                </Typography>
              </div>
              <div>
                <Typography
                  fw="bold"
                  variant="heading-xs"
                  color="txt_primary"
                >
                  Heading Five - 14PX
                </Typography>
              </div>
              <div>
                <Typography
                  fw="bold"
                  variant="heading-xxs"
                  color="txt_primary"
                >
                  Heading Six - 12PX
                </Typography>
              </div>
              <div>
                <Typography variant="body-1" color="txt_primary">
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
                <Typography variant="body-2" color="txt_primary">
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
                <Typography variant="body-3" color="txt_primary">
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
            <Accordion.Header>Forms</Accordion.Header>
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
                          label="Name"
                          name="exampleOne"
                          variant="normal"
                          formik={formik}
                        />
                      </div>
                      <div className="col-4">
                        <InputField
                          label="Password"
                          name="exampleOne"
                          variant="normal"
                          type="password"
                          formik={formik}
                        />
                      </div>
                      <div className="col-4">
                        <h6>Search Bar</h6>
                        <SearchBar placeholder="Search" borderRadius="30px" />
                      </div>
                      <div className="col-4">
                        <InputField
                          label="Togler"
                          name="Toggler"
                          isToggle={true}
                          value={true} // or formik.values.kiosk if using Formik
                          onChange={(checked) => console.log(checked)}
                        />
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
            <Accordion.Header>Utilities Classes</Accordion.Header>
            <Accordion.Body>
          
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default Widgets;
