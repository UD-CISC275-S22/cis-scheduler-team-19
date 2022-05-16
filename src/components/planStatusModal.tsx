import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";

export function PlanStatusModal({
    show,
    handleClose
}: {
    show: boolean;
    handleClose: () => void;
}) {
    const [content, setContent] = useState<string>("No file data uploaded");

    function uploadFile(event: React.ChangeEvent<HTMLInputElement>) {
        // Might have removed the file, need to check that the files exist
        if (event.target.files && event.target.files.length) {
            // Get the first filename
            const filename = event.target.files[0];
            // Create a reader
            const reader = new FileReader();
            // Create lambda callback to handle when we read the file
            reader.onload = (loadEvent) => {
                // Target might be null, so provide default error value
                const newContent =
                    loadEvent.target?.result || "Data was not loaded";
                // FileReader provides string or ArrayBuffer, force it to be string
                setContent(newContent as string);
            };
            // Actually read the file
            reader.readAsText(filename);
        }
    }
    return (
        <Modal show={show} onHide={handleClose} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title>Plan Status</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <pre style={{ overflow: "scroll", height: "100px" }}>
                        {content}
                    </pre>
                    <Form.Group controlId="exampleForm">
                        <Form.Label>Upload a file</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={uploadFile}
                            style={{ width: "400px" }}
                        />
                    </Form.Group>
                </div>
            </Modal.Body>
        </Modal>
    );
}
