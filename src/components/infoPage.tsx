import React, { useState } from "react";
import {
    Button,
    Col,
    Row,
    Container,
    Form,
    Nav,
    Navbar
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
        semester: plan.semester.map(
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

export function InputInfo(): JSX.Element {
    const [name, setName] = useState<string>("");
    const [year, setYear] = useState<string>(DEFAULT_YEAR);
    const [plans, setPlans] = useState<Plan[]>(PLAN);
    const [submit, setSubmit] = useState<boolean>(false);
    const [showAddModal, setShowAddModal] = useState(false);

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
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

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
                    <Navbar.Collapse id="navbarScroll">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Nav className="me-3">
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
                        {/* <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <PlanList
                plans={plans}
                editPlan={editPlan}
                deletePlan={deletePlan}
            ></PlanList>
            <Button variant="danger" className="m-0" onClick={deleteAllPlan}>
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
