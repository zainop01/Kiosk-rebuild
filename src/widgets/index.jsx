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
                <h2 class="mb-4">Button Component Docs</h2>

                <p>
                  The <code>Button</code> component is a flexible UI element
                  that supports various styles, sizes, and icons. Below is a
                  detailed guide to each prop and example usage.
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
                        Content inside the button, typically text or elements
                        like icons.
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
                        Specifies the button type (<code>"button"</code>,{" "}
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
                        Defines the button size. Options include{" "}
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
                        Determines the button style variant. Examples are{" "}
                        <code>"fill"</code> for a solid button and{" "}
                        <code>"outline"</code> for a bordered button.
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
                        Specifies the color scheme of the button. Common options
                        are <code>"primary"</code>, <code>"secondary"</code>,
                        etc.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>startIcon</code>
                      </td>
                      <td>ReactNode</td>
                      <td>-</td>
                      <td>
                        Icon element placed at the start of the button text.
                        Example:{" "}
                        <code>&lt;Button startIcon=&lt;Icon /&gt; /&gt;</code>.
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
                        Adjusts the alignment of button content, useful in
                        flexbox layouts.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>onClick</code>
                      </td>
                      <td>function</td>
                      <td>-</td>
                      <td>
                        Event handler triggered when the button is clicked.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>classes</code>
                      </td>
                      <td>string</td>
                      <td>
                        <code>""</code>
                      </td>
                      <td>Custom CSS classes for additional styling.</td>
                    </tr>
                    <tr>
                      <td>
                        <code>title</code>
                      </td>
                      <td>string</td>
                      <td>
                        <code>""</code>
                      </td>
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>styles</code>
                      </td>
                      <td>object</td>
                      <td>-</td>
                      <td>
                        Inline styles applied directly to the button element.
                      </td>
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
                <Typography fw="bold" variant="heading-xl" color="txt-primary">
                  Heading One - 40PX
                </Typography>
              </div>
              <div>
                <Typography fw="bold" variant="heading-lg" color="txt-primary">
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
                <Typography fw="bold" variant="heading-sm" color="txt_primary">
                  Heading Four - 16PX
                </Typography>
              </div>
              <div>
                <Typography fw="bold" variant="heading-xs" color="txt_primary">
                  Heading Five - 14PX
                </Typography>
              </div>
              <div>
                <Typography fw="bold" variant="heading-xxs" color="txt_primary">
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
                <div class="my-5">
                  <h2 class="mb-4">Typography Component Docs</h2>

                  <p>
                    This documentation provides a detailed guide on the
                    typography styles available in your project, including
                    headings and body text. Each typography style is designed
                    with specific font sizes and weights to ensure consistency
                    across the application.
                  </p>

                  <table class="table table-bordered">
                    <thead class="table-light">
                      <tr>
                        <th>Class</th>
                        <th>Font Size</th>
                        <th>Pixel Equivalent</th>
                        <th>Font Weight</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <code>.heading-xl</code>
                        </td>
                        <td>2.5rem</td>
                        <td>40px</td>
                        <td>700</td>
                        <td>Main heading, used for top-level titles.</td>
                      </tr>
                      <tr>
                        <td>
                          <code>.heading-lg</code>
                        </td>
                        <td>2.125rem</td>
                        <td>34px</td>
                        <td>700</td>
                        <td>Secondary heading, suitable for sub-titles.</td>
                      </tr>
                      <tr>
                        <td>
                          <code>.heading-md</code>
                        </td>
                        <td>1.625rem</td>
                        <td>26px</td>
                        <td>600</td>
                        <td>Tertiary heading, used for section headers.</td>
                      </tr>
                      <tr>
                        <td>
                          <code>.heading-sm</code>
                        </td>
                        <td>1rem</td>
                        <td>16px</td>
                        <td>700</td>
                        <td>
                          Fourth-level heading, used for smaller headings.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.heading-xs</code>
                        </td>
                        <td>0.875rem</td>
                        <td>14px</td>
                        <td>700</td>
                        <td>Fifth-level heading, for minor headings.</td>
                      </tr>
                      <tr>
                        <td>
                          <code>.heading-xxs</code>
                        </td>
                        <td>0.75rem</td>
                        <td>12px</td>
                        <td>700</td>
                        <td>
                          Sixth-level heading, used for the smallest headings.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.body-1</code>
                        </td>
                        <td>1rem</td>
                        <td>16px</td>
                        <td>400</td>
                        <td>Primary body text, used for main content.</td>
                      </tr>
                      <tr>
                        <td>
                          <code>.body-2</code>
                        </td>
                        <td>0.875rem</td>
                        <td>14px</td>
                        <td>400</td>
                        <td>Secondary body text, for supplementary content.</td>
                      </tr>
                      <tr>
                        <td>
                          <code>.body-3</code>
                        </td>
                        <td>0.75rem</td>
                        <td>12px</td>
                        <td>400</td>
                        <td>
                          Tertiary body text, used for notes or disclaimers.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
              <div class=" my-5">
                <h1 class="mb-4">InputField Component Docs</h1>

                <p>
                  This documentation covers the usage and customization of the{" "}
                  <code>InputField</code> component, which is a versatile input
                  field with Formik integration, various styles, and optional
                  toggle switch functionality.
                </p>

                <h2>Props</h2>
                <table class="table table-bordered">
                  <thead class="table-light">
                    <tr>
                      <th>Prop</th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Default</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>behave</code>
                      </td>
                      <td>string</td>
                      <td>
                        Determines the behavior of the input field. It can be
                        set to "formik" to integrate with Formik or "native" for
                        regular input handling.
                      </td>
                      <td>
                        <code>"formik"</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>type</code>
                      </td>
                      <td>string</td>
                      <td>
                        Specifies the type of input (e.g., "text", "password",
                        "number").
                      </td>
                      <td>
                        <code>"text"</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>onChange</code>
                      </td>
                      <td>function</td>
                      <td>
                        Callback function triggered when the input value changes
                        (used when <code>behave</code> is "native").
                      </td>
                      <td>none</td>
                    </tr>
                    <tr>
                      <td>
                        <code>onFocus</code>
                      </td>
                      <td>function</td>
                      <td>
                        Callback function triggered when the input gains focus.
                      </td>
                      <td>none</td>
                    </tr>
                    <tr>
                      <td>
                        <code>onBlur</code>
                      </td>
                      <td>function</td>
                      <td>
                        Callback function triggered when the input loses focus.
                      </td>
                      <td>none</td>
                    </tr>
                    <tr>
                      <td>
                        <code>label</code>
                      </td>
                      <td>string</td>
                      <td>The label displayed above the input field.</td>
                      <td>none</td>
                    </tr>
                    <tr>
                      <td>
                        <code>name</code>
                      </td>
                      <td>string</td>
                      <td>
                        Name of the input field, used for form submission and
                        validation.
                      </td>
                      <td>none</td>
                    </tr>
                    <tr>
                      <td>
                        <code>formik</code>
                      </td>
                      <td>object</td>
                      <td>
                        The Formik object used for form handling when{" "}
                        <code>behave</code> is set to "formik".
                      </td>
                      <td>none</td>
                    </tr>
                    <tr>
                      <td>
                        <code>placeholder</code>
                      </td>
                      <td>string</td>
                      <td>
                        Placeholder text displayed inside the input field.
                      </td>
                      <td>
                        <code>""</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>disabled</code>
                      </td>
                      <td>boolean</td>
                      <td>
                        Disables the input field if set to <code>true</code>.
                      </td>
                      <td>
                        <code>false</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>size</code>
                      </td>
                      <td>string</td>
                      <td>CSS class to control the size of the label text.</td>
                      <td>
                        <code>"md"</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>margin</code>
                      </td>
                      <td>string</td>
                      <td>
                        CSS class to control the margin around the input field
                        container.
                      </td>
                      <td>
                        <code>"mb-4"</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>value</code>
                      </td>
                      <td>any</td>
                      <td>
                        Value of the input field (used when <code>behave</code>{" "}
                        is "native").
                      </td>
                      <td>none</td>
                    </tr>
                    <tr>
                      <td>
                        <code>defaultValue</code>
                      </td>
                      <td>any</td>
                      <td>
                        Initial value of the input field (used when{" "}
                        <code>behave</code> is "native").
                      </td>
                      <td>none</td>
                    </tr>
                    <tr>
                      <td>
                        <code>styles</code>
                      </td>
                      <td>object</td>
                      <td>Inline styles applied to the input field.</td>
                      <td>none</td>
                    </tr>
                    <tr>
                      <td>
                        <code>min</code>
                      </td>
                      <td>number</td>
                      <td>Minimum value for numeric inputs.</td>
                      <td>none</td>
                    </tr>
                    <tr>
                      <td>
                        <code>max</code>
                      </td>
                      <td>number</td>
                      <td>Maximum value for numeric inputs.</td>
                      <td>none</td>
                    </tr>
                    <tr>
                      <td>
                        <code>step</code>
                      </td>
                      <td>number</td>
                      <td>Step value for numeric inputs.</td>
                      <td>none</td>
                    </tr>
                    <tr>
                      <td>
                        <code>readOnly</code>
                      </td>
                      <td>boolean</td>
                      <td>
                        Makes the input field read-only if set to{" "}
                        <code>true</code>.
                      </td>
                      <td>
                        <code>false</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>variant</code>
                      </td>
                      <td>string</td>
                      <td>
                        CSS class to apply variant styles to the input field
                        container.
                      </td>
                      <td>
                        <code>"normal"</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>classes</code>
                      </td>
                      <td>string</td>
                      <td>
                        Additional CSS classes to apply to the input field.
                      </td>
                      <td>none</td>
                    </tr>
                    <tr>
                      <td>
                        <code>borderRadius</code>
                      </td>
                      <td>string</td>
                      <td>
                        CSS value to control the border-radius of the input
                        field.
                      </td>
                      <td>
                        <code>"16px"</code>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
              <div class="my-5">
                <h2 class="mb-4">Pagination Component Docs</h2>
                <p>
                  This documentation provides a guide on using the{" "}
                  <code>Pagination</code> component in your project. This
                  component allows users to navigate through a list of items by
                  displaying a portion of the list at a time.
                </p>

                <h2>Props</h2>
                <table class="table table-bordered">
                  <thead class="table-light">
                    <tr>
                      <th>Prop</th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Default</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>currentPage</code>
                      </td>
                      <td>number</td>
                      <td>The current active page number.</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>
                        <code>totalItems</code>
                      </td>
                      <td>number</td>
                      <td>The total number of items to paginate through.</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>
                        <code>itemsPerPage</code>
                      </td>
                      <td>number</td>
                      <td>The number of items displayed per page.</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>
                        <code>onPageChange</code>
                      </td>
                      <td>function</td>
                      <td>
                        Callback function triggered when the page changes.
                      </td>
                      <td>none</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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

              <div class=" my-5">
                <h2 class="mb-4">RowsPerPage Component Docs</h2>
                <p>
                  This documentation provides a guide on using the{" "}
                  <code>RowsPerPage</code> component, which allows users to
                  select the number of rows to display per page in a paginated
                  list or table.
                </p>

                <h2>Props</h2>
                <table class="table table-bordered">
                  <thead class="table-light">
                    <tr>
                      <th>Prop</th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Default</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>rowsPerPage</code>
                      </td>
                      <td>number</td>
                      <td>The current number of rows displayed per page.</td>
                      <td>none</td>
                    </tr>
                    <tr>
                      <td>
                        <code>options</code>
                      </td>
                      <td>array</td>
                      <td>
                        An array of numbers representing the available options
                        for rows per page.
                      </td>
                      <td>none</td>
                    </tr>
                    <tr>
                      <td>
                        <code>onRowsPerPageChange</code>
                      </td>
                      <td>function</td>
                      <td>
                        Callback function triggered when the user selects a
                        different number of rows per page.
                      </td>
                      <td>none</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7" className="w-100">
            <Accordion.Header>Utilities Classes</Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default Widgets;
