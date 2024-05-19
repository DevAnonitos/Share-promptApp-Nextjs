import React from 'react';
import { render, screen } from '@testing-library/react';
import { Form } from '@/components';

describe("Form Components", () => {
    it("should render Form Component", () => {
        expect(Form).toBeDefined()
        expect(Form).toMatchSnapshot()
    })
})