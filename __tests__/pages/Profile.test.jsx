import React from "react";
import MyProfile from "@/app/profile/page";
import UserProfile from "@/app/profile/[id]/page";
import { render, screen } from "@testing-library/react";

describe("Profile Page", () => {
  it("should render MyProfile Page Component", () => {
    expect(MyProfile).toBeDefined()
    expect(MyProfile).toMatchSnapshot()
  })

  it("should render UserProfile Page Component", () => {
    expect(UserProfile).toBeDefined()
    expect(UserProfile).toMatchSnapshot()
  })
})