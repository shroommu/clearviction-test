"use client";

import { useState } from "react";
import styled from "styled-components";

import "./globals.css";

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 12px;
`;

const Button = styled.button``;

export default function Home() {
  const [email, setEmail] = useState("");
  const [gitLink, setGitLink] = useState("");

  const onSubmit = async () => {
    await fetch("https://cv-devs-temp-challenge.vercel.app/api/challenge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ email: email, githubRepoUrl: gitLink }),
    });
  };

  return (
    <Main>
      <Form onSubmit={onSubmit} method="post">
        <Input
          placeholder="enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="enter Git repository"
          value={gitLink}
          onChange={(e) => setGitLink(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Main>
  );
}
