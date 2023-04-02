import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { GET_PROJECT } from "../queries/ProjectQueries";
import { UPDATE_PROJECT } from "../mutations/projectMutations";
import { Form, Input, Select, Button, message } from "antd";

const { Option } = Select;

export default function EditProjectForm({ project }) {
    const id = project?.id;
    const [form] = Form.useForm();
    const [updateProject, { loading }] = useMutation(UPDATE_PROJECT, {
        refetchQueries: [{ query: GET_PROJECT, variables: { id: project?.id } }],
        onCompleted: () => {
            setSubmitted(true);
            message.success("Project updated successfully");
        },
        onError: (error) => {
            console.log(error);
            message.error("Error updating project");
        },
    });
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = async (values) => {
        try {
            const { name, description, status } = values;
            await updateProject({ variables: { id: project.id, name, description, status } });
        } catch (error) {
            console.log(error);
        }
    };


    const handleStatusChange = (value) => {
        switch (value) {
            case "new":
                return "Not Started";
            case "progress":
                return "In Progress";
            case "completed":
                return "Completed";
            default:
                throw new Error(`Unknown status: ${value}`);
        }
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <h3>Update Project Details</h3>
            <Form
                form={form}
                onFinish={onSubmit}
                initialValues={{
                    name: project?.name,
                    description: project?.description,
                    status:
                        project?.status === "Not Started"
                            ? "new"
                            : project?.status === "In Progress"
                                ? "progress"
                                : "completed"

                }}
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[{ required: true, message: "Please enter project name" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Description"
                    rules={[{ required: true, message: "Please enter project description" }]}
                >
                    <Input.TextArea rows={4} />
                </Form.Item>
                <Form.Item
                    name="status"
                    label="Status"
                    rules={[{ required: true, message: "Please select project status" }]}
                >
                    <Select onChange={handleStatusChange}>
                        <Option value="new">Not Started</Option>
                        <Option value="progress">In Progress</Option>
                        <Option value="completed">Completed</Option>
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
