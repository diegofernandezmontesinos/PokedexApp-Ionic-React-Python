import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LogIn from "./LogIn";

test("renders LogIn component", () => {
  const setUser = jest.fn();
  render(<LogIn setUser={setUser} />);

  // Verifica que el logo se renderiza
  expect(screen.getByAltText("Pokémon logo")).toBeInTheDocument();

  // Verifica que el formulario se renderiza
  expect(screen.getByText("Login into your Pokedex App")).toBeInTheDocument();
});

test("validates user input", () => {
  const setUser = jest.fn();
  render(<LogIn setUser={setUser} />);

  const nombreInput = screen.getByPlaceholderText("Nombre de usuario");
  const contraseñaInput = screen.getByPlaceholderText("Contraseña");
  const submitButton = screen.getByText("Submit");

  // Prueba con un nombre de usuario inválido
  fireEvent.change(nombreInput, { target: { value: "abc" } });
  fireEvent.change(contraseñaInput, { target: { value: "Password1" } });
  fireEvent.click(submitButton);

  expect(screen.getByText("El nombre de usuario debe tener entre 4 y 10 caracteres.")).toBeInTheDocument();

  // Prueba con una contraseña inválida
  fireEvent.change(nombreInput, { target: { value: "validUser" } });
  fireEvent.change(contraseñaInput, { target: { value: "pass" } });
  fireEvent.click(submitButton);

  expect(screen.getByText("La contraseña debe contener al menos una mayúscula, al menos un número y una longitud mínima de 4.")).toBeInTheDocument();
});

test("submits form with valid input", () => {
  const setUser = jest.fn();
  render(<LogIn setUser={setUser} />);

  const nombreInput = screen.getByPlaceholderText("Nombre de usuario");
  const contraseñaInput = screen.getByPlaceholderText("Contraseña");
  const submitButton = screen.getByText("Submit");

  fireEvent.change(nombreInput, { target: { value: "validUser" } });
  fireEvent.change(contraseñaInput, { target: { value: "Password1" } });
  fireEvent.click(submitButton);

  expect(setUser).toHaveBeenCalledWith(["validUser"]);
  expect(screen.queryByText("El nombre de usuario debe tener entre 4 y 10 caracteres.")).not.toBeInTheDocument();
  expect(screen.queryByText("La contraseña debe contener al menos una mayúscula, al menos un número y una longitud mínima de 4.")).not.toBeInTheDocument();
});
