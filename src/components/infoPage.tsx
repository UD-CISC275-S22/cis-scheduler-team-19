import React, { useState } from "react";
import {
    Button,
    Col,
    Row,
    Container,
    Form,
    Nav,
    Navbar,
    Alert
    // Collapse,
    // Card
} from "react-bootstrap";
import { PlanList } from "../components/planList";
import { Plan } from "../interfaces/plan";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import ciscData from "../data/cisc_plans.json";
import { PlanAddModal } from "./planAddModal";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

const YEARS = [
    "Choose your Academic Year",
    "Freshman",
    "Sophomore",
    "Junior",
    "Senior"
];
const DEFAULT_YEAR = YEARS[0];

const PLAN = ciscData.map(
    (plan): Plan => ({
        ...plan,
        semesters: plan.semester.map(
            (semester): Semester => ({
                ...semester,
                courses: semester.courses.map(
                    (course): Course => ({
                        ...course,
                        credit: course.credit,
                        description: course.description,
                        preReq: course.preReq,
                        taken: course.taken
                    })
                )
            })
        )
    })
);

// let loadedData = PLAN;
// const saveDataKey = "MY-PAGE-DATA";
// const previousData = localStorage.getItem(saveDataKey);
// if (previousData !== null) {
//     loadedData = JSON.parse(previousData);
// }

export function InputInfo(): JSX.Element {
    const [name, setName] = useState<string>("");
    const [year, setYear] = useState<string>(DEFAULT_YEAR);
    const [plans, setPlans] = useState<Plan[]>(PLAN);
    const [submit, setSubmit] = useState<boolean>(false);
    const [showAddModal, setShowAddModal] = useState(false);
    // alerts if users want to clear all plans
    const [show, setShow] = useState(false);
    // after clearing courses, clear button disabled
    const [disable, setDisable] = React.useState(false);
    const [open, setOpen] = useState(false);
    // const [content, setContent] = useState<string>("No file data uploaded");

    function updateName(event: ChangeEvent) {
        setName(event.target.value);
    }

    function updateYear(event: ChangeEvent) {
        setYear(event.target.value);
    }

    function startEditing() {
        if (name == "") {
            alert("Please enter your name");
        }
        if (year == "Choose your Academic Year") {
            alert("Please choose your Academic Year");
        } else {
            setSubmit(!submit);
        }
        return;
    }

    function addPlan(newPlan: Plan) {
        const existing = plans.find(
            (plan: Plan): boolean => plan.title === newPlan.title
        );
        if (existing === undefined) {
            setPlans([...plans, newPlan]);
        }
    }

    function deletePlan(title: string) {
        setPlans(plans.filter((plan: Plan): boolean => plan.title !== title));
    }

    function editPlan(title: string, newPlan: Plan) {
        setPlans(
            plans.map(
                (plan: Plan): Plan => (plan.title === title ? newPlan : plan)
            )
        );
    }

    function deleteAllPlan() {
        setPlans([]);
        setShow(!show);
        setDisable(true);
    }

    function cancel() {
        setShow(!show);
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    // function saveData() {
    //     localStorage.setItem(saveDataKey, JSON.stringify(plans));
    // }

    // function arrayToCsv(data: Plan[]) {
    //     return data
    //         .map(
    //             (row) =>
    //                 row
    //                     .map(String) // convert every value to String
    //                     .map((v) => v.replaceAll('"', '""')) // escape double colons
    //                     .map((v) => `"${v}"`) // quote it
    //                     .join(",") // comma-separated
    //         )
    //         .join("\r\n");
    // }

    // function downloadBlob(
    //     content: Plan,
    //     filename: string,
    //     contentType: Plan[]
    // ) {
    //     // Create a blob
    //     var blob = new Blob([content], { type: contentType });
    //     var url = URL.createObjectURL(blob);

    //     // Create a link to download it
    //     var pom = document.createElement("a");
    //     pom.href = url;
    //     pom.setAttribute("download", filename);
    //     pom.click();
    // }

    // function uploadFile(event: React.ChangeEvent<HTMLInputElement>) {
    //     // Might have removed the file, need to check that the files exist
    //     if (event.target.files && event.target.files.length) {
    //         // Get the first filename
    //         const filename = event.target.files[0];
    //         // Create a reader
    //         const reader = new FileReader();
    //         // Create lambda callback to handle when we read the file
    //         reader.onload = (loadEvent) => {
    //             // Target might be null, so provide default error value
    //             const newContent =
    //                 loadEvent.target?.result || "Data was not loaded";
    //             // FileReader provides string or ArrayBuffer, force it to be string
    //             setContent(newContent as string);
    //         };
    //         // Actually read the file
    //         reader.readAsText(filename);
    //     }
    // }

    return submit ? (
        <>
            <Navbar expand="lg" bg="primary" variant="dark">
                <Container fluid>
                    <Navbar.Brand
                        href="https://www.cis.udel.edu/"
                        target="popup"
                    >
                        UD CISC
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Nav.Link
                                href="https://catalog.udel.edu/preview_program.php?catoid=47&poid=34727"
                                target="popup"
                            >
                                CS BS
                            </Nav.Link>
                            <Nav.Link
                                href="https://catalog.udel.edu/preview_program.php?catoid=47&poid=34726"
                                target="popup"
                            >
                                CS BA
                            </Nav.Link>
                        </Nav>
                        <>
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="example-fade-text"
                                aria-expanded={open}
                                className="me-3"
                            >
                                {name}
                                {"'s"} schedule status
                            </Button>
                        </>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <div style={{ minHeight: "150px" }}>
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">
                        <Card body style={{ width: "400px" }}>

                        </Card>
                    </div>
                </Collapse>
            </div> */}
            <PlanList
                plans={plans}
                editPlan={editPlan}
                deletePlan={deletePlan}
            ></PlanList>
            <Alert show={show} variant="danger">
                <Alert.Heading>Warning ⚠️</Alert.Heading>
                <p>Are you sure to delete all semesters?</p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={cancel} variant="outline-success">
                        Wait a second
                    </Button>
                    <Button onClick={deleteAllPlan} variant="outline-danger">
                        No doubt
                    </Button>
                </div>
            </Alert>
            <Button
                variant="danger"
                className="m-0"
                disabled={disable}
                onClick={() => setShow(true)}
            >
                🗑
            </Button>
            <Button
                variant="light"
                className="m-0"
                onClick={handleShowAddModal}
            >
                ➕
            </Button>
            <PlanAddModal
                show={showAddModal}
                handleClose={handleCloseAddModal}
                addPlan={addPlan}
            ></PlanAddModal>
            {/* <Button onClick={saveData}>💾</Button> */}
            {/* <Button variant="light" onClick={() => downloadBlob(content.flat(), "Your Acaedmic Plan.CSV", )}>🚀</Button> */}
            {/* <div>
                <pre style={{ overflow: "scroll", height: "100px" }}>
                    {content}
                </pre>
                <Form.Group controlId="exampleForm">
                    <Form.Label>Upload a file</Form.Label>
                    <Form.Control type="file" onChange={uploadFile} />
                </Form.Group>
            </div> */}
        </>
    ) : (
        <div>
            <Form.Group controlId="FormName" as={Row}>
                <Form.Label column sm={2}>
                    Your Name:
                </Form.Label>
                <Col>
                    <Form.Control
                        style={{ padding: 6 }}
                        value={name}
                        onChange={updateName}
                        placeholder="Enter your Name"
                    />
                </Col>
            </Form.Group>
            <Form.Group controlId="FormYear" as={Row}>
                <Form.Label column sm={2}>
                    Academic Year:
                </Form.Label>
                <Col>
                    <Form.Select
                        style={{ padding: 6 }}
                        value={year}
                        onChange={updateYear}
                    >
                        {YEARS.map((year: string) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </Form.Select>
                </Col>
            </Form.Group>
            <div>
                <Button className="m-4" onClick={startEditing}>
                    Confirm
                </Button>
            </div>
        </div>
    );
}
