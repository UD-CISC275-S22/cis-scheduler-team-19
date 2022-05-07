import React from "react";
import { Col, Container, Stack } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { SemesterView } from "./semesterView";

export function SemesterList({
    semesters,
    editSemester,
    deleteSemester
}: {
    semesters: Semester[];
    editSemester: (title: string, newSemseter: Semester) => void;
    deleteSemester: (title: string) => void;
}): JSX.Element {
    return (
        <Container>
            <Col>
                <Stack gap={3}>
                    {semesters.map((semester: Semester) => (
                        <div
                            key={semester.title}
                            className="bg-light border m-2 p-2"
                        >
                            <SemesterView
                                semester={semester}
                                deleteSemester={deleteSemester}
                                editSemester={editSemester}
                            ></SemesterView>
                        </div>
                    ))}
                </Stack>
            </Col>
        </Container>
    );
}
