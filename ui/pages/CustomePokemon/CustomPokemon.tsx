import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import "./CustomPokemon.css";
import Navbar from "../NavBar/NavBar";

const CustomPokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState<CustomePokemon>({
    name: "",
    type: "",
    abilities: [],
    evolutions: "",
  });
  const [pokemons, setPokemons] = useState<CustomePokemon[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [abilities, setAbilities] = useState<string[]>([]);
  const [editing, setEditing] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number | null>(null);

  useEffect(() => {
    fetchTypes();
    fetchAbilities();
  }, []);

  const fetchTypes = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    setTypes(response.data.results.map((type: any) => type.name));
  };

  const fetchAbilities = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/ability");
    setAbilities(response.data.results.map((ability: any) => ability.name));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPokemon({ ...pokemon, [name]: value });
  };

  const handleAbilitiesChange = (e: any) => {
    const selectedAbilities = Array.from(
      e.target.selectedOptions,
      (option: any) => option.value
    );
    setPokemon({ ...pokemon, abilities: selectedAbilities });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editing) {
      setPokemons(pokemons.map((p) => (p.id === currentId ? pokemon : p)));
      setEditing(false);
    } else {
      setPokemons([...pokemons, { ...pokemon, id: pokemons.length + 1 }]);
    }
    setPokemon({ name: "", type: "", abilities: [], evolutions: "" });
  };

  const handleEdit = (id: number) => {
    const selectedPokemon = pokemons.find((p) => p.id === id);
    if (selectedPokemon) {
      setPokemon(selectedPokemon);
      setEditing(true);
      setCurrentId(id);
    }
  };

  const handleDelete = (id: number) => {
    setPokemons(pokemons.filter((p) => p.id !== id));
  };

  return (
    <IonPage>
      <IonHeader>
        <Navbar />
        <IonToolbar>
          <IonTitle>Custom Pokemon</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>
          Create your own Pokemon, choose name, select type and abilities and
          tell us if it has evolutions
        </h1>
        <form onSubmit={handleSubmit}>
          <IonInput
            placeholder="Name"
            name="name"
            value={pokemon.name}
            onIonChange={handleChange}
            required
          />
          <IonSelect
            placeholder="Type"
            name="type"
            value={pokemon.type}
            onIonChange={handleChange}
          >
            {types.map((type, index) => (
              <IonSelectOption key={index} value={type}>
                {type}
              </IonSelectOption>
            ))}
          </IonSelect>
          <IonSelect
            multiple
            placeholder="Abilities"
            name="abilities"
            value={pokemon.abilities}
            onIonChange={handleAbilitiesChange}
          >
            {abilities.map((ability, index) => (
              <IonSelectOption key={index} value={ability}>
                {ability}
              </IonSelectOption>
            ))}
          </IonSelect>
          <IonInput
            placeholder="Evolutions"
            name="evolutions"
            value={pokemon.evolutions}
            onIonChange={handleChange}
          />
          <IonButton type="submit">{editing ? "Update" : "Create"}</IonButton>
        </form>
        <IonList>
          {pokemons.map((p) => (
            <IonItem key={p.id}>
              {p.name} - {p.type} 
              <IonButton onClick={() => handleEdit(p.id!)}>Edit</IonButton>
              <IonButton onClick={() => handleDelete(p.id!)}>Delete</IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default CustomPokemon;
