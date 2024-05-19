import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from "../../components/Form"

jest.mock('../../components/Form', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockPost = {
  prompt: '',
  tag: '',
};

const mockSubmitHandler = jest.fn();

test('renders the Form component with placeholders', () => {
  Form.mockImplementationOnce(() => (
    <Form type="Create" post={mockPost} setPost={() => {}} submitting={false} handleSubmit={mockSubmitHandler} />
  ));
  render(<Form />); // You can render directly without props here

  // Assertions using screen.getByText, screen.getByPlaceholderText, etc.
  expect(screen.getByText(/Create Post/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Write Your Prompt Here.../i)).toBeInTheDocument();
  expect(screen.getByText(/Field of Prompt/i)).toBeInTheDocument();
});

test('disables submit button when submitting is true', () => {
  Form.mockImplementationOnce(() => (
    <Form type="Create" post={mockPost} setPost={() => {}} submitting={true} handleSubmit={mockSubmitHandler} />
  ));
  render(<Form />);

  const submitButton = screen.getByRole('button', { name: /Create/i });
  expect(submitButton).toBeDisabled();
});
